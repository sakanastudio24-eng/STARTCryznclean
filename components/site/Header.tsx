"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "./SiteConfig";
import { cn } from "../../lib/utils";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  React.useEffect(() => {
    if (!open) buttonRef.current?.focus();
  }, [open]);

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-black/10 dark:border-white/10",
        "bg-white/70 dark:bg-gray-950/60 backdrop-blur supports-[backdrop-filter]:bg-white/70"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 rounded-md p-1 text-gray-900 dark:text-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500">
              <span className="text-base font-semibold">{SITE.name}</span>
            </Link>
          </div>

          <nav aria-label="Primary" className="hidden sm:flex">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-blue-500",
                        active
                          ? "text-gray-900 dark:text-white underline underline-offset-4 decoration-2 decoration-gray-300"
                          : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="sm:hidden">
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-blue-500"
              aria-label="Open menu"
              aria-controls="mobile-menu"
              aria-expanded={open}
            >
              <span className="sr-only">Menu</span>
              {/* Simple hamburger using CSS */}
              <span aria-hidden className="block h-0.5 w-5 bg-current"></span>
              <span aria-hidden className="mt-1 block h-0.5 w-5 bg-current"></span>
              <span aria-hidden className="mt-1 block h-0.5 w-5 bg-current"></span>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
