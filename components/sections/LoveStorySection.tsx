"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { playfair } from "@/lib/fonts";
import { STORY_DATA } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function LoveStorySection() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-[#0f0f0f]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2a2110_0%,#0f0f0f_60%)]" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <h2
          className={`${playfair.className} text-3xl md:text-4xl text-[#D4AF37] mb-4`}
        >
          Kisah Cinta
        </h2>

        <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto" />
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#D4AF37]/30 md:-translate-x-1/2" />

        {/* Moving Light */}
        <div
          className="
    absolute
    left-[14px]
    md:left-1/2
    md:-translate-x-1/2
    top-0
    w-[3px]
    h-full
    bg-gradient-to-b
    from-transparent
    via-[#D4AF37]/50
    to-transparent
  "
        />

        {STORY_DATA.map((story, idx) => (
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              x: idx % 2 === 0 ? -40 : 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: idx * 0.2,
            }}
            className={`
              relative
              pl-12
              md:pl-0
              mb-12
              w-full
              md:w-1/2
              ${
                idx % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:pl-12 md:ml-auto md:text-left"
              }
            `}
          >
            {/* Timeline Dot */}
            <div
              className={`
                absolute
                top-4
                -left-[2px]
                md:left-auto
                w-8
                h-8
                rounded-full
                bg-[#151515]
                border-2
                border-[#D4AF37]
                flex
                items-center
                justify-center
                z-20
                ${idx % 2 === 0 ? "md:-right-4" : "md:-left-4"}
              `}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Heart className="w-3 h-3 text-[#D4AF37]" fill="#D4AF37" />
              </motion.div>
            </div>

            {/* Story Card */}
            <div
              className="
                relative
                overflow-hidden
                bg-[#151515]
                border
                border-[#D4AF37]/20
                p-6
                rounded-2xl
                transition-all
                duration-500
                hover:border-[#D4AF37]/60
                hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]
              "
            >
              {/* Glow Effect */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-gradient-to-br
                  from-[#D4AF37]/10
                  via-transparent
                  to-transparent
                "
              />

              {/* Watermark Heart */}
              <div className="absolute right-4 top-4 opacity-[0.04]">
                <Heart size={120} className="text-[#D4AF37]" fill="#D4AF37" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase block mb-3">
                  {story.date}
                </span>

                <h4 className={`${playfair.className} text-xl text-white mb-4`}>
                  {story.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {story.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
