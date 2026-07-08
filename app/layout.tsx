import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import LenisScroll from "./components/LenisScroll";

export const metadata: Metadata = {
  title: "Nataliya Sieverina | Personality Development Coach",
  description: "Sophisticated personality development, charisma training, presence advisory, self-image design, and vocal command coaching for executives and business leaders.",
  keywords: ["Personality Development Coach", "Charisma Coaching", "Executive Presence", "Self-Image Curation", "Voice Projection", "Social Poise"],
  authors: [{ name: "Nataliya Sieverina" }],
  openGraph: {
    title: "Nataliya Sieverina | Personality Development Coach",
    description: "Empowering business leaders and executives with vocal authority, aesthetic signatures, and charismatic self-image design.",
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
