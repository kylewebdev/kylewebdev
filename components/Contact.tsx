import { ContactForm } from '@/components/ContactForm';

export function Contact() {
  return (
    <div className="flex flex-col gap-16">
      <h1 className="text-heading-1 font-bold" aria-level="2">
        <span>Let&apos;s Work</span>
        <br />
        <span className="bg-clip-text text-transparent bg-muted-teal bg-dither">
          Together
        </span>
      </h1>

      <div className="prose prose-theme">
        <p>
          Have a project in mind or an idea you&apos;d like to bring to life?
          I&apos;m always excited to collaborate on meaningful work that blends
          creativity and functionality. Whether it&apos;s building a sleek web
          application or exploring innovative solutions, let&apos;s make it
          happen together! Fill out the form below, and I&apos;ll get back to
          you soon.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
