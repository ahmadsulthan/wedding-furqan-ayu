"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Send, CheckCircle2 } from "lucide-react";
import { playfair } from "@/lib/fonts";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { supabase } from "@/lib/supabase";

type Wish = {
  id: number;
  name: string;
  message: string;
  created_at: string;
};

export default function RsvpSection() {
  const [wishForm, setWishForm] = useState({
    name: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWishes = async () => {
    try {
      console.log("Mengambil data dari Supabase...");

      const { data, error } = await supabase
        .from("wishes")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (error) {
        throw error;
      }

      setWishes(data || []);
    } catch (error) {
      console.error("Gagal mengambil ucapan:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleWishSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from("wishes")
        .insert([
          {
            name: wishForm.name,
            message: wishForm.message,
          },
        ])
        .select();

      console.log("INSERT DATA:", data);
      console.log("INSERT ERROR:", error);

      if (error) {
        throw error;
      }

      await fetchWishes();

      setWishForm({
        name: "",
        message: "",
      });

      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 3500);
    } catch (error) {
      console.error("Gagal mengirim ucapan:", error);
      alert("Terjadi kesalahan saat mengirim ucapan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <SectionWrapper className="bg-[#0f0f0f]">
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAlert(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
                y: 20,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
                y: 20,
              }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#151515] border border-[#D4AF37]/50 rounded-3xl p-8 max-w-sm w-full text-center"
            >
              <div className="w-16 h-16 bg-[#0f0f0f] border border-[#D4AF37]/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <h3
                className={`${playfair.className} text-2xl text-[#D4AF37] mb-2`}
              >
                Terima Kasih
              </h3>

              <p className="text-gray-300 text-sm mb-8">
                Ucapan dan doa restu Anda berhasil terkirim.
              </p>

              <button
                onClick={() => setShowAlert(false)}
                className="w-full py-2.5 rounded-full border border-[#D4AF37] text-[#D4AF37]"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mb-16">
        <h2
          className={`${playfair.className} text-3xl md:text-4xl text-[#D4AF37] mb-4`}
        >
          Ucapan & Doa
        </h2>

        <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-[#151515] p-8 rounded-2xl border border-[#D4AF37]/30">
          <h3 className={`${playfair.className} text-2xl text-white mb-6`}>
            Kirim Ucapan
          </h3>

          <form onSubmit={handleWishSubmit} className="space-y-4">
            <input
              type="text"
              required
              value={wishForm.name}
              onChange={(e) =>
                setWishForm({
                  ...wishForm,
                  name: e.target.value,
                })
              }
              placeholder="Nama Lengkap"
              className="w-full bg-[#0f0f0f] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white"
            />

            <textarea
              required
              rows={4}
              value={wishForm.message}
              onChange={(e) =>
                setWishForm({
                  ...wishForm,
                  message: e.target.value,
                })
              }
              placeholder="Ucapan dan doa..."
              className="w-full bg-[#0f0f0f] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#D4AF37] text-black py-4 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                "Mengirim..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Kirim Ucapan
                </>
              )}
            </button>
          </form>
        </div>

        <div className="bg-[#151515] p-8 rounded-2xl border border-[#D4AF37]/30 flex flex-col h-[650px]">
          <h3
            className={`${playfair.className} text-2xl text-white mb-6 flex items-center gap-2`}
          >
            <Heart className="text-[#D4AF37] fill-[#D4AF37] w-5 h-5" />
            Doa Restu
          </h3>

          <div className="flex-1 overflow-y-auto space-y-4">
            {isLoading ? (
              <div className="text-center text-gray-500">Memuat ucapan...</div>
            ) : wishes.length === 0 ? (
              <div className="text-center text-gray-500">Belum ada ucapan.</div>
            ) : (
              wishes.map((wish) => (
                <motion.div
                  key={wish.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="bg-[#0f0f0f] p-5 rounded-xl border border-white/5"
                >
                  <div className="flex justify-between mb-2">
                    <h4 className="text-[#D4AF37] font-semibold text-sm">
                      {wish.name}
                    </h4>

                    <span className="text-xs text-gray-500">
                      {formatDate(wish.created_at)}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm whitespace-pre-wrap">
                    {wish.message}
                  </p>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
