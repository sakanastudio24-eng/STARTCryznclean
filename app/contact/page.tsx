// Layout provides header/footer

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-page">
      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold heading text-primary mb-6">Contact Us</h1>
          {/* ...content... */}
        </div>
      </main>
    </div>
  );
}
