import Link from "next/link";

const moods = [
  "Calm",
  "Cozy",
  "Fresh",
  "Bold",
  "Romantic",
  "Sleepy",
  "Main Character",
];

export default function ScentFinderPage() {
  return (
    <main className="container-lume py-16">
      <div className="mx-auto max-w-3xl rounded-card bg-cream-50 p-6 shadow-soft sm:p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-cocoa-600">Scent finder</p>
        <h1 className="mt-2 text-4xl sm:text-5xl">Pick the mood you want to feel.</h1>
        <p className="mt-4 text-cocoa-600">
          Answer a few quick questions and we’ll suggest a candle that fits your ritual.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {moods.map((mood) => (
            <button
              key={mood}
              className="rounded-md border border-cocoa-900/10 px-4 py-3 text-left text-sm font-medium transition hover:border-wine-600 hover:text-wine-600"
            >
              {mood}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="btn-primary">Find my scent</button>
          <Link href="/shop" className="btn-ghost">
            Browse candles
          </Link>
        </div>
      </div>
    </main>
  );
}
