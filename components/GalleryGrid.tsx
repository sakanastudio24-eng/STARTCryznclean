const images = [
  { src: "/images/gallery/placeholder1.jpg", alt: "Exterior detail on a sedan" },
  { src: "/images/gallery/placeholder2.jpg", alt: "Interior cleaning in progress" },
  { src: "/images/gallery/placeholder3.jpg", alt: "Headlight restoration before and after" },
];

export default function GalleryGrid({ preview = false }: { preview?: boolean }) {
  const displayImages = preview ? images.slice(0, 2) : images;
  return (
    <section className="w-full bg-accent/10 py-12 px-4">
      <h2 className="text-3xl font-bold heading text-primary mb-8 text-center">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {displayImages.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} className="rounded-lg shadow w-full h-56 object-cover" />
        ))}
      </div>
    </section>
  );
}
