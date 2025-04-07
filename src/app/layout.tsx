// ./src/app/layout.tsx

import Head from 'next/head';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ErrorBoundary from '@/components/ErrorBoundary';

import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://htowndao.xyz';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'H-Town DAO',
  description: "To unlock Houston's Web3 community potential",
  keywords: 'Web3, DAO, Houston, Blockchain, Cryptocurrency, Community, Technology, Innovation',
  authors: [{ name: 'H-Town DAO' }],
  openGraph: {
    type: 'website',
    url: baseUrl,
    siteName: 'H-Town DAO',
    title: 'H-Town DAO',
    description: "To unlock Houston's Web3 community potential",
    images: [
      {
        url: '/images/meta/og-image.png',
        width: 1200,
        height: 600,
        alt: 'H-Town DAO - Unlocking Houston\'s Web3 Community Potential',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'H-Town DAO',
    description: "To unlock Houston's Web3 community potential",
    images: ['/images/meta/og-image.png'],
    site: '@htowndao',
    creator: '@htowndao',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <div className="frame flex flex-col flex-grow lg:pt-16 lg:px-16 p-6">
          <Header />
          <ErrorBoundary>
            <main className="flex-grow">
              {children}
            </main>
          </ErrorBoundary>
          <Footer />
        </div>
      </body>
    </html>
  );
}
