import Link from "next/link";

export default function AccountPage() {
  return (
    <main className="container-lume py-16">
      <div className="mx-auto max-w-xl rounded-card bg-cream-50 p-6 shadow-soft sm:p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-cocoa-600">Account</p>
        <h1 className="mt-2 text-4xl sm:text-5xl">Welcome back.</h1>
        <p className="mt-3 text-cocoa-600">Sign in to manage your orders, wishlist, and fragrances.</p>

        <div className="mt-8 space-y-4">
          <input className="w-full rounded-md border border-cocoa-900/10 px-4 py-3 outline-none focus:border-wine-600" placeholder="Email" />
          <input type="password" className="w-full rounded-md border border-cocoa-900/10 px-4 py-3 outline-none focus:border-wine-600" placeholder="Password" />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="btn-primary">Sign in</button>
          <Link href="/" className="btn-ghost">Continue shopping</Link>
        </div>
      </div>
    </main>
  );
}
