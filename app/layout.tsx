import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furqan & Ayu",
  description: "Undangan Pernikahan Digital T.M Furqan Anshari & Ayu Agustina",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "The Wedding of Furqan & Ayu",
    description: "04 Oktober 2026",
    url: "https://domain-anda.com",
    siteName: "Furqan & Ayu Wedding",
    images: [
      {
        url: "gallery/5.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased bg-[#0f0f0f] text-gray-200 selection:bg-[#D4AF37] selection:text-[#0f0f0f]">
        {children}
      </body>
    </html>
  );
}
