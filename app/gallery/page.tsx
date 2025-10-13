import GalleryGrid from "../../components/GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
      <h1 className="text-4xl font-bold heading text-primary mb-6">Gallery</h1>
      <GalleryGrid />
    </main>
  );
}
