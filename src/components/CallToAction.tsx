"use client";
import { smoothScroll } from "@/utils/smoothScroll";

export default function CallToAction() {
  return (
    <a
      href="#kurs"
      onClick={(e) => smoothScroll(e, "kurs")}
      className="inline-block bg-accent/15 text-foreground px-8 py-6 rounded-full text-lg font-medium hover:bg-accent/25 transition-colors"
    >
      Kurs entdecken
    </a>
  );
}
