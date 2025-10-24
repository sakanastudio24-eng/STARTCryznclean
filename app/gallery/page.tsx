
export const metadata = {
  title: "Before & After Gallery | Mobile Car Detailing Results | Cruiz n Clean",
  description: "See our professional mobile detailing results. Before and after photos of exterior wash, interior deep clean, paint restoration, and headlight restoration in Yorba Linda, Anaheim Hills, Placentia.",
  openGraph: {
    title: "Detailing Gallery | Cruiz n Clean (Yorba Linda)",
    description: "Professional mobile detailing transformations. See the difference our services make.",
    type: "website",
    locale: "en_US",
  },
};


export default function GalleryPage() {
  return (
    <section className="section">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Coming Soon Message */}
        <div className="text-center py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Gallery Coming Soon
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We're working on showcasing our amazing before and after transformations. 
              Check back later to see the incredible results we achieve for our clients.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="text-slate-700 font-medium">
                Before & After Photos
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Real client transformations coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Ready for Your Own Transformation?
            </h2>
            <p className="text-slate-600 mb-6 text-lg">
              Experience the same professional results for your vehicle.
            </p>
            <a
              href="/services"
              className="btn-primary-cta inline-block px-8 py-4 rounded-lg font-bold text-lg"
            >
              View Our Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
