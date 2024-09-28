'use client'

import './globals.css'
import { Inter, Roboto_Mono, Playfair_Display } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
})

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-yellow-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold hover:text-yellow-400 transition-colors">B. Valadez</Link>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href={item.href} className="hover:text-yellow-400 transition-colors">{item.label}</Link>
              </motion.div>
            ))}
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-yellow-900"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 hover:text-yellow-400 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-black text-white p-6 mt-8">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <p>&copy; 2024 Brandon C. Valadez. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${roboto_mono.className} ${playfair_display.className}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-indigo-50">{children}</main>
        <Footer />
      </body>
    </html>
  )
}