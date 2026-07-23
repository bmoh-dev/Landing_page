import './globals.css';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Clinora — Patient Intake System for Private Clinics',
  description:
    'Clinora helps private clinics receive appointment requests more efficiently while reducing repetitive work for secretaries. Built for clinics in Algeria and the MENA region.',
  openGraph: {
    title: 'Clinora — Patient Intake System for Private Clinics',
    description:
      'A calm, modern intake system for private clinics. Receive appointment requests, reduce repetitive work, and never miss a patient.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
