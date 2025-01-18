import { PageTitle } from '@/components/PageTitle';
import { Stats } from '@/components/Stats';

// import Image from 'next/image';

// public/tech/CSS.svg public/tech/html.svg public/tech/javascript.svg public/tech/next.svg public/tech/php.svg public/tech/postgresql.svg public/tech/tailwind-css-2.svg public/tech/typescript.svg
// import NextLogo from '@/public/tech/next.svg';
// import CSSLogo from '@/public/tech/CSS.svg';
// import HTMLLogo from '@/public/tech/html.svg';
// import JavaScriptLogo from '@/public/tech/javascript.svg';
// import PHPLogo from '@/public/tech/php.svg';
// import PostgreSQLLogo from '@/public/tech/postgresql.svg';
// import TailwindCSSLogo from '@/public/tech/tailwind-css.svg';
// import TypeScriptLogo from '@/public/tech/typescript.svg';
// import WordPressLogo from '@/public/tech/wordpress.svg';
// import ReactLogo from '@/public/tech/react.svg';
// import GitLogo from '@/public/tech/git.svg';
// import MySQLLogo from '@/public/tech/mysql.svg';
// import NodeLogo from '@/public/tech/nodejs.svg';
// import DockerLogo from '@/public/tech/docker.svg';

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from '@/components/ui/tooltip';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 @container">
      <PageTitle />

      <div className="prose prose-theme">
        <p>
          I believe in the power of the web to connect, inform, and inspire.
          I&apos;m focused on translating creative ideas into dynamic,
          responsive, and scalable web applications.
        </p>
      </div>

      <Stats />

      {/* <div className="flex flex-col gap-8 @container">
        <div className="prose prose-theme max-w-[500px]">
          <p className="text-small">
            From the essentials to cutting-edge frameworks, here&apos;s what
            I&apos;ve been working with to bring ideas to life:
          </p>
        </div>
        <div className="grid grid-cols-3 @md:grid-cols-4 @xl:grid-cols-5 gap-4 max-w-[550px]">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={MySQLLogo}
                  alt="MySQL Logo"
                  width={64}
                  height={64}
                  className="grayscale mx-auto opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>MySQL</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={NodeLogo}
                  alt="Node.js Logo"
                  width={64}
                  height={64}
                  className="grayscale mx-auto opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Node.js</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={DockerLogo}
                  alt="Docker Logo"
                  width={64}
                  height={64}
                  className="grayscale mx-auto opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Docker</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={ReactLogo}
                  alt="React Logo"
                  width={64}
                  height={64}
                  className="grayscale mx-auto opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>React</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={GitLogo}
                  alt="Git Logo"
                  width={64}
                  height={64}
                  className="grayscale mx-auto opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Git</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={WordPressLogo}
                  alt="WordPress Logo"
                  width={64}
                  height={64}
                  className="grayscale mx-auto opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>WordPress</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={NextLogo}
                  alt="Next.js Logo"
                  width={64}
                  height={64}
                  className="grayscale mx-auto opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Next.js</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={CSSLogo}
                  alt="CSS Logo"
                  width={64}
                  height={64}
                  className="grayscale mx-auto opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>CSS</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={HTMLLogo}
                  alt="HTML Logo"
                  width={64}
                  height={64}
                  className="grayscale mx-auto opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>HTML</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={JavaScriptLogo}
                  alt="JavaScript Logo"
                  width={64}
                  height={64}
                  className="grayscale mx-auto opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>JavaScript</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={PHPLogo}
                  alt="PHP Logo"
                  width={64}
                  height={64}
                  className="grayscale mx-auto opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>PHP</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={PostgreSQLLogo}
                  alt="PostgreSQL Logo"
                  width={64}
                  height={64}
                  className="grayscale mx-auto opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>PostgreSQL</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={TailwindCSSLogo}
                  alt="Tailwind CSS Logo"
                  width={64}
                  height={64}
                  className="grayscale mx-auto opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Tailwind CSS</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={TypeScriptLogo}
                  alt="TypeScript Logo"
                  width={64}
                  height={64}
                  className="grayscale mx-auto opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Typescript</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div> */}
    </div>
  );
}
