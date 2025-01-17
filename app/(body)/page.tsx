import { PageTitle } from '@/components/PageTitle';
import { Stats } from '@/components/Stats';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 @container">
      <PageTitle />

      <div className="prose prose-theme">
        <p>
          I believe in the power of the web to connect, inform, and inspire.
          I&apos;m focused on translating creative ideas into dynamic,
          responsive, and scalable web applications.
        </p>
      </div>

      <Stats />
    </div>
  );
}
