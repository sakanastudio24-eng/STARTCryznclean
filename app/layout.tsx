import './globals.css'
import type { Metadata } from 'next'
import ClientProviders from '../components/providers/ClientProviders'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Cruiz n Clean',
  description: 'Mobile auto detailing — quotes, services, and booking.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-base text-text antialiased">
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-accent focus:text-charcoal focus:px-3 focus:py-2 focus:rounded-md">Skip to content</a>
        <ClientProviders>
          <NavigationBar />
          <main id="content" className="min-h-[60vh]">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
