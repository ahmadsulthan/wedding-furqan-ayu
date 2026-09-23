"use client";

import { playfair } from "@/lib/fonts";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GoldOrnament from "@/components/ui/GoldOrnament";

export default function ClosingSection() {
  return (
    <SectionWrapper className="bg-[#0f0f0f] relative py-20 flex flex-col justify-center text-center border-t border-[#D4AF37]/20">
      <GoldOrnament position="tl" />
      <GoldOrnament position="tr" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-md mx-auto mt-8">
        <p className="text-[#D4AF37] text-xs md:text-sm uppercase tracking-[0.3em] mb-8 font-light">
          Organized & Presented By
        </p>

        {/* Container Logo dengan Link ke Instagram */}
        <a 
          href="https://www.instagram.com/unionstory_?stkn=MTBzdmprMmh0ZGgyMg=="
          target="_blank"
          rel="noopener noreferrer"
          className="relative group cursor-pointer mb-6 block"
        >
          <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#D4AF37]/50 p-1 relative z-10 bg-[#0f0f0f]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#151515]">
              <img
                src="gallery/union amour.png"
                alt="Union Amour Logo"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
              />
            </div>
          </div>
        </a>

        <h4 className={`${playfair.className} text-white text-2xl md:text-3xl tracking-widest mb-3`}>
          UNION AMOUR
        </h4>

        <div className="w-12 h-[1px] bg-[#D4AF37] mb-4"></div>

        <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.2em] mb-6">
          Premium Wedding Organizer
        </p>

        {/* Tombol Instagram Khusus dengan SVG Murni */}
        <a 
          href="https://www.instagram.com/unionstory_?stkn=MTBzdmprMmh0ZGgyMg=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] text-xs md:text-sm hover:bg-[#D4AF37] hover:text-[#0f0f0f] transition-all duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-4 h-4"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
          @unionstory_
        </a>

        {/* Tambahan Footer Copyright untuk mempermanis bagian akhir halaman */}
        <p className="text-gray-600 text-[10px] md:text-xs uppercase tracking-widest mt-20">
          © 2026 Furqan & Ayu. All Rights Reserved.
        </p>
      </div>
    </SectionWrapper>
  );
}