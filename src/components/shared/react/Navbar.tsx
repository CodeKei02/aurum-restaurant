import { useState, useEffect } from 'react';
import { Button } from '@/components/shared/react/Button';

const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nuestra Historia', href: '#historia' },
  { label: 'Menú', href: '#menu' },
  { label: 'Ambiente', href: '#ambiente' },
];

function DiamondIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-gold)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-20 bg-dark/88 backdrop-blur-sm">
      <div className="flex items-center justify-between h-full px-6 md:px-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 no-underline">
          <DiamondIcon />
          <span className="font-heading text-gold text-[28px] font-semibold tracking-[4px] leading-none">
            AURUM
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-12 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-[13px] font-normal text-text-secondary tracking-wider no-underline transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <Button
          href="#reservaciones"
          className="hidden md:inline-block py-3 px-8"
        >
          RESERVAR
        </Button>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="flex md:hidden relative z-50 flex-col items-center justify-center gap-1.5 w-10 h-10 bg-transparent border-0 cursor-pointer p-0"
        >
          <span
            className={`block h-px w-6 bg-gold transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-gold transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`block h-px w-6 bg-gold transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 bottom-[-200px] h-screen z-40 flex flex-col items-center justify-center bg-dark backdrop-blur-xl transition-opacity duration-500 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <ul className="flex flex-col items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} className="overflow-hidden">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block font-heading text-[32px] font-light text-text-secondary tracking-[4px] no-underline transition-all duration-500 hover:text-white ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${i * 75 + 100}ms` }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          href="#reservaciones"
          onClick={() => setOpen(false)}
          className={`mt-12 py-3.5 px-10 transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          style={{ transitionDelay: `${NAV_LINKS.length * 75 + 100}ms` }}
        >
          RESERVAR
        </Button>
      </div>
    </nav>
  );
}
