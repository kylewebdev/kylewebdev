import { Contact } from '@/components/Contact';
import { PageTitle } from '@/components/PageTitle';

export default function Tools() {
  return (
    <div className="flex flex-col gap-32">
      <div className="flex flex-col gap-16">
        <PageTitle titleStart="Developer" titleEnd="Tools" />

        <div className="flex flex-col gap-12">
          <div className="prose prose-theme">
            <h2 aria-level={2}>Core Technologies</h2>
            <p>
              Building modern, responsive, and performant web applications
              requires a reliable and efficient tech stack. Here are the core
              technologies I rely on to deliver outstanding results:
            </p>
            <h3>Next.js</h3>
            <p>
              My go-to framework for building fast, scalable, and SEO-friendly
              web applications. I love how its server-side rendering (SSR)
              capabilities pair seamlessly with modern JavaScript.
            </p>
            <h3>Tailwind CSS</h3>
            <p>
              I embrace utility-first styling to create clean, responsive, and
              visually appealing designs. Tailwind allows me to focus on
              crafting user experiences without being bogged down by boilerplate
              styles.
            </p>
            <h3>ShadCN</h3>
            <p>
              For highly customizable components that blend perfectly with
              Tailwind, ShadCN is a staple in my development workflow, helping
              me build intuitive UIs quickly.
            </p>
          </div>
          <div className="prose prose-theme">
            <h2 aria-level={2}>Content Management</h2>
            <p>
              Effective content management systems are at the heart of dynamic
              web applications. These tools empower me to deliver flexible,
              customizable, and efficient solutions:
            </p>
            <h3>WordPress</h3>
            <p>
              With years of experience working with WordPress, I have mastered
              modern approaches to crafting highly customized themes and
              plugins. I often integrate Tailwind CSS into my WordPress projects
              to modernize the design. With years of experience working with
              WordPress, I have mastered techniques for developing bespoke
              themes and plugins. I often integrate Tailwind CSS into my
              projects to enhance design modernity and adaptability.
            </p>
            <h3>Payload CMS</h3>
            <p>
              I enjoy experimenting with Payload CMS for its flexibility and
              headless architecture, making it a strong choice for modern, I am
              enthusiastic about using Payload CMS due to its flexible, headless
              architecture, making it an excellent candidate for contemporary,
              API-driven applications.
            </p>
            <h3>Sanity CMS</h3>
            <p>
              Sanity has been a fantastic tool for structured content management
              and creating dynamic, real-time editing experiences.
            </p>
            <h3>PHP</h3>
            <p>
              A core part of my WordPress development experience, I leverage PHP
              to create robust backends and extend WordPress functionality.
            </p>
          </div>
          <div className="prose prose-theme">
            <h2 aria-level={2}>Development Tools</h2>
            <p>
              Great tools make the development process more efficient,
              collaborative, and enjoyable. Here are the tools I use to
              streamline my work:
            </p>
            <h3>Vite</h3>
            <p>
              I appreciate the speed and efficiency of Vite for building and
              bundling modern JavaScript applications.
            </p>
            <h3>Visual Studio Code</h3>
            <p>
              My code editor of choice, customized with extensions for
              productivity and style.
            </p>
            <h3>Ghostty</h3>
            <p>
              My terminal of choice for its sleek interface and
              productivity-enhancing features, making command-line workflows
              faster and more enjoyable.
            </p>
            <h3>Git and GitHub</h3>
            <p>
              Version control is a must. I rely on Git to manage projects and
              collaborate effectively.
            </p>
            <h3>Postman</h3>
            <p>
              For testing APIs and ensuring seamless backend/frontend
              integration.
            </p>
          </div>
          <div className="prose prose-theme">
            <h2 aria-level={2}>Utilities and Extras</h2>
            <p>
              Building modern, responsive, and performant web applications
              requires a reliable and efficient tech stack. Here are the core
              technologies I rely on to deliver outstanding results:
            </p>
            <h3>ESLint & Prettier</h3>
            <p>
              I maintain clean, consistent, and error-free code with these
              indispensable tools.
            </p>
            <h3>Figma</h3>
            <p>
              Essential for prototyping and collaborating on design workflows.
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
