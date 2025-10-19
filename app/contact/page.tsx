import { SETMORE_URL } from "../../lib/config";

export default function ContactPage() {
  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold heading text-primary mb-6">Contact</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: contact form */}
          <form className="bg-white rounded-xl shadow border border-black/10 p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Name</label>
              <input className="w-full border rounded px-3 py-2 focus-visible:ring-2 focus-visible:ring-orange-500/40" placeholder="Your name" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
                <input type="email" className="w-full border rounded px-3 py-2 focus-visible:ring-2 focus-visible:ring-orange-500/40" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Phone</label>
                <input type="tel" className="w-full border rounded px-3 py-2 focus-visible:ring-2 focus-visible:ring-orange-500/40" placeholder="(555) 123-4567" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Message</label>
              <textarea className="w-full border rounded px-3 py-2 focus-visible:ring-2 focus-visible:ring-orange-500/40" rows={4} placeholder="How can we help?" />
            </div>
            <button type="submit" className="btn btn-secondary">Send message</button>
          </form>

          {/* Right: info block */}
          <aside className="bg-white rounded-xl shadow border border-black/10 p-6 space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Service area & hours</h2>
              <p className="text-sm text-charcoal/80 mt-1">We serve the local metro area. Typical hours are Mon–Sat, 8am–6pm.</p>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="/booking?pkg=quote" className="btn btn-secondary">Request a Quote</a>
              <a href={SETMORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book an Appointment</a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
