"use client";
import { useState } from "react";
import { Copy, CheckCircle2 } from "lucide-react";
import { playfair } from "@/lib/fonts";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function GiftSection() {
  const [showGift, setShowGift] = useState(false);
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  const copyToClipboard = (text: string, bank: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(bank);
    setTimeout(() => setCopiedBank(null), 3000);
  };

  return (
    <SectionWrapper className="relative bg-[#080808] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2a2110_0%,#121212_45%,#080808_100%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <h2
            className={`${playfair.className} text-4xl md:text-5xl text-[#D4AF37] mb-6`}
          >
            Wedding Gift
          </h2>

          <p className="text-gray-300 leading-8 max-w-xl mx-auto mb-10">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
            Apabila berkenan memberikan tanda kasih, dapat disampaikan melalui
            rekening berikut.
          </p>

          {/* Button Open */}
          {!showGift && (
            <button
              onClick={() => setShowGift(true)}
              className="
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              rounded-full
              bg-[#D4AF37]
              text-black
              font-medium
              hover:scale-105
              transition
            "
            >
              <Copy className="w-5 h-5" />
              Klik di Sini
            </button>
          )}
        </div>

        {/* Gift Content */}
        {showGift && (
          <div className="mt-12 space-y-6">
            {/* BRI */}
            <div
              className="
              bg-white/[0.04]
              border
              border-[#D4AF37]/20
              rounded-3xl
              p-6
              backdrop-blur-xl
            "
            >
              <div className="flex justify-between items-center mb-6">
                <img
                  src="/gallery/BRI Bank.webp"
                  alt="BRI"
                  className="h-12 object-contain"
                />

                <div
                  className="
                  w-12
                  h-9
                  rounded-lg
                  bg-gradient-to-br
                  from-[#D4AF37]
                  to-[#a27e19]
                "
                />
              </div>

              <p className="text-gray-400 text-sm">No Rekening</p>

              <h3 className="text-white text-2xl font-semibold mb-4">
                026101146313501
              </h3>

              <p className="text-gray-400 text-sm">Atas Nama</p>

              <p className="text-[#D4AF37] text-lg mb-6">
                T Muhammad Furqan An
              </p>

              <button
                onClick={() => copyToClipboard("026101146313501", "BRI")}
                className="
                flex
                items-center
                gap-2
                ml-auto
                px-5
                py-2
                rounded-full
                bg-[#D4AF37]
                text-black
                font-medium
              "
              >
                {copiedBank === "BRI" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Disalin
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Salin
                  </>
                )}
              </button>
            </div>

            {/* KROM */}
            <div
              className="
              bg-white/[0.04]
              border
              border-[#D4AF37]/20
              rounded-3xl
              p-6
              backdrop-blur-xl
            "
            >
              <div className="flex justify-between items-center mb-6">
                <img
                  src="/gallery/krom bank.webp"
                  alt="Krom"
                  className="h-12 object-contain"
                />

                <div
                  className="
                  w-12
                  h-9
                  rounded-lg
                  bg-gradient-to-br
                  from-[#D4AF37]
                  to-[#a27e19]
                "
                />
              </div>

              <p className="text-gray-400 text-sm">No Rekening</p>

              <h3 className="text-white text-2xl font-semibold mb-4">
                770091707222
              </h3>

              <p className="text-gray-400 text-sm">Atas Nama</p>

              <p className="text-[#D4AF37] text-lg mb-6">Ayu Agustina</p>

              <button
                onClick={() => copyToClipboard("770091707222", "KROM")}
                className="
                flex
                items-center
                gap-2
                ml-auto
                px-5
                py-2
                rounded-full
                bg-[#D4AF37]
                text-black
                font-medium
              "
              >
                {copiedBank === "KROM" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Disalin
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Salin
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
