import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">nachgespürt.de</h3>
            <p className="text-gray-600">Philosophie als Lebenskunst</p>
          </div>
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-600">E-Mail: kontakt@nachgespürt.de</p> */}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <div className="space-y-2">
              <Link
                href="/impressum"
                className="block text-gray-600 hover:underline"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="block text-gray-600 hover:underline"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
