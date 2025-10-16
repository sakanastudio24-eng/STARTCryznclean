import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import './globals.css'
import type { Metadata } from 'next'
import ClientProviders from '../components/providers/ClientProviders'

export const metadata: Metadata = {
  title: 'Cruiz n Clean',
  description: 'Mobile auto detailing — quotes, services, and booking.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-page text-text antialiased">
        <a href="#content" className="sr-only focus:not-sr-only">Skip to content</a>
        <Header />
        <ClientProviders>
          <main id="content" className="pt-[var(--header-h)]">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </ClientProviders>
        <Footer />
      </body>
    </html>
  )
}
