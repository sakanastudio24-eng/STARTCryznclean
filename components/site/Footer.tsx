import React from "react";
import Container from "../layout/Container";

const linkGroups: Array<{ heading: string; links: Array<{ label: string; href: string }> }> = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

const socials: Array<{ label: string; href: string; icon: React.ReactNode; ariaLabel: string }> = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    ariaLabel: "Instagram",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    ariaLabel: "Facebook",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.88h2.76l-.44 2.9h-2.32V22c4.78-.75 8.44-4.92 8.44-9.94z"/></svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const siteName = "Cruiz n Clean";
  return (
    <footer aria-label="Site Footer" className="border-t border-subtle bg-transparent">
      <Container className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {linkGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold text-foreground mb-3">{group.heading}</h3>
              <ul className="space-y-2">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <a className="text-sm text-muted-foreground hover:text-foreground transition underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-3">Follow</h3>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.ariaLabel} className="text-muted-foreground hover:text-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-subtle py-6 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {year} {siteName}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.ariaLabel} className="text-muted-foreground hover:text-foreground transition">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
