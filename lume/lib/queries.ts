import { supabase } from "./supabase";

export type ProductCardData = {
  id: string;
  slug: string;
  name: string;
  notes: string[];
  image_ids: string[];
  variants: { size_label: string; price_paise: number }[];
  avg_rating: number | null;
  review_count: number;
};

export async function getBestSellers(limit = 4): Promise<ProductCardData[]> {
  const { data: products } = await supabase
    .from("products")
    .select("id, slug, name, notes, image_ids, variants(size_label, price_paise)")
    .eq("is_active", true)
    .eq("is_bestseller", true)
    .limit(limit);

  if (!products?.length) return [];

  const { data: ratings } = await supabase
    .from("product_ratings")
    .select("product_id, avg_rating, review_count")
    .in("product_id", products.map((p) => p.id));

  const byId = new Map(ratings?.map((r) => [r.product_id, r]));
  return products.map((p) => ({
    ...p,
    avg_rating: byId.get(p.id)?.avg_rating ?? null,
    review_count: Number(byId.get(p.id)?.review_count ?? 0),
  }));
}

export async function getMoods() {
  const { data } = await supabase.from("moods").select("slug, name, image_id").order("sort_order");
  return data ?? [];
}

export async function getOccasions() {
  const { data } = await supabase.from("occasions").select("slug, name, image_id").order("sort_order");
  return data ?? [];
}
