export default function BookingPage() {
  return (
    <div className="flex-1 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold heading text-primary">Booking</h1>
          <p className="text-text/80 mt-2">Tell us about your vehicle and preferred time. We'll confirm ASAP.</p>
        </header>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input id="name" name="name" type="text" required className="mt-2 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 px-3 py-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" />
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm font-medium">Phone or Email</label>
            <input id="contact" name="contact" type="text" required className="mt-2 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 px-3 py-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" />
          </div>
          <div>
            <label htmlFor="vehicle" className="block text-sm font-medium">Vehicle Type</label>
            <select id="vehicle" name="vehicle" className="mt-2 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 px-3 py-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              <option>Car</option>
              <option>Small SUV</option>
              <option>Large SUV / Truck</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium">Service / Package</label>
            <select id="service" name="service" className="mt-2 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 px-3 py-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              <option>Exterior Wash</option>
              <option>Interior Clean</option>
              <option>Full Detail</option>
              <option>Basic Package</option>
              <option>Standard Package</option>
              <option>Premium Package</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium">Preferred Date</label>
            <input id="date" name="date" type="date" className="mt-2 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 px-3 py-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium">Preferred Time</label>
            <input id="time" name="time" type="time" className="mt-2 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 px-3 py-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="notes" className="block text-sm font-medium">Notes</label>
            <textarea id="notes" name="notes" rows={4} className="mt-2 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 px-3 py-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" />
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <ul className="text-sm text-text/70 list-disc pl-5">
              <li>No water or power required for standard jobs.</li>
              <li>We confirm by text or email within 24 hours.</li>
            </ul>
            <button type="submit" className="inline-flex items-center rounded-md px-5 py-2.5 bg-primary text-offWhite font-semibold hover:bg-primary/90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Request Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
}
