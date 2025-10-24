import { Suspense } from "react";
import { CartProvider } from "../../components/cart/CartContext";
import ServicesPageClient from "./ServicesPageClient";

export const metadata = {
  title: "Mobile Car Detailing Services & Packages | Cruiz n Clean",
  description: "Professional mobile detailing packages with transparent pricing. Hand wash, interior deep clean, clay bar, wax, and ceramic prep. Serving Yorba Linda, Anaheim Hills, Placentia.",
  openGraph: {
    title: "Detailing Services | Cruiz n Clean (Yorba Linda)",
    description: "Choose from our professional detailing packages. Clear pricing by vehicle size. Book online today.",
    type: "website",
    locale: "en_US",
  },
};

export default function ServicesPage() {
  return (
    <CartProvider>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <ServicesPageClient />
      </Suspense>
    </CartProvider>
  );
}