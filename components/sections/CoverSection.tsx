"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { greatVibes, playfair } from "@/lib/fonts";
import Image from "next/image";

export default function CoverSection({ onOpen }: { onOpen: () => void }) {
  const searchParams = useSearchParams();

  const guestName = decodeURIComponent(searchParams.get("to") || "") || "";

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-0 z-50 overflow-hidden transform-gpu"
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,#2b2110_0%,#151515_35%,#090909_100%)]
        "
      />

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* TOP LEFT ORNAMENT */}
      <Image
        src="/gallery/border-cover.svg"
        alt="Ornament"
        width={500}
        height={500}
        priority
        className="
          absolute
          -top-[80px]
          -left-[90px]
          w-[220px]
          md:w-[300px]
          h-auto
          pointer-events-none
          opacity-90
        "
      />

      {/* BOTTOM RIGHT ORNAMENT */}
      <Image
        src="/gallery/down-cover.svg"
        alt="Ornament"
        width={600}
        height={600}
        priority
        className="
          absolute
          -bottom-10
          -right-10
          w-[260px]
          md:w-[360px]
          h-auto
          pointer-events-none
          opacity-90
        "
      />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            text-center
            px-8
            max-w-md
          "
        >
          {/* TITLE */}
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-[#D4AF37]
              text-xs
              md:text-sm
              mb-8
            "
          >
            The Wedding Of
          </p>

          {/* GROOM */}
          <h1
            className={`
              ${greatVibes.className}
              text-[70px]
              md:text-[95px]
              text-[#E6C75A]
              leading-none
            `}
          >
            Furqan
          </h1>

          {/* AMPERSAND */}
          <div
            className={`
              ${greatVibes.className}
              text-[55px]
              text-[#E6C75A]
              -my-4
            `}
          >
            &
          </div>

          {/* BRIDE */}
          <h1
            className={`
              ${greatVibes.className}
              text-[70px]
              md:text-[95px]
              text-[#E6C75A]
              leading-none
            `}
          >
            Ayu
          </h1>

          {/* DATE */}
          <p
            className="
              mt-10
              text-white
              tracking-[0.25em]
              uppercase
              text-sm
              md:text-base
            "
          >
            04 Oktober 2026
          </p>

          {/* DIVIDER */}
          <div className="flex items-center justify-center gap-3 my-10">
            <div className="w-16 h-px bg-[#D4AF37]" />
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <div className="w-16 h-px bg-[#D4AF37]" />
          </div>

          {/* GUEST */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="mb-10"
          >
            <p className="text-gray-400 text-sm mb-2">Kepada Yth.</p>

            <p className="text-white text-xl">Bapak/Ibu/Saudara/i</p>

            {guestName && (
              <h3
                className={`
                  ${playfair.className}
                  text-[#D4AF37]
                  text-2xl
                  mt-4
                `}
              >
                {guestName}
              </h3>
            )}
          </motion.div>

          {/* BUTTON */}
          <button
            onClick={onOpen}
            className="
              px-10
              py-4
              rounded-full
              bg-[#D4AF37]
              text-black
              font-semibold
              text-lg
              shadow-lg
              hover:scale-105
              active:scale-95
              transition-transform
              duration-200
            "
          >
            <span className="flex items-center gap-3">
              <BookOpen className="w-5 h-5" />
              Buka Undangan
            </span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
