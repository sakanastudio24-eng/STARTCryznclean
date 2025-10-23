import BeforeAfter from "../../components/gallery/BeforeAfter";

// Gallery items data
// Note: Replace these placeholder SVG images with real before/after photos
const GALLERY_ITEMS = [
  {
    id: 1,
    before: "/images/gallery/before-1.svg",
    after: "/images/gallery/after-1.svg",
    alt: "Exterior Wash & Wax",
  },
  {
    id: 2,
    before: "/images/gallery/before-2.svg",
    after: "/images/gallery/after-2.svg",
    alt: "Interior Deep Clean",
  },
  {
    id: 3,
    before: "/images/gallery/before-3.svg",
    after: "/images/gallery/after-3.svg",
    alt: "Paint Restoration",
  },
  {
    id: 4,
    before: "/images/gallery/before-4.svg",
    after: "/images/gallery/after-4.svg",
    alt: "Headlight Restoration",
  },
  {
    id: 5,
    before: "/images/gallery/before-5.svg",
    after: "/images/gallery/after-5.svg",
    alt: "Full Detail Package",
  },
  {
    id: 6,
    before: "/images/gallery/before-6.svg",
    after: "/images/gallery/after-6.svg",
    alt: "Engine Bay Cleaning",
  },
];

export default function GalleryPage() {
  return (
    <div className="py-12 md:py-16">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Our Work Gallery
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
          See the stunning transformations we achieve with our mobile detailing services. 
          Click the Before/After buttons to toggle between the original condition and 
          our professional results.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {GALLERY_ITEMS.map((item) => (
          <BeforeAfter
            key={item.id}
            before={item.before}
            after={item.after}
            alt={item.alt}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-slate-600 mb-6 text-lg">
            Experience the same professional results for your vehicle.
          </p>
          <a
            href="/services"
            className="btn-primary-cta inline-block px-8 py-4 rounded-lg font-bold text-lg"
          >
            View Our Packages
          </a>
        </div>
      </div>
    </div>
  );
}
