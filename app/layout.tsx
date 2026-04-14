import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Solusi Bot WhatsApp`,
  description: SITE_DESCRIPTION,
  keywords: ["bot whatsapp", "panel whatsapp", "hosting bot", "whatsapp automation", "dinhost"],
  openGraph: {
    title: `${SITE_NAME} — Solusi Bot WhatsApp`,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "id_ID",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
