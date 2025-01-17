import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Portrait from '@/public/portrait.jpg';

import LinkedInIcon from '@/public/linkedin.svg';
import GitHubIcon from '@/public/github.svg';
import XIcon from '@/public/x.svg';
import EmailIcon from '@/public/email.svg';

export default function Sidebar() {
  return (
    <aside className="basis-1/3 order-2 md:order-1">
      <div className="max-w-[320px] md:mx-auto flex flex-col gap-8 md:text-center">
        <div className="relative">
          <Image
            className="max-w-full rounded-lg"
            src={Portrait}
            alt="Picture of me, Kyle Garcia"
          />
          <div className="bg-dither absolute inset-0 z-10 pointer-events-none opacity-60"></div>
        </div>
        <div className="flex flex-col gap-4 md:px-4">
          <h2 className="text-2xl font-bold">Kyle Garcia</h2>
          <p className="text-soft-pewter">
            A Full-Stack Web Developer who delivers modern, salable, and
            user-centric solutions.
          </p>
          <ul className="flex gap-4 md:justify-center">
            <li>
              <Link
                href="https://www.linkedin.com/in/kylewebdev/"
                target="_blank"
              >
                <Image
                  className="max-w-4"
                  style={{ filter: 'invert(1)' }}
                  src={LinkedInIcon}
                  alt="LinkedIn Link"
                />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/kylewebdev_" target="_blank">
                <Image
                  className="max-w-4"
                  style={{ filter: 'invert(1)' }}
                  src={XIcon}
                  alt="X Link"
                />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/kylewebdev" target="_blank">
                <Image
                  className="max-w-4"
                  style={{ filter: 'invert(1)' }}
                  src={GitHubIcon}
                  alt="Github Link"
                />
              </Link>
            </li>
            <li>
              <Link href="mailto:kylewebdev@gmail.com">
                <Image
                  className="max-w-4"
                  style={{ filter: 'invert(1)' }}
                  src={EmailIcon}
                  alt="Email Link"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
