export function PageTitle({
  titleStart,
  titleEnd,
}: {
  titleStart?: string;
  titleEnd?: string;
}) {
  return (
    <h1 className="text-heading-1 font-bold" aria-level={1}>
      <span>{titleStart || 'Full-Stack'}</span>
      <br />
      <span className="bg-clip-text text-transparent bg-muted-teal bg-dither">
        {titleEnd || 'Web Developer'}
      </span>
    </h1>
  );
}
