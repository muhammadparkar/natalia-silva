import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import LenisScroll from "./components/LenisScroll";

export const metadata: Metadata = {
  title: "Natalia Silva | Luxury Brand Storyteller, Image & Voice Coach",
  description: "Sophisticated communication advisory, executive presence, style identity design, and voice training for business leaders, CEOs, and brand strategy professionals.",
  keywords: ["Luxury Brand Storytelling", "Image Coach", "Voice Coach", "Executive Presence", "Brand Strategy", "Luxury Communication"],
  authors: [{ name: "Natalia Silva" }],
  openGraph: {
    title: "Natalia Silva | Luxury Brand Storyteller, Image & Voice Coach",
    description: "Refining executive presence, public speaking command, and aesthetic signatures for global professionals.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative min-h-screen flex flex-col font-sans bg-ice-blue/20 text-charcoal">
        <LenisScroll />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
      </body>
    </html>
  );
}
