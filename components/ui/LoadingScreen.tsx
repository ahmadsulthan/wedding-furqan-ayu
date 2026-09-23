"use client";

import { motion } from "framer-motion";
import { oleo, playfair, poppins } from "@/lib/fonts";

const PARTICLES = [
  { left: "10%", top: "22%", size: 5, delay: 0, duration: 3.8 },
  { left: "18%", top: "68%", size: 4, delay: 0.8, duration: 4.6 },
  { left: "27%", top: "15%", size: 3, delay: 1.4, duration: 3.2 },
  { left: "34%", top: "80%", size: 5, delay: 0.3, duration: 5.2 },
  { left: "72%", top: "18%", size: 4, delay: 1.1, duration: 4.2 },
  { left: "82%", top: "36%", size: 3, delay: 1.8, duration: 3.6 },
];

const SPARKLES = [
  { left: "17%", top: "30%", scale: 0.7, delay: 0.2 },
  { left: "84%", top: "28%", scale: 0.9, delay: 1.2 },
  { left: "11%", top: "74%", scale: 0.65, delay: 1.8 },
  { left: "90%", top: "78%", scale: 0.75, delay: 0.7 },
];

export default function LoadingScreen() {
  return (
    <div
      className={`
        min-h-screen
        bg-[#080808]
        relative
        overflow-hidden
        flex
        items-center
        justify-center
        ${poppins.className}
      `}
    >
      {/* BASE LUXURY GOLD BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#33270f_0%,#18150d_36%,#0d0c09_67%,#080808_100%)]" />

      {/* SOFT VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.48)_100%)]" />

      {/* CENTER GOLD AURA */}
      <motion.div
        animate={{
          scale: [0.94, 1.08, 0.94],
          opacity: [0.12, 0.26, 0.12],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
absolute
left-1/2
top-1/2
-translate-x-1/2
-translate-y-1/2
w-[340px]
h-[340px]
md:w-[520px]
md:h-[520px]
rounded-full
bg-[#D4AF37]
blur-[50px]
"
      />

      {/* SUBTLE TOP / BOTTOM LIGHT */}
      <motion.div
        animate={{ x: ["-20%", "20%", "-20%"], opacity: [0.05, 0.11, 0.05] }}
        transition={{ duration: 10, repeat: 2, ease: "easeInOut" }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[240px] rounded-full bg-[#D4AF37] blur-[50px]"
      />
      <motion.div
        animate={{ x: ["15%", "-15%", "15%"], opacity: [0.035, 0.08, 0.035] }}
        transition={{ duration: 12, repeat: 2, ease: "easeInOut" }}
        className="absolute -bottom-44 left-1/2 -translate-x-1/2 w-[760px] h-[260px] rounded-full bg-[#D4AF37] blur-[50px]"
      />

      {/* VERY SUBTLE GRID */}
      <div className="absolute inset-0 opacity-[0.022] [background-image:linear-gradient(#D4AF37_1px,transparent_1px),linear-gradient(90deg,#D4AF37_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* ROTATING ORNAMENT RINGS */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 42, repeat: 1, ease: "linear" }}
          className="relative w-[280px] h-[280px] md:w-[430px] md:h-[430px] rounded-full border border-[#D4AF37]/20"
        >
          <div className="absolute inset-4 rounded-full border border-[#D4AF37]/10" />
          <div className="absolute inset-10 rounded-full border border-[#D4AF37]/[0.07]" />

          {/* Orbit dots */}
          <span className="absolute left-1/2 -top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.75)]" />
          <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2 h-2 rounded-full bg-[#D4AF37]/70" />
          <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#D4AF37]/80" />
          <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D4AF37]/60" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: 1, ease: "linear" }}
          className="absolute inset-[30px] md:inset-[46px] rounded-full border border-[#D4AF37]/10"
        >
          <span className="absolute left-1/2 -top-1 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/80" />
        </motion.div>
      </div>

      {/* DIAMOND CORNER ACCENTS */}
      <div className="absolute inset-8 md:inset-12 pointer-events-none opacity-60">
        <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#D4AF37]/20" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-[#D4AF37]/20" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-[#D4AF37]/20" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[#D4AF37]/20" />
      </div>

      {/* SHIMMERING LIGHT SWEEP */}
      <motion.div
        animate={{ y: ["115%", "-115%"] }}
        transition={{
          duration: 6.5,
          repeat: 1,
          ease: "easeInOut",
          repeatDelay: 2.2,
        }}
        className="absolute left-1/2 -translate-x-1/2 w-[150%] h-24 rotate-[18deg] bg-gradient-to-r from-transparent via-[#D4AF37]/[0.06] to-transparent blur-2xl pointer-events-none"
      />

      {/* GOLD PARTICLES */}
      {PARTICLES.map((particle, i) => (
        <motion.span
          key={`particle-${i}`}
          animate={{
            y: [0, -18, 0],
            opacity: [0.12, 0.75, 0.12],
            scale: [0.85, 1.25, 0.85],
          }}
          transition={{
            duration: particle.duration,
            repeat: 2,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,0.35)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}

      {/* FOUR-POINT SPARKLES */}
      {SPARKLES.map((sparkle, i) => (
        <motion.div
          key={`sparkle-${i}`}
          animate={{
            scale: [0.65, 1.15, 0.65],
            opacity: [0.15, 0.9, 0.15],
            rotate: [0, 45, 90],
          }}
          transition={{
            duration: 3.6 + i * 0.5,
            repeat: 2,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
          className="absolute w-4 h-4"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            transform: `scale(${sparkle.scale})`,
          }}
        >
          <span className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-[#D4AF37]/80" />
          <span className="absolute top-1/2 left-0 -translate-y-1/2 h-px w-full bg-[#D4AF37]/80" />
          <span className="absolute inset-[6px] rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
        </motion.div>
      ))}

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center flex flex-col items-center px-6">
        {/* MINI LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-[#D4AF37]/45" />
          <span className="text-[#D4AF37]/80 text-[9px] uppercase tracking-[0.45em]">
            Wedding Invitation
          </span>
          <span className="w-8 h-px bg-[#D4AF37]/45" />
        </motion.div>

        {/* MONOGRAM */}
        <motion.div
          animate={{
            scale: [1, 1.035, 1],
            opacity: [0.92, 1, 0.92],
          }}
          transition={{ duration: 3.8, repeat: 2, ease: "easeInOut" }}
          className="relative mb-5"
        >
          <div className="absolute inset-0 scale-75 rounded-full bg-[#D4AF37]/10 blur-3xl" />
          <span
            className={`
              relative
              ${oleo.className}
              text-[76px]
              md:text-[100px]
              text-[#D4AF37]
              leading-none
              drop-shadow-[0_0_24px_rgba(212,175,55,0.3)]
            `}
          >
            F &amp; A
          </span>
        </motion.div>

        {/* NAMES */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25 }}
          className={`${playfair.className} text-white text-[24px] md:text-[30px] leading-tight tracking-[0.02em]`}
        >
          Furqan &amp; Ayu
        </motion.h2>

        {/* ORNAMENT */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.45 }}
          className="flex items-center justify-center gap-3 my-6"
        >
          <span className="w-14 md:w-20 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/45" />
          <span className="text-[#D4AF37] text-xs">✦</span>
          <span className="w-14 md:w-20 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/45" />
        </motion.div>

        {/* LOADING LABEL */}
        <motion.p
          animate={{ opacity: [0.35, 0.95, 0.35] }}
          transition={{ duration: 2.3, repeat: 2, ease: "easeInOut" }}
          className="text-[#D4AF37] tracking-[0.38em] uppercase text-[10px] md:text-xs"
        >
          Loading Invitation...
        </motion.p>

        {/* PREMIUM LOADING BAR */}
        <div className="relative w-64 md:w-72 h-1 bg-white/[0.07] rounded-full mx-auto mt-7 overflow-hidden border border-[#D4AF37]/10">
          <motion.div
            animate={{ x: ["-120%", "250%"] }}
            transition={{
              duration: 1.9,
              repeat: 2,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent blur-[1px]"
          />
          <motion.div
            animate={{ width: ["18%", "72%", "34%", "62%"] }}
            transition={{ duration: 3.8, repeat: 2, ease: "easeInOut" }}
            className="h-full rounded-full bg-[#D4AF37]/75"
          />
        </div>

        <motion.span
          animate={{ opacity: [0.25, 0.7, 0.25] }}
          transition={{ duration: 2.8, repeat: 2, ease: "easeInOut" }}
          className={`${poppins.className} mt-3 text-[8px] uppercase tracking-[0.35em] text-white/35`}
        >
          Preparing your special moment
        </motion.span>
      </div>
    </div>
  );
}
