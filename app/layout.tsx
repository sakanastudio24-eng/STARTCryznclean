import './globals.css'
import type { Metadata } from 'next'
import ClientProviders from '../components/providers/ClientProviders'
import Header from '../components/site/Header'
import Footer from '../components/site/Footer'
import { SITE } from './site.config'

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s · ${SITE.name}`,
  },
  description: 'Mobile auto detailing — quotes, services, and booking.',
  alternates: {
    canonical: `https://${SITE.domain}`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] bg-white text-black px-3 py-2 rounded-md shadow">Skip to content</a>
        <ClientProviders>
          <Header />
          <main id="content">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
