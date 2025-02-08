import Link from "next/link";
import QuoteSlider from "@/components/QuoteSlider";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Philosophie als Lebenskunst
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Gedacht. Gefühlt. Gelebt.
          </p>
          <div className="mb-8">
            <QuoteSlider />
          </div>
          <Link
            href="/kurs"
            className="inline-block bg-pastel-blue px-8 py-3 rounded-full text-lg font-medium hover:bg-pastel-blue/80 transition-colors text-gray-700"
          >
            Kurs entdecken
          </Link>
        </div>
      </section>

      {/* Drei Säulen */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Gedacht
              </h3>
              <p className="text-gray-600">
                Philosophische Konzepte und Theorien als Werkzeuge für das Leben
                verstehen.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Gefühlt
              </h3>
              <p className="text-gray-600">
                Die emotionale Dimension philosophischer Erkenntnisse erfahren.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Gelebt
              </h3>
              <p className="text-gray-600">
                Philosophische Einsichten in den Alltag integrieren.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
