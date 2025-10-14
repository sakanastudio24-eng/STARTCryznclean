import { heroImages } from "../data/images-manifest";

const heroImage = heroImages[0];

export default function HeroSection() {
  return (
    <section className="Section">
      <div className="relative overflow-hidden rounded-2xl aspect-[21/9]">
        <img
          src={"/images/" + heroImage.file}
          alt={heroImage.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 h-full w-full flex items-center">
          <div className="max-w-2xl p-6 md:p-10 space-y-4 md:space-y-6 text-text">
            <h1 className="text-4xl md:text-6xl font-display font-bold">Cruzn Clean</h1>
            <p className="text-base md:text-lg text-text/90">Premium mobile detailing for your car, truck, or SUV. We come to you—shine, protect, and drive happy.</p>
            <div className="flex gap-3">
              <a href="/services" className="bg-primary text-text px-5 py-3 rounded-xl shadow-card hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent">View Services</a>
              <a href="/request" className="border border-white/20 text-text/90 px-5 py-3 rounded-xl hover:bg-white/5">Request a Quote</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
