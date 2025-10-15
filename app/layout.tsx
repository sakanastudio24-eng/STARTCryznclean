import './globals.css'
import type { Metadata } from 'next'
import ClientProviders from '../components/providers/ClientProviders'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import Container from '../components/ui/Container'

export const metadata: Metadata = {
  title: {
    default: 'Cruiz n Clean',
    template: '%s · Cruiz n Clean',
  },
  description: 'Mobile auto detailing — quotes, services, and booking.',
  metadataBase: new URL('https://cruiznclean.com'),
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-base text-text">
        <a href="#content" className="skip-link">Skip to content</a>
        <ClientProviders>
          <div className="flex min-h-screen flex-col">
            <header>
              <NavigationBar />
            </header>
            <main id="content" className="flex-1">
              <Container>{children}</Container>
            </main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  )
}
