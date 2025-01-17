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
    'I am a full-stack web developer with a passion for building beautiful and functional web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} ${geistMono.variable} antialiased bg-deep-charcoal text-off-white`}
      >
        {children}
      </body>
    </html>
  );
}
