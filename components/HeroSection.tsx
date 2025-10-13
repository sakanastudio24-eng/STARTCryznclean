export default function HeroSection() {
  return (
    <section className="w-full bg-primary text-offWhite py-16 px-4 text-center flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold heading mb-4">Cruiz n Clean</h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">Premium mobile detailing for your car, truck, or SUV. We come to you—shine, protect, and drive happy.</p>
      <img src="/images/hero/placeholder.jpg" alt="Clean car with a shine, Cruiz n Clean mobile detailing" className="rounded-lg shadow-lg w-full max-w-xl mx-auto" />
    </section>
  );
}
