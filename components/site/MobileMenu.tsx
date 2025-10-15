"use client";

import * as React from "react";
import Link from "next/link";
import { NAV_LINKS } from "./SiteConfig";
import { cn } from "../../lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const overlayRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (open) {
      const firstLink = overlayRef.current?.querySelector<HTMLAnchorElement>(
        "#mobile-menu a, #mobile-menu button, #mobile-menu [tabindex]:not([tabindex='-1'])"
      );
      firstLink?.focus();
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"
    );
    if (!focusable || focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (e.shiftKey) {
      if (active === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (active === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onKeyDown={onKeyDown}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className={cn(
        "fixed inset-0 z-50 sm:hidden",
        "bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/90",
        "transition-opacity duration-200 ease-out motion-reduce:transition-none"
      )}
    >
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "flex h-full flex-col",
          "px-4 py-6"
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-blue-500"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>
        <nav className="mt-6" aria-label="Mobile Primary">
          <ul className="flex flex-col gap-2 text-base">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-blue-500"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
