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
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientProviders>{children}</ClientProviders>
        </div>
      </body>
    </html>
  )
}
