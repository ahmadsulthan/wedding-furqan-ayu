"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { playfair } from "@/lib/fonts";
import { GALLERY_IMAGES } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    );
  };

  // Efek Auto Slide setiap 8 detik
  useEffect(() => {
    // Hentikan auto slide jika lightbox sedang terbuka
    if (lightboxImg) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 8000);

    // Bersihkan interval setiap kali slide berubah (termasuk saat diklik manual)
    // agar timer 8 detik mengulang dari awal
    return () => clearInterval(slideInterval);
  }, [currentIndex, lightboxImg]);

  return (
    <SectionWrapper>
      <h2
        className={`${playfair.className} text-3xl md:text-4xl text-[#D4AF37] mb-4 text-center`}
      >
        Galeri Bahagia
      </h2>

      <div className="max-w-4xl mx-auto relative group">
        {/* SLIDER CONTAINER */}
        <div
          className="relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.05)] cursor-pointer"
          onClick={() => setLightboxImg(GALLERY_IMAGES[currentIndex])}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <Image
                src={GALLERY_IMAGES[currentIndex]}
                alt="Gallery Slider"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 1200px"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <Heart className="text-[#D4AF37] w-12 h-12 scale-50 group-hover:scale-100 transition-transform duration-500 delay-100" />
          </div>
        </div>

        {/* NAVIGATION ARROWS */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0f0f0f]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0f0f0f]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* THUMBNAILS */}
        <div className="flex justify-center gap-3 mt-6 overflow-x-auto py-2 custom-scrollbar">
          {GALLERY_IMAGES.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-16 h-16 rounded-md overflow-hidden shrink-0 border-2 transition-all duration-300 ${
                currentIndex === idx
                  ? "border-[#D4AF37] opacity-100 scale-110"
                  : "border-transparent opacity-40 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 text-white hover:text-[#D4AF37] z-50"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[90vh]"
            >
              <Image
                src={lightboxImg}
                alt="Gallery Preview"
                fill
                className="object-contain rounded-md"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
