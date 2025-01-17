export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`@/content/thoughts/${slug}.mdx`);

  return (
    <div className="prose prose-theme">
      <Post />
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'from-solo-dev-to-full-stack' },
    { slug: 'gamifying-productivity' },
    { slug: 'the-tools-that-shaped-my-development-journey' },
  ];
}

export const dynamicParams = false;
