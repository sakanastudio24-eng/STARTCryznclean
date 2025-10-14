import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import GalleryGrid from "../../components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-base text-text">
      <NavigationBar />
      <main className="flex-1 w-full">
        <section className="Section">
          <h1 className="text-4xl font-display font-bold text-text mb-6">Gallery</h1>
        </section>
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  );
}
