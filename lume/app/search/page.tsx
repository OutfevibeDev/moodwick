import Link from "next/link";

export default function SearchPage() {
  return (
    <main className="container-lume py-16">
      <div className="mx-auto max-w-2xl rounded-card bg-cream-50 p-6 shadow-soft sm:p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-cocoa-600">Search</p>
        <h1 className="mt-2 text-4xl sm:text-5xl">Find a candle</h1>

        <div className="mt-6 flex items-center gap-3 rounded-md border border-cocoa-900/10 bg-white px-4 py-3">
          <span aria-hidden>⌕</span>
          <input
            type="text"
            placeholder="Search by scent, mood, or occasion"
            className="w-full border-none bg-transparent text-sm outline-none placeholder:text-cocoa-600"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Calm",
            "Rose",
            "Fresh",
            "Gift set",
            "Cozy",
            "Sleepy",
          ].map((tag) => (
            <Link
              key={tag}
              href="/shop"
              className="rounded-full border border-cocoa-900/10 px-3 py-1.5 text-sm transition hover:border-wine-600 hover:text-wine-600"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
