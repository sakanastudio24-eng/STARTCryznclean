import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import BottomBar from "../components/site/BottomBar";
import Script from 'next/script';
import './globals.css'
import type { Metadata } from 'next'
import ClientProviders from '../components/providers/ClientProviders'

export const metadata: Metadata = {
  title: {
    default: 'Cruiz n Clean – Mobile Auto Detailing in Yorba Linda, Anaheim Hills, Placentia',
    template: '%s | Cruiz n Clean',
  },
  description: 'Mobile car detailing in Yorba Linda, Anaheim Hills, Placentia, Brea & nearby. Hand wash, interior deep clean, clay bar, wax, ceramic prep, fleet. Easy booking.',
  keywords: [
    'mobile auto detailing Yorba Linda',
    'car detailing Anaheim Hills',
    'interior detailing Placentia',
    'ceramic prep Brea',
    'mobile car wash North OC',
  ],
  openGraph: {
    type: 'website',
    url: 'https://cruiznclean.com',
    title: 'Cruiz n Clean – Mobile Auto Detailing in Yorba Linda & North OC',
    description: 'Premium mobile detailing. Transparent pricing by vehicle size. Book online.',
    locale: 'en_US',
    siteName: 'Cruiz n Clean',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cruiz n Clean – Mobile Detailing',
    description: 'Serving Yorba Linda, Anaheim Hills, Placentia, Brea & nearby.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-offWhite text-slate-900 antialiased">
  <Script id="ld-localbusiness" type="application/ld+json" strategy="afterInteractive">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Cruiz n Clean',
      url: 'https://cruiznclean.com',
      telephone: '+1-555-123-4567',
      email: 'hello@cruiznclean.com',
      areaServed: ['Yorba Linda', 'Anaheim Hills', 'Placentia', 'Brea', 'Fullerton', 'Orange'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Yorba Linda',
        addressRegion: 'CA',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '33.8886',
        longitude: '-117.8131'
      },
      sameAs: ['https://www.instagram.com/cruiznclean'],
      openingHours: 'Mo-Sa 09:00-18:00',
      priceRange: '$$',
      serviceType: [
        'Hand Wash',
        'Interior Detailing',
        'Clay Bar',
        'Wax',
        'Pet Hair Removal',
        'Headlight Restoration',
        'Ceramic Coating Prep',
        'Engine Bay Cleaning'
      ]
    })}
  </Script>
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
