"use client";

import Image from "next/image";
import QuoteSlider from "@/components/QuoteSlider";
import CallToAction from "@/components/CallToAction";
import ArticleBox from "@/components/ArticleBox";
import { BlogPost } from "@/types/blog";

export default function PageClient({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Philosophie als Lebenskunst
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Lebendige Gesprächsabende der angewandten Philosophie in der VHS
            Düsseldorf
          </p>

          {/* Hero Image */}
          <div className="relative w-1/2 max-w-3xl mx-auto mb-2 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/barn-swallow.webp"
              alt="Quelle: pixabay.com/de/photos/rauchschwalbe-wildvogel-v%C3%B6gel-9798461"
              width={1147}
              height={835}
              className="w-full h-auto"
              priority
            />
          </div>

          <QuoteSlider />
          <CallToAction />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Blog
          </h2>
          <div className="">
            {posts.map((post) => (
              <ArticleBox key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Drei Säulen */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-center mb-6">
                <svg
                  className="w-12 h-12 text-pastel-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Gedacht
              </h3>
              <p className="text-gray-600">
                Philosophische Konzepte und Theorien als Werkzeuge für das Leben
                verstehen.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-center mb-6">
                <svg
                  className="w-12 h-12 text-pastel-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Gefühlt
              </h3>
              <p className="text-gray-600">
                Die emotionale Dimension philosophischer Erkenntnisse erfahren.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-center mb-6">
                <svg
                  className="w-12 h-12 text-pastel-yellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
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

      {/* Über uns Section */}
      <section
        id="ueber-uns"
        className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Über uns
          </h2>
          <div className="prose mx-auto">
            <p className="text-gray-600 text-lg">
              Wir sind Freunde der angewandten Philosophie, die es sich zur
              Aufgabe gemacht haben, philosophische Erkenntnisse in den Alltag
              zu integrieren. Unsere Mission ist es, die Brücke zwischen
              theoretischem Wissen und praktischer Lebensweisheit zu schlagen.
            </p>
          </div>
        </div>
      </section>

      {/* Kurs Section */}
      <section
        id="kurs"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary text-foreground scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-center text-foreground">
            Der Kurs
          </h2>
          <div className="prose mx-auto">
            <p className="text-foreground/90 dark:text-foreground text-lg">
              Unser Philosophiekurs verbindet traditionelle philosophische
              Konzepte mit modernen Lebensfragen. Mit Fragen aus dem Alltag
              erkunden wir gemeinsam, wie philosophische Einsichten unser Leben
              bereichern können.
              <br />
              <br />
              Der Kurs besteht aus 10 Abenden, Donnerstags von 20:10 Uhr bis
              21:40 Uhr. Los geht es am 18. September 2025. Anmelden können Sie
              sich auf den Seiten der VHS Düsseldorf:
            </p>
          </div>
        </div>
      </section>

      <section
        id="anmelden"
        className="pt-0 pb-16 px-4 sm:px-6 lg:px-8 bg-secondary scroll-mt-16"
      >
        <div className="w-full mx-auto text-center">
          <a
            href="https://vhs.duesseldorf.de/programm/politik-gesellschaft-umwelt/kurs/Philosophie-als-Lebenskunst/G620002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pastel-blue px-8 py-3 rounded-full text-lg font-medium hover:bg-pastel-blue/80 transition-colors text-foreground"
          >
            Webseite der VHS Düsseldorf
          </a>
        </div>
      </section>

      {/* Philosophische Urwolke Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="prose">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Was den Kurs ausmacht
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Unser Ansatz verbindet die Freiheit des philosophischen Dialogs
                mit einer behutsamen Struktur, die Assoziationen und
                Verbindungen schafft.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Wir beginnen mit einem vorbereiteten Thema als Ausgangspunkt. Im
                Laufe des Gesprächs entstehen neue Perspektiven und
                Querverbindungen. Am Ende jeder Sitzung kristallisieren sich
                Fragen für den Alltag heraus und es öffnen sich Türen zu neuen
                Themen, die wir in den folgenden Treffen vertiefen können.
              </p>
              <p className="text-gray-600 text-lg">
                Wir lassen jede Perspektive ihren Raum und ermöglichen eine
                offene und rücksichtsvolle Diskussionskultur.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/bird-bath.jpg"
                alt="Quelle: pixabay.com/de/photos/vogeltr%C3%A4nke-spritzen-vogel-in-bad-5290285/"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-16 bg-secondary text-foreground"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-center text-foreground">
            Warum kann Philosophieren etwas für Sie sein?
          </h2>
          <div className="prose mx-auto text-center">
            <p className="text-foreground/90 dark:text-foreground text-lg mb-4">
              Wir betrachten Philosophieren als eine Lebensweise mit dem
              Fragezeichen: Dabei geht es darum, mit Neugierde und Offenheit
              stets dem nachzugehen, wie wir Menschen in der Welt leben.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      {/* <section
        id="kontakt"
        className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-16 bg-secondary"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Kontakt
          </h2>
          <div className="prose mx-auto text-center">
            <p className="text-gray-600 text-lg mb-4">
              Haben Sie Fragen oder möchten Sie mehr erfahren?
            </p>
            <p className="text-gray-600">E-Mail: kontakt@nachgespürt.de</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
