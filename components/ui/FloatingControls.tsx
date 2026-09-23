"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Music, ChevronUp } from "lucide-react";
import { useScrollTop } from "@/hooks/useScrollTop";

export default function FloatingControls({
  isPlaying,
  toggleMusic,
}: {
  isPlaying: boolean;
  toggleMusic: () => void;
}) {
  const showScrollTop = useScrollTop(500);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 bg-[#151515] border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:bg-[#D4AF37] hover:text-[#0f0f0f] transition-all"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
      <button
        onClick={toggleMusic}
        className={`w-12 h-12 rounded-full flex items-center justify-center border border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all ${
          isPlaying
            ? "bg-[#D4AF37] text-[#0f0f0f] animate-[spin_4s_linear_infinite]"
            : "bg-[#151515] text-[#D4AF37]"
        }`}
      >
        <Music className="w-5 h-5" />
      </button>
    </div>
  );
}
