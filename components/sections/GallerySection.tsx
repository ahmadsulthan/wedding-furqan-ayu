"use client";

import { useState, useEffect, useCallback } from "react";
import { Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { playfair } from "@/lib/fonts";
import { GALLERY_IMAGES } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    );
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) return;

    const interval = setInterval(nextSlide, 8000);

    return () => clearInterval(interval);
  }, [nextSlide, selectedIndex]);

  return (
    <SectionWrapper>
      <h2
        className={`${playfair.className} text-3xl md:text-4xl text-[#D4AF37] mb-4 text-center`}
      >
        Galeri Bahagia
      </h2>

      <div className="max-w-4xl mx-auto relative group">
        {/* SLIDER */}
        <div
          className="relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.05)] cursor-pointer"
          onClick={() => setSelectedIndex(currentIndex)}
        >
          <Image
            key={currentIndex}
            src={GALLERY_IMAGES[currentIndex]}
            alt="Gallery Slider"
            fill
            priority={currentIndex === 0}
            sizes="(max-width:768px) 100vw, 1200px"
            className="object-cover transition-opacity duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <Heart className="text-[#D4AF37] w-12 h-12 scale-50 group-hover:scale-100 transition-transform duration-500" />
          </div>
        </div>

        {/* PREV */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0f0f0f]"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* NEXT */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0f0f0f]"
          aria-label="Next image"
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
              aria-label={`Image ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                loading="lazy"
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-[#D4AF37] z-50"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[90vh]"
          >
            <Image
              src={GALLERY_IMAGES[selectedIndex]}
              alt="Gallery Preview"
              fill
              sizes="100vw"
              className="object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
