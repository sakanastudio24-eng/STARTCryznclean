import type { Metadata } from "next";
import ContactClient from "@/components/site/ContactClient";

export const metadata: Metadata = {
  title: "Contact · Cruiz n Clean",
  description:
    "Questions or ready to book? Send us a note or outline your vehicles. We’ll confirm timing and any travel details.",
};

export default function ContactPage() {
  return <ContactClient />;
}
