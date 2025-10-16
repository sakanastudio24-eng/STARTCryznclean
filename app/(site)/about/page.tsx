export default function AboutPage() {
  return (
    <div className="flex-1 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 md:items-start">
        <section>
          <h1 className="text-4xl font-bold heading text-primary mb-4">About</h1>
          <p className="text-text/80">Cruiz n Clean is a mobile detailing studio focused on convenience, care, and long-term protection. We bring premium products and processes to your driveway.</p>
          <ul className="mt-6 space-y-2 text-sm text-text/80">
            <li>Quality-first detailing, always</li>
            <li>Transparent, fair pricing</li>
            <li>Respect for your time and vehicle</li>
          </ul>
        </section>
        <aside className="rounded-xl border border-black/10 dark:border-white/10 p-8 bg-white/70 dark:bg-black/40 backdrop-blur">
          <div className="text-3xl font-bold heading">CnC</div>
          <p className="text-sm text-text/70 mt-2">Logo lockup / brand mark</p>
        </aside>
      </div>
    </div>
  );
}
