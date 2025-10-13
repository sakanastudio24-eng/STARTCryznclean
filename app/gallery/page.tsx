import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import GalleryGrid from "../../components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-offWhite text-charcoal">
      <NavigationBar />
      <main className="flex-1 w-full">
        <section className="max-w-5xl mx-auto w-full px-4 py-8">
          <h1 className="text-4xl font-bold heading text-primary mb-6">Gallery</h1>
        </section>
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  );
}
