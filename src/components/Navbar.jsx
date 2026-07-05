import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, PhoneCall } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const CONTACT_PHONE = '+91-90000-00000'; // TODO: replace with your real number

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/plans', label: t('nav.plans') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl italic font-bold text-navy">{t('brand')}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-marigold-dark' : 'text-navy/70 hover:text-navy'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, '')}`}
            className="flex items-center gap-1.5 rounded-full bg-navy px-3.5 py-1.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            <PhoneCall size={14} /> {t('nav.callUs')}
          </a>
          <LanguageToggle />
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-paper px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? 'text-marigold-dark' : 'text-navy/80'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, '')}`} className="mt-2 flex items-center gap-1.5 text-base font-medium text-navy">
              <PhoneCall size={16} /> {CONTACT_PHONE}
            </a>
            <LanguageToggle className="mt-2 self-start" />
          </nav>
        </div>
      )}
    </header>
  );
}
