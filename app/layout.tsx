import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HiveMeme — Instant Meme Generator',
  description: 'Turn any situation into a meme in seconds. Powered by Hive.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
