import { Contact } from '@/components/Contact';
import { PageTitle } from '@/components/PageTitle';
import Link from 'next/link';

export default function Experience() {
  return (
    <div className="flex flex-col gap-32">
      <div className="flex flex-col gap-16">
        <PageTitle titleStart="Professional" titleEnd="Experience" />

        {/* <div className="flex flex-col gap-12 max-w-[70ch]">
          <div className="prose prose-theme">
            <h3 className="text-heading-2">Coding Proficiency:</h3>
            <p>
              JavaScript, TypeScript, PHP, HTML, CSS, Tailwind CSS, SQL,
              PostgreSQL, MySQL, MongoDB, Git, WordPress, Next.js, React, Vue,
            </p>
          </div>
        </div> */}

        <div className="flex flex-col gap-12 max-w-[70ch]">
          <div className="prose prose-theme">
            <h2>Freelancing</h2>
            <p>
              <em>2014 &mdash; Present</em>
            </p>
            <ul>
              <li>
                Designed and delivered custom websites for diverse clients,
                prioritizing functionality, performance, and user experience.
              </li>
              <li>
                Collaborated directly with clients to define project scopes and
                deliver tailored solutions that met business needs.
              </li>
              <li>
                Implemented SEO strategies to enhance site visibility and drive
                organic traffic growth.
              </li>
              <li>
                Developed and maintained long-term client relationships,
                ensuring consistent quality and reliability.
              </li>
              <li>
                Integrated modern tools and frameworks, enabling clients to
                manage content efficiently.
              </li>
            </ul>
          </div>
          <div className="prose prose-theme">
            <h3 className="text-heading-2">
              <Link href="https://jointmedias.com" target="_blank">
                Joint Medias
              </Link>
            </h3>
            <h3>
              <strong>Full-Stack Web Developer</strong>
            </h3>
            <p>
              <em>February 2015 &mdash; Present</em>
            </p>
            <ul>
              <li>
                Developed a wide range of web projects, from static sites to
                complex, API-driven React applications, within a fast-paced
                agency setting.
              </li>
              <li>
                Mentored junior developers, combining hands-on coding with
                strategic leadership to promote team growth and successful
                project execution.
              </li>
              <li>
                Delivered impactful results for a national self-improvement
                website, achieving:
                <ul>
                  <li>10% increase in average session duration.</li>
                  <li>15% decrease in bounce rate.</li>
                  <li>Over 300,000 monthly page views.</li>
                </ul>
              </li>
              <li>
                Spearheaded technology stack decisions, integrating modern
                frameworks and best practices to enhance the agency&apos;s
                development capabilities.
              </li>
              <li>
                Collaborated with designers to create high-impact, fully
                manageable websites, significantly improving client metrics.
              </li>
              <li>
                Optimized workflows, reducing project development time while
                maintaining code quality and accuracy.
              </li>
            </ul>
          </div>

          <div className="prose prose-theme">
            <h2>
              <Link
                href="https://web.archive.org/web/20140704184655/https://www.digitalgear.com/"
                target="_blank"
              >
                Digital Gear
              </Link>
            </h2>
            <h3>
              <strong>Intern Developer</strong>
            </h3>
            <p>
              <em>February 2012 &mdash; October 2014</em>
            </p>
            <ul>
              <li>
                Built and maintained custom WordPress themes, transitioning from
                intern to junior developer.
              </li>
              <li>
                Created responsive themes from scratch with client-friendly
                admin interfaces for streamlined content management.
              </li>
              <li>
                Leveraged PHP and JavaScript best practices to ensure theme
                performance and security.
              </li>
              <li>
                Collaborated with designers to transform mockups into fully
                functional WordPress themes.
              </li>
              <li>
                Gained experience with version control systems (Git) and agile
                development workflows.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
