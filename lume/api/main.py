"""
Lumé API — Scent Finder (V1: rule-based scoring).
Run:  pip install fastapi uvicorn supabase python-dotenv
      uvicorn main:app --reload --port 8000
"""
import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from supabase import create_client

load_dotenv()

# Service-role key: server only. Never expose it to the Next.js client.
db = create_client(os.environ["SUPABASE_URL"], os.environ["SUPABASE_SERVICE_ROLE_KEY"])

app = FastAPI(title="Lumé API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(","),
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)


class QuizAnswers(BaseModel):
    mood: str                                       # step 1: mood slug, e.g. "cozy"
    families: list[str] = Field(default_factory=list)  # step 2: ["floral", "sweet"]
    limit: int = Field(default=3, ge=1, le=6)


@app.get("/health")
def health():
    return {"ok": True}


@app.post("/scent-finder")
def scent_finder(answers: QuizAnswers):
    rows = (
        db.table("products")
        .select("id, slug, name, tagline, notes, families, image_ids, "
                "product_moods(weight, moods(slug)), variants(size_label, price_paise)")
        .eq("is_active", True)
        .execute()
        .data
    )

    ranked = []
    for p in rows:
        # Mood fit dominates (weight 1–5, x3), family overlap adds +2 each
        mood_score = sum(
            pm["weight"] * 3
            for pm in p["product_moods"]
            if pm["moods"]["slug"] == answers.mood
        )
        family_score = 2 * len(set(p["families"]) & set(answers.families))
        total = mood_score + family_score
        if total > 0:
            ranked.append((total, p))

    ranked.sort(key=lambda x: x[0], reverse=True)

    return {
        "matches": [
            {
                "slug": p["slug"],
                "name": p["name"],
                "tagline": p["tagline"],
                "notes": p["notes"],
                "image_id": p["image_ids"][0] if p["image_ids"] else None,
                "from_price_paise": min((v["price_paise"] for v in p["variants"]), default=None),
                "score": score,
            }
            for score, p in ranked[: answers.limit]
        ]
    }
