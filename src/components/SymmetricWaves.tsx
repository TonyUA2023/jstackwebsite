import React from 'react';
import { motion } from 'framer-motion';

export const SymmetricWaves: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 bg-[#030508]">
      {/* Dark Ambient Base Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030508] via-[#05070B] to-[#0A0D14]" />
      
      {/* Dark Subdued Radial Core Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-radial from-cyan-600/10 via-blue-900/10 to-transparent blur-[160px] rounded-full pointer-events-none" 
      />

      {/* Main Symmetrical Horizontal Waves SVG with Entrance Animation Only */}
      <svg
        className="w-full h-full min-h-[700px] absolute inset-0 text-cyan-400 object-cover opacity-75"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subdued Darker Stroke Gradients */}
          <linearGradient id="sym-cyan-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0096C7" stopOpacity="0.05" />
            <stop offset="35%" stopColor="#00D4FF" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.5" />
            <stop offset="65%" stopColor="#00D4FF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0096C7" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="sym-purple-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.05" />
            <stop offset="25%" stopColor="#0096C7" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4" />
            <stop offset="75%" stopColor="#0096C7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="sym-teal-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0D9488" stopOpacity="0.03" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0D9488" stopOpacity="0.03" />
          </linearGradient>

          {/* Dark Subdued Filled Layer Gradients */}
          <linearGradient id="wave-fill-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0096C7" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#030508" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="wave-fill-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#030508" stopOpacity="0" />
          </linearGradient>

          {/* Soft Subtle Glow Filter */}
          <filter id="glow-soft" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ---------------- FILLED SYMMETRIC WAVES (ENTRANCE ANIMATION ONLY) ---------------- */}
        <motion.path
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          d="M 0,900 L 0,380 C 240,280 480,440 720,380 C 960,440 1200,280 1440,380 L 1440,900 Z"
          fill="url(#wave-fill-1)"
        />

        <motion.path
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          d="M 0,900 L 0,510 C 300,420 450,600 720,510 C 990,600 1140,420 1440,510 L 1440,900 Z"
          fill="url(#wave-fill-2)"
        />

        {/* ---------------- VECTOR STROKE WAVES (ENTRANCE ANIMATION ONLY) ---------------- */}
        
        {/* Wave 1 - Top Crest */}
        <motion.path
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.45, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          d="M 0,220 C 240,140 480,300 720,220 C 960,300 1200,140 1440,220"
          stroke="url(#sym-purple-cyan)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          fill="none"
        />

        {/* Wave 2 - Main Hero Wave */}
        <motion.path
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          d="M 0,310 C 220,200 440,400 720,300 C 1000,400 1220,200 1440,310"
          stroke="url(#sym-cyan-glow)"
          strokeWidth="1.8"
          filter="url(#glow-soft)"
          fill="none"
        />

        {/* Wave 3 - Secondary Symmetrical Ripple */}
        <motion.path
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.55, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
          d="M 0,350 C 260,260 480,440 720,350 C 960,440 1180,260 1440,350"
          stroke="url(#sym-teal-glow)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Wave 4 - Middle Horizon Master Wave */}
        <motion.path
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          d="M 0,440 C 280,340 500,520 720,430 C 940,520 1160,340 1440,440"
          stroke="url(#sym-cyan-glow)"
          strokeWidth="2"
          filter="url(#glow-soft)"
          fill="none"
        />

        {/* Multi-Line Symmetric Contour Ribbon */}
        {[0, 12, 24, 36, 48].map((offset, i) => (
          <motion.path
            key={`contour-${i}`}
            initial={{ opacity: 0, y: 15 + i * 5 }}
            animate={{ opacity: 0.35 - i * 0.06, y: 0 }}
            transition={{ duration: 1.4 + i * 0.1, delay: 0.4 + i * 0.05, ease: "easeOut" }}
            d={`M 0,${470 + offset} C 290,${370 + offset} 510,${540 + offset} 720,${460 + offset} C 930,${540 + offset} 1150,${370 + offset} 1440,${470 + offset}`}
            stroke="url(#sym-purple-cyan)"
            strokeWidth={1 - i * 0.15}
            fill="none"
          />
        ))}

        {/* Wave 5 - Deep Flow Symmetrical Wave */}
        <motion.path
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          d="M 0,580 C 250,480 480,660 720,570 C 960,660 1190,480 1440,580"
          stroke="url(#sym-teal-glow)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Wave 6 - Lower Base Symmetrical Arc */}
        <motion.path
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 1.6, delay: 0.55, ease: "easeOut" }}
          d="M 0,680 C 320,580 520,760 720,670 C 920,760 1120,580 1440,680"
          stroke="url(#sym-cyan-glow)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          fill="none"
        />

        {/* ---------------- SYMMETRIC GLOW NODES ---------------- */}
        {[
          { cx: 720, cy: 300, r: 3 },
          { cx: 440, cy: 400, r: 2.5 },
          { cx: 1000, cy: 400, r: 2.5 },
          { cx: 720, cy: 430, r: 3.5 },
          { cx: 500, cy: 520, r: 2.5 },
          { cx: 940, cy: 520, r: 2.5 },
          { cx: 720, cy: 570, r: 3 },
        ].map((pt, idx) => (
          <motion.g 
            key={`node-${idx}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.75, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 + idx * 0.04, ease: "backOut" }}
          >
            <circle
              cx={pt.cx}
              cy={pt.cy}
              r={pt.r * 2}
              fill="#00D4FF"
              fillOpacity="0.18"
              filter="url(#glow-soft)"
            />
            <circle
              cx={pt.cx}
              cy={pt.cy}
              r={pt.r}
              fill="#E0F2FE"
            />
          </motion.g>
        ))}

        {/* Center Vertical Symmetry Line */}
        <motion.line
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 0.12, scaleY: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          x1="720"
          y1="100"
          x2="720"
          y2="800"
          stroke="url(#sym-cyan-glow)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
      </svg>

      {/* Dark Overlay Tint for Maximum Contrast with Foreground Text */}
      <div className="absolute inset-0 bg-[#030508]/45 pointer-events-none" />

      {/* Bottom Fade Transition into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/80 to-transparent pointer-events-none" />
    </div>
  );
};
