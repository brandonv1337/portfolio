import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Brandon Valadez | Software Developer',
  description:
    'Portfolio of Brandon Valadez, a software developer working across full-stack products, applied machine learning, and game development.',
  keywords: [
    'Brandon Valadez',
    'software developer',
    'full-stack developer',
    'machine learning',
    'game developer',
  ],
  openGraph: {
    title: 'Brandon Valadez | Software Developer',
    description:
      'Full-stack products, applied machine learning, and independent games.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
