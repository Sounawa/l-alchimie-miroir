import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "L'Alchimie du Miroir — Méditer le Coran avec l'Âme",
  description:
    "Plateforme de méditation coranique et d'alchimie spirituelle. Bibliothèque, miroir intérieur, recherche et protocoles thérapeutiques.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪞</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${lora.variable} antialiased bg-background text-foreground`}
      >
        <div className="aurora-bg" aria-hidden="true" />
        <div className="floating-particles" aria-hidden="true">
          <span style={{ left: '10%', animationDuration: '15s', animationDelay: '0s', width: '2px', height: '2px' }} />
          <span style={{ left: '20%', animationDuration: '18s', animationDelay: '2s', width: '3px', height: '3px' }} />
          <span style={{ left: '35%', animationDuration: '22s', animationDelay: '4s', width: '2px', height: '2px' }} />
          <span style={{ left: '50%', animationDuration: '16s', animationDelay: '1s', width: '3px', height: '3px' }} />
          <span style={{ left: '65%', animationDuration: '20s', animationDelay: '3s', width: '2px', height: '2px' }} />
          <span style={{ left: '75%', animationDuration: '25s', animationDelay: '5s', width: '3px', height: '3px' }} />
          <span style={{ left: '85%', animationDuration: '17s', animationDelay: '2s', width: '2px', height: '2px' }} />
          <span style={{ left: '95%', animationDuration: '21s', animationDelay: '4s', width: '2px', height: '2px' }} />
          <span style={{ left: '5%', animationDuration: '19s', animationDelay: '6s', width: '3px', height: '3px', background: 'rgba(0, 212, 255, 0.3)' }} />
          <span style={{ left: '45%', animationDuration: '23s', animationDelay: '7s', width: '2px', height: '2px', background: 'rgba(0, 212, 255, 0.2)' }} />
          <span style={{ left: '55%', animationDuration: '14s', animationDelay: '1s', width: '3px', height: '3px', background: 'rgba(0, 212, 255, 0.3)' }} />
          <span style={{ left: '30%', animationDuration: '26s', animationDelay: '8s', width: '2px', height: '2px', background: 'rgba(139, 92, 246, 0.2)' }} />
        </div>
        <div className="relative z-10 min-h-screen flex">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
