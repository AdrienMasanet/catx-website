import "./globals.scss";

export const metadata = {
  title: "CATx",
  description: "description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
