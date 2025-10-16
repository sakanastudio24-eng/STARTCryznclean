import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import Heading from "../../components/ui/Heading";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-page text-text">
      <NavigationBar />
      <main className="flex-1">
        <Section>
          <Container>
            <Heading level={1} className="text-brand mb-6">Terms & Conditions</Heading>
            {/* ...content... */}
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
