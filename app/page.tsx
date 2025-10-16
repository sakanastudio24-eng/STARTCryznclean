
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "../data/services-data";
import ServiceCard from "../components/ui/ServiceCard";
import { useCart } from "../components/ui/CartProvider";
import { SETMORE_URL } from "@/lib/config";

function ServicesTeaser() {
  const { items, add } = useCart();
  const teaser = services.slice(0, 3);
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-text text-center">Services</h2>
        <p className="mt-2 text-muted-foreground text-center">A few favorites. See all on the Services page.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teaser.map((service) => (
            <div key={service.id} className="card p-5">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                <Image src={`https://images.unsplash.com/photo-1520340356584-8a7f6d1f1f20?q=80&w=800&auto=format&fit=crop`} alt={`${service.title} example`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text">{service.title}</h3>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                <li>Quality materials</li>
                <li>Attention to detail</li>
                <li>Mobile convenience</li>
              </ul>
              <div className="mt-4 flex items-center gap-3">
                <button className="btn-secondary" onClick={() => add({ id: service.id, title: service.title, basePrice: service.basePrice, category: service.category, qty: 1 })}>Add to booking</button>
                <Link href="/services" className="text-sm underline">See details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuotePromoCard() {
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card p-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-4 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-text">Request a Quote</h3>
            <p className="mt-1 text-sm text-muted-foreground">Tell us what you need. We’ll reply quickly with a plan.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href={SETMORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book now</a>
            <Link href="/booking?pkg=quote" className="btn-secondary">Request a Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-8">
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <div>
            <h1 className="text-5xl font-bold text-text tracking-tight">Professional Mobile Detailing</h1>
            <p className="mt-3 text-muted-foreground max-w-prose">Premium interior and exterior care that comes to you. Shine, protect, and drive happy.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href={SETMORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book now</a>
              <Link href="/booking?pkg=quote" className="btn-secondary">Request a Quote</Link>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1600&auto=format&fit=crop" alt="Clean car with water beading on hood" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <QuotePromoCard />
      <ServicesTeaser />
    </div>
  );
}

export default function Page() {
  return <HomePage />;
}
