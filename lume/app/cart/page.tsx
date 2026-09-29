import Link from "next/link";

const cartItems = [
  { name: "Vanilla Haze", qty: 1, price: "₹1,299" },
  { name: "Rose Reverie", qty: 2, price: "₹2,998" },
];

export default function CartPage() {
  return (
    <main className="container-lume py-16">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cocoa-600">Cart</p>
          <h1 className="mt-2 text-4xl sm:text-5xl">Your candle bag.</h1>
        </div>
        <Link href="/shop" className="text-sm font-medium text-wine-600 hover:text-wine-700">
          Continue shopping
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.name} className="flex items-center gap-4 rounded-card bg-cream-50 p-4 shadow-soft">
              <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-blush-200 to-cream-100" />
              <div className="flex-1">
                <h2 className="text-xl">{item.name}</h2>
                <p className="mt-1 text-sm text-cocoa-600">Qty: {item.qty}</p>
              </div>
              <span className="font-medium text-wine-600">{item.price}</span>
            </div>
          ))}
        </div>

        <aside className="rounded-card bg-cream-50 p-6 shadow-soft">
          <h2 className="text-2xl">Summary</h2>
          <div className="mt-5 space-y-3 text-sm text-cocoa-600">
            <div className="flex justify-between"><span>Subtotal</span><span>₹4,297</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>₹199</span></div>
            <div className="flex justify-between"><span>Tax</span><span>₹0</span></div>
          </div>
          <div className="mt-5 flex justify-between border-t border-cocoa-900/10 pt-4 text-base font-medium">
            <span>Total</span>
            <span>₹4,496</span>
          </div>
          <button className="mt-6 w-full btn-primary">Proceed to checkout</button>
        </aside>
      </div>
    </main>
  );
}
