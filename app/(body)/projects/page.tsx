import Image from 'next/image';
import VivaImage from '@/public/viva.jpg';
import CAEnergyImage from '@/public/CA-Energy-Workers.jpg';
import LucasImage from '@/public/Lucas-Public-Affairs.jpg';
import SitesImage from '@/public/Sites-Reservoir-Project.jpg';
import { Contact } from '@/components/Contact';

export default function Projects() {
  return (
    <div className="flex flex-col gap-32">
      <div className="flex flex-col gap-16">
        <h1 className="text-heading-1 font-bold">
          <span>Recent</span>
          <br />
          <span className="bg-clip-text text-transparent bg-muted-teal bg-dither">
            Projects
          </span>
        </h1>

        <div className="flex flex-col gap-6 @container">
          <a
            href="https://vivasupermarket.com/"
            target="_blank"
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
                className="rounded-lg w-full"
                src={VivaImage}
                alt="Viva Supermarket"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-heading-2 font-bold">Viva Supermarket</h2>
              <p className="text-soft-pewter">
                Designed and developed a vibrant website for a local Mexican
                supermarket, showcasing products, promotions, and community
                events.
              </p>
            </div>
          </a>
          <a
            href="https://jointmedias.com/work/sites-reservoir-project/"
            target="_blank"
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
                className="rounded-lg w-full"
                src={SitesImage}
                alt="Sites Reservoir Project"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-heading-2 font-bold">
                Sites Reservoir Project
              </h2>
              <p className="text-soft-pewter">
                Developed a custom website featuring detailed fact pages, map
                infographics, and interactive charts to present complex project
                information.
              </p>
            </div>
          </a>
          <a
            href="https://jointmedias.com/work/lucas-public-affairs-web-design-web-development/"
            target="_blank"
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
                className="rounded-lg w-full"
                src={LucasImage}
                alt="Lucas Public Affairs"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-heading-2 font-bold">Lucas Public Affairs</h2>
              <p className="text-soft-pewter">
                Developed a modern website aligned with the firm’s branding to
                highlight their services, team, and case studies.
              </p>
            </div>
          </a>
          <a
            href="https://jointmedias.com/work/california-energy-workers/"
            target="_blank"
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
                className="rounded-lg w-full"
                src={CAEnergyImage}
                alt="Project 1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-heading-2 font-bold">
                California Energy Workers
              </h2>
              <p className="text-soft-pewter">
                Built a tailored website to support the organization&apos;s
                communication and engagement with workers in the energy sector.
              </p>
            </div>
          </a>
        </div>
      </div>
      <Contact />
    </div>
  );
}
