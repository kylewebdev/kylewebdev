import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Navigation() {
  return (
    <nav className="py-10 md:py-24">
      <ul className="w-full flex flex-col md:flex-row md:items-center justify-center gap-2 md:gap-6">
        <li>
          <Button asChild variant="navigation" size="link">
            <span>
              <span className="text-muted-teal font-bold">/</span>
              <Link href="/">home</Link>
            </span>
          </Button>
        </li>
        <li>
          <Button asChild variant="navigation" size="link">
            <span>
              <span className="text-muted-teal font-bold">/</span>
              <Link href="/projects">projects</Link>
            </span>
          </Button>
        </li>
        <li>
          <Button asChild variant="navigation" size="link">
            <span>
              <span className="text-muted-teal font-bold">/</span>
              <Link href="/experience">experience</Link>
            </span>
          </Button>
        </li>
        <li>
          <Button asChild variant="navigation" size="link">
            <span>
              <span className="text-muted-teal font-bold">/</span>
              <Link href="/tools">tools</Link>
            </span>
          </Button>
        </li>
        {/* <li>
          <Button asChild variant="navigation" size="link">
            <span>
              <span className="text-muted-teal font-bold">/</span>
              <Link href="/thoughts">thoughts</Link>
            </span>
          </Button>
        </li> */}
      </ul>
    </nav>
  );
}
