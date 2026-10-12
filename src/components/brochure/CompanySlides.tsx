import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionValue, motion, useMotionValue, useReducedMotion, useTime, useTransform } from 'framer-motion';
import { ArrowRight, Check, CodeXml, Globe, Mail, Phone, PenTool, Rocket, Search } from 'lucide-react';
import { CONTACT, useBrochureCopy } from './brochureContent';
import { IMG } from './assets';
import {
  EASE,
  ENTER_DELAY,
  ExtrudedMark,
  Kicker,
  LinkedinIcon,
  SlideProps,
  SlideTitle,
  TiltCard,
  WhatsappIcon,
  rise,
  useMediaQuery,
} from './primitives';

// ===========================================================================
// 8. Process — a true step-by-step slide: each "next" advances one phase
// ===========================================================================

const PROCESS_ICONS = [Search, PenTool, CodeXml, Rocket];
export const PROCESS_STEPS = PROCESS_ICONS.length;

export const ProcessSlide: React.FC<SlideProps> = ({ step, goToStep }) => {
  const c = useBrochureCopy().process;
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const progress = step / (c.steps.length - 1);

  return (
    <div className="relative mx-auto w-full max-w-[1320px] 2xl:max-w-[1480px]">
      {/* Giant flipping step number */}
      <div className="pointer-events-none absolute -top-6 right-0 hidden sm:block [perspective:900px]" aria-hidden>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={step}
            initial={{ rotateX: -95, opacity: 0, y: 50 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            exit={{ rotateX: 95, opacity: 0, y: -50 }}
            transition={{ duration: 0.75, ease: EASE }}
            className="bro-outline-text block text-[clamp(7rem,15vw,14rem)] font-black leading-none tracking-tighter"
            style={{ transformOrigin: '50% 50% -60px' }}
          >
            0{step + 1}
          </motion.span>
        </AnimatePresence>
      </div>

      <Kicker index="07" label={c.kicker} />
      <SlideTitle a={c.titleA} highlight={c.titleHighlight} className="relative mt-5 max-w-3xl text-[clamp(2rem,4.4vw,4rem)]" />

      <div className="relative mt-8 sm:mt-12">
        {/* Progress rail — horizontal on desktop, vertical on mobile */}
        <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-[2px] bg-white/10 lg:block">
          <motion.div
            className="h-full origin-left bg-linear-to-r from-[#D8202A] via-[#FF4D57] to-[#FF8A3D] shadow-[0_0_14px_#D8202A]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          />
        </div>
        <div className="absolute bottom-7 left-7 top-7 w-[2px] -translate-x-1/2 bg-white/10 lg:hidden">
          <motion.div
            className="h-full w-full origin-top bg-linear-to-b from-[#D8202A] to-[#FF8A3D]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: progress }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          />
        </div>

        <ol className="relative grid gap-3 lg:grid-cols-4 lg:gap-5">
          {c.steps.map((s, i) => {
            const Icon = PROCESS_ICONS[i];
            const done = i < step;
            const active = i === step;
            return (
              <motion.li key={s.title} {...rise(0.45 + i * 0.1)}>
                <button
                  type="button"
                  onClick={() => goToStep(i)}
                  aria-current={active ? 'step' : undefined}
                  className="group flex w-full gap-4 text-left cursor-pointer lg:flex-col lg:items-center lg:text-center"
                >
                  {/* Node */}
                  <span className="relative grid h-14 w-14 shrink-0 place-items-center">
                    {active && <span className="absolute inset-0 animate-ping rounded-full bg-[#D8202A]/40" />}
                    <motion.span
                      className="relative grid h-14 w-14 place-items-center rounded-full border-2"
                      initial={false}
                      animate={{
                        scale: active ? 1.08 : 1,
                        backgroundColor: active || done ? '#D8202A' : '#0B1222',
                        borderColor: active ? '#FF8A8F' : done ? '#D8202A' : 'rgba(255,255,255,0.15)',
                      }}
                      transition={{ duration: 0.5, ease: EASE }}
                    >
                      {done ? <Check className="h-6 w-6 text-white" /> : <Icon className={`h-6 w-6 ${active ? 'text-white' : 'text-white/45'}`} />}
                    </motion.span>
                  </span>

                  {/* Card */}
                  <motion.span
                    className={`block flex-1 rounded-2xl border p-4 sm:p-5 transition-colors duration-500 lg:w-full ${
                      active
                        ? 'border-[#D8202A]/50 bg-linear-to-b from-[#D8202A]/15 to-white/[0.02] shadow-[0_30px_60px_-30px_rgba(216,32,42,0.7)]'
                        : 'border-white/10 bg-white/[0.03] group-hover:border-white/20'
                    }`}
                    initial={false}
                    animate={{ y: active && isDesktop ? -8 : 0, opacity: active || done ? 1 : 0.55 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-[#FF4D57]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="mt-1 block text-lg sm:text-xl font-extrabold tracking-tight text-white">{s.title}</span>
                    <motion.span
                      initial={false}
                      animate={{ height: isDesktop || active ? 'auto' : 0, opacity: isDesktop || active ? 1 : 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="block overflow-hidden"
                    >
                      <span className="mt-2 block text-[13px] sm:text-sm leading-relaxed text-white/55">{s.desc}</span>
                    </motion.span>
                    <AnimatePresence initial={false}>
                      {active && (
                        <motion.span
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: EASE }}
                          className="block overflow-hidden"
                        >
                          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#D8202A]/20 px-3 py-1 text-[11px] sm:text-xs font-bold text-[#FF8A8F]">
                            <Check className="h-3 w-3" />
                            {c.deliverable}: {s.deliverable}
                          </span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.span>
                </button>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

// ===========================================================================
// 9. Why JStack — reasons + tilted 3D tech orbit
// ===========================================================================

const TECH_INNER = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#5FA04E' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Tailwind', color: '#38BDF8' },
];
const TECH_OUTER = [
  { name: 'Supabase', color: '#3ECF8E' },
  { name: 'Stripe', color: '#635BFF' },
  { name: 'LLMs · IA', color: '#FF4D57' },
  { name: 'Cloudflare', color: '#F38020' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Vite', color: '#A855F7' },
  { name: 'WhatsApp API', color: '#25D366' },
];

// 2.5D orbit: badges travel on ellipses and are scaled, dimmed and layered by
// their depth, which reads as a tilted 3D ring without relying on nested
// preserve-3d planes (those clip unpredictably across browsers).

type Tech = { name: string; color: string };

const OrbitBadge: React.FC<{
  item: Tech;
  index: number;
  count: number;
  rx: number;
  ry: number;
  period: number;
  reverse?: boolean;
  time: MotionValue<number>;
}> = ({ item, index, count, rx, ry, period, reverse, time }) => {
  const angleAt = (t: number) => (index / count) * Math.PI * 2 + (reverse ? -1 : 1) * (t / 1000 / period) * Math.PI * 2;
  const x = useTransform(time, (t) => Math.cos(angleAt(t)) * rx);
  const y = useTransform(time, (t) => Math.sin(angleAt(t)) * ry);
  const depth = useTransform(time, (t) => Math.sin(angleAt(t)));
  const scale = useTransform(depth, (d) => 0.74 + 0.26 * ((d + 1) / 2));
  const opacity = useTransform(depth, (d) => 0.35 + 0.65 * ((d + 1) / 2));
  const zIndex = useTransform(depth, (d) => (d > 0 ? 30 : 10));

  return (
    <motion.span className="absolute left-1/2 top-1/2" style={{ x, y, scale, opacity, zIndex }}>
      <span className="absolute left-0 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-[#0B1222] px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-bold text-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.9)]">
        <span className="h-2 w-2 rounded-full" style={{ background: item.color, boxShadow: `0 0 10px ${item.color}` }} />
        {item.name}
      </span>
    </motion.span>
  );
};

const OrbitRing: React.FC<{ items: Tech[]; rx: number; ry: number; period: number; reverse?: boolean; time: MotionValue<number> }> = ({
  items,
  rx,
  ry,
  period,
  reverse,
  time,
}) => (
  <>
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/12"
      style={{ width: rx * 2, height: ry * 2 }}
    />
    {items.map((item, i) => (
      <OrbitBadge key={item.name} item={item} index={i} count={items.length} rx={rx} ry={ry} period={period} reverse={reverse} time={time} />
    ))}
  </>
);

const TechOrbit: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const reduceMotion = useReducedMotion();
  const liveTime = useTime();
  const frozenTime = useMotionValue(0);
  const time = reduceMotion ? frozenTime : liveTime;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const outer = width * 0.44;
  const inner = width * 0.26;
  const squash = 0.46;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.3, delay: ENTER_DELAY + 0.2, ease: EASE }}
      className="relative mx-auto aspect-[16/11] w-full max-w-[640px]"
    >
      {/* floor glow + light beam */}
      <div className="absolute left-1/2 top-1/2 h-[34%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#D8202A]/20 blur-3xl" />
      <div className="absolute bottom-1/2 left-1/2 h-[46%] w-px -translate-x-1/2 bg-linear-to-t from-[#FF4D57]/70 to-transparent" />

      {width > 0 && (
        <>
          <OrbitRing items={TECH_OUTER} rx={outer} ry={outer * squash} period={56} reverse time={time} />
          <OrbitRing items={TECH_INNER} rx={inner} ry={inner * squash} period={36} time={time} />
        </>
      )}

      {/* core */}
      <div
        className="absolute left-1/2 top-1/2 z-20 grid aspect-square w-[21%] -translate-x-1/2 -translate-y-[62%] place-items-center rounded-full border border-[#D8202A]/40 bg-[radial-gradient(circle_at_35%_30%,#1A2236,#070B14)] shadow-[0_0_60px_rgba(216,32,42,0.45)]"
      >
        <span className="absolute inset-[-10%] animate-ping rounded-full border border-[#D8202A]/30" style={{ animationDuration: '2.8s' }} />
        <img src={IMG.jstackMark} alt="JStack" className="h-auto w-[46%]" draggable={false} />
      </div>
    </motion.div>
  );
};

export const WhySlide: React.FC<SlideProps> = () => {
  const c = useBrochureCopy().why;

  return (
    <div className="mx-auto grid w-full max-w-[1320px] 2xl:max-w-[1480px] items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
      <div>
        <Kicker index="08" label={c.kicker} />
        <SlideTitle a={c.titleA} highlight={c.titleHighlight} className="mt-5 text-[clamp(2rem,4.4vw,4rem)]" />
        <ul className="mt-7 space-y-3">
          {c.reasons.map((r, i) => (
            <motion.li
              key={r}
              initial={{ opacity: 0, x: -30, rotateY: -30 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: ENTER_DELAY + 0.45 + i * 0.1, ease: EASE }}
              style={{ transformPerspective: 800 }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#D8202A]">
                <Check className="h-4 w-4 text-white" />
              </span>
              <span className="text-[14px] sm:text-base font-semibold text-white/85">{r}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <TechOrbit />
    </div>
  );
};

// ===========================================================================
// 10. Founders — Tony Ulloa & Danny Leon
// ===========================================================================

const FOUNDERS = [
  { id: 'tony', name: 'Tony Ulloa', photo: IMG.tonyUlloa as string | undefined, initials: 'TU', linkedin: CONTACT.linkedinTony as string | undefined },
  { id: 'danny', name: 'Danny Leon', photo: undefined, initials: 'DL', linkedin: undefined },
] as const;

const Monogram: React.FC<{ initials: string }> = ({ initials }) => (
  <div className="relative grid h-full w-full place-items-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,#2A2F6B,#0A0F1E_70%)]">
    <div className="bro-grid-pattern absolute inset-0 opacity-40" />
    <div className="relative grid aspect-square h-[64%] place-items-center">
      <div className="bro-spin absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#6366F1,#D8202A,#F59E0B,#6366F1)] p-[3px]" style={{ animationDuration: '8s' }}>
        <div className="h-full w-full rounded-full bg-[#0A0F1E]" />
      </div>
      <span className="relative text-[clamp(2.4rem,5vw,4.2rem)] font-black tracking-tighter text-white">{initials}</span>
    </div>
  </div>
);

export const FoundersSlide: React.FC<SlideProps> = () => {
  const c = useBrochureCopy().founders;

  return (
    <div className="mx-auto w-full max-w-[1240px]">
      <div className="text-center">
        <Kicker index="09" label={c.kicker} center />
        <SlideTitle a={c.titleA} highlight={c.titleHighlight} className="mt-5 text-[clamp(2rem,4.4vw,4rem)]" />
        <motion.p {...rise(0.4)} className="mx-auto mt-4 max-w-2xl text-[15px] sm:text-lg leading-relaxed text-white/55">
          {c.lead}
        </motion.p>
      </div>

      <div className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6">
        {FOUNDERS.map((f, i) => {
          const person = c.people[f.id];
          return (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, rotateY: i === 0 ? -75 : 75, x: i === 0 ? -80 : 80 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 1.2, delay: ENTER_DELAY + 0.35 + i * 0.15, ease: EASE }}
              style={{ transformPerspective: 1400 }}
            >
              <TiltCard className="h-full rounded-3xl" max={6}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.07),rgba(255,255,255,0.015))] lg:flex-row">
                  <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[4/3] lg:aspect-auto lg:w-[40%] lg:shrink-0">
                    {f.photo ? (
                      <img
                        src={f.photo}
                        alt={f.name}
                        draggable={false}
                        className="h-full w-full object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <Monogram initials={f.initials} />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-[#0A0F1C] via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-[#0A0F1C]/60" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-white">
                      {c.badge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-7 lg:p-6 xl:p-7">
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">{f.name}</h3>
                    <p className="mt-1 text-[13px] sm:text-sm font-bold text-[#FF4D57]">{person.role}</p>
                    <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-white/60">{person.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {person.skills.map((s) => (
                        <span key={s} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-white/65">
                          {s}
                        </span>
                      ))}
                    </div>
                    {f.linkedin && (
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-bold text-white/70 transition-colors hover:text-[#4BA3F5]"
                      >
                        <LinkedinIcon className="h-4 w-4" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// ===========================================================================
// 11. Contact / closing
// ===========================================================================

export const ContactSlide: React.FC<SlideProps> = () => {
  const c = useBrochureCopy().contact;

  const channels = [
    { icon: Phone, label: `🇺🇸 ${c.phoneUs}`, value: CONTACT.phoneUs, href: CONTACT.phoneUsHref },
    { icon: Phone, label: `🇵🇪 ${c.phonePe}`, value: CONTACT.phonePe, href: CONTACT.phonePeHref },
    { icon: Mail, label: c.email, value: CONTACT.email, href: CONTACT.emailHref },
    { icon: Globe, label: c.web, value: CONTACT.web, href: CONTACT.webHref },
  ];

  return (
    <div className="mx-auto w-full max-w-[1120px] text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.4, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: ENTER_DELAY, ease: EASE }}
        className="relative mx-auto mb-4 w-fit"
      >
        <div className="absolute inset-[-40%] rounded-full bg-[#D8202A]/30 blur-3xl" />
        <ExtrudedMark className="h-[clamp(76px,min(10vw,14svh),124px)] w-[clamp(63px,min(8.3vw,11.6svh),103px)]" />
      </motion.div>

      <Kicker index="10" label={c.kicker} center />
      <SlideTitle a={c.titleA} highlight={c.titleHighlight} className="mx-auto mt-4 max-w-4xl text-[clamp(2rem,min(4.6vw,7.4svh),4.2rem)]" />
      <motion.p {...rise(0.45)} className="mx-auto mt-5 max-w-2xl text-[15px] sm:text-lg leading-relaxed text-white/60">
        {c.lead}
      </motion.p>

      <motion.div {...rise(0.6)} className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <a
          href={CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-[15px] font-extrabold text-[#052E16] shadow-[0_18px_40px_-12px_rgba(37,211,102,0.7)] transition-transform hover:scale-[1.03]"
        >
          <WhatsappIcon className="h-5 w-5" />
          {c.whatsapp}
        </a>
        <a
          href="#/contact"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D8202A] px-7 py-3.5 text-[15px] font-extrabold text-white shadow-[0_18px_40px_-12px_rgba(216,32,42,0.8)] transition-transform hover:scale-[1.03]"
        >
          {c.quote}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>

      <div className="mt-7 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
        {channels.map((ch, i) => (
          <motion.a
            key={ch.value}
            href={ch.href}
            target={ch.href.startsWith('http') ? '_blank' : undefined}
            rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, rotateX: -80, y: 30 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.9, delay: ENTER_DELAY + 0.75 + i * 0.08, ease: EASE }}
            style={{ transformPerspective: 800 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3.5 sm:px-4 sm:py-4 text-left transition-colors hover:border-white/25"
          >
            <span className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/40">
              <ch.icon className="h-3 w-3" />
              {ch.label}
            </span>
            <span className="mt-1 block truncate text-[13px] sm:text-base font-extrabold text-white">{ch.value}</span>
          </motion.a>
        ))}
      </div>

      <motion.p {...rise(1.1)} className="mt-6 text-sm font-semibold text-white/35">
        {c.thanks} · JStack Digital Solutions © {new Date().getFullYear()}
      </motion.p>
    </div>
  );
};
