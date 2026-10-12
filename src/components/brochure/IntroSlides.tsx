import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { ArrowRight, Bot, Cloud, Code2, Gauge, Globe, Handshake, Layers, MonitorSmartphone, ShoppingBag, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { CONTACT, useBrochureCopy } from './brochureContent';
import { IMG } from './assets';
import {
  BrowserFrame,
  Chip,
  Counter,
  EASE,
  ENTER_DELAY,
  Kicker,
  RevealText,
  SlideProps,
  SlideTitle,
  TiltCard,
  WhatsappIcon,
  rise,
  useMediaQuery,
  usePointer,
} from './primitives';

// ===========================================================================
// 1. Cover
// ===========================================================================

const HeroStack: React.FC = () => {
  const c = useBrochureCopy().cover;
  const { px, py } = usePointer();
  const rotateY = useTransform(px, [-1, 1], [-28, -10]);
  const rotateX = useTransform(py, [-1, 1], [18, 6]);
  // Depth reads as huge displacement on a narrow phone; flatten it there.
  const roomy = useMediaQuery('(min-width: 640px)');
  const depth = roomy ? 1 : 0.4;

  const layers = [
    { src: IMG.tribio, label: 'tribio', style: 'left-[2%] top-[0%] w-[66%]', z: -170, delay: 0.2, float: 7 },
    { src: IMG.tractoleoPos, label: 'tractoleo · POS', style: 'right-[0%] top-[16%] w-[70%]', z: -40, delay: 0.38, float: 8 },
    { src: IMG.leadbridge, label: 'leadbridgeia.com', style: 'left-[8%] top-[42%] w-[68%]', z: 110, delay: 0.56, float: 6.5 },
  ];

  const chips = [
    { text: c.chips.ai, icon: Bot, style: 'left-[6%] top-[34%]', z: 200, delay: 1.0, color: 'from-[#6366F1] to-[#8B5CF6]' },
    { text: c.chips.sales, icon: TrendingUp, style: 'right-[6%] top-[8%]', z: 170, delay: 1.15, color: 'from-[#D8202A] to-[#FF6B4A]' },
    { text: c.chips.pos, icon: Zap, style: 'right-[-2%] bottom-[8%]', z: 240, delay: 1.3, color: 'from-[#16A34A] to-[#22C55E]' },
  ];

  return (
    <div className="relative mx-auto h-[clamp(210px,min(54vw,62svh),560px)] w-full max-w-[640px] lg:max-w-none [perspective:1600px]">
      <motion.div className="absolute inset-0" style={{ rotateY, rotateX, transformStyle: 'preserve-3d' }}>
        {/* glow plate under the stack */}
        <div
          className="absolute left-[10%] top-[30%] h-[60%] w-[80%] rounded-full bg-[#D8202A]/25 blur-3xl"
          style={{ transform: 'translateZ(-260px)' }}
        />
        {layers.map((l) => (
          <motion.div
            key={l.src}
            className={`absolute ${l.style}`}
            initial={{ opacity: 0, z: (l.z - 400) * depth, rotateZ: -6 }}
            animate={{ opacity: 1, z: l.z * depth, rotateZ: 0 }}
            transition={{ duration: 1.3, delay: ENTER_DELAY + l.delay, ease: EASE }}
          >
            <div className="bro-float" style={{ animationDuration: `${l.float}s` }}>
              <BrowserFrame src={l.src} alt="" label={l.label} />
            </div>
          </motion.div>
        ))}
        {roomy && chips.map((chip) => (
          <motion.div
            key={chip.text}
            className={`absolute ${chip.style}`}
            initial={{ opacity: 0, z: chip.z + 200, scale: 0.6 }}
            animate={{ opacity: 1, z: chip.z, scale: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14, delay: ENTER_DELAY + chip.delay }}
          >
            <div className="bro-float flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-[#0B1222] py-1 pl-1 pr-2.5 sm:py-1.5 sm:pl-1.5 sm:pr-4 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)]" style={{ animationDuration: '5.5s' }}>
              <span className={`grid h-5 w-5 sm:h-7 sm:w-7 place-items-center rounded-full bg-linear-to-br ${chip.color}`}>
                <chip.icon className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-white" />
              </span>
              <span className="whitespace-nowrap text-[9px] sm:text-xs font-bold text-white">{chip.text}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const CoverSlide: React.FC<SlideProps> = ({ next }) => {
  const c = useBrochureCopy().cover;

  return (
    <div className="mx-auto grid w-full max-w-[1320px] 2xl:max-w-[1480px] items-center gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-6">
      <div className="relative z-10 text-center lg:text-left">
        <motion.div
          {...rise(0, 16)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-white/70"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF4D57] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D8202A]" />
          </span>
          {c.eyebrow}
        </motion.div>

        <RevealText
          as="h1"
          delay={0.1}
          parts={[c.titleA, { text: c.titleHighlight, highlight: true }, c.titleB]}
          className="mt-5 sm:mt-6 text-[clamp(2.3rem,min(4.9vw,8.4svh),5.2rem)] font-black leading-[0.98] tracking-[-0.04em] text-white"
        />

        <motion.p {...rise(0.6)} className="mx-auto mt-5 sm:mt-6 max-w-xl text-[15px] sm:text-lg leading-relaxed text-white/60 lg:mx-0">
          {c.lead}
        </motion.p>

        <motion.div {...rise(0.75)} className="mt-7 sm:mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
          <button
            onClick={next}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#D8202A] px-6 py-3.5 text-sm sm:text-[15px] font-bold text-white shadow-[0_18px_40px_-12px_rgba(216,32,42,0.8)] transition-transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">{c.cta}</span>
            <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={c.secondary}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-3.5 text-sm sm:px-6 sm:text-[15px] font-bold text-white/85 transition-colors hover:border-[#25D366]/60 hover:text-white"
          >
            <WhatsappIcon className="h-5 w-5 sm:h-4 sm:w-4 text-[#25D366]" />
            <span className="hidden sm:inline">{c.secondary}</span>
          </a>
        </motion.div>

        <motion.ul {...rise(0.9)} className="mt-7 hidden flex-wrap justify-center gap-2 sm:flex lg:justify-start">
          {c.badges.map((b) => (
            <li key={b}>
              <Chip>
                <Sparkles className="h-3 w-3 text-[#FF4D57]" />
                {b}
              </Chip>
            </li>
          ))}
        </motion.ul>
      </div>

      <HeroStack />
    </div>
  );
};

// ===========================================================================
// 2. About — with a spinning 3D capability cube
// ===========================================================================

const CUBE_ICONS = [Globe, Bot, MonitorSmartphone, ShoppingBag, Layers, Cloud];
const CUBE_FACES = [
  'rotateY(0deg)',
  'rotateY(90deg)',
  'rotateY(180deg)',
  'rotateY(-90deg)',
  'rotateX(90deg)',
  'rotateX(-90deg)',
];

const CapabilityCube: React.FC = () => {
  const labels = useBrochureCopy().about.cube;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, delay: ENTER_DELAY + 0.3, ease: EASE }}
      className="relative mx-auto grid place-items-center [--cube:clamp(120px,24vw,210px)]"
      style={{ width: 'calc(var(--cube) * 2)', height: 'calc(var(--cube) * 1.9)' }}
    >
      {/* orbit rings */}
      <div className="absolute inset-0 grid place-items-center [perspective:900px]">
        <div className="absolute h-[118%] w-[118%]" style={{ transform: 'rotateX(72deg)' }}>
          <div className="bro-spin relative h-full w-full rounded-full border border-dashed border-white/12">
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4D57] shadow-[0_0_14px_#FF4D57]" />
          </div>
        </div>
        <div className="absolute h-[92%] w-[92%]" style={{ transform: 'rotateX(72deg)' }}>
          <div className="bro-spin-rev relative h-full w-full rounded-full border border-[#D8202A]/25">
            <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/70" />
          </div>
        </div>
      </div>
      {/* floor glow */}
      <div className="absolute bottom-[4%] h-[18%] w-[70%] rounded-[50%] bg-[#D8202A]/35 blur-2xl" />

      <div className="relative [perspective:1000px]" style={{ width: 'var(--cube)', height: 'var(--cube)' }}>
        <div className="bro-cube-tilt absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
          <div className="bro-cube absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
            {CUBE_FACES.map((face, i) => {
              const Icon = CUBE_ICONS[i];
              return (
                <div
                  key={face}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-md border border-[#FF4D57]/40 bg-[linear-gradient(145deg,#141C30,#0A0F1C)] shadow-[inset_0_0_40px_rgba(216,32,42,0.25)]"
                  style={{ transform: `${face} translateZ(calc(var(--cube) / 2))`, backfaceVisibility: 'hidden' }}
                >
                  <Icon className="h-[28%] w-[28%] text-[#FF4D57]" strokeWidth={1.6} />
                  <span className="text-[clamp(11px,1.5vw,16px)] font-black tracking-tight text-white">{labels[i]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PILLAR_ICONS = [Code2, Gauge, Handshake];

export const AboutSlide: React.FC<SlideProps> = () => {
  const c = useBrochureCopy().about;

  return (
    <div className="mx-auto grid w-full max-w-[1320px] 2xl:max-w-[1480px] items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
      <div>
        <Kicker index="01" label={c.kicker} />
        <SlideTitle a={c.titleA} highlight={c.titleHighlight} className="mt-5 text-[clamp(2rem,4.6vw,4.2rem)]" />
        <motion.p {...rise(0.45)} className="mt-5 max-w-2xl text-[15px] sm:text-lg leading-relaxed text-white/60">
          {c.body}
        </motion.p>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {c.pillars.map((p, i) => {
            const Icon = PILLAR_ICONS[i];
            return (
              <motion.div
                key={p.title}
                {...rise(0.6 + i * 0.12)}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <Icon className="h-5 w-5 text-[#FF4D57]" />
                <h3 className="mt-3 text-[15px] font-extrabold text-white">{p.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-white/50">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <CapabilityCube />
        <div className="grid w-full grid-cols-2 gap-3">
          {c.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, rotateX: -70, y: 30 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.9, delay: ENTER_DELAY + 0.7 + i * 0.1, ease: EASE }}
              style={{ transformPerspective: 800 }}
              className="rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.06] to-white/[0.01] p-4 sm:p-5"
            >
              <Counter
                value={s.value}
                suffix={s.suffix}
                delay={0.8 + i * 0.1}
                className="block text-[clamp(1.8rem,3.4vw,2.9rem)] font-black leading-none tracking-tight text-white"
              />
              <p className="mt-2 text-[12px] sm:text-[13px] leading-snug text-white/50">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ===========================================================================
// 3. Services — cards flip up in sequence, tilt in 3D on hover
// ===========================================================================

const SERVICE_ICONS = [Globe, ShoppingBag, MonitorSmartphone, Bot, Layers, Cloud];
const SERVICE_GRADIENTS = [
  'from-[#D8202A] to-[#FF6B4A]',
  'from-[#0EA5E9] to-[#2563EB]',
  'from-[#16A34A] to-[#22C55E]',
  'from-[#6366F1] to-[#A855F7]',
  'from-[#F59E0B] to-[#F97316]',
  'from-[#06B6D4] to-[#14B8A6]',
];

export const ServicesSlide: React.FC<SlideProps> = () => {
  const c = useBrochureCopy().services;

  return (
    <div className="mx-auto w-full max-w-[1320px] 2xl:max-w-[1480px]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <Kicker index="02" label={c.kicker} />
          <SlideTitle a={c.titleA} highlight={c.titleHighlight} className="mt-5 text-[clamp(2rem,4.4vw,4rem)]" />
        </div>
        <motion.p {...rise(0.4)} className="max-w-sm text-[15px] sm:text-base leading-relaxed text-white/55 lg:text-right">
          {c.lead}
        </motion.p>
      </div>

      <div className="mt-7 sm:mt-9 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3" style={{ perspective: 1400 }}>
        {c.items.map((item, i) => {
          const Icon = SERVICE_ICONS[i];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, rotateX: -75, y: 60 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1, delay: ENTER_DELAY + 0.35 + i * 0.09, ease: EASE }}
              style={{ transformOrigin: '50% 100%' }}
            >
              <TiltCard className="h-full rounded-2xl sm:rounded-3xl">
                <div className="relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.07),rgba(255,255,255,0.015))] p-3.5 sm:p-6 transition-colors duration-300 group-hover:border-white/25">
                  <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-linear-to-br ${SERVICE_GRADIENTS[i]} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-50`} />
                  <div className="relative flex items-start justify-between">
                    <span className={`grid h-9 w-9 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl bg-linear-to-br ${SERVICE_GRADIENTS[i]} shadow-lg`}>
                      <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6 text-white" />
                    </span>
                    <span className="text-[11px] sm:text-xs font-black tabular-nums text-white/25">0{i + 1}</span>
                  </div>
                  <h3 className="relative mt-3 sm:mt-5 text-[14px] sm:text-xl font-extrabold leading-tight tracking-tight text-white">{item.title}</h3>
                  <p className="relative mt-1.5 sm:mt-2 text-[12px] sm:text-sm leading-relaxed text-white/55">{item.desc}</p>
                  <div className="relative mt-4 hidden flex-wrap gap-1.5 sm:flex">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[11px] font-semibold text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
