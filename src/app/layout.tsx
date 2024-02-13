// ./src/app/layout.tsx

import Head from 'next/head';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'H-Town DAO',
  description: "To unlock Houston's Web3 community potential",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="frame flex flex-col lg:pt-24 lg:pl-24 lg:pr-24 lg:pb-5">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
