import type { FooterColumn, NavLink } from "../../types/nav";

export const SITE = {
  name: "Cruiz n Clean",
  domain: "cruiznclean.com",
  tagline: "Mobile auto detailing — quotes, services, and booking.",
  socials: {
    instagram: "https://instagram.com/cruiznclean",
    linkedin: "https://www.linkedin.com/company/cruiznclean",
    email: "mailto:info@cruiznclean.com",
  },
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINK_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Request a Quote", href: "/request" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;
