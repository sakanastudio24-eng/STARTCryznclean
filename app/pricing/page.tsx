import Link from "next/link";
import { SETMORE_URL } from "@/lib/config";

const tiers = [
  {
    id: "starter",
    name: "Starter",
    price: "$",
    description: "Quick refresh for well-kept vehicles.",
    features: [
      "Exterior wash & dry",
      "Interior vacuum",
      "Windows inside & out",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "$$",
    description: "Balanced inside-out detail for most cars.",
    features: [
      "Starter + light interior steam",
      "Tire shine & plastics",
      "Paint sealant (1–3 mo)",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$$$",
    description: "Deeper clean and lasting protection.",
    features: [
      "Standard + stain care",
      "Engine bay touch-up",
      "Premium sealant or ceramic",
    ],
  },
] as const;

export default function PricingPage() {
  return (
    <main className="pt-[var(--header-h)]">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-12">
        <h1 className="text-4xl font-bold text-text">Pricing</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">Simple tiers to match your needs. Final pricing varies by vehicle size and condition.</p>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map(tier => (
            <div key={tier.id} className="card p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-text">{tier.name}</h3>
              <div className="mt-1 text-2xl font-extrabold text-text">{tier.price}</div>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-text">
                {tier.features.map(f => (
                  <li key={f} className="flex gap-2">
                    <span aria-hidden>•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3">
                <Link href={`/booking?pkg=${tier.id}`} className="btn-secondary">Add to booking</Link>
                <a href={SETMORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book now</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
