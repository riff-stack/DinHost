import type { Metadata } from "next";
import { Exo_2, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-exo2",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dinhost-landing.vercel.app"),
  title: `${SITE_NAME} — Solusi Bot WhatsApp Murah`,
  description: SITE_DESCRIPTION,
  keywords: [
    "bot whatsapp",
    "panel whatsapp",
    "hosting bot whatsapp",
    "whatsapp automation",
    "panel bot murah",
    "dinhost",
    "reseller panel wa",
  ],
  authors: [{ name: "DinHost" }],
  openGraph: {
    title: `${SITE_NAME} — Solusi Bot WhatsApp Murah`,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "id_ID",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Solusi Bot WhatsApp Murah`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${exo2.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
