import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata: Metadata = {
  title: 'Creative Studio - Modern Design Agency',
  description: 'We design digital experiences that grow businesses. Explore our services in UI/UX Design, Web Development, Branding, and Digital Marketing.',
  keywords: ['design', 'agency', 'web development', 'branding', 'ui/ux'],
  authors: [{ name: 'Creative Studio' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://creativestudio.com',
    title: 'Creative Studio - Modern Design Agency',
    description: 'We design digital experiences that grow businesses.',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630',
        width: 1200,
        height: 630,
        alt: 'Creative Studio',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-light dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
