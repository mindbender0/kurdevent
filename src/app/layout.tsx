import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KurdEvent',
  description: 'Discover local events and activities in Kurdistan.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'relative h-full font-sans antialiased',
          inter.className
        )}>
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
