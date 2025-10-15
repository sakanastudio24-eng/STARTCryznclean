import './globals.css'
import type { Metadata } from 'next'
import ClientProviders from '../components/providers/ClientProviders'
import Header from '../components/site/Header'
import Footer from '../components/site/Footer'
import { SITE } from '../components/site/SiteConfig'

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.tagline,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.tagline,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.tagline,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-offWhite text-charcoal antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 rounded bg-blue-600 px-3 py-2 text-white"
        >
          Skip to content
        </a>
        <ClientProviders>
          <Header />
          <main id="content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
