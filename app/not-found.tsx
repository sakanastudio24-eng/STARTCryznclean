import Link from "next/link";
import Section from "../components/ui/Section";
import Heading from "../components/ui/Heading";

export default function NotFound() {
  return (
    <main id="content" className="flex-1">
      <Section>
        <div className="text-center">
          <Heading level={1} className="mb-4">Page not found</Heading>
          <p className="text-muted-foreground">Sorry, we couldn't find what you were looking for.</p>
          <div className="mt-8">
            <Link href="/" className="inline-flex items-center justify-center rounded-full px-5 py-2.5 bg-brand text-white font-semibold hover:bg-brand/90 focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:outline-none">Go home</Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
