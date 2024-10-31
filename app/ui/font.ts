import { JetBrains_Mono, Instrument_Sans, Figtree } from "next/font/google";

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const figTree = Figtree({
  subsets: ["latin"],
  style: ["normal", "italic"],
});
