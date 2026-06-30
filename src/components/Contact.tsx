'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const CHANNELS = [
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: 'contact@fernandomatosaraujo.com',
    href: 'mailto:contact@fernandomatosaraujo.com',
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/fernandomaraujo',
    href: 'https://ca.linkedin.com/in/fernandomaraujo',
  },
  {
    id: 'github',
    icon: Github,
    label: 'GitHub',
    value: 'devfernandoaraujo',
    href: 'https://github.com/devfernandoaraujo',
  },
  {
    id: 'location',
    icon: MapPin,
    label: 'Location',
    value: 'Remote · Canada & US',
    href: null,
  },
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setFormState('submitting');
    setErrorMsg('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message, _hp: data._hp }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({ message: 'Something went wrong' }));
        throw new Error(json.message || 'Something went wrong');
      }
      setFormState('success');
      form.reset();
    } catch (err) {
      setErrorMsg((err as Error).message);
      setFormState('error');
    }
  };

  return (
    <section className="fa-contact" id="contact">
      <span className="fa-anchor" id="contacts" />
      <div className="fa-contact__inner">
        <div className="fa-contact__copy">
          <div className="fa-eyebrow">Contact</div>
          <h2 className="fa-section__title">Let&apos;s build something.</h2>
          <p className="fa-section__sub">
            Drop me a line — or skip the form and use the AI assistant in the hero to ask about
            my availability first.
          </p>
          <ul className="fa-channels" aria-label="Contact channels">
            {CHANNELS.map((c) => {
              const Icon = c.icon;
              return (
                <li className="fa-channel" key={c.id}>
                  <span className="fa-channel__icon" aria-hidden="true">
                    <Icon size={17} strokeWidth={1.5} />
                  </span>
                  <span className="fa-channel__text">
                    <span className="fa-channel__label">{c.label}</span>
                    {c.href ? (
                      <a
                        className="fa-channel__value"
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="fa-channel__value">{c.value}</span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <form className="fa-form" onSubmit={handleSubmit} noValidate>
          {formState === 'success' ? (
            <div className="fa-form__success">
              <div className="fa-form__success-mark">&#10003;</div>
              <div>
                <div className="fa-form__success-title">Message sent.</div>
                <div className="fa-form__success-sub">I&apos;ll be in touch within 24h.</div>
              </div>
            </div>
          ) : (
            <>
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" required minLength={2} maxLength={100} />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="you@email.com" required />
              </label>
              <label className="fa-form__full">
                Message
                <textarea name="message" rows={4} placeholder="Tell me about your project…" required minLength={10} maxLength={4000} />
              </label>
              {/* honeypot */}
              <input
                name="_hp"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1 }}
              />
              {formState === 'error' && (
                <p className="fa-form__full" style={{ color: 'var(--status-error, #d33d3d)', fontSize: 14, margin: 0 }}>
                  {errorMsg}
                </p>
              )}
              <button
                type="submit"
                className="fa-btn fa-btn--primary fa-form__submit"
                disabled={formState === 'submitting'}
              >
                {formState === 'submitting' ? 'Sending…' : 'Send message →'}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
