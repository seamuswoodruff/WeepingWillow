import type { Metadata } from 'next'
import ContactPage from './ContactPage'

export const metadata: Metadata = {
  title: 'Contact — Weeping Willow Co.',
  description: 'Get in touch with Weeping Willow Co. — questions, press inquiries, and wholesale interest welcome.',
  openGraph: {
    title: 'Contact — Weeping Willow Co.',
    description: 'Get in touch with Weeping Willow Co. — questions, press inquiries, and wholesale interest welcome.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    images: ['/images/og-default.jpg'],
  },
}

export default function Page() {
  return <ContactPage />
}
