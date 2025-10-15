export const dynamic = "force-dynamic"; // avoid static prerender

import RequestClient from "../../components/request/RequestClient";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";

export default function RequestPage() {
  return (
    <main id="content" className="flex-1">
      <Section>
        <Heading level={1} className="text-primary mb-6">Request a Quote</Heading>
        <RequestClient />
      </Section>
    </main>
  );
}
