import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'TECEBA MATES | Donde Empieza la Ronda',
  description:
    'Mates artesanales premium de Mendoza, Argentina. Tradicion, calidad y arte en cada mate. Desde 2026.',
  keywords: ['mate', 'argentina', 'mendoza', 'artesanal', 'premium', 'teceba mates', 'gaucho'],
}

export const viewport: Viewport = {
  themeColor: '#6b1d1d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${lora.variable} bg-background`}>
      <body className="font-serif antialiased">
        {children}
      </body>
    </html>
  )
}
