import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          404 - Seite nicht gefunden
        </h1>

        <div className="relative w-1/4 max-w-3xl mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/lebenskunst.webp"
            alt="Philosophie als Lebenskunst"
            width={300}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="prose mx-auto mb-8">
          <p className="text-xl text-gray-600 mb-6">
            &quot;Der Weg des Philosophen ist oft verschlungen, und manchmal
            führt er uns zu unerwarteten Orten.&quot;
          </p>

          <p className="text-gray-700 mb-8">
            Die gesuchte Seite existiert leider nicht. Vielleicht ist dies ein
            Moment, um innezuhalten und über die Natur des Suchens nachzudenken?
            Oder du kehrst einfach zurück und erkundest andere Pfade.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-pastel-blue px-6 py-3 rounded-full text-lg font-medium hover:bg-pastel-blue/80 transition-colors text-gray-700"
          >
            Zur Startseite
          </Link>

          <Link
            href="/blog"
            className="inline-block bg-pastel-green px-6 py-3 rounded-full text-lg font-medium hover:bg-pastel-green/80 transition-colors text-gray-700"
          >
            Zum Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
