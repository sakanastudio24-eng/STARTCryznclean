import type { Metadata } from "next";
import { SETMORE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "About · Cruiz n Clean",
  description: "About our mobile detailing service and what we care about.",
};

export default function AboutPage() {
  return (
    <section className="container bg-page">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">About Cruiz n Clean</h1>
      <div className="prose prose-zinc max-w-none">
        <p>
          We’re a mobile detailing team focused on quality work, clear communication, and
          reliable scheduling. From quick refreshes to full premium details, we bring the
          right tools to your driveway and treat every vehicle with care.
        </p>
        <p>
          Our process is straightforward: tell us your goals and vehicle details, and we’ll
          recommend the right service level. We work Monday through Saturday and serve nearby
          neighborhoods with flexible appointment windows.
        </p>
      </div>
      <div className="mt-8">
        <a className="btn btn-primary" href={SETMORE_URL} target="_blank" rel="noopener noreferrer">Book now</a>
      </div>
    </section>
  );
}
