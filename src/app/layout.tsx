import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
