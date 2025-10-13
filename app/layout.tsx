import "./globals.css";
import type { Metadata } from "next";
import ClientProviders from "../components/providers/ClientProviders";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Cruiz n Clean",
  description: "Mobile auto detailing — quotes, services, and booking.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <div className="min-h-screen flex flex-col bg-offWhite text-charcoal">
            <NavigationBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
