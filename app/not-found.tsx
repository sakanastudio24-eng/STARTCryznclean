import Link from "next/link";
import Section from "../components/Section";
import Heading from "../components/Heading";
import { ButtonLink } from "../components/ui/Button";

export default function NotFound() {
  return (
    <main>
      <Section>
        <Heading level={1} className="mb-4">Page not found</Heading>
        <p className="text-muted-foreground mb-6">Sorry, we couldn’t find the page you’re looking for.</p>
        <ButtonLink href="/" variant="primary">Back to home</ButtonLink>
      </Section>
    </main>
  );
}
