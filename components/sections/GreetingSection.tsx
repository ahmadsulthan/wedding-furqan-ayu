"use client";

import { motion } from "framer-motion";
import { playfair } from "@/lib/fonts";
import SectionWrapper from "@/components/ui/SectionWrapper";

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="w-16 md:w-28 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#D4AF37]/60" />
      <span className="text-[#D4AF37] text-xl">✦</span>
      <div className="w-16 md:w-28 h-px bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#D4AF37]/60" />
    </div>
  );
}

export default function GreetingSection() {
  return (
    <SectionWrapper className="relative overflow-hidden py-24 bg-[#0c0c0c]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2f2410_0%,#131313_45%,#0c0c0c_100%)]" />

      {/* GRID */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          [background-image:linear-gradient(#D4AF37_1px,transparent_1px),linear-gradient(90deg,#D4AF37_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* GOLD GLOW */}
      <div
        className="
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[550px]
    h-[550px]
    rounded-full
    bg-[#D4AF37]/10
    blur-[80px]
  "
      />

      {/* FLOWER TOP LEFT */}
      <motion.img
        src="/gallery/border-cover.webp"
        alt="Flower"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 3,
          repeat: 2,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-10
          -left-10
          w-[140px]
          sm:w-[180px]
          md:w-[250px]
          opacity-80
          pointer-events-none
          select-none
        "
      />

      {/* FLOWER BOTTOM RIGHT */}
      <motion.img
        src="/gallery/down-cover.webp"
        alt="Flower"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -2, 0],
        }}
        transition={{
          duration: 8,
          repeat: 2,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-12
          -right-12
          w-[180px]
          sm:w-[220px]
          md:w-[320px]
          opacity-85
          pointer-events-none
          select-none
        "
      />

      {/* ORNAMENT TOP RIGHT */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: 2,
          ease: "linear",
        }}
        className="
          absolute
          top-20
          right-8
          w-24
          h-24
          rounded-full
          border
          border-[#D4AF37]/15
        "
      />

      {/* ORNAMENT BOTTOM LEFT */}
      <motion.div
        animate={{
          rotate: [45, 55, 45],
        }}
        transition={{
          duration: 8,
          repeat: 2,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-24
          left-10
          w-16
          h-16
          border
          border-[#D4AF37]/15
          rotate-45
        "
      />

      {/* FRAME */}
      <div className="absolute inset-3 border border-[#D4AF37]/15 rounded-[30px]" />
      <div className="absolute inset-6 border border-[#D4AF37]/10 rounded-[26px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <Divider />

        {/* AYAT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="
            relative
            mt-8
            overflow-hidden
            rounded-[34px]
            border
            border-[#D4AF37]/20
            bg-black/20
            backdrop-blur-xl
            px-8
            md:px-14
            py-10
            shadow-[0_0_60px_rgba(212,175,55,0.08)]
          "
        >
          {/* SHIMMER */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: 2,
              ease: "linear",
            }}
            className="
              absolute
              inset-y-0
              w-32
              bg-gradient-to-r
              from-transparent
              via-white/5
              to-transparent
              skew-x-12
            "
          />

          {/* INNER GLOW */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#D4AF37]/5
              via-transparent
              to-[#D4AF37]/5
            "
          />

          <p
            className={`
              ${playfair.className}
              relative
              text-center
              text-white
              text-lg
              md:text-2xl
              leading-10
              md:leading-[52px]
              italic
            `}
          >
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang.”
          </p>

          <div className="mt-10">
            <Divider />
          </div>

          <p
            className="
              mt-6
              text-center
              text-[#D4AF37]
              tracking-[0.35em]
              text-sm
              md:text-base
              uppercase
            "
          >
            Q.S Ar-Rum : 21
          </p>
        </motion.div>

        <div className="mt-10">
          <Divider />
        </div>
      </div>
    </SectionWrapper>
  );
}
