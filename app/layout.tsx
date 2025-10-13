import "./globals.css";
import type { Metadata } from "next";
import ClientProviders from "../components/providers/ClientProviders";

export const metadata: Metadata = {
  title: "Cruzn Clean",
  description: "Mobile auto detailing — quotes, services, and booking.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
