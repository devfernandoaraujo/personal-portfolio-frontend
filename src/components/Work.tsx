'use client';

import { CSSProperties, useEffect, useState } from 'react';

interface Project {
  id: string;
  title: string;
  img: string;
  eyebrow: string;
  tags: string[];
  lenses: { it: string; startup: string; smb: string };
}

const PROJECTS: Project[] = [
  {
    id: 'chartai',
    title: 'ChartAI',
    img: '/images/portfolio/chartai.png',
    eyebrow: '2025–2026 · AI product',
    tags: ['React', 'React Native', 'AI / LLMs'],
    lenses: {
      it: "React web + React Native mobile sharing a typed core. Ambient audio capture → streaming transcription → LLM-structured clinical notes. HIPAA, PHIPA/PIPEDA, GDPR compliant from day one.",
      startup: "Joined as the engineer building the product. **Launched early 2025**, full UI rebrand shipping May 2026, on track for **1,000 paying clinicians in 12 months**.",
      smb: "Dental offices used to spend hours every evening typing up notes. ChartAI listens to the appointment and writes the chart for you — so the dentist stays with the patient.",
    },
  },
  {
    id: 'agiliza',
    title: 'Agiliza',
    img: '/images/portfolio/agiliza-dashboard.png',
    eyebrow: '2024 · Web app',
    tags: ['C#', 'ASP.NET', 'SQL Server'],
    lenses: {
      it: "ASP.NET MVC + EF Core + SQL Server. SignalR for live status. xUnit tests, Azure App Service with slot swaps. Audit logging + role-based access throughout.",
      startup: "Shipped solo from zero to production in 4 months. Owned discovery, design, build, deploy, on-call. **Replaced a 40-minute manual process with a 4-second service** — unblocking 12 analysts a day.",
      smb: "Internal portal that did one job well: stop your team copy-pasting between Excel files. Built it, deployed it, trained the staff. Five-figure annual savings on time alone.",
    },
  },
  {
    id: 'election',
    title: 'Election Estimator',
    img: '/images/portfolio/election-estimator.webp',
    eyebrow: '2023 · Side project',
    tags: ['React', 'Next.js', 'TypeScript'],
    lenses: {
      it: "Next.js app router, server components for shell, client islands for live charts. ISR on result pages, websockets for live counts. Vercel deploy.",
      startup: "Public-facing app, scoped + shipped solo. Hit **20k peak concurrent users** on election night without paging me once. Picked up by local journalists.",
      smb: "Live dashboard people actually trusted on a high-stakes night. The kind of polish your customers notice — and competitors don't bother with.",
    },
  },
];

const LENSES = [
  { id: 'it', label: 'IT Company', sub: 'Technical depth' },
  { id: 'startup', label: 'Startup', sub: 'Speed & ownership' },
  { id: 'smb', label: 'Small Biz', sub: 'Plain outcomes' },
] as const;

type LensId = 'it' | 'startup' | 'smb';

function useTypewriter(text: string, speed = 8) {
  const [displayed, setDisplayed] = useState(text);
  useEffect(() => {
    setDisplayed('');
    if (!text) return;
    let i = 0;
    const id = setInterval(() => {
      i += 3;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return displayed;
}

function ProjectCard({ project, lens }: { project: Project; lens: LensId }) {
  const text = project.lenses[lens];
  const displayed = useTypewriter(text);
  const lensLabel = LENSES.find((l) => l.id === lens)!.label;

  return (
    <article className="fa-card">
      <div
        className="fa-card__img"
        style={{ backgroundImage: `url(${project.img})` } as CSSProperties}
        role="img"
        aria-label={project.title}
      />
      <div className="fa-card__body">
        <div className="fa-eyebrow fa-eyebrow--teal">{project.eyebrow}</div>
        <h3 className="fa-card__title">{project.title}</h3>
        <div className="fa-card__ai-row">
          <span className="fa-card__ai-dot" aria-hidden="true" />
          <span className="fa-card__ai-lens">{lensLabel} view</span>
        </div>
        <p
          className="fa-card__desc"
          dangerouslySetInnerHTML={{
            __html: displayed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'),
          }}
        />
        <div className="fa-tags">
          {project.tags.map((t) => (
            <span key={t} className="fa-tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const [lens, setLens] = useState<LensId>('startup');

  return (
    <section className="fa-work" id="work">
      <span className="fa-anchor" id="portfolio" />
      <div className="fa-section__header">
        <div>
          <div className="fa-eyebrow">Work, your way</div>
          <h2 className="fa-section__title">
            Same projects.<br />Different lens.
          </h2>
          <p className="fa-section__sub">
            Switch the view — descriptions rewrite themselves for whoever is reading.
          </p>
        </div>
        <div className="fa-lens" role="group" aria-label="Select audience lens">
          {LENSES.map((l) => (
            <button
              key={l.id}
              className={`fa-lens__btn${lens === l.id ? ' is-active' : ''}`}
              onClick={() => setLens(l.id)}
              aria-pressed={lens === l.id}
            >
              <span className="fa-lens__btn-label">{l.label}</span>
              <span className="fa-lens__btn-sub">{l.sub}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="fa-work__grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} lens={lens} />
        ))}
      </div>
    </section>
  );
}
