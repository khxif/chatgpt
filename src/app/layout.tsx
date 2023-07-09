import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT',
  description: 'Ask to anything to AI!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}