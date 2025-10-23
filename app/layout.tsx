import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import BottomBar from "../components/site/BottomBar";
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
      <body className="min-h-screen bg-white text-slate-900 antialiased">
  <a href="#content" className="sr-only focus:not-sr-only">Skip to content</a>
  <Header />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientProviders><main id="content" className="pt-[var(--header-h)] pb-20 sm:pb-0">{children}</main></ClientProviders>
        </div>
  <Footer />
  <BottomBar />
      </body>
    </html>
  )
}
