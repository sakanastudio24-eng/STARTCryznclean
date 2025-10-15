import './globals.css'
import type { Metadata } from 'next'
import ClientProviders from '../components/providers/ClientProviders'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cruiznclean.com';

export const metadata: Metadata = {
  title: {
    default: 'Cruiz n Clean',
    template: '%s | Cruiz n Clean',
  },
  description: 'Mobile auto detailing — quotes, services, and booking.',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <a href="#content" className="sr-only focus:not-sr-only fixed left-4 top-4 z-[100] rounded-md bg-zinc-900 px-3 py-2 text-white shadow focus-visible:ring-2 focus-visible:ring-brand/60">Skip to content</a>
        <ClientProviders>
          <header>
            <NavigationBar />
          </header>
          <main id="content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
