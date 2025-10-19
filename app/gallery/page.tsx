import BeforeAfter from "../../components/ui/BeforeAfter";
import { galleryImages } from "../../data/images-manifest";

export default function GalleryPage() {
  const exPair = galleryImages.filter((g) => g.pairId === "ex1");
  const inPair = galleryImages.filter((g) => g.pairId === "in1");
  // Fallbacks if not present
  const p1 = exPair.length === 2 ? exPair : [
    { file: "gallery/exterior1.jpg", alt: "Exterior before", caption: "", category: "Exterior", orientation: "landscape", pairId: "ex1" as const },
    { file: "gallery/exterior1b.jpg", alt: "Exterior after", caption: "", category: "Exterior", orientation: "landscape", pairId: "ex1" as const },
  ];
  const p2 = inPair.length === 2 ? inPair : [
    { file: "gallery/interior1.jpg", alt: "Interior before", caption: "", category: "Interior", orientation: "portrait", pairId: "in1" as const },
    { file: "gallery/interior1b.jpg", alt: "Interior after", caption: "", category: "Interior", orientation: "portrait", pairId: "in1" as const },
  ];
  const p3 = p1; // reuse for third pair placeholder

  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold heading text-primary mb-6">Before & After</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <BeforeAfter
            beforeSrc={`/images/${p1[0].file}`}
            afterSrc={`/images/${p1[1].file}`}
            altBefore={p1[0].alt}
            altAfter={p1[1].alt}
          />
          <BeforeAfter
            beforeSrc={`/images/${p2[0].file}`}
            afterSrc={`/images/${p2[1].file}`}
            altBefore={p2[0].alt}
            altAfter={p2[1].alt}
          />
          <BeforeAfter
            beforeSrc={`/images/${p3[0].file}`}
            afterSrc={`/images/${p3[1].file}`}
            altBefore={p3[0].alt}
            altAfter={p3[1].alt}
          />
        </div>
      </div>
    </main>
  );
}
