import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "nachgespürt.de | Philosophie als Lebenskunst",
  description:
    "Philosophiekurs der die Brücke zwischen Denken, Fühlen und Leben schlägt. Entdecken Sie Philosophie als praktische Lebenskunst.",
  keywords: [
    "Philosophie",
    "Lebenskunst",
    "Philosophiekurs",
    "Denken",
    "Fühlen",
    "Leben",
  ],
  openGraph: {
    title: "nachgespürt.de | Philosophie als Lebenskunst",
    description:
      "Philosophiekurs der die Brücke zwischen Denken, Fühlen und Leben schlägt.",
    url: "https://www.nachgespürt.de",
    siteName: "nachgespürt.de",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Prevent theme flash: set class on html before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`.trim(),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
