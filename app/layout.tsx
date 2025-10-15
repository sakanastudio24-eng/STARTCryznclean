import './globals.css'
import type { Metadata } from 'next'
import ClientProviders from '../components/providers/ClientProviders'
import Header from '../components/site/Header'
import Footer from '../components/Footer'
import { SITE } from '../data/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  alternates: { canonical: '/' },
  title: { default: 'Cruiz n Clean', template: '%s | Cruiz n Clean' },
  description: 'Mobile auto detailing — quotes, services, and booking.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-base text-text antialiased">
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
