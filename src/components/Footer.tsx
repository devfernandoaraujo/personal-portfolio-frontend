import { Linkedin, Github, Twitter } from 'lucide-react';

const SOCIALS = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://ca.linkedin.com/in/fernandomaraujo', Icon: Linkedin },
  { id: 'github', label: 'GitHub', href: 'https://github.com/devfernandoaraujo', Icon: Github },
  { id: 'twitter', label: 'Twitter / X', href: 'https://twitter.com/devfaraujo', Icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="fa-footer">
      <div className="fa-footer__inner">
        <div className="fa-footer__logo">
          fa<span>.</span>
        </div>
        <div className="fa-footer__copy">
          &copy; Fernando Araujo &middot; Available across Canada &amp; the US &middot; 2026
        </div>
        <div className="fa-footer__links">
          {SOCIALS.map(({ id, label, href, Icon }) => (
            <a
              key={id}
              className="fa-icon"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <Icon size={16} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
