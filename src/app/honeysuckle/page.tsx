import type { Metadata } from 'next'
import HoneysucklePage from './HoneysucklePage'

export const metadata: Metadata = {
  title: 'Honeysuckle — Premium Non-Alcoholic Cocktail',
  description: 'Honey, lemon, ginger, and gentian bitters. A complex botanical non-alcoholic cocktail in 12 oz cans. Made in Maine by Weeping Willow Co.',
  openGraph: {
    title: 'Honeysuckle — Premium Non-Alcoholic Cocktail',
    description: 'Honey, lemon, ginger, and gentian bitters. A complex botanical non-alcoholic cocktail.',
    images: [{ url: '/images/og-honeysuckle-product.jpg', width: 1200, height: 630, alt: 'Honeysuckle can by Weeping Willow Co.' }],
  },
  twitter: {
    images: ['/images/og-honeysuckle-product.jpg'],
  },
}

export default function Page() {
  return <HoneysucklePage />
}
