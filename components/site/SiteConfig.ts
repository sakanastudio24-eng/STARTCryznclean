export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
  // Hidden from nav by design: Gallery. Later CMS flag e.g., siteFlags.showGallery
] as const;
