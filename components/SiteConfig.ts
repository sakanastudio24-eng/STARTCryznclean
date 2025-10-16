export const SITE = {
  name: "Cruiz n Clean",
  domain: "https://cruiznclean.com",
  socials: {
    instagram: "https://instagram.com/<handle>",
    email: "mailto:hello@cruiznclean.com",
    phone: "tel:+1-XXX-XXX-XXXX"
  }
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Detailing", href: "/detailing" },
  { label: "Booking", href: "/booking" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;
