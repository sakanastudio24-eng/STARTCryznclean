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
      <body className="min-h-screen bg-base text-text antialiased">
        {/* Skip link for keyboard users */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-charcoal"
        >
          Skip to content
        </a>

        <div id="content" className="block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ClientProviders>{children}</ClientProviders>
          </div>
        </div>
      </body>
    </html>
  )
}
