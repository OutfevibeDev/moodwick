import Link from "next/link";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return (
    <main className="container-lume py-16">
      <div className="mb-8">
        <Link href="/shop" className="text-sm font-medium text-wine-600 hover:text-wine-700">
          ← Back to shop
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="aspect-square rounded-card bg-gradient-to-br from-blush-200 via-cream-100 to-rose-400 shadow-soft" />

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cocoa-600">Signature candle</p>
          <h1 className="mt-2 text-4xl sm:text-5xl capitalize">{params.slug.replace("-", " ")}</h1>
          <p className="mt-4 text-lg font-medium text-wine-600">₹1,499</p>
          <p className="mt-4 max-w-md text-cocoa-600">
            A handcrafted scent designed to settle the room, slow the pace, and make everyday moments feel a little more intentional.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="btn-primary">Add to cart</button>
            <Link href="/scent-finder" className="btn-ghost">Find a match</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
