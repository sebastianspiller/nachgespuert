"use client";
import { smoothScroll } from "@/utils/smoothScroll";

export default function CallToAction() {
  return (
    <a
      href="#kurs"
      onClick={(e) => smoothScroll(e, "kurs")}
      className="inline-block bg-pastel-blue px-8 py-3 rounded-full text-lg font-medium hover:bg-pastel-blue/80 transition-colors text-gray-700"
    >
      Kurs entdecken
    </a>
  );
}
