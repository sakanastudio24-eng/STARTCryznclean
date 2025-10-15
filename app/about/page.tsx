import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-base text-text">
      <main id="content" className="flex-1">
        <Section>
          <Heading level={1} className="text-primary mb-6">About Cruiz n Clean</Heading>
          {/* ...content... */}
        </Section>
      </main>
    </div>
  );
}
