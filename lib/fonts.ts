import {
  Great_Vibes,
  Playfair_Display,
  Poppins,
  Oleo_Script,
} from "next/font/google";

export const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const oleo = Oleo_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});
