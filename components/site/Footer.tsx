import * as React from "react";
import Link from "next/link";
import { FOOTER_LINK_COLUMNS, SITE } from "./SiteConfig";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Footer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FOOTER_LINK_COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">{col.title}</h2>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-300">&copy; {new Date().getFullYear()} {SITE.name}</div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a href={SITE.socials.email} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Email</a>
            <a href={SITE.socials.instagram} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Instagram</a>
            <a href={SITE.socials.linkedin} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
