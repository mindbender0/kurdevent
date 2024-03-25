import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import Footer from '@/components/footer';

import { getServerSession } from 'next-auth';
import AuthSessionProvider from '@/components/session-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KurdEvent',
  description: 'Discover local events and activities in Kurdistan.',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'relative h-full font-sans antialiased',
          inter.className
        )}>
        <AuthSessionProvider session={session}>
          <main className="relative flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
            <Footer />
          </main>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
