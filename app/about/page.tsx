import Section from "../../components/Section";
import Heading from "../../components/Heading";

export default function AboutPage() {
  return (
    <main>
      <Section>
        <Heading level={1} className="mb-6">About Cruiz n Clean</Heading>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <Heading level={3}>Our Mission</Heading>
            <p className="text-muted-foreground">We deliver premium mobile detailing with reliable service, modern products, and meticulous care.</p>
          </div>
          <div>
            <Heading level={3} className="mb-3">Values</Heading>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Quality over speed</li>
              <li>Clear, honest communication</li>
              <li>Respect for your time and property</li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
