import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siko Mining | Supporting the Junior Mining Sector",
  description:
    "Siko Mining Services facilitates the junior mining sector's growth, providing easy access to quality services through 60+ years of experience and strategic partnerships.",
};

const navLinks = [
  { href: "#vision", label: "VISION" },
  { href: "#services", label: "SERVICES" },
  { href: "#about", label: "ABOUT" },
  { href: "#founder", label: "THE TEAM" },
  { href: "#media", label: "MEDIA" },
  { href: "#contact", label: "CONTACT" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Top bar - contact info */}
        <div className="bg-[#2a2a2a] py-2 px-6 text-right text-sm text-white/90">
          <a href="tel:+270820977916" className="mr-6">
            Call Us Today: 0820977916
          </a>
          <a href="mailto:info@sikomining.co.za">info@sikomining.co.za</a>
        </div>

        {/* Main navigation - orange header per reference */}
        <header className="sticky top-0 z-50 bg-[#e65c00]">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/#hero" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="SIKO"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex gap-6 md:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium uppercase text-white hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-[#1a1a1a] py-12 px-6 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
            <Image
              src="/images/logo.png"
              alt="SIKO"
              width={100}
              height={32}
              className="h-8 w-auto brightness-0 invert"
            />
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-8 flex flex-wrap justify-center gap-6">
            <Link href="#vision" className="text-sm text-white/70 hover:text-white">
              VISION
            </Link>
            <Link href="#services" className="text-sm text-white/70 hover:text-white">
              SERVICES
            </Link>
            <Link href="#about" className="text-sm text-white/70 hover:text-white">
              ABOUT
            </Link>
            <Link href="#founder" className="text-sm text-white/70 hover:text-white">
              THE TEAM
            </Link>
            <Link href="#media" className="text-sm text-white/70 hover:text-white">
              MEDIA
            </Link>
          </div>
          <p className="mx-auto mt-6 max-w-7xl text-center text-sm text-white/60">
            Copyright © All Rights Reserved, Siko Mining Services (Pty) Ltd.
          </p>
        </footer>
      </body>
    </html>
  );
}
