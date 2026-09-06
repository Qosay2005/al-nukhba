import { NavLink } from 'react-router-dom'

import { navLinks } from '../../data/navLinks'
import { socialLinks } from '../../data/socialLinks'

import Logo from '../../assets/Logo.png'

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="border-t border-gold-dark/40 bg-surface px-5 py-10 sm:px-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">

        <div className="flex flex-col items-center justify-self-center text-center md:justify-self-start md:text-right">
          <NavLink
            to="/"
            className="group flex items-center"
            aria-label="طاقم النخبة - الرئيسية"
          >
            <img
              src={Logo}
              alt="شعار طاقم النخبة"
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-20"
            />

            <span className="font-heading text-xl font-bold tracking-wide text-gold sm:text-2xl">
              طاقم النخبة
            </span>
          </NavLink>
        </div>

        <div className="flex flex-col items-center justify-self-center text-center">
          <h3 className="font-heading text-lg font-bold text-gold">
            أقسام الخدمات
          </h3>

          <nav
            className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3"
            aria-label="روابط الصفحات"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-sm text-ivory/70 transition-colors duration-200 hover:text-gold"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-self-center text-center md:justify-self-end md:text-right">
          <h3 className="font-heading text-lg font-bold text-gold">
            قنوات التواصل
          </h3>

          <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
            {socialLinks.map(({ label, url, icon: Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex items-center gap-2 rounded-md border border-gold-dark/40 bg-bg-base px-3 py-2 text-sm text-ivory/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <Icon
                  size={17}
                  aria-hidden="true"
                />

                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-gold-dark/20 pt-5">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-xs text-ivory/50">
            © 2026 طاقم النخبة. جميع الحقوق محفوظة.
          </p>

          <p className="text-xs text-ivory/50">
            تم إنشاء الموقع بواسطة المهندس قصي رائد قلالوة
          </p>
        </div>
      </div>
    </footer>
  )
}