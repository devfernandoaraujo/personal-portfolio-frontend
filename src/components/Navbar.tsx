'use client';

import { useEffect, useState } from 'react';
import AIBadge from './ui/AIBadge';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToHero = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fa-nav${scrolled ? ' fa-nav--scrolled' : ''}`}>
      <div className="fa-nav__inner">
        <a href="#home" className="fa-nav__logo">
          fa<span className="fa-nav__dot">.</span>
        </a>
        <nav className="fa-nav__links" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="fa-nav__link">
              {l.label}
            </a>
          ))}
        </nav>
        <button className="fa-nav__cta" onClick={scrollToHero} aria-label="Open Ask Fernando chat">
          <AIBadge /> Ask Fernando
        </button>
      </div>
    </header>
  );
}
