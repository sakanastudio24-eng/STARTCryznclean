import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { Heading } from "../../components/ui/Heading";

export default function AboutPage() {
  return (
    <Section>
      <Container>
        <Heading as={1} className="mb-6">About Cruiz n Clean</Heading>
        {/* ...content... */}
      </Container>
    </Section>
  );
}
