import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navLinks'
import { socialLinks } from '../../data/socialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-gold-dark/70 bg-surface px-5 py-10 sm:px-8">
      <div dir="ltr" className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-right">
        <NavLink to="/" className="font-heading text-2xl font-bold tracking-wide text-gold" aria-label="سفرجية النخبة - الرئيسية">
          النخبة
        </NavLink>

        <nav dir="rtl" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3" aria-label="روابط الصفحات">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className="text-sm text-ivory/70 transition-colors hover:text-gold">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div dir="rtl" className="flex flex-wrap items-center justify-center gap-5">
          {socialLinks.map(({ label, url, icon: Icon }) => (
            <a key={label} href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ivory/70 transition-colors hover:text-gold" aria-label={label}>
              <Icon size={17} aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}