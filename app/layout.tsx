import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NelsonBot - Pediatric AI Assistant',
  description: 'AI-powered pediatric knowledge assistant using the Nelson Textbook of Pediatrics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="min-h-dvh flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

