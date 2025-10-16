import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { Heading } from "../../components/ui/Heading";

export default function TermsPage() {
  return (
    <Section>
      <Container>
        <Heading as={1} className="mb-6">Terms & Conditions</Heading>
        {/* ...content... */}
      </Container>
    </Section>
  );
}
