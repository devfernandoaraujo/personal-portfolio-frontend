'use client';

import { CSSProperties, useEffect, useState } from 'react';
import Image from 'next/image';
import AIBadge from './ui/AIBadge';

interface Skill {
  name: string;
  src?: string;
  mono?: string;
  color: string;
  cat: string;
  years: number;
  level: 'expert' | 'advanced' | 'intermediate';
  featured?: boolean;
  blurb: string;
}

const SKILLS: Skill[] = [
  { name: 'AI / LLMs', mono: 'AI', color: '#D97757', cat: 'AI', years: 2, level: 'advanced', featured: true, blurb: "Claude + OpenAI SDKs, RAG with pgvector, tool-calling, streaming UIs. The assistant you're talking to in the hero is mine — built and shipped as part of this very site's rebrand." },
  { name: 'React', src: '/images/skills/react.svg', color: '#61DAFB', cat: 'Frontend', years: 5, level: 'expert', blurb: "Built a half-dozen production SPAs in React. Recent: hooks, suspense, server components. Comfortable with React Query, Zustand, RHF." },
  { name: 'TypeScript', src: '/images/skills/typescript.svg', color: '#3178C6', cat: 'Frontend', years: 4, level: 'expert', blurb: "Default for any new project. Strict mode, generics, branded types — the works. I write TS so the compiler catches the bug for me." },
  { name: 'Next.js', mono: 'NX', color: '#0A0A0A', cat: 'Frontend', years: 3, level: 'expert', blurb: "App router, server actions, ISR, edge runtime. This very site is Next.js 15. I've shipped Next apps to Vercel and self-hosted." },
  { name: 'Tailwind', mono: 'TW', color: '#38BDF8', cat: 'Frontend', years: 3, level: 'advanced', blurb: "Utility-first by default. I lean on @apply for component libraries and tailwind-merge for variants. Faster than any CSS-in-JS I've used." },
  { name: 'JavaScript', src: '/images/skills/javascript.svg', color: '#F7DF1E', cat: 'Frontend', years: 7, level: 'expert', blurb: "Where I started. Modern ES, browser APIs, performance work. I still reach for plain JS for small tools." },
  { name: 'HTML/CSS', src: '/images/skills/html.svg', color: '#E34F26', cat: 'Frontend', years: 8, level: 'expert', blurb: "Semantic HTML, modern CSS — grid, container queries, :has(), color-mix. I care about accessibility and zero-CLS loads." },
  { name: 'C#', src: '/images/skills/c-sharp.svg', color: '#9B4F96', cat: 'Backend', years: 6, level: 'expert', blurb: "My deepest stack. Six years across ASP.NET MVC, Web API, WPF, and Windows services. Strong on LINQ, async, EF Core." },
  { name: '.NET 8', mono: '.NET', color: '#512BD4', cat: 'Backend', years: 6, level: 'expert', blurb: ".NET 8 LTS is my current target — minimal APIs, AOT, native interop. Migrating older .NET Framework projects to .NET 8 is half my work." },
  { name: 'ASP.NET', src: '/images/skills/asp-net.webp', color: '#5E2DDB', cat: 'Backend', years: 6, level: 'expert', blurb: "Built B2B portals, REST APIs, identity flows. Comfortable from controllers down to middleware and custom auth handlers." },
  { name: 'EF Core', mono: 'EF', color: '#68217A', cat: 'Backend', years: 5, level: 'advanced', blurb: "Code-first migrations, query optimization, split queries, raw SQL when EF gets in the way. I know when to drop down to Dapper." },
  { name: 'SQL Server', mono: 'SQL', color: '#CC2927', cat: 'Data', years: 6, level: 'advanced', blurb: "Daily driver for enterprise work. Comfortable writing query plans, indexed views, stored procs — and knowing when not to." },
  { name: 'PostgreSQL', mono: 'PG', color: '#336791', cat: 'Data', years: 3, level: 'advanced', blurb: "JSONB, CTEs, window functions, pgvector for embeddings. My go-to for greenfield projects outside the MS stack." },
  { name: 'Azure', mono: 'AZ', color: '#0078D4', cat: 'Cloud', years: 4, level: 'advanced', blurb: "App Service, Functions, Service Bus, Key Vault, Application Insights. The .NET-native cloud — I treat it as an extension of the runtime." },
  { name: 'Docker', mono: 'DO', color: '#2496ED', cat: 'Cloud', years: 4, level: 'advanced', blurb: "Multi-stage builds, slim images, docker-compose for local dev. I containerize everything that ships." },
  { name: 'Git', src: '/images/skills/git.svg', color: '#F05032', cat: 'Cloud', years: 7, level: 'expert', blurb: "Trunk-based, conventional commits, signed tags. I run code review like a referee, not a critic." },
  { name: 'Node.js', mono: 'NODE', color: '#5FA04E', cat: 'Backend', years: 4, level: 'advanced', blurb: "Express, Fastify, and a lot of one-off scripts. I treat Node as the glue between systems — not the system itself." },
  { name: 'Testing', mono: 'QA', color: '#15803D', cat: 'Quality', years: 5, level: 'advanced', blurb: "xUnit for .NET, Vitest + Playwright for the frontend. I test behaviour, not implementation — flaky tests get fixed or deleted." },
];

function useTypewriter(text: string, speed = 10) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    if (!text) return;
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return displayed;
}

function SkillGlyph({ skill, size = 42 }: { skill: Skill; size?: number }) {
  if (skill.src) {
    return (
      <Image
        src={skill.src}
        alt={skill.name}
        width={size}
        height={size}
        style={{ objectFit: 'contain' }}
      />
    );
  }
  return (
    <span
      className="fa-skillmap__mono"
      style={{ '--skill-color': skill.color } as CSSProperties}
      aria-label={skill.name}
    >
      {skill.mono}
    </span>
  );
}

export default function SkillMap() {
  const [activeName, setActiveName] = useState('AI / LLMs');
  const active = SKILLS.find((s) => s.name === activeName) ?? SKILLS[0];
  const blurb = useTypewriter(active.blurb);

  return (
    <section className="fa-skills--map" id="stack">
      <span className="fa-anchor" id="skill" />
      <div className="fa-skills__inner">
        <div className="fa-section__header">
          <div>
            <div className="fa-eyebrow">Skill map</div>
            <h2 className="fa-section__title">Hover a skill. See how I use it.</h2>
            <p className="fa-section__sub">
              Not a static logo wall — every skill has context, years of use, and a real example
              from my work.
            </p>
          </div>
        </div>

        <div className="fa-skillmap">
          <div className="fa-skillmap__grid">
            {SKILLS.map((s) => (
              <button
                key={s.name}
                className={`fa-skillmap__node${s.name === activeName ? ' is-active' : ''}${s.featured ? ' is-featured' : ''}`}
                style={{ '--skill-color': s.color } as CSSProperties}
                onMouseEnter={() => setActiveName(s.name)}
                onFocus={() => setActiveName(s.name)}
                aria-label={`${s.name}, ${s.years} years, ${s.level}`}
              >
                <span className="fa-skillmap__node-ring" aria-hidden="true" />
                {s.featured && <span className="fa-skillmap__node-flag">Featured</span>}
                <SkillGlyph skill={s} />
                <span className="fa-skillmap__node-name">{s.name}</span>
                <span className="fa-skillmap__node-years">{s.years}yr</span>
              </button>
            ))}
          </div>

          <div className="fa-skillmap__panel" aria-live="polite">
            <div className="fa-skillmap__panel-head">
              <div className="fa-skillmap__panel-icon">
                <SkillGlyph skill={active} size={28} />
              </div>
              <div>
                <div className="fa-skillmap__panel-title">{active.name}</div>
                <div className="fa-skillmap__panel-meta">
                  <span className="fa-level">{active.level}</span>
                  <span>{active.years} years</span>
                </div>
              </div>
              <AIBadge size="md" />
            </div>
            <div className="fa-skillmap__panel-body">
              <div className="fa-skillmap__quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="fa-skillmap__quote">
                {blurb}
                <span className="fa-cursor" aria-hidden="true" />
              </p>
              <div className="fa-skillmap__panel-foot">
                <span className="fa-chat__source">resume.pdf</span>
                <span className="fa-chat__source">github.com/devfernandoaraujo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
