import type { Metadata } from 'next'
import HomePage from './HomePage'

export const metadata: Metadata = {
  title: 'Honeysuckle — Weeping Willow Co.',
  description: 'Honeysuckle is a premium non-alcoholic cocktail by Weeping Willow Co. — crafted with ginger, honey, lemon, and gentian bitters for a sophisticated, complex flavor.',
  openGraph: {
    title: 'Honeysuckle — Weeping Willow Co.',
    description: 'A premium non-alcoholic cocktail. Complex. Botanical. Unforgettable.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Honeysuckle — Premium Non-Alcoholic Cocktail by Weeping Willow Co.' }],
  },
  twitter: {
    images: ['/images/og-default.jpg'],
  },
}

export default function Page() {
  return <HomePage />
}
