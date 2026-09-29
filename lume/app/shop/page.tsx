import Link from "next/link";

const products = [
  { name: "Vanilla Haze", price: "₹1,299", slug: "vanilla-haze" },
  { name: "Rose Reverie", price: "₹1,499", slug: "rose-reverie" },
  { name: "Eucalyptus Calm", price: "₹1,399", slug: "eucalyptus-calm" },
  { name: "Midnight Ember", price: "₹1,699", slug: "midnight-ember" },
];

export default function ShopPage() {
  return (
    <main className="container-lume py-16">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cocoa-600">Shop</p>
          <h1 className="mt-2 text-4xl sm:text-5xl">Find your next favorite scent.</h1>
        </div>
        <Link href="/" className="text-sm font-medium text-wine-600 hover:text-wine-700">
          ← Back home
        </Link>
      </div>

      <div className="mb-8 grid gap-4 rounded-card bg-cream-50 p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {[
          "All candles",
          "Best sellers",
          "Fresh",
          "Warm & cozy",
          "Romantic",
        ].map((filter) => (
          <button
            key={filter}
            className="rounded-md border border-cocoa-900/10 px-3 py-2 text-sm transition hover:border-wine-600 hover:text-wine-600"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/shop/${product.slug}`}
            className="group rounded-card bg-cream-50 p-3 shadow-soft transition hover:-translate-y-1"
          >
            <div className="mb-4 aspect-square rounded-xl bg-gradient-to-br from-blush-200 to-cream-100" />
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl">{product.name}</h2>
                <p className="mt-1 text-sm text-cocoa-600">Signature candle</p>
              </div>
              <span className="text-sm font-medium text-wine-600">{product.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
