import "./globals.css";
import type { Metadata } from "next";
import ClientProviders from "../components/providers/ClientProviders";
import { Anton, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Cruzn Clean",
  description: "Mobile auto detailing — quotes, services, and booking.",
};

const display = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} min-h-screen bg-base text-text antialiased`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
