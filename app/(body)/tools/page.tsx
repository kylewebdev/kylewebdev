import { ContactForm } from '@/components/ContactForm';

export default function Tools() {
  return (
    <main className="font-sans">
      <div className="flex flex-col gap-32">
        <div className="flex flex-col gap-16">
          <h1 className="text-heading-1 font-bold">
            <span>Developer</span>
            <br />
            <span className="bg-clip-text text-transparent bg-muted-teal bg-dither">
              Tools
            </span>
          </h1>

          <div className="flex flex-col gap-12 max-w-[70ch]">
            <div className="flex flex-col gap-4">
              <h3 className="text-heading-2">Core Technologies</h3>
              <p className="text-soft-pewter">
                Building modern, responsive, and performant web applications
                requires a reliable and efficient tech stack. Here are the core
                technologies I rely on to deliver outstanding results:
              </p>
              <ul className="list-disc pl-4 flex flex-col gap-2 text-soft-pewter">
                <li>
                  <strong>Next.js:</strong> My go-to framework for building
                  fast, scalable, and SEO-friendly web applications. I love how
                  its server-side rendering (SSR) capabilities pair seamlessly
                  with modern JavaScript.
                </li>
                <li>
                  <strong>Tailwind CSS:</strong> I embrace utility-first styling
                  to create clean, responsive, and visually appealing designs.
                  Tailwind allows me to focus on crafting user experiences
                  without being bogged down by boilerplate styles.
                </li>
                <li>
                  <strong>ShadCN:</strong> For highly customizable components
                  that blend perfectly with Tailwind, ShadCN is a staple in my
                  development workflow, helping me build intuitive UIs quickly.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-heading-2">Content Management</h3>
              <p className="text-soft-pewter">
                Effective content management systems are at the heart of dynamic
                web applications. These tools empower me to deliver flexible,
                customizable, and efficient solutions:
              </p>
              <ul className="list-disc pl-4 flex flex-col gap-2 text-soft-pewter">
                <li>
                  <strong>WordPress:</strong> With years of experience working
                  with WordPress, I have mastered modern approaches to crafting
                  highly customized themes and plugins. I often integrate
                  Tailwind CSS into my WordPress projects to modernize the
                  design.
                </li>
                <li>
                  <strong>Payload CMS:</strong> I enjoy experimenting with
                  Payload CMS for its flexibility and headless architecture,
                  making it a strong choice for modern, API-driven applications.
                </li>
                <li>
                  <strong>Sanity CMS:</strong> Sanity has been a fantastic tool
                  for structured content management and creating dynamic,
                  real-time editing experiences.
                </li>
                <li>
                  <strong>PHP:</strong> A core part of my WordPress development
                  experience, I leverage PHP to create robust backends and
                  extend WordPress functionality.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-heading-2">Development Tools</h3>
              <p className="text-soft-pewter">
                Great tools make the development process more efficient,
                collaborative, and enjoyable. Here are the tools I use to
                streamline my work:
              </p>
              <ul className="list-disc pl-4 flex flex-col gap-2 text-soft-pewter">
                <li>
                  <strong>Vite:</strong> I appreciate the speed and efficiency
                  of Vite for building and bundling modern JavaScript
                  applications.
                </li>
                <li>
                  <strong>Visual Studio Code:</strong> My code editor of choice,
                  customized with extensions for productivity and style.
                </li>
                <li>
                  <strong>Ghostty:</strong> My terminal of choice for its sleek
                  interface and productivity-enhancing features, making
                  command-line workflows faster and more enjoyable.
                </li>
                <li>
                  <strong>Git and GitHub:</strong> Version control is a must. I
                  rely on Git to manage projects and collaborate effectively.
                </li>
                <li>
                  <strong>Postman:</strong> For testing APIs and ensuring
                  seamless backend/frontend integration.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-heading-2">Utilities and Extras</h3>
              <p className="text-soft-pewter">
                Building modern, responsive, and performant web applications
                requires a reliable and efficient tech stack. Here are the core
                technologies I rely on to deliver outstanding results:
              </p>
              <ul className="list-disc pl-4 flex flex-col gap-2 text-soft-pewter">
                <li>
                  <strong>ESLint & Prettier:</strong> I maintain clean,
                  consistent, and error-free code with these indispensable
                  tools.
                </li>
                <li>
                  <strong>Figma:</strong> Essential for prototyping and
                  collaborating on design workflows.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <h1 className="text-heading-1 font-bold">
            <span>Let&apos;s Work</span>
            <br />
            <span className="bg-clip-text text-transparent bg-muted-teal bg-dither">
              Together
            </span>
          </h1>

          <ContactForm />
        </div>
      </div>
    </main>
  );
}
