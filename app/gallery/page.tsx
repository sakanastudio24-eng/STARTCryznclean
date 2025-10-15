import Section from "../../components/Section";
import Heading from "../../components/Heading";
import GalleryGrid from "../../components/GalleryGrid";

export default function GalleryPage() {
  return (
    <main>
      <Section>
        <Heading level={1} className="mb-6">Gallery</Heading>
        <GalleryGrid hideHeader />
      </Section>
    </main>
  );
}
