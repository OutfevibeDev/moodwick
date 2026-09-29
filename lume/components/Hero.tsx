import Image from "next/image";
import Link from "next/link";
import { Leaf, Clock, Flame, Heart } from "lucide-react";
import { cld } from "@/lib/cloudinary";

const trust = [
  { Icon: Leaf, label: "Non-toxic & safe" },
  { Icon: Clock, label: "Long-lasting fragrance" },
  { Icon: Flame, label: "Hand-poured" },
  { Icon: Heart, label: "Made with love" },
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[640px] overflow-hidden bg-cocoa-900 text-cream-50 md:min-h-[600px]">
      <Image
        src="/hero.png"
        alt="Hero image"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[70%_center] opacity-90"
      />
      {/* keeps text readable over the photo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cocoa-900/85 via-cocoa-900/40 to-transparent" />

      <div className="container-lume flex min-h-[640px] flex-col justify-center pb-28 pt-24 md:min-h-[600px]">
        <h1 className="max-w-md text-5xl sm:text-6xl">Scents that feel like you.</h1>
        <p className="mt-5 max-w-sm text-base/relaxed opacity-90">
          Candles for every version of you: calm mornings, chaotic days and everything in between.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/scent-finder" className="btn-primary">Find my scent</Link>
          <Link href="/shop" className="btn-ghost text-cream-50">Shop candles</Link>
        </div>

        <p className="absolute right-8 top-40 hidden -rotate-6 font-script text-2xl leading-tight opacity-90 lg:block">
          Same mood,<br />different scent
        </p>
      </div>

      <ul className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-cocoa-900/70 backdrop-blur">
        <div className="container-lume grid grid-cols-2 gap-y-3 py-4 text-xs md:grid-cols-4 md:text-sm">
          {trust.map(({ Icon, label }) => (
            <li key={label} className="flex items-center justify-center gap-2 md:justify-start">
              <Icon size={18} aria-hidden /> {label}
            </li>
          ))}
        </div>
      </ul>
    </section>
  );
}
