'use client';
import { useEffect, useRef, ReactNode } from 'react';

import gsap from '@/lib/gsap';
import { ReactLenis } from 'lenis/react';

function SmoothScrolling({ children }: { children: ReactNode }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(time: number) {
      // @ts-expect-error lenis exsists on lenisRef.current
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
