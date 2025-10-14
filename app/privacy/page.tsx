import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-base text-text">
      <NavigationBar />
      <main className="flex-1 Section max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-display font-bold text-text mb-6">Privacy Policy</h1>
        {/* ...content... */}
      </main>
      <Footer />
    </div>
  );
}
