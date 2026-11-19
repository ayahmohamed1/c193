import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://happybirthdayhima.vercel.app/'),
  title: 'Happy Birthday Ibrahim! 🎂',
  description: 'A special birthday message for Ibrahim 🤍',
  openGraph: {
    title: 'Happy Birthday Ibrahim! 🎂',
    description: 'A special birthday message for Ibrahim 🤍',
    url: 'https://happybirthdayhima.vercel.app',
    siteName: 'Birthday Gift',
    type: 'website',
    images: [
      {
        url: 'https://happybirthdayhima.vercel.app/images/og-cat.jpg',
        secureUrl: 'https://happybirthdayhima.vercel.app/images/og-cat.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Happy Birthday Ibrahim Cat 🐱🎂',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Birthday Ibrahim! 🎂',
    description: 'A special birthday message for Ibrahim 🤍',
    images: ['https://happybirthdayhima.vercel.app/images/og-cat.jpg'],
  },
}

export default function Home() {
  const data = giftData.ahmed || giftData.amir
  return <GiftClient data={data} />
}