import Image from 'next/image';
import Link from 'next/link';
import Portrait from '@/public/portrait.jpg';
import Navigation from '@/components/Navigation';

import LinkedInIcon from '@/public/linkedin.svg';
import GitHubIcon from '@/public/github.svg';
import XIcon from '@/public/x.svg';
import EmailIcon from '@/public/email.svg';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="page mx-6">
      <Navigation />

      <div className="flex flex-col md:flex-row gap-16 container mx-auto pb-32">
        <Sidebar />
        <div className="basis-2/3 order-1 md:order-2">{children}</div>
      </div>
    </div>
  );
}
