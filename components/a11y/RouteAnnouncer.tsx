"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * RouteAnnouncer - Accessibility component for SPA route changes
 * 
 * Announces page changes to screen readers and focuses main content
 * when navigation occurs in a single-page application.
 */
export default function RouteAnnouncer() {
  const pathname = usePathname();
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    // Small delay to ensure the new page content has rendered
    const timer = setTimeout(() => {
      // Get the page title from document
      const pageTitle = document.title;
      
      // Try to get h1 heading as fallback
      const heading = document.querySelector("h1")?.textContent || "";
      
      // Use heading if available, otherwise use title
      const announceText = heading || pageTitle || "Page loaded";
      
      // Set the announcement text (screen readers will announce this)
      setAnnouncement(announceText);
      
      // Focus the main content area for keyboard users
      const mainContent = document.getElementById("content");
      if (mainContent) {
        // Remove focus ring for programmatic focus
        mainContent.style.outline = "none";
        mainContent.focus();
        
        // Re-enable focus ring for keyboard navigation
        setTimeout(() => {
          mainContent.style.outline = "";
        }, 100);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
}



