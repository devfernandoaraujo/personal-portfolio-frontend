import Image from 'next/image';

export default function About() {
  return (
    <section className="fa-about" id="about">
      <div className="fa-about__photo">
        <Image
          src="/images/myself.webp"
          alt="Fernando Araujo"
          width={340}
          height={425}
          priority
        />
      </div>
      <div className="fa-about__copy">
        <div className="fa-eyebrow">About me</div>
        <h2 className="fa-section__title">Who I am</h2>
        <p className="fa-about__p">
          I&apos;m a passionate, creative problem-solver in the web development arena. For the
          last several years I&apos;ve been building enterprise and portal applications for the
          financial market in C# — and lately, AI products in React and Next.js.
        </p>
        <p className="fa-about__p">
          I&apos;m hands-on in all stages of the software development cycle, from planning to
          deployment. Every day is different: analyzing algorithms, altering code, fixing bugs,
          brainstorming ideas, or integrating new systems.
        </p>
        <p className="fa-about__p">
          Outside of work I love practicing sports and meeting new people — running, volleyball
          and handball keep me moving. In the winter, it&apos;s self-improvement books.
        </p>
        <div className="fa-about__actions">
          <a
            className="fa-btn fa-btn--primary"
            href="/resume/Fernando_Resume.pdf"
            download="Fernando Araujo — Resume.pdf"
          >
            Download resume
          </a>
          <a
            className="fa-btn fa-btn--ghost"
            href="https://github.com/devfernandoaraujo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
