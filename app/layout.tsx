import "@/styles/globals.css";
import localFont from "next/font/local";
import ScalesBackground from "@/components/ScalesBackground/ScalesBackground";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";

const fontBigNoodleTitling = localFont({ src: "../public/fonts/big_noodle_titling.ttf", variable: "--font-bignoodletitling" });
const raleway = localFont({ src: "../public/fonts/raleway.ttf", variable: "--font-raleway" });

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_CANONICAL_URL ? new URL(process.env.NEXT_PUBLIC_CANONICAL_URL) : undefined,
  title: {
    template: "Team CATx | %s",
    default: "Team CATx | Équipe e-sport française",
  },
  description: "Découvrez Team CATx, association eSport loi 1901 créée en 2023, évoluant sur CS:GO en ESEA OPEN S45 avec Akarno, Beze, deN, Magz & Spiritix. Passion, compétition, gaming et promotion de l'eSport. Som i serem.",
  authors: [{ name: "Adrien Masanet", url: "https://adrienmasa.net" }],
  creator: "Adrien Masanet",
  publisher: "Team CATx",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_CANONICAL_URL,
  },
  openGraph: {
    title: "Team CATx | Équipe e-sport française",
    description: "Site officiel de Team CATx, association eSport loi 1901 créée en 2023. Passion, compétition, gaming et promotion de l'eSport. Som i serem.",
    url: `${process.env.NEXT_PUBLIC_CANONICAL_URL}/`,
    images: [
      {
        url: "images/catx_logo.png",
        alt: "Team CATx logo",
        width: 714,
        height: 714,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fontBigNoodleTitling.variable} ${raleway.variable}`}>
      <body className="relative bg-catx-black overflow-x-hidden">
        {children}
        <ScalesBackground />
        <Analytics />
      </body>
    </html>
  );
}
