import Link from "next/link";
import { Leaf, Clock, Flame, Heart } from "lucide-react";
import { HeroScene } from "./HeroScene";

const trust = [
  { Icon: Leaf, label: "Non-toxic & safe" },
  { Icon: Clock, label: "Long-lasting fragrance" },
  { Icon: Flame, label: "Hand-poured" },
  { Icon: Heart, label: "Made with love" },
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-cocoa-900 text-cream-50 md:min-h-[600px]">
      <HeroScene />

      {/* keeps text readable over the photo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cocoa-900/85 via-cocoa-900/40 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-cocoa-900/90 via-transparent to-transparent md:hidden" />

      <div className="container-lume flex min-h-[720px] flex-col justify-end pb-28 pt-24 md:min-h-[600px] md:justify-center">
        <h1 className="hero-rise max-w-md text-4xl sm:text-5xl md:text-6xl" style={{ ["--d" as string]: "0.9s" }}>
          Scents that feel like you.
        </h1>
        <p className="hero-rise mt-5 max-w-sm text-base/relaxed opacity-90" style={{ ["--d" as string]: "1.1s" }}>
          Candles for every version of you: calm mornings, chaotic days and everything in between.
        </p>
        <div className="hero-rise mt-8 flex flex-wrap gap-3" style={{ ["--d" as string]: "1.3s" }}>
          <Link href="/scent-finder" className="btn-primary">Find my scent</Link>
          <Link href="/shop" className="btn-ghost text-cream-50">Shop candles</Link>
        </div>

        <p
          className="hero-fade pointer-events-none absolute right-8 top-40 hidden -rotate-6 font-script text-2xl leading-tight opacity-90 lg:block"
          style={{ ["--d" as string]: "2s" }}
        >
          Same mood,<br />different scent
        </p>
      </div>

      <ul className="hero-fade absolute inset-x-0 bottom-0 border-t border-white/10 bg-cocoa-900/70 backdrop-blur" style={{ ["--d" as string]: "1.6s" }}>
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