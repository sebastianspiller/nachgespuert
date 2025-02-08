"use client";

import { useState, useEffect } from "react";

const quotes = [
  {
    text: "Die Philosophie ist keine Lehre, sondern eine Tätigkeit des Geistes, die uns hilft, besser zu leben.",
    author: "Michel de Montaigne",
  },
  {
    text: "Das untersuchte Leben ist das einzige, das zu leben sich lohnt.",
    author: "Sokrates",
  },
  {
    text: "Nicht die Dinge selbst beunruhigen die Menschen, sondern ihre Meinungen und Urteile über die Dinge.",
    author: "Epiktet",
  },
  {
    text: "Philosophie bedeutet, die Fragen des Lebens nicht nur zu denken, sondern zu leben.",
    author: "Karl Jaspers",
  },
  {
    text: "Die Kunst des Lebens besteht darin, das Außergewöhnliche im Gewöhnlichen zu entdecken.",
    author: "Pearl S. Buck",
  },
  {
    text: "Wer das Leben verstehen will, muss es wagen, sich ihm hinzugeben.",
    author: "Arthur Schopenhauer",
  },
  {
    text: "Die wahre Lebenskunst besteht darin, im Alltäglichen das Wunderbare zu sehen.",
    author: "Pearl S. Buck",
  },
  {
    text: "Philosophie ist die Kunst, das Leben in Fragen zu verwandeln, die es lebenswerter machen.",
    author: "Wilhelm Schmid",
  },
  {
    text: "Die größte Entdeckungsreise ist nicht die zu fremden Ländern, sondern die zu uns selbst.",
    author: "Sokrates",
  },
  {
    text: "Lebenskunst ist die Fähigkeit, aus den Steinen, die einem in den Weg gelegt werden, etwas Schönes zu bauen.",
    author: "Johann Wolfgang von Goethe",
  },
];

export default function QuoteSlider() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[100px] flex items-center justify-center bg-pastel-blue/30 rounded-lg p-1">
      <div
        className={`text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <p className="text-xl md:text-2xl italic mb-4 text-gray-700">
          &quot;{quotes[currentQuote].text}&quot;
        </p>
        <p className="text-gray-600">— {quotes[currentQuote].author}</p>
      </div>
    </div>
  );
}
