import Section from "../../components/Section";
import Heading from "../../components/Heading";
import { Button } from "../../components/ui/Button";

export default function ContactPage() {
  return (
    <main>
      <Section>
        <Heading level={1} className="mb-6">Contact Us</Heading>
        <div className="grid gap-10 md:grid-cols-2">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input className="mt-1 w-full border border-subtle rounded-md px-3 py-2" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="mt-1 w-full border border-subtle rounded-md px-3 py-2" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea className="mt-1 w-full border border-subtle rounded-md px-3 py-2" rows={4} placeholder="How can we help?" />
            </div>
            <Button type="submit">Send</Button>
          </form>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>Email: <a href="mailto:info@cruiznclean.com">info@cruiznclean.com</a></p>
            <p>Phone: <a href="tel:555-555-5555">(555) 555-5555</a></p>
            <p>Hours: Mon–Sat, 8am–6pm</p>
          </div>
        </div>
      </Section>
    </main>
  );
}
