import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/scent-finder", label: "Scent Finder" },
  { href: "/gifts", label: "Gift" },
  { href: "/our-story", label: "Our Story" },
];

/** Sits on top of the dark hero, so text is light. */
export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 text-cream-50">
      <div className="container-lume flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-3xl">Lumé</Link>

        <nav className="hidden gap-8 text-sm md:flex" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="opacity-90 hover:opacity-100">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/search" aria-label="Search"><Search size={20} /></Link>
          <Link href="/account" aria-label="Account" className="hidden md:block"><User size={20} /></Link>
          <Link href="/cart" aria-label="Cart"><ShoppingBag size={20} /></Link>
        </div>
      </div>
    </header>
  );
}
