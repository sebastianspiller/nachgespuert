"use client";

import Link from "next/link";
import { smoothScroll } from "@/utils/smoothScroll";

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold">
              nachgespürt.de
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#ueber-uns"
              onClick={(e) => smoothScroll(e, "ueber-uns")}
              className="hover:text-gray-600"
            >
              Über uns
            </a>
            <a
              href="#kurs"
              onClick={(e) => smoothScroll(e, "kurs")}
              className="hover:text-gray-600"
            >
              Der Kurs
            </a>
            {/* <a
              href="#kontakt"
              onClick={(e) => smoothScroll(e, "kontakt")}
              className="hover:text-gray-600"
            >
              Kontakt
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
