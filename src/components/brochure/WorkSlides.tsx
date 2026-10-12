import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useTransform } from 'framer-motion';
import { ArrowRight, Bell, BarChart3, Bot, CalendarCheck, Check, CheckCircle2, ExternalLink, FileSpreadsheet, Receipt, Send, ShieldCheck, Store, UserPlus, Warehouse } from 'lucide-react';
import { useBrochureCopy } from './brochureContent';
import { IMG, WALL_IMAGES } from './assets';
import {
  BrowserFrame,
  Chip,
  Counter,
  EASE,
  ENTER_DELAY,
  Kicker,
  LaptopFrame,
  SlideProps,
  SlideTitle,
  rise,
  usePointer,
} from './primitives';

// ===========================================================================
// 4. Showcase — 3D coverflow, one project per step
// ===========================================================================

const PROJECTS = [
  { id: 'leadbridge', name: 'LeadBridge.ia', label: 'leadbridgeia.com', image: IMG.leadbridge, accent: '#6366F1' },
  { id: 'lis', name: "Lis's Company", label: "lis's company · seattle, wa", image: IMG.lisCompany, accent: '#10B981' },
  { id: 'tribio', name: 'Tribio', label: 'tribio', image: IMG.tribio, accent: '#1D8CF0' },
  { id: 'tractoleo', name: 'Tractoleo', label: 'tractoleo · pos', image: IMG.tractoleoPos, accent: '#22C55E' },
] as const;

export const SHOWCASE_STEPS = PROJECTS.length;
export const SHOWCASE_ACCENTS = PROJECTS.map((p) => p.accent);

export const ShowcaseSlide: React.FC<SlideProps> = ({ step, goToStep, next }) => {
  const c = useBrochureCopy().showcase;
  const active = PROJECTS[step];
  const text = c.projects[active.id];
  const { px, py } = usePointer();
  const stageRotateY = useTransform(px, [-1, 1], [-9, 9]);
  const stageRotateX = useTransform(py, [-1, 1], [6, -6]);

  return (
    <div className="mx-auto w-full max-w-[1320px] 2xl:max-w-[1480px]">
      <Kicker index="03" label={c.kicker} />
      <SlideTitle a={c.titleA} highlight={c.titleHighlight} className="mt-5 text-[clamp(2rem,4.2vw,3.8rem)]" />

      <div className="mt-6 sm:mt-8 grid items-center gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
        {/* Coverflow stage */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: ENTER_DELAY + 0.25, ease: EASE }}
          className="relative aspect-[16/10] w-full [perspective:1400px]"
        >
          <motion.div className="absolute inset-0" style={{ rotateY: stageRotateY, rotateX: stageRotateX, transformStyle: 'preserve-3d' }}>
            {PROJECTS.map((p, i) => {
              const offset = i - step;
              const abs = Math.abs(offset);
              const sign = Math.sign(offset);
              return (
                <motion.div
                  key={p.id}
                  onClick={() => goToStep(i)}
                  className="absolute left-[10%] top-[8%] w-[80%] cursor-pointer"
                  initial={false}
                  animate={{
                    x: `${offset * 40}%`,
                    z: abs === 0 ? 0 : -280 - (abs - 1) * 200,
                    rotateY: -sign * Math.min(abs, 2) * 42,
                    scale: abs === 0 ? 1 : 0.8,
                    opacity: abs === 0 ? 1 : abs === 1 ? 0.4 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 90, damping: 20, mass: 1 }}
                  style={{ pointerEvents: abs > 1 ? 'none' : 'auto' }}
                >
                  <BrowserFrame src={p.image} alt={p.name} label={p.label} />
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] blur-3xl"
                    style={{ background: p.accent }}
                    initial={false}
                    animate={{ opacity: abs === 0 ? 0.45 : 0 }}
                    transition={{ duration: 0.8, ease: EASE }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Project info */}
        <motion.div {...rise(0.45)}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -18, filter: 'blur(6px)' }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black tabular-nums" style={{ color: active.accent }}>
                  0{step + 1}
                </span>
                <span className="text-sm font-bold text-white/30">/ 0{PROJECTS.length}</span>
              </div>
              <span
                className="mt-3 inline-flex rounded-full border px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider"
                style={{ borderColor: `${active.accent}66`, color: active.accent, background: `${active.accent}14` }}
              >
                {text.type}
              </span>
              <h3 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-white">{active.name}</h3>
              <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-white/60">{text.desc}</p>
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {text.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.4, ease: EASE }}
                    className="flex items-center gap-2 text-[13px] sm:text-sm font-semibold text-white/80"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full" style={{ background: `${active.accent}26` }}>
                      <Check className="h-3 w-3" style={{ color: active.accent }} />
                    </span>
                    {f}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Step selector */}
          <div className="mt-7 grid grid-cols-4 gap-2">
            {PROJECTS.map((p, i) => (
              <button key={p.id} type="button" onClick={() => goToStep(i)} className="group text-left cursor-pointer">
                <span className="block h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.span
                    className="block h-full origin-left rounded-full"
                    style={{ background: p.accent }}
                    initial={false}
                    animate={{ scaleX: i <= step ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                  />
                </span>
                <span className={`mt-2 block truncate text-[10px] sm:text-xs font-bold transition-colors ${i === step ? 'text-white' : 'text-white/35 group-hover:text-white/60'}`}>
                  {p.name}
                </span>
              </button>
            ))}
          </div>

          {step < PROJECTS.length - 1 && (
            <button
              type="button"
              onClick={next}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white/60 transition-colors hover:text-white cursor-pointer"
            >
              {c.next}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

// ===========================================================================
// 5. AI — live chat simulation in front of the LeadBridge product
// ===========================================================================

// Advances through numbered stages at the given times (seconds), then loops.
const useLoopingStages = (marks: number[], loopAfter: number) => {
  const [stage, setStage] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const lead = cycle === 0 ? ENTER_DELAY : 0;
    const timers = marks.map((t, i) => window.setTimeout(() => setStage(i + 1), (lead + t) * 1000));
    timers.push(
      window.setTimeout(() => {
        setStage(0);
        setCycle((n) => n + 1);
      }, (lead + loopAfter) * 1000),
    );
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [cycle]); // eslint-disable-line react-hooks/exhaustive-deps

  return { stage, cycle };
};

const bubbleIn = (fromRight: boolean) => ({
  initial: { opacity: 0, scale: 0.6, y: 14 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, transition: { duration: 0.2 } },
  transition: { type: 'spring' as const, stiffness: 260, damping: 20 },
  style: { transformOrigin: fromRight ? '100% 100%' : '0% 100%' },
});

const ChatWidget: React.FC<{ stage: number; cycle: number }> = ({ stage, cycle }) => {
  const chat = useBrochureCopy().ai.chat;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0D1322] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2.5 bg-linear-to-r from-[#4F46E5] to-[#7C3AED] px-3 py-2.5 sm:px-4 sm:py-3">
        <span className="grid h-7 w-7 sm:h-9 sm:w-9 place-items-center rounded-full bg-white/20">
          <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[12px] sm:text-sm font-extrabold text-white">{chat.agent}</p>
          <p className="flex items-center gap-1 text-[10px] sm:text-[11px] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
            {chat.online}
          </p>
        </div>
      </div>

      <div key={cycle} className="flex h-[176px] sm:h-[232px] flex-col justify-end gap-2 overflow-hidden px-3 py-3 sm:px-4">
        <AnimatePresence>
          {stage >= 1 && (
            <motion.div key="u1" {...bubbleIn(true)} className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#4F46E5] px-3 py-2 text-[11px] sm:text-[13px] leading-snug text-white">
              {chat.user1}
            </motion.div>
          )}
          {stage === 2 && (
            <motion.div key="typing" {...bubbleIn(false)} className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-md bg-white/10 px-3 py-2.5">
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="h-1.5 w-1.5 rounded-full bg-white/70"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.12 }}
                />
              ))}
            </motion.div>
          )}
          {stage >= 3 && (
            <motion.div key="b1" {...bubbleIn(false)} className="max-w-[88%] rounded-2xl rounded-bl-md bg-white/10 px-3 py-2 text-[11px] sm:text-[13px] leading-snug text-white/90">
              {chat.bot1}
            </motion.div>
          )}
          {stage >= 4 && (
            <motion.div key="u2" {...bubbleIn(true)} className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-[#4F46E5] px-3 py-2 text-[11px] sm:text-[13px] leading-snug text-white">
              {chat.user2}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2 border-t border-white/10 px-3 py-2.5 sm:px-4">
        <span className="flex-1 truncate rounded-full bg-white/[0.06] px-3 py-1.5 text-[10px] sm:text-xs text-white/40">{chat.placeholder}</span>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#4F46E5]">
          <Send className="h-3.5 w-3.5 text-white" />
        </span>
      </div>
    </div>
  );
};

export const AISlide: React.FC<SlideProps> = () => {
  const c = useBrochureCopy().ai;
  const { stage, cycle } = useLoopingStages([0.9, 1.7, 3.1, 4.4, 5.2, 6.0], 13);
  const { px, py } = usePointer();
  const rotateY = useTransform(px, [-1, 1], [-16, 4]);
  const rotateX = useTransform(py, [-1, 1], [10, 0]);

  return (
    <div className="mx-auto grid w-full max-w-[1320px] 2xl:max-w-[1480px] items-center gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
      <div>
        <Kicker index="04" label={c.kicker} />
        <SlideTitle a={c.titleA} highlight={c.titleHighlight} className="mt-5 text-[clamp(2rem,4.4vw,4rem)]" />
        <motion.p {...rise(0.45)} className="mt-5 max-w-xl text-[15px] sm:text-lg leading-relaxed text-white/60">
          {c.lead}
        </motion.p>

        <ul className="mt-6 space-y-2.5">
          {c.bullets.map((b, i) => {
            const Icon = [Bot, UserPlus, CalendarCheck][i];
            const lit = stage >= [1, 5, 6][i];
            return (
              <motion.li key={b} {...rise(0.6 + i * 0.1)} className="flex items-center gap-3">
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border transition-all duration-500 ${
                    lit ? 'border-[#818CF8]/60 bg-[#4F46E5]/30 shadow-[0_0_24px_rgba(99,102,241,0.55)]' : 'border-white/10 bg-white/[0.04]'
                  }`}
                >
                  <Icon className={`h-4 w-4 transition-colors duration-500 ${lit ? 'text-white' : 'text-white/50'}`} />
                </span>
                <span className={`text-[14px] sm:text-base font-semibold transition-colors duration-500 ${lit ? 'text-white' : 'text-white/60'}`}>{b}</span>
              </motion.li>
            );
          })}
        </ul>

        <motion.div {...rise(0.95)} className="mt-7 grid max-w-md grid-cols-3 gap-2">
          {c.metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-center">
              <p className="text-lg sm:text-2xl font-black text-white">{m.value}</p>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/40">{m.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3D scene */}
      <div className="relative mx-auto aspect-[1/1.02] w-full max-w-[680px] sm:aspect-[5/4] [perspective:1600px]">
        <motion.div className="absolute inset-0" style={{ rotateY, rotateX, transformStyle: 'preserve-3d' }}>
          <motion.div
            className="absolute right-0 top-[2%] w-[88%]"
            initial={{ opacity: 0, z: -400, rotateY: -25 }}
            animate={{ opacity: 1, z: -80, rotateY: 0 }}
            transition={{ duration: 1.3, delay: ENTER_DELAY + 0.2, ease: EASE }}
          >
            <BrowserFrame src={IMG.leadbridge} alt="LeadBridge.ia" label="leadbridgeia.com" />
          </motion.div>

          <motion.div
            className="absolute bottom-[1%] left-0 w-[64%] min-w-[220px] sm:w-[54%]"
            initial={{ opacity: 0, z: 400, y: 60 }}
            animate={{ opacity: 1, z: 90, y: 0 }}
            transition={{ duration: 1.2, delay: ENTER_DELAY + 0.45, ease: EASE }}
          >
            <ChatWidget stage={stage} cycle={cycle} />
          </motion.div>

          <AnimatePresence>
            {stage >= 5 && (
              <motion.div
                key={`lead-${cycle}`}
                className="absolute bottom-[30%] right-[1%] w-[46%] sm:bottom-[26%] sm:w-[40%]"
                initial={{ opacity: 0, scale: 0.5, z: 380 }}
                animate={{ opacity: 1, scale: 1, z: 200 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.25 } }}
                transition={{ type: 'spring', stiffness: 140, damping: 16 }}
              >
                <div className="rounded-2xl border border-[#4ADE80]/30 bg-[#0B1A14] p-3 sm:p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)]">
                  <p className="flex items-center gap-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#4ADE80]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {c.chat.leadTitle}
                  </p>
                  <p className="mt-2 text-sm sm:text-base font-extrabold text-white">{c.chat.leadName}</p>
                  <p className="text-[10px] sm:text-xs text-white/55">{c.chat.leadPhone}</p>
                  <p className="mt-1 text-[10px] sm:text-xs font-semibold text-white/75">{c.chat.leadService}</p>
                </div>
              </motion.div>
            )}
            {stage >= 6 && (
              <motion.div
                key={`booked-${cycle}`}
                className="absolute bottom-[14%] right-[3%] sm:bottom-[12%]"
                initial={{ opacity: 0, scale: 0.5, z: 420 }}
                animate={{ opacity: 1, scale: 1, z: 240 }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                transition={{ type: 'spring', stiffness: 160, damping: 15 }}
              >
                <span className="flex items-center gap-2 rounded-full bg-linear-to-r from-[#16A34A] to-[#22C55E] py-1.5 pl-1.5 pr-3 sm:pr-4 text-[10px] sm:text-xs font-extrabold text-white shadow-[0_18px_40px_-10px_rgba(34,197,94,0.7)]">
                  <span className="grid h-5 w-5 sm:h-6 sm:w-6 place-items-center rounded-full bg-white/25">
                    <CalendarCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </span>
                  {c.chat.booked}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

// ===========================================================================
// 6. Systems — POS on a 3D laptop with feature callouts flying in
// ===========================================================================

const SYSTEM_ICONS = [Warehouse, Receipt, FileSpreadsheet, BarChart3, Bell, ShieldCheck];

const CALLOUT_LAYOUT = [
  { pos: 'left-[-3%] top-[24%]', icon: Warehouse, color: '#22C55E' },
  { pos: 'left-[1%] top-[50%]', icon: Receipt, color: '#38BDF8' },
  { pos: 'right-[-2%] top-[6%]', icon: FileSpreadsheet, color: '#F59E0B' },
  { pos: 'right-[-4%] top-[46%]', icon: BarChart3, color: '#A78BFA' },
  { pos: 'left-[34%] bottom-[2%]', icon: Bell, color: '#F87171' },
];

export const SystemsSlide: React.FC<SlideProps> = () => {
  const c = useBrochureCopy().systems;
  const { px, py } = usePointer();
  const rotateY = useTransform(px, [-1, 1], [-18, -4]);
  const rotateX = useTransform(py, [-1, 1], [14, 4]);

  return (
    <div className="mx-auto grid w-full max-w-[1320px] 2xl:max-w-[1480px] items-center gap-8 lg:grid-cols-[0.85fr_1.4fr] lg:gap-10">
      <div>
        <Kicker index="05" label={c.kicker} />
        <SlideTitle a={c.titleA} highlight={c.titleHighlight} className="mt-5 text-[clamp(2rem,4.2vw,3.9rem)]" />
        <motion.p {...rise(0.45)} className="mt-5 max-w-lg text-[15px] sm:text-lg leading-relaxed text-white/60">
          {c.lead}
        </motion.p>

        <ul className="mt-6 grid grid-cols-2 gap-x-3 gap-y-2.5">
          {c.features.map((f, i) => {
            const Icon = SYSTEM_ICONS[i];
            return (
              <motion.li key={f} {...rise(0.55 + i * 0.07, 16)} className="flex items-center gap-2 text-[13px] sm:text-sm font-semibold text-white/80">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#22C55E]/12 text-[#4ADE80]">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {f}
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          {...rise(1)}
          className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-[#22C55E]/25 bg-linear-to-r from-[#22C55E]/10 to-transparent px-5 py-4"
        >
          <Store className="h-7 w-7 text-[#4ADE80]" />
          <div>
            <Counter value={1949} delay={1} duration={2.2} className="block text-3xl sm:text-4xl font-black leading-none text-white" />
            <p className="mt-1 text-xs sm:text-sm text-white/55">{c.counterLabel}</p>
          </div>
        </motion.div>
      </div>

      <div className="relative px-[3%] py-[4%] [perspective:1800px]">
        <motion.div style={{ rotateY, rotateX, transformStyle: 'preserve-3d' }}>
          <motion.div
            initial={{ opacity: 0, rotateX: 50, y: 120, z: -300 }}
            animate={{ opacity: 1, rotateX: 0, y: 0, z: 0 }}
            transition={{ duration: 1.4, delay: ENTER_DELAY + 0.15, ease: EASE }}
          >
            <LaptopFrame src={IMG.tractoleoPos} alt="Tractoleo · Sistema de gestión" />
          </motion.div>

          {CALLOUT_LAYOUT.map((callout, i) => (
            <motion.div
              key={i}
              className={`absolute ${callout.pos}`}
              initial={{ opacity: 0, scale: 0.4, z: 400 }}
              animate={{ opacity: 1, scale: 1, z: 110 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14, delay: ENTER_DELAY + 1 + i * 0.18 }}
            >
              <div className="bro-float flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-[#0B1222] py-1 pl-1 pr-2.5 sm:py-1.5 sm:pl-1.5 sm:pr-3.5 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.9)]" style={{ animationDuration: `${5 + i * 0.6}s` }}>
                <span className="relative grid h-5 w-5 sm:h-7 sm:w-7 place-items-center rounded-full" style={{ background: `${callout.color}26` }}>
                  <span className="absolute inset-0 animate-ping rounded-full opacity-30" style={{ background: callout.color }} />
                  <callout.icon className="relative h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" style={{ color: callout.color }} />
                </span>
                <span className="whitespace-nowrap text-[9px] sm:text-xs font-bold text-white">{c.callouts[i]}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// ===========================================================================
// 7. Portfolio — infinite 3D marquee wall of real projects
// ===========================================================================

// Each column repeats its set twice and scrolls by -50%, so one set must be
// at least half as tall as the column for the loop to stay seamless.
const WALL_COLUMNS = 5;
const WALL_SET = 7;
const wallColumns = Array.from({ length: WALL_COLUMNS }, (_, col) =>
  Array.from({ length: WALL_SET }, (_, k) => WALL_IMAGES[(col * 3 + k * 4) % WALL_IMAGES.length]),
);

export const PortfolioSlide: React.FC<SlideProps> = () => {
  const c = useBrochureCopy().portfolio;

  return (
    <div className="relative mx-auto h-[clamp(480px,72svh,820px)] w-full max-w-[1400px] 2xl:max-w-[1560px] overflow-hidden rounded-[22px] sm:rounded-[32px] border border-white/10 bg-[#070B14]">
      {/* Wall */}
      <div className="absolute inset-0 [perspective:1400px]">
        <div
          className="absolute left-1/2 top-1/2 h-[180%] w-[170%] sm:w-[130%] lg:left-[64%] lg:w-[105%]"
          style={{ transform: 'translate(-50%, -50%) rotateX(46deg) rotateZ(-30deg)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.25 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: ENTER_DELAY, ease: EASE }}
            className="grid h-full grid-cols-4 gap-3 sm:grid-cols-5 sm:gap-5"
          >
            {wallColumns.map((images, col) => (
              <div key={col} className={`overflow-hidden ${col === WALL_COLUMNS - 1 ? 'hidden sm:block' : ''}`}>
                <div
                  className={`bro-marquee ${col % 2 ? 'bro-marquee-reverse' : ''}`}
                  style={{ animationDuration: `${46 + col * 7}s` }}
                >
                  {[...images, ...images].map((src, i) => (
                    <div key={i} className="pb-3 sm:pb-5">
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="block w-full select-none rounded-md sm:rounded-xl border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9)]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Readability gradients */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#05080F] via-[#05080F]/70 to-transparent lg:bg-linear-to-r lg:from-[#05080F] lg:via-[#05080F]/80 lg:to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#05080F]/80 to-transparent" />

      {/* Copy */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-10 lg:inset-y-0 lg:right-auto lg:flex lg:w-[50%] lg:flex-col lg:justify-center lg:p-14">
        <Kicker index="06" label={c.kicker} />
        <SlideTitle a={c.titleA} highlight={c.titleHighlight} className="mt-4 sm:mt-5 text-[clamp(1.7rem,3.6vw,3.4rem)]" />
        <motion.p {...rise(0.45)} className="mt-4 max-w-md text-[14px] sm:text-base leading-relaxed text-white/60">
          {c.lead}
        </motion.p>
        <motion.div {...rise(0.6)} className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
          {c.industries.map((ind) => (
            <Chip key={ind} className="bg-[#05080F]/60">
              {ind}
            </Chip>
          ))}
        </motion.div>
        <motion.a
          {...rise(0.75)}
          href="#/projects"
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-white/80 transition-colors hover:text-white"
        >
          {c.cta}
          <ExternalLink className="h-4 w-4" />
        </motion.a>
      </div>
    </div>
  );
};
