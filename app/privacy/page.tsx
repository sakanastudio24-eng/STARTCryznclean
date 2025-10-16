import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { Heading } from "../../components/ui/Heading";

export default function PrivacyPage() {
  return (
    <Section>
      <Container>
        <Heading as={1} className="mb-6">Privacy Policy</Heading>
        {/* ...content... */}
      </Container>
    </Section>
  );
}
