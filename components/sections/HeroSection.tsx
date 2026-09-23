"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

  const calendarUrl = new URL("https://calendar.google.com/calendar/render");

  calendarUrl.searchParams.set("action", "TEMPLATE");

  calendarUrl.searchParams.set(
    "text",
    "Pernikahan T.M Furqan Anshari & Ayu Agustina",
  );

  calendarUrl.searchParams.set("dates", "20261004T030000Z/20261004T080000Z");

  calendarUrl.searchParams.set(
    "details",
    `
Assalamu'alaikum Warahmatullahi Wabarakatuh

Kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan kami.

Mempelai:
T.M Furqan Anshari & Ayu Agustina

Tanggal:
Minggu, 04 Oktober 2026

Terima kasih atas doa dan kehadirannya.
`,
  );

  calendarUrl.searchParams.set(
    "location",
    "CHILL HOUSE https://maps.app.goo.gl/BXdmbdHvaMEoZTMR7?g_st=iw",
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f0f0f] py-14 px-5 flex items-center justify-center">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#0f0f0f]" />

      {/* WEDDING FRAME */}
      <div className="absolute inset-4 md:inset-8 pointer-events-none z-[1]">
        {/* Border luar */}
        <div className="absolute inset-0 border border-[#D4AF37]/40 rounded-[40px]" />

        {/* Border dalam */}
        <div className="absolute inset-4 border border-[#D4AF37]/20 rounded-[32px]" />

        {/* Corner Top Left */}
        <div className="absolute top-0 left-0 w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full border-t border-l border-[#D4AF37]" />
        </div>

        {/* Corner Top Right */}
        <div className="absolute top-0 right-0 w-24 h-24">
          <div className="absolute top-0 right-0 w-full h-full border-t border-r border-[#D4AF37]" />
        </div>

        {/* Corner Bottom Left */}
        <div className="absolute bottom-0 left-0 w-24 h-24">
          <div className="absolute bottom-0 left-0 w-full h-full border-b border-l border-[#D4AF37]" />
        </div>

        {/* Corner Bottom Right */}
        <div className="absolute bottom-0 right-0 w-24 h-24">
          <div className="absolute bottom-0 right-0 w-full h-full border-b border-r border-[#D4AF37]" />
        </div>

        {/* Ornamen Tengah Atas */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-3">
            <div className="w-20 h-px bg-[#D4AF37]/40" />
            <span className="text-[#D4AF37] text-lg">✦</span>
            <div className="w-20 h-px bg-[#D4AF37]/40" />
          </div>
        </div>

        {/* Ornamen Tengah Bawah */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-3">
            <div className="w-20 h-px bg-[#D4AF37]/40" />
            <span className="text-[#D4AF37] text-lg">✦</span>
            <div className="w-20 h-px bg-[#D4AF37]/40" />
          </div>
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
            href={calendarUrl.toString()}
            target="_blank"
            rel="noopener noreferrer"
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
      hover:scale-105
      transition-all
      duration-300
      shadow-[0_0_20px_rgba(212,175,55,0.25)]
    "
          >
            <CalendarDays className="w-5 h-5" />
            Tambah ke Kalender
          </a>
        </div>
      </motion.div>
    </section>
  );
}
