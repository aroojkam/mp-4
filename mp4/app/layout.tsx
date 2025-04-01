// REMOVE 'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientNav from '@/components/ClientNav';

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Weather application using Visual Crossing API',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-white text-xl font-bold">Weather App</h1>
              <ClientNav />
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-100 p-4 text-center">
          <p>© 2025 Weather App</p>
        </footer>
      </body>
    </html>
  );
}
