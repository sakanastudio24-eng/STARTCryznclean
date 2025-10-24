import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "Contact Us | Request Quote | Mobile Car Detailing | Cruiz n Clean",
  description: "Get a free quote for mobile car detailing in Yorba Linda, Anaheim Hills, Placentia. Contact Cruiz n Clean for professional auto detailing services. We come to you!",
  openGraph: {
    title: "Contact Cruiz n Clean | Mobile Detailing Quote (Yorba Linda)",
    description: "Request a free quote for mobile car detailing. We serve Yorba Linda, Anaheim Hills, Placentia and nearby areas.",
    type: "website",
    locale: "en_US",
  },
};

export default function ContactPageWrapper() {
  return <ContactPageClient />;
}
