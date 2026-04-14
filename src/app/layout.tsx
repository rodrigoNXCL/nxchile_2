import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NXChile | Plataforma de Control Operativo para Exportadoras",
  description:
    "Plataforma de control operativo para exportadoras de fruta. Genera confianza, transmite autoridad tecnológica y muestra seriedad operacional.",
  keywords: [
    "exportadoras",
    "fruta",
    "control operativo",
    "logística",
    "Chile",
    "SaaS",
  ],
  authors: [{ name: "NXChile" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}