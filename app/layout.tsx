import "@/styles/globals.scss";
import localFont from "@next/font/local";
import ScalesBackground from "@/components/ScalesBackground/ScalesBackground";

const fontBigNoodleTitling = localFont({ src: "../public/fonts/big_noodle_titling.ttf", variable: "--font-bignoodletitling" });
const raleway = localFont({ src: "../public/fonts/raleway.ttf", variable: "--font-raleway" });

export const metadata = {
  title: "Team CATx | Équipe e-sport française",
  description: "Découvrez Team CATx, association eSport loi 1901 créée en 2023, évoluant sur CS:GO en ESEA OPEN S45 avec Akarno, Beze, deN, Magz & Spiritix. Passion, compétition, gaming et promotion de l'eSport. Som i serem.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fontBigNoodleTitling.variable} ${raleway.variable}`}>
      <body className="relative bg-catx-black overflow-x-hidden">
        {children}
        <ScalesBackground />
      </body>
    </html>
  );
}
