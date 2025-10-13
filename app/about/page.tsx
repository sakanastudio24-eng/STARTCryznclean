import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-offWhite text-charcoal">
      <NavigationBar />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <h1 className="text-4xl font-bold heading text-primary mb-6">About Cruiz n Clean</h1>
        {/* ...content... */}
      </main>
      <Footer />
    </div>
  );
}
