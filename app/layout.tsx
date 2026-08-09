import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { AuthProvider } from '@/components/auth-provider'
import { UpgradeGateProvider } from '@/components/upgrade-gate'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sweetex.ai'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sweetex AI — Smart Algorithmic Trading',
  description:
    'Sweetex AI is an advanced algorithmic trading assistant that helps you trade smarter with automated, data-driven signals. Get free access or buy a direct license today.',
  generator: 'iamhear',
  icons: {
    icon: '/sweetex-logo.jpg',
    apple: '/sweetex-logo.jpg',
  },
  openGraph: {
    title: 'Sweetex AI | Smart Algorithmic Trading',
    description:
      'Trade smarter with Sweetex AI | automated, data-driven trading signals. Start your trading career today.',
    images: ['/sweetex-logo.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sweetex AI — Smart Algorithmic Trading',
    description:
      'Trade smarter with Sweetex AI — automated, data-driven trading signals.',
    images: ['/sweetex-logo.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1530',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        <AuthProvider>
          <UpgradeGateProvider>{children}</UpgradeGateProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
