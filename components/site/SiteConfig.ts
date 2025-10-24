export type NavLink = { href: string; label: string };

export const LIVE_FLAGS = {
  services: true,
  booking: true, // Book Now
};

export const NAV_LINKS: NavLink[] = [
  { href: "/",        label: "Home" },
  { href: "/about",   label: "About" },
  { href: "/services",label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];
