"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

import { poppins } from "@/lib/fonts";

// UI Components
import LoadingScreen from "@/components/ui/LoadingScreen";
import FloatingControls from "@/components/ui/FloatingControls";

// Above The Fold (langsung terlihat)
import CoverSection from "@/components/sections/CoverSection";
import HeroSection from "@/components/sections/HeroSection";
import GreetingSection from "@/components/sections/GreetingSection";
import ProfileSection from "@/components/sections/ProfileSection";

// Below The Fold (lazy loaded)
const LoveStorySection = dynamic(
  () => import("@/components/sections/LoveStorySection"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[300px] flex items-center justify-center text-[#D4AF37]">
        Memuat...
      </div>
    ),
  },
);

const GallerySection = dynamic(
  () => import("@/components/sections/GallerySection"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] flex items-center justify-center text-[#D4AF37]">
        Memuat Galeri...
      </div>
    ),
  },
);

const EventSection = dynamic(
  () => import("@/components/sections/EventSection"),
  {
    ssr: false,
  },
);

const GiftSection = dynamic(() => import("@/components/sections/GiftSection"), {
  ssr: false,
});

const RsvpSection = dynamic(() => import("@/components/sections/RsvpSection"), {
  ssr: false,
});

const ClosingSection = dynamic(
  () => import("@/components/sections/ClosingSection"),
  {
    ssr: false,
  },
);

export default function WeddingInvitation() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const openInvitation = () => {
    setIsOpened(true);

    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio autoplay dicegah browser:", err));
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className={`min-h-screen bg-[#0f0f0f] ${poppins.className}`}>
      {/* AUDIO */}
      <audio ref={audioRef} loop preload="none" src="/music/wedding-song.mp3" />

      {/* COVER */}
      <AnimatePresence>
        {!isOpened && <CoverSection onOpen={openInvitation} />}
      </AnimatePresence>

      {/* CONTENT */}
      {isOpened && (
        <div className="relative">
          <FloatingControls isPlaying={isPlaying} toggleMusic={toggleMusic} />

          <HeroSection />
          <GreetingSection />
          <ProfileSection />

          <LoveStorySection />
          <GallerySection />
          <EventSection />
          <GiftSection />
          <RsvpSection />
          <ClosingSection />
        </div>
      )}
    </main>
  );
}
