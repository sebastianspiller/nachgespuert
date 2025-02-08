import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold">
              nachgespürt.de
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/ueber-uns" className="hover:text-gray-600">
              Über uns
            </Link>
            <Link href="/kurs" className="hover:text-gray-600">
              Der Kurs
            </Link>
            <Link href="/kontakt" className="hover:text-gray-600">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
