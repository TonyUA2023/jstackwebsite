import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowLeft, ArrowRight, LayoutGrid, Maximize2, Minimize2, Pause, Play, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { useBrochureCopy, type BrochureCopy } from '../components/brochure/brochureContent';
import { ALL_BROCHURE_IMAGES, IMG } from '../components/brochure/assets';
import { BrochureBackdrop } from '../components/brochure/BrochureBackdrop';
import { EASE, PointerContext, SlideProps } from '../components/brochure/primitives';
import { AboutSlide, CoverSlide, ServicesSlide } from '../components/brochure/IntroSlides';
import { AISlide, PortfolioSlide, SHOWCASE_ACCENTS, SHOWCASE_STEPS, ShowcaseSlide, SystemsSlide } from '../components/brochure/WorkSlides';
import { ContactSlide, FoundersSlide, PROCESS_STEPS, ProcessSlide, WhySlide } from '../components/brochure/CompanySlides';

// ---------------------------------------------------------------------------
// Slide registry. `steps` > 1 means "next" first walks through the slide's
// internal steps (Keynote-style builds) before moving to the next slide.
// ---------------------------------------------------------------------------

interface SlideDef {
  id: keyof BrochureCopy['nav'];
  steps: number;
  Component: React.FC<SlideProps>;
  glow: [string, string] | ((step: number) => [string, string]);
}

const SLIDES: SlideDef[] = [
  { id: 'cover', steps: 1, Component: CoverSlide, glow: ['#D8202A', '#4338CA'] },
  { id: 'about', steps: 1, Component: AboutSlide, glow: ['#D8202A', '#0EA5E9'] },
  { id: 'services', steps: 1, Component: ServicesSlide, glow: ['#7C3AED', '#D8202A'] },
  { id: 'showcase', steps: SHOWCASE_STEPS, Component: ShowcaseSlide, glow: (s) => [SHOWCASE_ACCENTS[s], '#D8202A'] },
  { id: 'ai', steps: 1, Component: AISlide, glow: ['#6366F1', '#A855F7'] },
  { id: 'systems', steps: 1, Component: SystemsSlide, glow: ['#16A34A', '#0EA5E9'] },
  { id: 'portfolio', steps: 1, Component: PortfolioSlide, glow: ['#D8202A', '#F59E0B'] },
  { id: 'process', steps: PROCESS_STEPS, Component: ProcessSlide, glow: ['#D8202A', '#FF8A3D'] },
  { id: 'why', steps: 1, Component: WhySlide, glow: ['#0EA5E9', '#D8202A'] },
  { id: 'founders', steps: 1, Component: FoundersSlide, glow: ['#6366F1', '#D8202A'] },
  { id: 'contact', steps: 1, Component: ContactSlide, glow: ['#D8202A', '#25D366'] },
];

const LAST = SLIDES.length - 1;
const AUTOPLAY_MS = 7000;
const NAV_COOLDOWN_MS = 380;

// Cube-like swing: the next slide arrives from the right already turned
// toward the viewer while the current one swings away into depth.
const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? '58%' : '-58%', rotateY: dir > 0 ? 42 : -42, z: -380, scale: 0.9 }),
  center: { opacity: 1, x: '0%', rotateY: 0, z: 0, scale: 1, pointerEvents: 'auto' as const, transition: { duration: 1, ease: EASE } },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? '-58%' : '58%',
    rotateY: dir > 0 ? -42 : 42,
    z: -380,
    scale: 0.9,
    pointerEvents: 'none' as const,
    transition: { duration: 0.85, ease: EASE },
  }),
};

interface DeckPosition {
  index: number;
  step: number;
  dir: 1 | -1;
}

const readInitialIndex = () => {
  const match = window.location.hash.match(/brochure\/(\d+)/i);
  const n = match ? parseInt(match[1], 10) - 1 : 0;
  return Number.isFinite(n) ? Math.min(Math.max(n, 0), LAST) : 0;
};

const canScroll = (el: HTMLElement | null, direction: 1 | -1) => {
  if (!el) return false;
  return direction > 0 ? el.scrollTop + el.clientHeight < el.scrollHeight - 2 : el.scrollTop > 2;
};

interface BrochurePageProps {
  onExit: () => void;
}

export const BrochurePage: React.FC<BrochurePageProps> = ({ onExit }) => {
  const { language, setLanguage } = useLanguage();
  const copy = useBrochureCopy();

  const [pos, setPos] = useState<DeckPosition>(() => ({ index: readInitialIndex(), step: 0, dir: 1 }));
  const [autoplay, setAutoplay] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);
  const fullscreenSupported = typeof document !== 'undefined' && !!document.fullscreenEnabled;

  const scrollerRef = useRef<HTMLElement | null>(null);
  const lastNavRef = useRef(0);
  const indexOpenRef = useRef(indexOpen);
  indexOpenRef.current = indexOpen;

  // ---- navigation --------------------------------------------------------

  const go = useCallback((delta: 1 | -1, force = false) => {
    const now = performance.now();
    if (!force && now - lastNavRef.current < NAV_COOLDOWN_MS) return;
    lastNavRef.current = now;
    setHasNavigated(true);
    setPos((p) => {
      const steps = SLIDES[p.index].steps;
      if (delta > 0) {
        if (p.step < steps - 1) return { ...p, step: p.step + 1, dir: 1 };
        if (p.index < LAST) return { index: p.index + 1, step: 0, dir: 1 };
        return p;
      }
      if (p.step > 0) return { ...p, step: p.step - 1, dir: -1 };
      if (p.index > 0) return { index: p.index - 1, step: SLIDES[p.index - 1].steps - 1, dir: -1 };
      return p;
    });
  }, []);

  const goTo = useCallback((index: number, step = 0) => {
    setHasNavigated(true);
    setPos((p) => (p.index === index && p.step === step ? p : { index, step, dir: index >= p.index ? 1 : -1 }));
  }, []);

  const goToStep = useCallback((step: number) => {
    setPos((p) => (p.step === step ? p : { ...p, step, dir: step > p.step ? 1 : -1 }));
  }, []);

  const next = useCallback(() => go(1, true), [go]);

  const goRef = useRef(go);
  goRef.current = go;

  // ---- fullscreen ----------------------------------------------------------

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenEnabled) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => undefined);
    } else {
      document.documentElement.requestFullscreen().catch(() => undefined);
    }
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => {
      document.removeEventListener('fullscreenchange', onChange);
      if (document.fullscreenElement) document.exitFullscreen().catch(() => undefined);
    };
  }, []);

  // ---- keyboard -------------------------------------------------------------

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || target?.isContentEditable) return;
      const onControl = tag === 'BUTTON' || tag === 'A';

      if (indexOpenRef.current) {
        if (e.key === 'Escape') setIndexOpen(false);
        return;
      }

      const scroller = scrollerRef.current;
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          goRef.current(1);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goRef.current(-1);
          break;
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          if (canScroll(scroller, 1)) scroller!.scrollBy({ top: e.key === 'PageDown' ? scroller!.clientHeight * 0.85 : 160, behavior: 'smooth' });
          else goRef.current(1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          if (canScroll(scroller, -1)) scroller!.scrollBy({ top: e.key === 'PageUp' ? -scroller!.clientHeight * 0.85 : -160, behavior: 'smooth' });
          else goRef.current(-1);
          break;
        case ' ':
          if (onControl) return;
          e.preventDefault();
          goRef.current(e.shiftKey ? -1 : 1);
          break;
        case 'Enter':
          if (onControl) return;
          goRef.current(1);
          break;
        case 'Home':
          e.preventDefault();
          goTo(0);
          break;
        case 'End':
          e.preventDefault();
          goTo(LAST, SLIDES[LAST].steps - 1);
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo, toggleFullscreen]);

  // ---- wheel / trackpad -------------------------------------------------------
  // One deliberate gesture = one move. Native scrolling inside a tall slide wins
  // until its edge, and inertia after a move or a native scroll is swallowed.

  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const state = { acc: 0, lockUntil: 0, last: 0 };

    const onWheel = (e: WheelEvent) => {
      if (indexOpenRef.current) return;
      const now = performance.now();
      const vertical = Math.abs(e.deltaY) >= Math.abs(e.deltaX);
      const delta = vertical ? e.deltaY : e.deltaX;
      if (now - state.last > 260) state.acc = 0;
      state.last = now;

      if (now < state.lockUntil) {
        state.lockUntil = Math.max(state.lockUntil, now + 160);
        state.acc = 0;
        return;
      }

      if (vertical && canScroll(scrollerRef.current, delta > 0 ? 1 : -1)) {
        state.acc = 0;
        state.lockUntil = now + 220;
        return;
      }

      state.acc += delta;
      if (Math.abs(state.acc) > 40) {
        goRef.current(state.acc > 0 ? 1 : -1);
        state.acc = 0;
        state.lockUntil = now + 900;
      }
    };

    root.addEventListener('wheel', onWheel, { passive: true });
    return () => root.removeEventListener('wheel', onWheel);
  }, []);

  // ---- touch swipes -------------------------------------------------------------

  const touchRef = useRef<{ x: number; y: number; canUp: boolean; canDown: boolean } | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    if (indexOpen || e.touches.length > 1) return;
    const t = e.touches[0];
    const scroller = scrollerRef.current;
    touchRef.current = { x: t.clientX, y: t.clientY, canUp: canScroll(scroller, -1), canDown: canScroll(scroller, 1) };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchRef.current;
    touchRef.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      go(dx < 0 ? 1 : -1);
    } else if (Math.abs(dy) > 70 && Math.abs(dy) > Math.abs(dx) * 1.3) {
      if (dy < 0 && !start.canDown) go(1);
      else if (dy > 0 && !start.canUp) go(-1);
    }
  };

  // ---- pointer parallax ---------------------------------------------------------

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const px = useSpring(rawX, { stiffness: 50, damping: 16 });
  const py = useSpring(rawY, { stiffness: 50, damping: 16 });

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    rawX.set((e.clientX / window.innerWidth) * 2 - 1);
    rawY.set((e.clientY / window.innerHeight) * 2 - 1);
  };

  // ---- autoplay -------------------------------------------------------------------

  const atEnd = pos.index === LAST && pos.step === SLIDES[LAST].steps - 1;

  useEffect(() => {
    if (!autoplay) return;
    if (atEnd) {
      setAutoplay(false);
      return;
    }
    const id = window.setTimeout(() => go(1, true), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [autoplay, pos, atEnd, go]);

  // ---- side effects: URL, title, preload, page chrome ---------------------------------

  useEffect(() => {
    const url = `${window.location.pathname}${window.location.search}#/brochure/${pos.index + 1}`;
    window.history.replaceState(window.history.state, '', url);
  }, [pos.index]);

  // Deep links typed or pasted while the deck is open (#/brochure/5).
  useEffect(() => {
    const onHashChange = () => {
      if (/brochure/i.test(window.location.hash)) goTo(readInitialIndex());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [goTo]);

  useEffect(() => {
    // The language provider rewrites the title on language change; set ours after it.
    const id = window.setTimeout(() => {
      document.title = copy.meta.title;
    }, 0);
    return () => window.clearTimeout(id);
  }, [copy.meta.title]);

  useEffect(() => {
    return () => {
      document.title = translations[language].meta.title;
    };
  }, [language]);

  useEffect(() => {
    ALL_BROCHURE_IMAGES.forEach((src) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = src;
    });
    const html = document.documentElement;
    const prevOverscroll = html.style.overscrollBehavior;
    html.style.overscrollBehavior = 'none';
    document.body.style.overscrollBehavior = 'none';

    // Dark browser chrome on mobile while presenting.
    let themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    const prevTheme = themeMeta?.content ?? null;
    if (!themeMeta) {
      themeMeta = document.createElement('meta');
      themeMeta.name = 'theme-color';
      document.head.appendChild(themeMeta);
    }
    themeMeta.content = '#05080F';

    return () => {
      html.style.overscrollBehavior = prevOverscroll;
      document.body.style.overscrollBehavior = '';
      if (prevTheme === null) themeMeta?.remove();
      else if (themeMeta) themeMeta.content = prevTheme;
    };
  }, []);

  // ---- render -------------------------------------------------------------------------

  const slide = SLIDES[pos.index];
  const SlideComponent = slide.Component;
  const glow = typeof slide.glow === 'function' ? slide.glow(pos.step) : slide.glow;
  const progress = (pos.index + (pos.step + 1) / slide.steps) / SLIDES.length;
  const counter = (n: number) => String(n).padStart(2, '0');

  const iconButton =
    'grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/75 transition-colors hover:border-white/25 hover:text-white cursor-pointer';

  return (
    <MotionConfig reducedMotion="user">
      <PointerContext.Provider value={{ px, py }}>
        <div
          ref={rootRef}
          onPointerMove={onPointerMove}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="bro-root fixed inset-0 z-[60] overflow-hidden bg-[#05080F] font-sans text-white antialiased"
          role="region"
          aria-roledescription="carousel"
          aria-label={copy.meta.title}
        >
          <BrochureBackdrop index={pos.index} glow={glow} />

          {/* Progress */}
          <div className="absolute inset-x-0 top-0 z-40 h-[3px] bg-white/5">
            <motion.div
              className="h-full origin-left bg-linear-to-r from-[#D8202A] via-[#FF4D57] to-[#FF8A3D] shadow-[0_0_12px_#D8202A]"
              initial={false}
              animate={{ scaleX: progress }}
              transition={{ duration: 0.8, ease: EASE }}
            />
          </div>

          {/* Top bar */}
          <header className="absolute inset-x-0 top-0 z-30 flex h-16 sm:h-[72px] items-center justify-between gap-3 bg-linear-to-b from-[#05080F] via-[#05080F]/80 to-transparent px-4 sm:px-6 lg:px-10">
            <button type="button" onClick={() => goTo(0)} className="flex min-w-0 items-center gap-2.5 cursor-pointer" aria-label="JStack">
              <img src={IMG.jstackMark} alt="" className="h-8 sm:h-9 w-auto" draggable={false} />
              <span className="flex flex-col text-left leading-none">
                <span className="text-[17px] sm:text-lg font-black tracking-tight">JSTACK</span>
                <span className="mt-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#FF4D57]">{copy.ui.brand}</span>
              </span>
            </button>

            <div className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 md:block">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={slide.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="block text-xs font-bold uppercase tracking-[0.3em] text-white/45"
                >
                  {copy.nav[slide.id]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5" role="group" aria-label={copy.ui.language}>
                {(['es', 'en'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    aria-pressed={language === lang}
                    className={`rounded-full px-2.5 sm:px-3 py-1 text-[11px] font-black tracking-wider transition-colors cursor-pointer ${
                      language === lang ? 'bg-[#D8202A] text-white' : 'text-white/55 hover:text-white'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setAutoplay((v) => !v)}
                className={`${iconButton} hidden sm:grid ${autoplay ? 'border-[#D8202A]/60 text-white' : ''}`}
                aria-label={autoplay ? copy.ui.autoplayOff : copy.ui.autoplayOn}
                title={autoplay ? copy.ui.autoplayOff : copy.ui.autoplayOn}
              >
                {autoplay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
              {fullscreenSupported && (
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className={`${iconButton} hidden sm:grid`}
                  aria-label={isFullscreen ? copy.ui.fullscreenOff : copy.ui.fullscreenOn}
                  title={isFullscreen ? copy.ui.fullscreenOff : copy.ui.fullscreenOn}
                >
                  {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </button>
              )}
              <button type="button" onClick={() => setIndexOpen(true)} className={iconButton} aria-label={copy.ui.index} title={copy.ui.index}>
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button type="button" onClick={onExit} className={iconButton} aria-label={copy.ui.exit} title={copy.ui.exit}>
                <X className="h-4 w-4" />
              </button>
            </div>
          </header>

          {/* Stage */}
          <div className="absolute inset-0 z-10" style={{ perspective: 2000 }}>
            <AnimatePresence initial custom={pos.dir}>
              <motion.section
                key={pos.index}
                ref={(el: HTMLElement | null) => {
                  if (el) scrollerRef.current = el;
                }}
                custom={pos.dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                aria-roledescription="slide"
                aria-label={`${pos.index + 1} / ${SLIDES.length} · ${copy.nav[slide.id]}`}
                className="bro-scroll absolute inset-0 overflow-y-auto overflow-x-hidden overscroll-contain"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="flex min-h-full flex-col justify-center px-4 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-24 lg:px-14">
                  <SlideComponent step={pos.step} goToStep={goToStep} next={next} />
                </div>
              </motion.section>
            </AnimatePresence>
          </div>

          {/* Bottom navigation */}
          <footer className="absolute inset-x-0 bottom-0 z-30 flex h-[76px] sm:h-[88px] items-center justify-between gap-3 bg-linear-to-t from-[#05080F] via-[#05080F]/85 to-transparent px-4 sm:px-6 lg:px-10">
            <div className="flex min-w-0 items-center gap-3">
              <span className="text-sm sm:text-base font-black tabular-nums">
                {counter(pos.index + 1)}
                <span className="text-white/30"> / {counter(SLIDES.length)}</span>
              </span>
              <AnimatePresence>
                {!hasNavigated && pos.index === 0 && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 2.2, duration: 0.6 }}
                    className="hidden truncate text-xs font-semibold text-white/40 lg:block"
                  >
                    {copy.ui.hint}
                  </motion.span>
                )}
              </AnimatePresence>
              {slide.steps > 1 && (
                <span className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-bold text-white/60 sm:inline-flex">
                  {copy.ui.step} {pos.step + 1}/{slide.steps}
                  <span className="flex gap-1">
                    {Array.from({ length: slide.steps }).map((_, i) => (
                      <span key={i} className={`h-1.5 w-1.5 rounded-full transition-colors ${i <= pos.step ? 'bg-[#FF4D57]' : 'bg-white/20'}`} />
                    ))}
                  </span>
                </span>
              )}
            </div>

            <nav className="hidden items-center gap-1.5 min-[400px]:flex md:absolute md:left-1/2 md:-translate-x-1/2" aria-label={copy.ui.index}>
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`${i + 1}. ${copy.nav[s.id]}`}
                  aria-current={i === pos.index ? 'true' : undefined}
                  title={copy.nav[s.id]}
                  className="group grid h-6 place-items-center cursor-pointer"
                >
                  <motion.span
                    className="block h-1.5 rounded-full"
                    initial={false}
                    animate={{
                      width: i === pos.index ? 26 : 6,
                      backgroundColor: i === pos.index ? '#D8202A' : i < pos.index ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.18)',
                    }}
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={pos.index === 0 && pos.step === 0}
                className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white transition-all hover:border-white/30 disabled:opacity-30 cursor-pointer disabled:cursor-default"
                aria-label={copy.ui.prev}
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={atEnd}
                className="relative grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full bg-[#D8202A] text-white shadow-[0_12px_30px_-8px_rgba(216,32,42,0.8)] transition-all hover:bg-[#E5323C] disabled:opacity-30 cursor-pointer disabled:cursor-default"
                aria-label={copy.ui.next}
              >
                {autoplay && !atEnd && (
                  <svg className="absolute -inset-1 h-[calc(100%+8px)] w-[calc(100%+8px)] -rotate-90" viewBox="0 0 56 56" aria-hidden>
                    <motion.circle
                      key={`${pos.index}-${pos.step}`}
                      cx="28"
                      cy="28"
                      r="26"
                      fill="none"
                      stroke="#FF8A8F"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
                    />
                  </svg>
                )}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </footer>

          {/* Index overlay */}
          <AnimatePresence>
            {indexOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-50 overflow-y-auto bg-[#05080F]/95 backdrop-blur-xl"
                role="dialog"
                aria-modal="true"
                aria-label={copy.ui.indexTitle}
              >
                <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{copy.ui.indexTitle}</h2>
                    <button type="button" onClick={() => setIndexOpen(false)} className={iconButton} aria-label={copy.ui.close} autoFocus>
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
                    {SLIDES.map((s, i) => (
                      <motion.button
                        key={s.id}
                        type="button"
                        initial={{ opacity: 0, y: 24, rotateX: -40 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ delay: 0.04 * i, duration: 0.5, ease: EASE }}
                        style={{ transformPerspective: 800 }}
                        onClick={() => {
                          goTo(i);
                          setIndexOpen(false);
                        }}
                        className={`group rounded-2xl border p-4 sm:p-5 text-left transition-colors cursor-pointer ${
                          i === pos.index ? 'border-[#D8202A]/60 bg-[#D8202A]/10' : 'border-white/10 bg-white/[0.03] hover:border-white/25'
                        }`}
                      >
                        <span className="block text-3xl sm:text-4xl font-black tabular-nums text-white/15 transition-colors group-hover:text-[#FF4D57]">
                          {counter(i + 1)}
                        </span>
                        <span className="mt-2 block text-sm sm:text-base font-extrabold text-white">{copy.nav[s.id]}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </PointerContext.Provider>
    </MotionConfig>
  );
};
