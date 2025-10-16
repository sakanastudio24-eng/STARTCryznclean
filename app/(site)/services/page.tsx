import Link from "next/link";

export default function ServicesPage() {
  const services = [
    { title: "Exterior Wash", bullets: ["Foam bath", "Hand dry", "Wheels & tires" ] },
    { title: "Interior Clean", bullets: ["Vacuum", "Wipe-down", "Glass"] },
    { title: "Full Detail", bullets: ["Inside & out", "Trim shine", "Tire dressing"] },
    { title: "Paint Decon", bullets: ["Iron removal", "Clay bar", "Prep"] },
    { title: "Ceramic Lite", bullets: ["6–12 mo.", "High gloss", "Hydrophobic"] },
    { title: "Engine Bay", bullets: ["Degrease", "Detail", "Protect"] },
  ];

  return (
    <div className="flex-1 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold heading text-primary">Services</h1>
            <p className="text-text/80 mt-2">Transparent options for every vehicle and budget.</p>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/detailing" className="underline underline-offset-4 hover:no-underline focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Detailing Packages</Link>
            <Link href="/booking" className="inline-flex items-center justify-center rounded-md px-4 py-2 bg-primary text-offWhite font-semibold shadow hover:bg-primary/90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Book Now</Link>
          </div>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.title} className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white/70 dark:bg-black/40 backdrop-blur">
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <ul className="list-disc pl-5 text-sm text-text/80 space-y-1 mb-4">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Link href="/booking" className="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium bg-accent text-charcoal hover:bg-accent/90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Add to Booking</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden mt-8">
          <Link href="/detailing" className="underline underline-offset-4 hover:no-underline focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Detailing Packages</Link>
          <span className="mx-2">·</span>
          <Link href="/booking" className="underline underline-offset-4 hover:no-underline focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Book Now</Link>
        </div>
      </div>
    </div>
  );
}
