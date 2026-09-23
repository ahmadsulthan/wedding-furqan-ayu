"use client";

import { motion } from "framer-motion";
import { oleo, playfair } from "@/lib/fonts";
import { FaInstagram } from "react-icons/fa";
import SectionWrapper from "@/components/ui/SectionWrapper";

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="w-20 md:w-32 h-px bg-[#D4AF37]/40" />
      <span className="text-[#D4AF37] text-xl">✦</span>
      <div className="w-20 md:w-32 h-px bg-[#D4AF37]/40" />
    </div>
  );
}

function CoupleCard({
  role,
  name,
  parents,
  instagram,
}: {
  role: string;
  name: string;
  parents: string;
  instagram: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        relative
        overflow-hidden
        rounded-[38px]
        border border-[#D4AF37]/10
        bg-gradient-to-b
        from-white/[0.05]
        to-white/[0.02]
        backdrop-blur-xl
        px-8
        py-12
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent" />

      {/* Decorative Circle */}
      <div className="absolute inset-0 flex justify-center top-10 opacity-[0.05]">
        <div className="relative">
          <div className="w-[260px] h-[260px] rounded-full border border-[#D4AF37]" />
          <div className="absolute inset-4 rounded-full border border-[#D4AF37]" />
        </div>
      </div>

      <div className="relative z-10 text-center">
        <p className="uppercase tracking-[0.35em] text-[#D4AF37]/80 text-xs mb-4">
          {role}
        </p>

        <h3
          className={`
            ${oleo.className}
            text-white
            text-[48px]
            md:text-[64px]
            leading-tight
            mb-5
            drop-shadow-[0_0_20px_rgba(255,255,255,0.12)]
          `}
        >
          {name}
        </h3>

        <p className="text-gray-400 text-base md:text-lg mb-3">
          {role === "Mempelai Pria" ? "Putra dari" : "Putri dari"}
        </p>

        <p className="text-[#D4AF37] text-base md:text-lg font-medium leading-relaxed">
          {parents}
        </p>
        <motion.a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="
    inline-flex
    items-center
    gap-2
    mt-8
    px-6
    py-3
    rounded-full
    border
    border-[#D4AF37]/30
    text-[#D4AF37]
    hover:bg-[#D4AF37]/10
    transition-all
  "
        >
          <FaInstagram size={20} />
          <span>Instagram</span>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function ProfileSection() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-[#080808] py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2a2110_0%,#121212_45%,#080808_100%)]" />

      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.025]
          [background-image:linear-gradient(#D4AF37_1px,transparent_1px),linear-gradient(90deg,#D4AF37_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          w-[700px]
          h-[700px]
          -translate-x-1/2
          -translate-y-1/2
          bg-[#D4AF37]/10
          blur-[80px]
        "
      />

      {/* Flower Top Left */}
      <motion.img
        src="/gallery/border-cover.png"
        alt=""
        animate={{
          y: [0, -12, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
    absolute
    -top-8
    -left-8
    md:-left-0
    w-[180px]
    md:w-[260px]
    opacity-80
    pointer-events-none
    z-0
  "
      />

      {/* Ornament Top Right Image */}
      <motion.div
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
    absolute
top-20
right-8
md:right-14
    w-24
    h-24
    rotate-45
    border
    border-[#D4AF37]/15
    pointer-events-none
  "
      >
        <div className="absolute inset-3 border border-[#D4AF37]/10" />
      </motion.div>

      {/* Flower Bottom Right */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
    absolute
    top-20
    right-8
    md:right-14
    w-28
    h-28
    rounded-full
    border
    border-[#D4AF37]/15
    pointer-events-none
  "
      >
        <div className="absolute inset-3 rounded-full border border-[#D4AF37]/10" />
        <div className="absolute inset-6 rounded-full border border-[#D4AF37]/10" />
      </motion.div>

      {/* Ornament Bottom Left Image */}
      <motion.div
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
    absolute
bottom-24
left-8
md:left-14
    w-24
    h-24
    rotate-45
    border
    border-[#D4AF37]/15
    pointer-events-none
  "
      >
        <div className="absolute inset-3 border border-[#D4AF37]/10" />
      </motion.div>

      {/* Title */}
      <div className="relative z-10 text-center pt-16 md:pt-20">
        <motion.div
          animate={{
            opacity: [0.08, 0.18, 0.08],
            scale: [1, 1.12, 1],
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
    w-[320px]
    h-[320px]
    rounded-full
    bg-[#D4AF37]/15
    blur-[80px]
    pointer-events-none
  "
        />

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto px-6 mt-20 md:mt-16"
        >
          <h3
            className={`
      ${playfair.className}
      text-[#D4AF37]
      text-2xl
      md:text-3xl
      leading-relaxed
      text-center
      mb-6
    `}
          >
            Assalamu’alaikum
            <br />
            Warahmatullahi Wabarakatuh
          </h3>

          <p
            className="
      text-gray-300
      text-[15px]
      md:text-lg
      leading-8
      md:leading-9
      text-center
      max-w-md
      mx-auto
    "
          >
            Maha Suci Allah yang telah menciptakan makhluk-Nya
            berpasang-pasangan. Ya Allah, semoga ridho-Mu tercurah dan
            keberkahan-Mu senantiasa mengiringi perjalanan pernikahan kami.
          </p>
        </motion.div>
      </div>

      {/* Couple Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 items-center">
          <CoupleCard
            role="Mempelai Pria"
            name="T.M Furqan Anshari"
            parents="Bpk Alm. T. Putra Efenbach & Ibu Saniah"
            instagram="https://www.instagram.com/mazefur/"
          />

          {/* Desktop */}
          <div className="hidden md:flex justify-center items-center">
            <div
              className={`
        ${oleo.className}
        text-[#D4AF37]
        text-[100px]
        lg:text-[130px]
        leading-none
      `}
            >
              &
            </div>
          </div>

          {/* Mobile */}
          <div className="flex justify-center md:hidden">
            <div
              className={`
        ${oleo.className}
        text-[#D4AF37]
        text-[70px]
        leading-none
        drop-shadow-[0_0_20px_rgba(212,175,55,0.25)]
      `}
            >
              &
            </div>
          </div>

          <CoupleCard
            role="Mempelai Wanita"
            name="Ayu Agustina"
            parents="Bpk Zainuddin & Ibu Zubaidah"
            instagram="https://www.instagram.com/vanilla_latteeee666/"
          />
        </div>

        {/* Bottom Divider */}
        <div className="mt-28"></div>
      </div>
    </SectionWrapper>
  );
}
