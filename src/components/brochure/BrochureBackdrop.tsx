import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { EASE, usePointer } from './primitives';

// Persistent animated scene behind every slide: glowing orbs that drift to a
// new composition on each slide, a moving perspective grid floor, floating
// particles and film grain.

interface Orb {
  x: string;
  y: string;
  size: string;
  o: number;
}

const ORB_LAYOUTS: Orb[][] = [
  [{ x: '52%', y: '-18%', size: '70vmax', o: 0.34 }, { x: '-22%', y: '38%', size: '60vmax', o: 0.22 }, { x: '70%', y: '62%', size: '45vmax', o: 0.18 }],
  [{ x: '-18%', y: '-20%', size: '62vmax', o: 0.28 }, { x: '58%', y: '30%', size: '66vmax', o: 0.24 }, { x: '20%', y: '72%', size: '40vmax', o: 0.14 }],
  [{ x: '30%', y: '-30%', size: '72vmax', o: 0.26 }, { x: '-25%', y: '55%', size: '55vmax', o: 0.2 }, { x: '75%', y: '50%', size: '50vmax', o: 0.2 }],
  [{ x: '-10%', y: '10%', size: '64vmax', o: 0.3 }, { x: '62%', y: '-22%', size: '58vmax', o: 0.24 }, { x: '45%', y: '70%', size: '48vmax', o: 0.16 }],
];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  size: 2 + ((i * 7) % 3),
  delay: `${(i * 0.9) % 7}s`,
  duration: `${9 + ((i * 5) % 8)}s`,
}));

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/%3E%3C/svg%3E\")";

export const BrochureBackdrop: React.FC<{ index: number; glow: [string, string] }> = ({ index, glow }) => {
  const { px, py } = usePointer();
  const shiftX = useTransform(px, [-1, 1], [-36, 36]);
  const shiftY = useTransform(py, [-1, 1], [-24, 24]);
  const layout = ORB_LAYOUTS[index % ORB_LAYOUTS.length];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden bg-[#05080F]">
      {/* Glow orbs */}
      <motion.div style={{ x: shiftX, y: shiftY }} className="absolute inset-0">
        {layout.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              background: 'radial-gradient(circle at center, currentColor 0%, transparent 62%)',
            }}
            initial={false}
            animate={{ left: orb.x, top: orb.y, color: glow[i % 2], opacity: orb.o }}
            transition={{ duration: 1.8, ease: EASE }}
          />
        ))}
      </motion.div>

      {/* Perspective grid floor */}
      <div className="absolute inset-x-[-40%] bottom-0 h-[70%] [perspective:420px]">
        <div
          className="bro-grid-floor absolute inset-0 origin-bottom"
          style={{
            transform: 'rotateX(70deg)',
            maskImage: 'linear-gradient(to top, black 0%, transparent 85%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 85%)',
          }}
        />
      </div>

      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="bro-particle absolute rounded-full bg-white/40"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay, animationDuration: p.duration }}
        />
      ))}

      {/* Grain + vignette */}
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: NOISE }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(2,4,9,0.75)_100%)]" />
    </div>
  );
};
