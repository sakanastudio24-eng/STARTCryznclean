import Link from "next/link";

export default function DetailingPage() {
  const packages = [
    {
      name: "Basic",
      features: ["Exterior wash", "Interior quick clean", "Windows", "Tire shine"],
    },
    {
      name: "Standard",
      features: ["Foam bath", "Vacuum & wipe-down", "Door jambs", "Wax/Sealant"],
    },
    {
      name: "Premium",
      features: ["Deep interior detail", "Paint decon (clay)", "Machine polish (spot)", "Sealant/Coating"],
    },
  ];

  const addons = [
    "Headlight restoration",
    "Engine bay detail",
    "Pet hair removal",
    "Plastic trim restore",
    "Carpet shampoo",
  ];

  return (
    <div className="flex-1 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold heading text-primary">Detailing Packages</h1>
          <p className="text-text/80 mt-2">Choose a package; fine-tune with add-ons at booking.</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <section key={pkg.name} className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/70 dark:bg-black/40 backdrop-blur">
              <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>
              <ul className="list-disc pl-5 text-sm text-text/80 space-y-1 mb-4">
                {pkg.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link href="/booking" className="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium bg-primary text-offWhite hover:bg-primary/90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Select {pkg.name}</Link>
            </section>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Add-ons</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {addons.map((a) => (
              <li key={a} className="rounded-md border border-black/10 dark:border-white/10 px-4 py-3 bg-white/60 dark:bg-black/40">
                {a}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
