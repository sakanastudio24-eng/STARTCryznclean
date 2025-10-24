import Link from "next/link";
import StockImage from "../../components/site/StockImage";

export default function AboutPage() {
  return (
    <section className="section">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="mb-8 pt-8">
          <StockImage
            src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Cruiz n Clean mobile detailing team and tools"
            width={1200}
            height={600}
            className="w-full h-64 md:h-80 motion-safe:animate-[fadeInUp_500ms_ease-out]"
            priority={true}
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Cruiz n Clean</h1>
          
          {/* Team and Action Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8" role="group" aria-label="About Cruiz n Clean team and services">
            <div className="bg-white rounded-xl p-6 shadow-sm" role="article" aria-labelledby="team-title">
              <StockImage
                src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Professional team portrait of Cruiz n Clean detailers"
                width={400}
                height={300}
                className="w-full h-48 mb-4"
              />
              <h3 id="team-title" className="text-lg font-semibold text-primary mb-2">Our Team</h3>
              <p className="text-slate-600 text-sm">Professional detailers dedicated to excellence</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm" role="article" aria-labelledby="action-title">
              <StockImage
                src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Mobile detailing team working on a vehicle in action"
                width={400}
                height={300}
                className="w-full h-48 mb-4"
              />
              <h3 id="action-title" className="text-lg font-semibold text-primary mb-2">In Action</h3>
              <p className="text-slate-600 text-sm">Bringing care and craftsmanship to your driveway</p>
            </div>
          </div>
          
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Driven by passion and precision — Cruiz n Clean began as a weekend detailing venture dedicated to restoring every vehicle's pride. From Yorba Linda to Anaheim Hills, we bring care and craftsmanship to your driveway.
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-8 text-left max-w-2xl mx-auto">
            <li className="text-slate-700">Locally owned & operated — serving Yorba Linda, Anaheim Hills, Placentia, and nearby areas.</li>
            <li className="text-slate-700">Clear, size-based pricing — no surprises.</li>
            <li className="text-slate-700">Flexible booking — weekdays and select weekends.</li>
          </ul>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Not sure what you need? Start with a free quote and we'll help you choose the right package for your vehicle and schedule.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/booking" className="btn-primary-cta inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold shadow-lg text-lg">
            Book Now
          </Link>
          <Link href="/contact" className="btn-small inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors text-lg">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
