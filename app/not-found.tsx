import Link from "next/link";
import Section from "../components/layout/Section";
import Heading from "../components/ui/Heading";

export default function NotFound() {
  return (
    <Section>
      <div className="text-center">
        <Heading level={1} className="mb-4">Page not found</Heading>
        <p className="text-base leading-7 text-text/70 mb-8">The page you are looking for does not exist.</p>
        <Link href="/" className="text-sm font-medium underline underline-offset-4 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1">
          Go back home
        </Link>
      </div>
    </Section>
  );
}
