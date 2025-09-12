"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-serif font-semibold">
              nachgespürt.de
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-foreground/80 hover:text-foreground">
              Home
            </Link>
            <Link
              href="/blog"
              className="text-foreground/80 hover:text-foreground"
            >
              Blog
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
