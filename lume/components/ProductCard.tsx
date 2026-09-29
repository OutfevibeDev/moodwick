import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag } from "lucide-react";
import { cld } from "@/lib/cloudinary";
import { rupees } from "@/lib/format";
import type { ProductCardData } from "@/lib/queries";

function getProductImage(p: ProductCardData) {
  const localImage = `/${p.slug}.png`;
  return p.slug ? localImage : cld(p.image_ids[0], 600);
}

export function ProductCard({ p }: { p: ProductCardData }) {
  const from = Math.min(...p.variants.map((v) => v.price_paise));

  return (
    <article className="overflow-hidden rounded-card bg-cream-50 shadow-soft">
      <Link href={`/shop/${p.slug}`} className="block">
        <div className="relative aspect-square">
          <Image
            src={getProductImage(p)}
            alt={`${p.name} candle`}
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="p-3">
          <h3 className="font-sans text-sm font-medium tracking-normal">{p.name}</h3>
          <p className="mt-0.5 text-xs text-cocoa-600">{p.notes.join(" · ")}</p>
        </div>
      </Link>

      <div className="flex items-end justify-between px-3 pb-3">
        <div>
          <p className="text-sm font-medium">{rupees(from)}</p>
          {p.avg_rating && (
            <p className="mt-0.5 flex items-center gap-1 text-xs text-cocoa-600">
              <Star size={12} className="fill-gold-400 text-gold-400" aria-hidden />
              {p.avg_rating} ({p.review_count})
            </p>
          )}
        </div>
        <Link
          href={`/shop/${p.slug}`}
          aria-label={`Add ${p.name} to cart`}
          className="grid size-9 place-items-center rounded-md bg-wine-600 text-cream-50 hover:bg-wine-700"
        >
          <ShoppingBag size={16} />
        </Link>
      </div>
    </article>
  );
}
