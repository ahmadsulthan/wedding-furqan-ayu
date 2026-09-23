"use client";

import { motion } from "framer-motion";
import { oleo, playfair, poppins } from "@/lib/fonts";

export default function LoadingScreen() {
  return (
    <div
      className={`
        min-h-screen
        bg-[#0f0f0f]
        flex
        items-center
        justify-center
        relative
        overflow-hidden
        ${poppins.className}
      `}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#0f0f0f]" />

      {/* WEDDING FRAME */}
      <div className="absolute inset-4 md:inset-8 pointer-events-none">
        <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-[32px]" />

        <div className="absolute inset-4 border border-[#D4AF37]/15 rounded-[24px]" />

        {/* TOP ORNAMENT */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <div className="w-14 h-px bg-[#D4AF37]/30" />
          <span className="text-[#D4AF37] text-xs">✦</span>
          <div className="w-14 h-px bg-[#D4AF37]/30" />
        </div>

        {/* BOTTOM ORNAMENT */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <div className="w-14 h-px bg-[#D4AF37]/30" />
          <span className="text-[#D4AF37] text-xs">✦</span>
          <div className="w-14 h-px bg-[#D4AF37]/30" />
        </div>
      </div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        {/* LABEL */}
        <div className="mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-[#D4AF37]/40" />
          <span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.45em]">
            Wedding Invitation
          </span>
          <span className="w-8 h-px bg-[#D4AF37]/40" />
        </div>

        {/* MONOGRAM */}
        <div className="mb-4">
          <span
            className={`
              ${oleo.className}
              text-[72px]
              md:text-[96px]
              text-[#D4AF37]
              leading-none
            `}
          >
            F & A
          </span>
        </div>

        {/* NAMES */}
        <h2
          className={`
            ${playfair.className}
            text-white
            text-[24px]
            md:text-[30px]
            leading-tight
          `}
        >
          Furqan & Ayu
        </h2>

        {/* DIVIDER */}
        <div className="flex items-center justify-center gap-3 my-6">
          <span className="w-16 h-px bg-[#D4AF37]/30" />
          <span className="text-[#D4AF37] text-xs">✦</span>
          <span className="w-16 h-px bg-[#D4AF37]/30" />
        </div>

        {/* LOADING TEXT */}
        <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-[10px] md:text-xs">
          Loading Invitation...
        </p>

        {/* LOADING BAR */}
        <div className="relative w-64 md:w-72 h-[3px] bg-white/10 rounded-full overflow-hidden mt-6">
          <motion.div
            animate={{
              x: ["-100%", "350%"],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              inset-y-0
              left-0
              w-20
              bg-gradient-to-r
              from-transparent
              via-[#D4AF37]
              to-transparent
            "
          />
        </div>

        {/* FOOTER TEXT */}
        <span
          className={`
            ${poppins.className}
            mt-4
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white/40
          `}
        >
          Preparing Your Invitation
        </span>
      </motion.div>
    </div>
  );
}
