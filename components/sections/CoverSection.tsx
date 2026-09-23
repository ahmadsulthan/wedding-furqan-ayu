"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { greatVibes, playfair } from "@/lib/fonts";

export default function CoverSection({ onOpen }: { onOpen: () => void }) {
  const searchParams = useSearchParams();

  const guestName = decodeURIComponent(searchParams.get("to") || "") || "";

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100vh",
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,#5a4315_0%,#231c11_25%,#111111_60%,#090909_100%)]
        "
      />

      {/* TOP SPOTLIGHT */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: 2,
        }}
        className="
          absolute
          -top-32
          left-1/2
          -translate-x-1/2
          w-[400px]
          h-[300px]
          rounded-full
          bg-[#D4AF37]
          blur-[80px]
        "
      />

      {/* BOTTOM GLOW */}
      <motion.div
        animate={{
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 5,
          repeat: 2,
        }}
        className="
          absolute
          bottom-[-250px]
          left-1/2
          -translate-x-1/2
          w-[650px]
          h-[650px]
          rounded-full
          bg-[#D4AF37]
          blur-[80px]
        "
      />

      {/* GRID EFFECT */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          [background-image:linear-gradient(#D4AF37_1px,transparent_1px),linear-gradient(90deg,#D4AF37_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* GOLD CURVE TOP RIGHT */}
      <svg
        className="absolute top-0 right-0 opacity-70"
        width="250"
        height="250"
      >
        <path
          d="M250 0 Q150 90 250 180"
          stroke="#D4AF37"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* GOLD CURVE BOTTOM LEFT */}
      <svg
        className="absolute bottom-0 left-0 opacity-70 rotate-180"
        width="250"
        height="250"
      >
        <path
          d="M250 0 Q150 90 250 180"
          stroke="#D4AF37"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* FLOATING PARTICLES */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: 5 + i,
            repeat: 2,
          }}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            width: 4,
            height: 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* FLOWER TOP LEFT */}
      <motion.img
        src="/gallery/border-cover.webp"
        alt="Flower"
        initial={{
          scale: 0,
          opacity: 0,
          rotate: -15,
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 5,
          repeat: 2,
        }}
        className="
          absolute
          -top-[80px]
          -left-[90px]
          w-[230px]
          md:w-[320px]
          pointer-events-none
          drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]
        "
      />

      {/* FLOWER BOTTOM RIGHT */}
      <motion.img
        src="/gallery/down-cover.webp"
        alt="Flower"
        initial={{
          scale: 0,
          opacity: 0,
          rotate: 15,
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, -2, 2, 0],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 5,
          repeat: 2,
        }}
        className="
          absolute
          -bottom-10
          -right-10
          w-[280px]
          md:w-[380px]
          pointer-events-none
          drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]
        "
      />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.4,
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
              drop-shadow-[0_0_20px_rgba(212,175,55,0.45)]
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
              drop-shadow-[0_0_20px_rgba(212,175,55,0.45)]
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
            <div className="w-16 h-[1px] bg-[#D4AF37]" />
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <div className="w-16 h-[1px] bg-[#D4AF37]" />
          </div>

          {/* GUEST */}
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
              delay: 1,
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
              group
              relative
              px-10
              py-4
              rounded-full
              bg-gradient-to-r
              from-[#D4AF37]
              to-[#E9C95A]
              text-black
              font-semibold
              text-lg
              overflow-hidden
              shadow-[0_0_35px_rgba(212,175,55,0.45)]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

            <span className="relative flex items-center gap-3">
              <BookOpen className="w-5 h-5" />
              Buka Undangan
            </span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
