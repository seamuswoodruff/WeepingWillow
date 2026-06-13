import type { Metadata } from 'next'
import OurStoryPage from './OurStoryPage'

export const metadata: Metadata = {
  title: 'Our Story — Weeping Willow Co.',
  description: 'We made the drink we couldn\'t find anywhere else. Weeping Willow Co. was founded in Maine by Aidan Stark-Chessa and Seamus Woodruff to build a non-alcoholic drink worth choosing.',
  openGraph: {
    title: 'Our Story — Weeping Willow Co.',
    description: 'We made the drink we couldn\'t find anywhere else.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    images: ['/images/og-default.jpg'],
  },
}

export default function Page() {
  return <OurStoryPage />
}
