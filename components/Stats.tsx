export function Stats() {
  return (
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
        <p className="text-special-text text-soft-pewter uppercase max-w-[12ch]">
          Hours of Coding
        </p>
      </li>
    </ul>
  );
}
