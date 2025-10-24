import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import BottomBar from "../components/site/BottomBar";
import RouteAnnouncer from "../components/a11y/RouteAnnouncer";
import CartLiveRegion from "../components/a11y/CartLiveRegion";
import StickyBookNow from "../components/ui/StickyBookNow";
import Script from 'next/script';
import './globals.css'
import '../styles/cruizkit.css'
import type { Metadata } from 'next'
import ClientProviders from '../components/providers/ClientProviders'

export const metadata: Metadata = {
  title: {
    default: 'Cruiz n Clean | Mobile Auto Detailing in Yorba Linda & Anaheim Hills',
    template: '%s | Cruiz n Clean',
  },
  description: 'Professional mobile car detailing serving Yorba Linda, Placentia, Anaheim Hills, and Brea. Hand wash, interior deep clean, and ceramic protection.',
  keywords: [
    'mobile auto detailing Yorba Linda',
    'car detailing Anaheim Hills',
    'interior detailing Placentia',
    'ceramic prep Brea',
    'mobile car wash North OC',
    'professional car detailing',
    'hand wash service',
    'interior deep clean',
    'ceramic coating prep',
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', type: 'image/svg+xml', sizes: 'any' }
    ],
    apple: '/logo.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://cruiznclean.com',
    title: 'Cruiz n Clean – Mobile Auto Detailing in Yorba Linda & North OC',
    description: 'Premium mobile detailing. Transparent pricing by vehicle size. Book online.',
    locale: 'en_US',
    siteName: 'Cruiz n Clean',
    images: [
      {
        url: '/logo-horizontal.svg',
        width: 300,
        height: 60,
        alt: 'Cruiz n Clean - Automotive Detailing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cruiz n Clean – Mobile Detailing',
    description: 'Serving Yorba Linda, Anaheim Hills, Placentia, Brea & nearby.',
    images: ['/logo-horizontal.svg'],
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
      alternateName: 'Cruiz n Clean Mobile Auto Detailing',
      url: 'https://cruiznclean.com',
      telephone: '+1-555-123-4567',
      email: 'hello@cruiznclean.com',
      description: 'Professional mobile car detailing serving Yorba Linda, Placentia, Anaheim Hills, and Brea. Hand wash, interior deep clean, and ceramic protection.',
      areaServed: [
        {
          '@type': 'City',
          name: 'Yorba Linda',
          containedInPlace: {
            '@type': 'State',
            name: 'California'
          }
        },
        {
          '@type': 'City', 
          name: 'Anaheim Hills',
          containedInPlace: {
            '@type': 'State',
            name: 'California'
          }
        },
        {
          '@type': 'City',
          name: 'Placentia',
          containedInPlace: {
            '@type': 'State',
            name: 'California'
          }
        },
        {
          '@type': 'City',
          name: 'Brea',
          containedInPlace: {
            '@type': 'State',
            name: 'California'
          }
        }
      ],
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
      sameAs: [
        'https://www.instagram.com/cruiznclean',
        'https://www.setmore.com/cruiznclean'
      ],
      openingHours: 'Mo-Sa 09:00-18:00',
      priceRange: '$$',
      serviceType: [
        'Mobile Auto Detailing',
        'Hand Wash',
        'Interior Detailing',
        'Clay Bar Treatment',
        'Paint Protection',
        'Pet Hair Removal',
        'Headlight Restoration',
        'Ceramic Coating Prep',
        'Engine Bay Cleaning'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Mobile Detailing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Express Wash',
              description: 'A wash for drivers who care about routine maintenance.'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Standard Detail',
              description: 'Great for monthly upkeep and daily drivers.'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Premium Detail',
              description: 'For meticulous owners who want a deep refresh.'
            }
          }
        ]
      }
    })}
  </Script>
  
  {/* Google Translate Widget - Temporarily disabled for iPad compatibility */}
  <Script
    src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    strategy="afterInteractive"
  />
  <Script id="google-translate-init" strategy="afterInteractive">
    {`
      function googleTranslateElementInit() {
        try {
          if (typeof window !== 'undefined' && window.google && window.google.translate) {
            // Check if device is iPad/iOS to avoid compatibility issues
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            if (isIOS) {
              console.warn('Google Translate disabled on iOS devices for compatibility');
              return;
            }
            
            new window.google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,es',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            }, 'google_translate_element');
          }
        } catch (error) {
          console.warn('Google Translate initialization failed:', error);
        }
      }
    `}
  </Script>
  
  <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-white text-slate-900 rounded px-3 py-2 shadow">
    Skip to content
  </a>
  
  {/* Google Translate Element */}
  <div id="google_translate_element" className="sr-only focus:not-sr-only" />
  
  <Header />
  <RouteAnnouncer />
  <CartLiveRegion />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientProviders><main id="content" tabIndex={-1} className="pt-[var(--header-h)] pb-20 sm:pb-0">{children}</main></ClientProviders>
        </div>
  <Footer />
  <BottomBar />
  <StickyBookNow />
      </body>
    </html>
  )
}
