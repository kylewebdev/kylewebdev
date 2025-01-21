import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import LinkedInIcon from '@/public/social/linkedin.svg';
// import GitHubIcon from '@/public/social/github.svg';
import XIcon from '@/public/social/x.svg';
import EmailIcon from '@/public/social/email.svg';

export default function Sidebar() {
  return (
    <aside className="basis-1/3 order-2 md:order-1">
      <div className="md:mx-auto flex flex-row md:flex-col md:max-w-[320px] gap-8 md:text-center">
        <div className="flex flex-col gap-4 md:px-4">
          <h2 className="text-heading-2 font-bold">Kyle Garcia</h2>
          <p className="text-soft-pewter">
            A Full-Stack Web Developer who delivers modern, salable, and
            user-centric solutions.
          </p>
          <ul className="flex gap-4 md:justify-center">
            <li>
              <Link
                href="https://www.linkedin.com/in/kylewebdev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
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
              <Link
                href="https://x.com/kylewebdev_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <Image
                  className="max-w-4"
                  style={{ filter: 'invert(1)' }}
                  src={XIcon}
                  alt="X Link"
                />
              </Link>
            </li>
            {/* <li>
              <Link
                href="https://github.com/kylewebdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Image
                  className="max-w-4"
                  style={{ filter: 'invert(1)' }}
                  src={GitHubIcon}
                  alt="Github Link"
                />
              </Link>
            </li> */}
            <li>
              <Link href="mailto:kylewebdev@gmail.com" aria-label="Email">
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
