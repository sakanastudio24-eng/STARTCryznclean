import HeroSection from "../components/HeroSection";
import ServicesGrid from "../components/ServicesGrid";
import GalleryGrid from "../components/GalleryGrid";
import FAQAccordion from "../components/FAQAccordion";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-offWhite text-charcoal">
      <NavigationBar />
      <main className="flex-1">
        <HeroSection />
        <ServicesGrid preview />
        <GalleryGrid preview />
        <FAQAccordion />
      </main>
      <Footer />
    </div>
  );
}
