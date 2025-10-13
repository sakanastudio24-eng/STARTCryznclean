import { heroImages } from "../data/images-manifest";

const heroImage = heroImages.find(img => img.orientation === "landscape") || heroImages[0];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[400px] flex flex-col items-center justify-center text-offWhite text-center overflow-hidden">
      <img
        src={"/images/" + heroImage.file}
        alt={heroImage.alt}
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "brightness(0.55)" }}
      />
      <div className="relative z-10 py-16 px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold heading mb-4 drop-shadow-lg">Cruiz n Clean</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 drop-shadow">Premium mobile detailing for your car, truck, or SUV. We come to you—shine, protect, and drive happy.</p>
      </div>
    </section>
  );
}
