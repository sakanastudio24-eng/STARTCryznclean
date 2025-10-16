// Hidden from nav; will be CMS-controlled later (e.g., siteFlags.showGallery via Sanity)
import Image from "next/image";

const placeholders = [
  {
    src: "https://images.unsplash.com/photo-1515923162050-7587f44428a5?q=80&w=800&auto=format&fit=crop",
    alt: "Freshly detailed car exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800&auto=format&fit=crop",
    alt: "Interior vacuum and wipe down",
  },
  {
    src: "https://images.unsplash.com/photo-1534531688091-a45825799268?q=80&w=800&auto=format&fit=crop",
    alt: "Ceramic protection water beading",
  },
  {
    src: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop",
    alt: "Wheel cleaning and tire shine",
  },
  {
    src: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=800&auto=format&fit=crop",
    alt: "Engine bay touch-up",
  },
  {
    src: "https://images.unsplash.com/photo-1592853625600-7b1df8ab8be5?q=80&w=800&auto=format&fit=crop",
    alt: "Final inspection and handoff",
  },
];

export default function GalleryPage() {
  return (
    <main className="pt-[var(--header-h)]">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-12">
        <h1 className="text-4xl font-bold text-text">Gallery</h1>
        <p className="mt-2 text-muted-foreground">A look at clean, protected finishes. Real jobs shown soon.</p>
      </section>
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((p, idx) => (
            <figure key={idx} className="card overflow-hidden">
              <div className="relative w-full aspect-[4/3]">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="p-3 text-sm text-muted-foreground">{p.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
