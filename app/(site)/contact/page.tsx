export default function ContactPage() {
  return (
    <div className="flex-1 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold heading text-primary">Contact</h1>
          <p className="text-text/80 mt-2">Reach out for quotes, questions, or scheduling.</p>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          <section className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/70 dark:bg-black/40 backdrop-blur">
            <h2 className="font-semibold mb-2">Details</h2>
            <ul className="text-sm text-text/80 space-y-1">
              <li>Email: <a className="underline underline-offset-4" href="mailto:hello@cruiznclean.com">hello@cruiznclean.com</a></li>
              <li>Phone: <a className="underline underline-offset-4" href="tel:+15551234567">(555) 123-4567</a></li>
              <li>Service Area: Greater Metro</li>
            </ul>
          </section>
          <form className="grid grid-cols-1 gap-4" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input id="name" name="name" type="text" className="mt-2 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 px-3 py-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" className="mt-2 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 px-3 py-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-2 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 px-3 py-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" />
            </div>
            <div>
              <button type="submit" className="inline-flex items-center rounded-md px-5 py-2.5 bg-primary text-offWhite font-semibold hover:bg-primary/90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
