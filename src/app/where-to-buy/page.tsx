import type { Metadata } from 'next'
import WhereToBuyPage from './WhereToBuyPage'

export const metadata: Metadata = {
  title: 'Where to Buy Honeysuckle — Maine & Online',
  description: 'Find Honeysuckle at select retailers across Maine — Brunswick, Portland, Falmouth, Harpswell, and more. Also available for nationwide online order.',
  openGraph: {
    title: 'Where to Buy Honeysuckle — Maine & Online',
    description: 'Find Honeysuckle at select retailers across Maine and online.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    images: ['/images/og-default.jpg'],
  },
}

export default function Page() {
  return <WhereToBuyPage />
}
