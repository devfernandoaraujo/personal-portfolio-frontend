'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import AIBadge from './ui/AIBadge';
import TypingDots from './ui/TypingDots';
import { useAsk } from '@/hooks/useAsk';

const HERO_PROMPTS = [
  "What does Fernando do?",
  "Is he available?",
  "Show me his best project",
  "How does he work with AI?",
];

function renderMarkdown(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

export default function Hero() {
  const [activeQ, setActiveQ] = useState(HERO_PROMPTS[0]);
  const [draft, setDraft] = useState('');
  const { ask, answer, isStreaming, error } = useAsk();

  useEffect(() => {
    ask(HERO_PROMPTS[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAsk = (q: string) => {
    if (!q.trim()) return;
    setActiveQ(q);
    setDraft('');
    ask(q);
  };

  const displayAnswer = error
    ? "I'm offline at the moment — try the contact form below."
    : answer;

  return (
    <section className="fa-hero--ai" id="home">
      <div className="fa-hero__left">
        <div className="fa-hero__statusrow">
          <span className="fa-hero__livedot" />
          <span className="fa-hero__livetext">Fernando Araujo · Full-stack software engineer</span>
        </div>
        <h1 className="fa-hero__title">
          Hi, I&apos;m Fernando.<br />
          <span className="fa-hero__title--accent">I turn great ideas into ready solutions.</span>
        </h1>
        <p className="fa-hero__sub">
          Full-stack software engineer building production apps in{' '}
          <strong>React, Next.js, TypeScript</strong> and <strong>C# / .NET</strong> — now
          shipping AI products like <strong>ChartAI</strong>. Ask the assistant about my work,
          stack, or availability.
        </p>
        <div className="fa-hero__meta">
          <span className="fa-meta-item">
            <span className="fa-meta-dot fa-meta-dot--green" /> Available now
          </span>
          <span className="fa-meta-item">
            <span className="fa-meta-dot" /> Remote · Canada &amp; US
          </span>
          <span className="fa-meta-item">
            <span className="fa-meta-dot" /> Full-stack · AI
          </span>
        </div>
      </div>

      <div className="fa-hero__right">
        <div className="fa-chat">
          <div className="fa-chat__head">
            <span className="fa-chat__avatar">
              <Image src="/images/myself.webp" alt="Fernando Araujo" width={40} height={40} />
              <span className="fa-chat__avatar-pulse" />
            </span>
            <div>
              <div className="fa-chat__name">
                Ask Fernando <AIBadge />
              </div>
              <div className="fa-chat__status">Online · responds in &lt;1s</div>
            </div>
          </div>

          <div className="fa-chat__body">
            <div className="fa-chat__msg fa-chat__msg--user">{activeQ}</div>
            <div className="fa-chat__msg fa-chat__msg--ai">
              {isStreaming && !answer ? (
                <TypingDots />
              ) : (
                <>
                  <span
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(displayAnswer) }}
                  />
                  {isStreaming && <span className="fa-cursor" />}
                </>
              )}
              {!isStreaming && displayAnswer && (
                <div className="fa-chat__sources">
                  <span className="fa-chat__source">portfolio.json</span>
                  <span className="fa-chat__source">resume.pdf</span>
                </div>
              )}
            </div>
          </div>

          <div className="fa-chat__prompts">
            <div className="fa-chat__prompts-label">Try asking:</div>
            <div className="fa-chat__prompts-row">
              {HERO_PROMPTS.map((p) => (
                <button
                  key={p}
                  className={`fa-prompt${p === activeQ ? ' is-active' : ''}`}
                  onClick={() => handleAsk(p)}
                >
                  {p}
                </button>
              ))}
            </div>
            <div className="fa-chat__inputrow">
              <input
                className="fa-chat__input"
                placeholder="Or type your own question…"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAsk(draft)}
                aria-label="Ask Fernando a question"
              />
              <button
                className="fa-chat__send"
                onClick={() => handleAsk(draft)}
                aria-label="Send question"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
