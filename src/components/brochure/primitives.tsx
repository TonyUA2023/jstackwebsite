import React, { createContext, useContext, useEffect, useState } from 'react';
import { animate, motion, MotionValue, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Lock } from 'lucide-react';
import { IMG } from './assets';

// ---------------------------------------------------------------------------
// Shared motion tokens
// ---------------------------------------------------------------------------

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Slides mount while the 3D page transition is still running, so content
// animations wait a beat before starting.
export const ENTER_DELAY = 0.35;

export const rise = (delay = 0, y = 28) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: ENTER_DELAY + delay, ease: EASE },
});

export interface SlideProps {
  step: number;
  goToStep: (step: number) => void;
  next: () => void;
}

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);
  return matches;
};

// ---------------------------------------------------------------------------
// Pointer parallax (normalised -1..1, springy). Stays at 0 on touch devices.
// ---------------------------------------------------------------------------

interface PointerState {
  px: MotionValue<number>;
  py: MotionValue<number>;
}

export const PointerContext = createContext<PointerState | null>(null);

export const usePointer = (): PointerState => {
  const ctx = useContext(PointerContext);
  if (!ctx) throw new Error('usePointer must be used inside the brochure');
  return ctx;
};

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------

export const Kicker: React.FC<{ index: string; label: string; center?: boolean }> = ({ index, label, center }) => (
  <motion.div
    {...rise(0, 16)}
    className={`flex items-center gap-3 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.28em] text-white/55 ${center ? 'justify-center' : ''}`}
  >
    <span className="text-[#FF4D57] tabular-nums">{index}</span>
    <motion.span
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.9, delay: ENTER_DELAY + 0.15, ease: EASE }}
      className="h-px w-10 origin-left bg-linear-to-r from-[#D8202A] to-transparent"
    />
    <span>{label}</span>
  </motion.div>
);

type TextPart = string | { text: string; highlight?: boolean };

interface RevealTextProps {
  as?: 'h1' | 'h2' | 'h3' | 'p';
  parts: TextPart[];
  className?: string;
  delay?: number;
  stagger?: number;
}

// Word-by-word masked reveal, the classic motion-graphics headline.
export const RevealText: React.FC<RevealTextProps> = ({ as = 'h2', parts, className = '', delay = 0, stagger = 0.045 }) => {
  const children: React.ReactNode[] = [];
  let wordIndex = 0;

  parts.forEach((part, partIndex) => {
    const { text, highlight } = typeof part === 'string' ? { text: part, highlight: false } : part;
    text.split(/\s+/).filter(Boolean).forEach((word, i) => {
      const order = wordIndex++;
      children.push(
        <span
          key={`${partIndex}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em] pr-[0.04em] -mr-[0.04em]"
        >
          <motion.span
            className={`inline-block ${highlight ? 'bro-gradient-text' : ''}`}
            style={{ transformOrigin: '0% 100%' }}
            initial={{ y: '115%', rotate: 8, opacity: 0 }}
            animate={{ y: '0%', rotate: 0, opacity: 1 }}
            transition={{ duration: 0.95, delay: ENTER_DELAY + delay + order * stagger, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>,
        ' ',
      );
    });
  });

  return React.createElement(as, { className }, children);
};

export const SlideTitle: React.FC<{ a: string; highlight: string; b?: string; className?: string; as?: 'h1' | 'h2' }> = ({
  a,
  highlight,
  b,
  className = '',
  as = 'h2',
}) => (
  <RevealText
    as={as}
    delay={0.08}
    parts={[a, { text: highlight, highlight: true }, ...(b ? [b] : [])]}
    className={`font-black tracking-[-0.035em] text-white leading-[1.02] ${className}`}
  />
);

// ---------------------------------------------------------------------------
// Numbers
// ---------------------------------------------------------------------------

export const Counter: React.FC<{
  value: number;
  delay?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}> = ({ value, delay = 0, duration = 1.8, prefix = '', suffix = '', className = '' }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      delay: ENTER_DELAY + delay,
      ease: EASE,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [value, delay, duration]);

  return (
    <span className={`tabular-nums ${className}`}>
      {prefix}
      {Math.round(display).toLocaleString('en-US')}
      {suffix}
    </span>
  );
};

// ---------------------------------------------------------------------------
// 3D hover tilt with moving glare
// ---------------------------------------------------------------------------

export const TiltCard: React.FC<
  React.PropsWithChildren<{ className?: string; max?: number; onClick?: () => void; glare?: boolean }>
> = ({ children, className = '', max = 9, onClick, glare = true }) => {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 170, damping: 18 });
  const sry = useSpring(ry, { stiffness: 170, damping: 18 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.16), transparent 55%)`;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    ry.set((x - 0.5) * max * 2);
    rx.set(-(y - 0.5) * max * 2);
    gx.set(x * 100);
    gy.set(y * 100);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onClick={onClick}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000, transformStyle: 'preserve-3d' }}
      className={`group relative ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  );
};

// ---------------------------------------------------------------------------
// Device frames
// ---------------------------------------------------------------------------

export const BrowserFrame: React.FC<{
  src: string;
  alt: string;
  label: string;
  className?: string;
  imgClassName?: string;
}> = ({ src, alt, label, className = '', imgClassName = '' }) => (
  <div
    className={`overflow-hidden rounded-lg sm:rounded-2xl border border-white/12 bg-[#0D1424] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)] ${className}`}
  >
    <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 border-b border-white/8 bg-[#111A2E]">
      <span className="h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 rounded-full bg-[#FF5F57]" />
      <span className="h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 rounded-full bg-[#FEBC2E]" />
      <span className="h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 rounded-full bg-[#28C840]" />
      <div className="ml-1.5 sm:ml-3 flex min-w-0 flex-1 items-center gap-1 sm:gap-1.5 rounded-md bg-white/6 px-1.5 sm:px-2.5 py-0.5 text-[7px] sm:text-[11px] font-medium text-white/50">
        <Lock className="h-2 w-2 sm:h-3 sm:w-3 shrink-0" />
        <span className="truncate">{label}</span>
      </div>
    </div>
    <img
      src={src}
      alt={alt}
      width={1600}
      height={793}
      draggable={false}
      decoding="async"
      className={`block h-auto w-full select-none ${imgClassName}`}
    />
  </div>
);

export const LaptopFrame: React.FC<{ src: string; alt: string; className?: string; children?: React.ReactNode }> = ({
  src,
  alt,
  className = '',
  children,
}) => (
  <div className={`relative ${className}`} style={{ transformStyle: 'preserve-3d' }}>
    <div className="relative rounded-t-[10px] sm:rounded-t-[18px] border border-white/15 bg-[#0B0F18] p-[1.4%] pb-[1.8%] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.9)]">
      <div className="absolute left-1/2 top-[0.55%] h-[0.7%] min-h-[3px] w-[0.7%] min-w-[3px] -translate-x-1/2 rounded-full bg-white/25" />
      <div className="relative overflow-hidden rounded-[4px] sm:rounded-[8px]">
        <img src={src} alt={alt} width={1600} height={793} draggable={false} decoding="async" className="block h-auto w-full select-none" />
        {/* scanning light */}
        <div className="bro-scan pointer-events-none absolute inset-x-0 top-0 h-[18%] bg-linear-to-b from-transparent via-[#22C55E]/10 to-transparent" />
        {children}
      </div>
    </div>
    <div className="relative mx-[-5%] h-[10px] sm:h-[18px] rounded-b-[14px] sm:rounded-b-[22px] border border-white/10 bg-linear-to-b from-[#2A3245] to-[#121722]">
      <div className="absolute left-1/2 top-0 h-[40%] w-[14%] -translate-x-1/2 rounded-b-md bg-[#0B0F18]/80" />
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Extruded 3D logo: stacked layers along Z give the "J" real thickness.
// ---------------------------------------------------------------------------

export const ExtrudedMark: React.FC<{ className?: string; layers?: number; depth?: number; spinClass?: string }> = ({
  className = '',
  layers = 12,
  depth = 1.4,
  spinClass = 'bro-coin',
}) => (
  <div className={`relative [perspective:900px] ${className}`}>
    <div className={`absolute inset-0 ${spinClass}`} style={{ transformStyle: 'preserve-3d' }}>
      {Array.from({ length: layers }).map((_, i) => {
        const isFace = i === 0 || i === layers - 1;
        return (
          <img
            key={i}
            src={IMG.jstackMark}
            alt={i === layers - 1 ? 'JStack' : ''}
            aria-hidden={i !== layers - 1}
            draggable={false}
            className="absolute inset-0 h-full w-full object-contain select-none"
            style={{
              transform: `translateZ(${(i - (layers - 1) / 2) * depth}px)`,
              filter: isFace ? 'drop-shadow(0 0 18px rgba(255,77,87,0.45))' : 'brightness(0.42) saturate(1.2)',
            }}
          />
        );
      })}
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Small UI bits
// ---------------------------------------------------------------------------

export const Chip: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] sm:text-xs font-semibold text-white/70 ${className}`}
  >
    {children}
  </span>
);

export const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

export const WhatsappIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.53 1.771.82 2.796.821 3.183 0 5.77-2.587 5.77-5.767.001-3.182-2.585-5.768-5.77-5.768zm0-2.172c4.385 0 7.943 3.558 7.944 7.941 0 4.385-3.559 7.943-7.944 7.943-1.34 0-2.597-.333-3.699-.915l-4.332 1.134 1.156-4.22c-.66-1.15-1.069-2.48-1.069-3.942 0-4.383 3.559-7.941 7.944-7.941z" />
  </svg>
);
