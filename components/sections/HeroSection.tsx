"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { oleo } from "@/lib/fonts";
import { useCountdown } from "@/hooks/useCountdown";

const sparkles = [
  {
    top: "17%",
    left: "11%",
    size: 12,
    delay: 0.2,
    duration: 3.2,
    opacity: 0.38,
  },
  {
    top: "21%",
    left: "27%",
    size: 7,
    delay: 1.1,
    duration: 2.6,
    opacity: 0.28,
  },
  {
    top: "28%",
    left: "76%",
    size: 11,
    delay: 0.7,
    duration: 3.8,
    opacity: 0.32,
  },
  { top: "34%", left: "88%", size: 6, delay: 1.8, duration: 2.9, opacity: 0.3 },
  { top: "42%", left: "8%", size: 6, delay: 2.2, duration: 2.7, opacity: 0.22 },
];

export default function HeroSection() {
  const countdown = useCountdown("2026-10-04T10:00:00+07:00");

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f0f0f] py-14 px-5 flex items-center justify-center">
      {/* BACKGROUND — tetap mempertahankan Luxury Gold yang sekarang */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2a2110_0%,#151515_40%,#0f0f0f_75%)]" />

      {/* VIGNETTE HALUS — memberi depth tanpa mengubah tema background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.18)_72%,rgba(0,0,0,0.34)_100%)]" />

      {/* GOLD GLOW TOP */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 5,
          repeat: 2,
          ease: "easeInOut",
        }}
        className="absolute -top-56 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#D4AF37] blur-[100px]"
      />

      {/* GOLD GLOW BOTTOM */}
      <div
        className="
    absolute
    -bottom-56
    left-1/2
    -translate-x-1/2
    w-[700px]
    h-[700px]
    rounded-full
    bg-[#D4AF37]/10
    blur-[80px]
  "
      />

      {/* GOLD LIGHT SWEEP — sangat tipis */}
      <motion.div
        animate={{ x: ["-35%", "135%"], opacity: [0, 0.18, 0] }}
        transition={{
          duration: 5,
          repeat: 2,
          repeatDelay: 4,
          ease: "easeInOut",
        }}
        className="absolute top-[-25%] bottom-[-25%] -left-1/3 w-1/3 rotate-[18deg] bg-gradient-to-r from-transparent via-[#D4AF37]/12 to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#D4AF37_1px,transparent_1px),linear-gradient(90deg,#D4AF37_1px,transparent_1px)] [background-size:80px_80px]"
        aria-hidden="true"
      />

      {sparkles.map((item, index) => (
        <span
          key={index}
          className="
      absolute
      text-[#D4AF37]
      opacity-40
      drop-shadow-[0_0_10px_rgba(212,175,55,0.35)]
    "
          style={{
            top: item.top,
            left: item.left,
            fontSize: `${item.size}px`,
          }}
        >
          ✦
        </span>
      ))}

      {/* Bokeh kecil agar efek kelap-kelip terasa lebih lembut */}
      <motion.div
        animate={{
          opacity: [0.02, 0.08, 0.02],
          scale: [0.95, 1.08, 0.95],
        }}
        transition={{
          duration: 5,
          repeat: 2,
        }}
      />

      <motion.div
        animate={{
          opacity: [0.02, 0.07, 0.02],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 5,
          repeat: 2,
        }}
      />

      {/* FLOWER TOP LEFT GLOW */}
      <div
        className="absolute top-0 left-[-75px] md:top-0 md:left-[-65px] w-[190px] h-[190px] md:w-[290px] md:h-[290px] rounded-full bg-[#D4AF37]/7 blur-[80px] z-[1]"
        aria-hidden="true"
      />

      {/* FLOWER TOP LEFT — dibuat lebih terlihat dan diberi jarak dari tulisan */}
      <img
        src="/gallery/border-cover.webp"
        alt="Flower"
        className="
    absolute
    top-0
    left-[-72px]
    sm:left-[-78px]
    md:top-[-8px]
    md:left-[-66px]
    w-[205px]
    sm:w-[225px]
    md:w-[290px]
    opacity-100
    pointer-events-none
    z-[2]
    drop-shadow-[0_14px_32px_rgba(212,175,55,0.16)]
  "
      />

      {/* ORNAMENT TOP RIGHT */}
      <div
        className="
    absolute
    top-20
    right-16
    hidden
    md:block
    z-[2]
  "
      >
        <div className="w-28 h-28 rounded-full border border-[#D4AF37]/20">
          <div className="w-full h-full rounded-full border border-[#D4AF37]/10 scale-75" />
        </div>
      </div>

      {/* FLOWER BOTTOM RIGHT */}
      <img
        src="/gallery/down-cover.webp"
        alt="Flower"
        className="
    absolute
    -bottom-10
    -right-10
    w-[220px]
    md:w-[320px]
    opacity-90
    pointer-events-none
    z-[2]
  "
      />

      {/* ORNAMENT BOTTOM LEFT */}
      <div
        className="
    absolute
    bottom-20
    left-12
    hidden
    md:block
    z-[2]
  "
      >
        <div className="w-24 h-24 rotate-45 border border-[#D4AF37]/20">
          <div className="absolute inset-3 border border-[#D4AF37]/10" />
        </div>
      </div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center w-full max-w-4xl"
      >
        {/* TITLE */}
        <p className="uppercase tracking-[0.45em] text-[#D4AF37] text-[11px] mb-5">
          Pernikahan
        </p>

        {/* ORNAMEN TENGAH */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2,
            repeat: 2,
            ease: "easeInOut",
          }}
          className="flex justify-center mb-10"
        >
          <div className="relative">
            <div className="absolute inset-0 scale-125 rounded-full bg-[#D4AF37]/10 blur-[60px]" />

            <div className="w-44 h-44 rounded-full border border-[#D4AF37]/30" />
            <div className="absolute inset-4 rounded-full border border-[#D4AF37]/20" />
            <div className="absolute inset-8 rounded-full border border-[#D4AF37]/10" />

            {/* Halo tipis tambahan untuk kesan luxury */}
            <motion.div
              animate={{
                opacity: [0.15, 0.4, 0.15],
                scale: [0.96, 1.02, 0.96],
              }}
              transition={{ duration: 3, repeat: 2, ease: "easeInOut" }}
              className="absolute inset-[-8px] rounded-full border border-[#D4AF37]/10"
              aria-hidden="true"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`${oleo.className} text-[#D4AF37] text-6xl`}>
                F&A
              </span>
            </div>
          </div>
        </motion.div>

        <p className="text-[#D4AF37] uppercase tracking-[0.5em] text-xs mb-4">
          The Wedding Of
        </p>

        {/* GROOM */}
        <h2
          className={`
            ${oleo.className}
            text-[32px]
            sm:text-[42px]
            md:text-[56px]
            lg:text-[72px]
            text-white
            leading-none
          `}
        >
          T.M Furqan
        </h2>

        <h2
          className={`
            ${oleo.className}
            text-[32px]
            sm:text-[42px]
            md:text-[56px]
            lg:text-[72px]
            text-white
            leading-none
            -mt-1
          `}
        >
          Anshari
        </h2>

        {/* AMPERSAND */}
        <div
          className={`
            ${oleo.className}
            text-[34px]
            md:text-[44px]
            text-[#D4AF37]
            my-1
          `}
        >
          &
        </div>

        {/* BRIDE */}
        <h2
          className={`
            ${oleo.className}
            text-[32px]
            sm:text-[42px]
            md:text-[56px]
            lg:text-[72px]
            text-white
            leading-none
          `}
        >
          Ayu Agustina
        </h2>

        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="w-20 h-px bg-[#D4AF37]/40" />
          <span className="text-[#D4AF37]">✦</span>
          <div className="w-20 h-px bg-[#D4AF37]/40" />
        </div>

        {/* DATE */}
        <div className="flex justify-center mt-6">
          <div
            className="
              px-6
              py-2
              rounded-full
              border
              border-[#D4AF37]/30
              bg-[#151515]/50
              backdrop-blur-md
            "
          >
            <span className="text-[#D4AF37] tracking-[0.25em] uppercase text-xs">
              04 Oktober 2026
            </span>
          </div>
        </div>

        {/* COUNTDOWN */}
        <div className="mt-8 grid grid-cols-4 gap-3 max-w-[420px] mx-auto">
          {[
            {
              label: "Hari",
              value: countdown.days,
            },
            {
              label: "Jam",
              value: countdown.hours,
            },
            {
              label: "Menit",
              value: countdown.minutes,
            },
            {
              label: "Detik",
              value: countdown.seconds,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="flex flex-col items-center"
            >
              <div
                className="
                  w-20
                  h-20
                  md:w-24
                  md:h-24
                  rounded-2xl
                  border
                  border-[#D4AF37]/20
                  bg-gradient-to-b
                  from-[#1b1b1b]
                  to-[#101010]
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_25px_rgba(212,175,55,0.12)]
                "
              >
                <span
                  className={`
                    ${oleo.className}
                    text-[#D4AF37]
                    text-[28px]
                    md:text-[34px]
                  `}
                >
                  {String(item.value).padStart(2, "0")}
                </span>
              </div>

              <span
                className="
                  mt-2
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-gray-400
                "
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* BUTTON SIMPAN TANGGAL */}
        <div className="flex justify-center mt-8">
          <a
            href="/calendar/furqan-ayu.ics"
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              bg-[#D4AF37]
              text-[#0f0f0f]
              font-semibold
              shadow-[0_0_25px_rgba(212,175,55,0.25)]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <CalendarDays className="w-5 h-5" />
            Simpan Tanggal
          </a>
        </div>
      </motion.div>
    </section>
  );
}
