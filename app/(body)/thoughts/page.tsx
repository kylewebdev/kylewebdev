import Image from 'next/image';
import Link from 'next/link';
import ToolImage from '@/public/the-tools-that-shaped-my-development-journey.jpeg';
import SoloDevImage from '@/public/from-solo-dev-to-full-stack.jpeg';
import GamifyImage from '@/public/gamifying-productivity.jpeg';
import { Contact } from '@/components/Contact';

export default function Thoughts() {
  return (
    <div className="flex flex-col gap-32">
      <div className="flex flex-col gap-16">
        <h1 className="text-heading-1 font-bold">
          <span>Thoughtful</span>
          <br />
          <span className="bg-clip-text text-transparent bg-muted-teal bg-dither">
            Thoughts
          </span>
        </h1>

        <div className="flex flex-col gap-6 @container">
          <Link
            href="/thoughts/the-tools-that-shaped-my-development-journey/"
            className="relative flex flex-col @xl:flex-row gap-4 @xl:items-center p-4 bg-charcoal-black/0 group hover:bg-charcoal-black transition-colors duration-300 rounded-lg"
          >
            <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"
                />
              </svg>
            </div>
            <div className="max-w-[175px] flex-shrink-0">
              <Image
                className="rounded-lg"
                src={ToolImage}
                alt="The Tools That Shaped My Development Journey"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-heading-2 font-bold">
                The Tools That Shaped My Development Journey
              </h2>
              <p className="text-concrete-gray">
                <em>January - 2025</em>
              </p>
              <p className="text-soft-pewter">
                A look at the key tools that transformed my approach to web
                development and made me a more efficient coder.
              </p>
            </div>
          </Link>
          <Link
            href="/thoughts/from-solo-dev-to-full-stack/"
            className="relative flex flex-col @xl:flex-row gap-4 @xl:items-center p-4 bg-charcoal-black/0 group hover:bg-charcoal-black transition-colors duration-300 rounded-lg"
          >
            <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"
                />
              </svg>
            </div>
            <div className="max-w-[175px] flex-shrink-0">
              <Image
                className="rounded-lg"
                src={SoloDevImage}
                alt="From Solo Dev to Full-Stack Developer"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-heading-2 font-bold">
                From Solo Dev to Full-Stack
              </h2>
              <p className="text-concrete-gray">
                <em>June - 2024</em>
              </p>
              <p className="text-soft-pewter">
                Discover how working solo as a developer taught me resilience,
                problem-solving, and self-reliance in the tech world.
              </p>
            </div>
          </Link>
          <Link
            href="/thoughts/gamifying-productivity/"
            className="relative flex flex-col @xl:flex-row gap-4 @xl:items-center p-4 bg-charcoal-black/0 group hover:bg-charcoal-black transition-colors duration-300 rounded-lg"
          >
            <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"
                />
              </svg>
            </div>
            <div className="max-w-[175px] flex-shrink-0">
              <Image
                className="rounded-lg"
                src={GamifyImage}
                alt="Gamifying Productivity"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-heading-2 font-bold">
                Gamifying Productivity
              </h2>
              <p className="text-concrete-gray">
                <em>March - 2024</em>
              </p>
              <p className="text-soft-pewter">
                Learn how I&apos;ve applied gaming strategies to boost
                productivity and stay motivated in my development workflow.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <Contact />
    </div>
  );
}
