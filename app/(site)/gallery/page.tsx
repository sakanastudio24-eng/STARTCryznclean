import Image from "next/image";

function placeholder(width: number, height: number, text: string) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'>\n  <rect width='100%' height='100%' fill='${"#e5e7eb"}'/>\n  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#6b7280' font-family='system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"' font-size='20'>${text}</text>\n</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function GalleryPage() {
  const items = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div className="flex-1 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold heading text-primary">Gallery</h1>
          <p className="text-text/80 mt-2">Recent details and ceramic protection results.</p>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((n) => (
            <figure key={n} className="relative aspect-[3/2] overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
              <Image
                src={placeholder(600, 400, `Photo ${n}`)}
                alt={`Vehicle detail ${n}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
                priority={n <= 4}
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
