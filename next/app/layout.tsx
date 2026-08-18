import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/assets/css/style.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ivoire Pool | Construction de piscines sur mesure à Abidjan",
  description:
    "Ivoire Pool conçoit, construit, rénove et entretient des piscines sur mesure haut de gamme à Abidjan, en Côte d'Ivoire. Demandez votre estimation gratuite.",
  openGraph: {
    type: "website",
    siteName: "Ivoire Pool",
    locale: "fr_CI",
    title: "Ivoire Pool | Construction de piscines sur mesure à Abidjan",
    description:
      "Ivoire Pool conçoit, construit, rénove et entretient des piscines sur mesure haut de gamme à Abidjan, en Côte d'Ivoire.",
    images: ["/assets/hero-image.webp"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#009efc",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}[data-count]{display:none}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
