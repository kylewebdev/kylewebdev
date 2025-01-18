import Script from 'next/script';
import SmoothScrolling from '@/components/SmoothScrolling';
import type { Metadata } from 'next';
import { Poppins, Geist_Mono } from 'next/font/google';
import './globals.css';

const poppinsSans = Poppins({
  variable: '--font-poppins-sans',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kyle Garcia - Full-Stack Web Developer',
  description:
    'Full-stack web developer with a passion for building beautiful and functional web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} ${geistMono.variable} antialiased bg-deep-charcoal bg-dither-2 text-off-white`}
      >
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
      <Script
        async
        src="https://cloud.umami.is/script.js"
        data-website-id="3eb4248e-2eb6-4750-a0c9-9671b9677822"
      />
    </html>
  );
}
