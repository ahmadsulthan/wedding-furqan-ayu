"use client";
import { Calendar, Clock, MapPin } from "lucide-react";
import { playfair } from "@/lib/fonts";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GoldOrnament from "@/components/ui/GoldOrnament";

export default function EventSection() {
  return (
    <SectionWrapper className="bg-[#0f0f0f]">
      <GoldOrnament position="bl" />
      <GoldOrnament position="br" />
      <div className="text-center mb-16">
        <h2
          className={`${playfair.className} text-3xl md:text-4xl text-[#D4AF37] mb-4`}
        >
          Detail Acara
        </h2>
        <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Akad */}
        <div className="bg-[#151515] border border-[#D4AF37]/30 rounded-2xl p-8 relative overflow-hidden group hover:border-[#D4AF37] transition-all duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3
            className={`${playfair.className} text-3xl text-white mb-6 text-center`}
          >
            Akad Nikah
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium">
                  Minggu, 04 Oktober 2026
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium">10.00 WIB - Selesai</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <p className="text-[#D4AF37] font-semibold mb-1">CHILL HOUSE</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Jl Sei Bilah No.11, Babura Sunggal, Kec. Medan Sunggal, Kota
                  Medan, Sumatera Utara
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resepsi */}
        <div className="bg-[#151515] border border-[#D4AF37]/30 rounded-2xl p-8 relative overflow-hidden group hover:border-[#D4AF37] transition-all duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3
            className={`${playfair.className} text-3xl text-white mb-6 text-center`}
          >
            Resepsi Pernikahan
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium">
                  Minggu, 04 Oktober 2026
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium">12.00 WIB - Selesai</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <p className="text-[#D4AF37] font-semibold mb-1">CHILL HOUSE</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Jl Sei Bilah No.11, Babura Sunggal, Kec. Medan Sunggal, Kota
                  Medan, Sumatera Utara
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://maps.app.goo.gl/BXdmbdHvaMEoZTMR7?g_st=iw"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0f0f0f] rounded-full font-semibold hover:bg-white transition-colors"
        >
          <MapPin className="w-5 h-5" />
          Lihat Lokasi via Google Maps
        </a>
      </div>

      <div className="mt-12 w-full h-[400px] border-2 border-[#D4AF37]/30 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.99612345!2d98.647!3d3.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzUnMDYuMCJOIDk4wrAzOCw0OS4yIkU!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </SectionWrapper>
  );
}
