import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const root = dirname(fileURLToPath(import.meta.url))

// Landing pages (/cotiza/, /gracias/, /privacidad/) are tuned for Google PageSpeed: their stylesheet is inlined
// and their script starts loading right after the first paint, so the HTML is the only request
// standing between the visitor and the first render.
const LANDING_PAGES = ['/cotiza/index.html', '/gracias/index.html', '/privacidad/index.html']

// Imports the entry once the first contentful paint is reported (fallback: next frame / 3 s).
// If the script fails to load, dropping the "js" class keeps the scroll-reveal content visible.
const deferredEntry = (src: string) =>
  `<script type="module">let d=0;const go=()=>{if(!d){d=1;import(${JSON.stringify(src)}).catch(()=>document.documentElement.classList.remove("js"))}};` +
  `if((PerformanceObserver.supportedEntryTypes||[]).includes("paint"))new PerformanceObserver((l)=>{if(l.getEntriesByName("first-contentful-paint").length)go()}).observe({type:"paint",buffered:true});` +
  `else requestAnimationFrame(()=>setTimeout(go));setTimeout(go,3000)</script>`

function optimizeLandingPages(): Plugin {
  return {
    name: 'optimize-landing-pages',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const bundle = ctx.bundle
        if (!bundle || !LANDING_PAGES.includes(ctx.path)) return html
        return html
          .replace(/<link\b[^>]*\brel="stylesheet"[^>]*>/g, (tag) => {
            const href = tag.match(/\bhref="\/([^"]+\.css)"/)?.[1]
            const asset = href ? bundle[href] : undefined
            if (!asset || asset.type !== 'asset') return tag
            return `<style>${String(asset.source)}</style>`
          })
          .replace(/\s*<link\b[^>]*\brel="modulepreload"[^>]*>/g, '')
          .replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/, (_, src: string) => deferredEntry(src))
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    optimizeLandingPages(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        cotiza: resolve(root, 'cotiza/index.html'),
        gracias: resolve(root, 'gracias/index.html'),
        privacidad: resolve(root, 'privacidad/index.html'),
      },
    },
  },
})
