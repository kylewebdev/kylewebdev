export default function Home() {
  return (
    <div className="flex flex-col gap-8 @container">
      <h1 className="text-heading-1 font-bold">
        <span>Full-Stack</span>
        <br />
        <span className="bg-clip-text text-transparent bg-muted-teal bg-dither">
          Web Developer
        </span>
      </h1>

      <p className="max-w-[50ch] text-soft-pewter text-body">
        I believe in the power of the web to connect, inform, and inspire.
        I&apos;m focused on translating creative ideas into dynamic, responsive,
        and scalable web applications.
      </p>

      <ul className="flex flex-col gap-8 @xl:flex-row @xl:gap-16">
        <li>
          <h3 className="text-special-numbers font-semibold">10+</h3>
          <p className="text-special-text text-soft-pewter uppercase max-w-[10ch]">
            Years of Experience
          </p>
        </li>
        <li>
          <h3 className="text-special-numbers font-semibold">40+</h3>
          <p className="text-special-text text-soft-pewter uppercase max-w-[10ch]">
            Websites Launched
          </p>
        </li>
        <li>
          <h3 className="text-special-numbers font-semibold">10,000+</h3>
          <p className="text-special-text text-soft-pewter uppercase max-w-[10ch]">
            Hours of Coding
          </p>
        </li>
      </ul>
    </div>
  );
}
