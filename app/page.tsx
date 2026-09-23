"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { poppins } from "@/lib/fonts";

// UI Components
import LoadingScreen from "@/components/ui/LoadingScreen";
import FloatingControls from "@/components/ui/FloatingControls";

// Sections Components
import CoverSection from "@/components/sections/CoverSection";
import HeroSection from "@/components/sections/HeroSection";
import GreetingSection from "@/components/sections/GreetingSection";
import ProfileSection from "@/components/sections/ProfileSection";
import LoveStorySection from "@/components/sections/LoveStorySection";
import GallerySection from "@/components/sections/GallerySection";
import EventSection from "@/components/sections/EventSection";
import GiftSection from "@/components/sections/GiftSection";
import RsvpSection from "@/components/sections/RsvpSection";
import ClosingSection from "@/components/sections/ClosingSection";

export default function WeddingInvitation() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Simulasi loading data/assets
    const timer = setTimeout(() => setIsLoading(false), 2000);
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className={`min-h-screen bg-[#0f0f0f] ${poppins.className}`}>
      {/* Background Music */}
      <audio ref={audioRef} loop src="/music/wedding-song.mp3" />

      {/* Opening Cover */}
      <AnimatePresence>
        {!isOpened && <CoverSection onOpen={openInvitation} />}
      </AnimatePresence>

      {/* Main Content (Tampil setelah cover dibuka) */}
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
