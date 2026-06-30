const TESTIMONIALS = [
  {
    quote:
      "Good professional, dedicated, uses his best for the company. Fernando has impressive technical knowledge, always ready to help everyone. Great team mate.",
    name: 'IT Engineering Coordinator',
    role: 'Worked with Fernando on the same team',
    initials: 'IT',
  },
  {
    quote:
      "Fernando is a very smart, proactive and fast developer. Clean, well documented and easy to understand code even in Auth/Sockets technologies. I am really glad that I had the opportunity to work with him.",
    name: 'Rafael',
    role: "Development Coordinator · Fernando's client",
    initials: 'R',
  },
  {
    quote:
      "Fernando is a very dedicated and capable professional in everything he does. He has a very analytical focus to solve problems, always seeking to solve them at their root.",
    name: 'IT Coordinator',
    role: 'Worked with Fernando on the same team',
    initials: 'IT',
  },
];

export default function Testimonials() {
  return (
    <section className="fa-testimonials">
      <div className="fa-testimonials__inner">
        <div className="fa-section__header">
          <div>
            <div className="fa-eyebrow">Testimonials</div>
            <h2 className="fa-section__title">What clients say</h2>
            <p className="fa-section__sub">
              In their own words — colleagues, clients and tech leads I&apos;ve shipped with.
            </p>
          </div>
        </div>
        <div className="fa-testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <figure className="fa-quote" key={t.role + t.name}>
              <div className="fa-quote__mark" aria-hidden="true">&ldquo;</div>
              <blockquote className="fa-quote__text">{t.quote}</blockquote>
              <figcaption className="fa-quote__by">
                <span className="fa-quote__avatar" aria-hidden="true">{t.initials}</span>
                <span className="fa-quote__who">
                  <span className="fa-quote__name">{t.name}</span>
                  <span className="fa-quote__role">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
