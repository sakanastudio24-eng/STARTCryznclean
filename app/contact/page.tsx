import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { Heading } from "../../components/ui/Heading";

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <Heading as={1} className="mb-6">Contact Us</Heading>
        {/* ...content... */}
      </Container>
    </Section>
  );
}
