// Píxel de Meta + Google Analytics 4, cargados de forma diferida para no afectar PageSpeed.

import { GA_MEASUREMENT_ID, META_PIXEL_ID } from './config';

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Datos para la "coincidencia avanzada" del píxel (Meta los normaliza y hashea en el navegador). */
export interface MatchData {
  em?: string;
  ph?: string;
  fn?: string;
}

const pixelEnabled = /^\d{6,20}$/.test(META_PIXEL_ID);
let trackersLoaded = false;

function injectScript(src: string): void {
  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

/** Cola compatible con el snippet oficial de Meta: las llamadas se guardan hasta que carga fbevents.js. */
function ensureFbq(): Fbq {
  if (window.fbq) return window.fbq;
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = window._fbq || fbq;
  return fbq;
}

/** Inyecta el Píxel de Meta (PageView) y GA4 una sola vez. */
export function loadTrackers(match?: MatchData): void {
  if (trackersLoaded) return;
  trackersLoaded = true;

  if (pixelEnabled) {
    const fbq = ensureFbq();
    if (match && (match.em || match.ph)) fbq('init', META_PIXEL_ID, match);
    else fbq('init', META_PIXEL_ID);
    fbq('track', 'PageView');
    injectScript('https://connect.facebook.net/en_US/fbevents.js');
  } else if (import.meta.env.DEV) {
    console.info('[tracking] Píxel de Meta desactivado: define VITE_META_PIXEL_ID o edita src/landing/config.ts');
  }

  if (GA_MEASUREMENT_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      // gtag.js espera el objeto `arguments`, no un array.
      window.dataLayer!.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`);
  }
}

/**
 * Ejecuta `callback` una sola vez con la primera interacción (scroll, toque, tecla, mouse) o tras `fallbackMs`.
 * Se usa para que los ~150 KB de scripts de terceros no compitan con la carga inicial ni con la medición de PageSpeed.
 */
export function onFirstIntent(callback: () => void, fallbackMs = 5000): void {
  const events = ['pointerdown', 'pointermove', 'touchstart', 'keydown', 'scroll', 'wheel'] as const;
  let timer = 0;
  const start = () => {
    window.clearTimeout(timer);
    events.forEach((name) => window.removeEventListener(name, start));
    callback();
  };
  events.forEach((name) => window.addEventListener(name, start, { once: true, passive: true }));
  timer = window.setTimeout(start, fallbackMs);
}

/** Evento "Lead" (Meta) + "generate_lead" (GA4). `eventId` permite deduplicar con la API de Conversiones. */
export function trackLead(params: { necesidad?: string; rubro?: string; presupuesto?: string }, eventId: string): void {
  loadTrackers();
  if (pixelEnabled) {
    ensureFbq()('track', 'Lead', { content_name: params.necesidad, content_category: params.rubro }, { eventID: eventId });
  }
  window.gtag?.('event', 'generate_lead', {
    lead_source: 'landing_cotiza',
    necesidad: params.necesidad,
    rubro: params.rubro,
    presupuesto: params.presupuesto,
  });
}

/** Evento "Contact" (Meta) + "contact_whatsapp" (GA4) al tocar un botón de WhatsApp. */
export function trackWhatsAppClick(placement: string): void {
  loadTrackers();
  if (pixelEnabled) ensureFbq()('track', 'Contact', { content_name: placement });
  window.gtag?.('event', 'contact_whatsapp', { placement });
}
