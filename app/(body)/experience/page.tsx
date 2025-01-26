import { Contact } from '@/components/Contact';
import { PageTitle } from '@/components/PageTitle';
import Link from 'next/link';

export default function Experience() {
  return (
    <div className="flex flex-col gap-32">
      <div className="flex flex-col gap-16">
        <PageTitle titleStart="Professional" titleEnd="Experience" />

        <div className="flex flex-col gap-12 max-w-[70ch] prose prose-theme">
          <div>
            <h3 className="text-heading-2">
              <Link href="https://jointmedias.com" target="_blank">
                Joint Medias
              </Link>
            </h3>
            <h3>
              <strong>Full-Stack Web Developer</strong>
            </h3>
            <p>
              <em>FEB 2015 &mdash; Present</em>
            </p>
            <ul>
              <li>
                Architected and implemented optimized workflows, reducing
                project development time significantly while ensuring code
                quality and accuracy
              </li>
              <li>
                Collaborate closely with designers to create fully manageable,
                high-impact websites that significantly improve client metrics
              </li>
              <li>
                Conduct regular code reviews and technical presentations to
                elevate team skills and maintain code standards
              </li>
              <li>
                Development of diverse web projects, ranging from static sites
                to complex API-driven React applications, in a fast-paced agency
                environment
              </li>
              <li>
                Lead technology stack decisions, introducing modern frameworks
                and best practices to enhance agency capabilities
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-heading-2">
              <Link href="https://lovegevity.com" target="_blank">
                Lovegevity
              </Link>
            </h3>
            <h3>
              <strong>Web Developer</strong>
            </h3>
            <p>
              <em>OCT 2014 &mdash; FEB 2015</em>
            </p>
            <ul>
              <li>
                Collaborated with UX designers to ensure intuitive navigation
                and responsive design across devices
              </li>
              <li>
                Leveraged Angular to create an interactive learning platform,
                focusing on seamless integration of video and audio components
              </li>
              <li>
                Spearheaded the development of a single-page application for
                their educational content delivery system
              </li>
            </ul>
          </div>

          <div>
            <h2>
              <Link
                href="https://web.archive.org/web/20140704184655/https://www.digitalgear.com/"
                target="_blank"
              >
                Digital Gear
              </Link>
            </h2>
            <h3>
              <strong>Junior Developer</strong>
            </h3>
            <p>
              <em>FEB 2012 &mdash; OCT 2014</em>
            </p>
            <ul>
              <li>
                Built responsive themes from scratch, focusing on
                client-friendly admin interfaces for easy content management
              </li>
              <li>
                Collaborated with design team to translate mockups into fully
                functional WordPress themes
              </li>
              <li>
                Gained proficiency in version control (Git) and agile
                development methodologies
              </li>
              <li>
                Implemented best practices in PHP and JavaScript to ensure theme
                performance and security
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
