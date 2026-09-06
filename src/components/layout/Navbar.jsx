import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/navLinks'
import WhatsAppButton from '../common/WhatsAppButton'
import Logo from '../../assets/Logo.png'

const navLinkClasses = ({ isActive }) =>
  `relative py-2 text-sm font-medium transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-center after:bg-gold after:transition-transform after:duration-300 ${
    isActive ? 'text-gold after:scale-x-100' : 'text-ivory/80 after:scale-x-0 hover:text-gold hover:after:scale-x-100'
  }`

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    if (!isMenuOpen) return
    const handleKey = (e) => e.key === 'Escape' && setIsMenuOpen(false)
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isMenuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-gold-dark/30 bg-bg-base/90 shadow-lg shadow-black/30 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div dir="ltr" className="mx-auto grid h-24 max-w-7xl grid-cols-2 items-center px-5 py-3 sm:px-8 lg:grid-cols-3">
        <div className="flex items-center justify-self-start">
          <NavLink to="/" className="group flex items-center" aria-label="سفرجية النخبة - الرئيسية">
            <img
              src={Logo}
              alt="شعار سفرجية النخبة"
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-20"
            />
             <span className="font-heading text-xl font-bold tracking-wide text-gold sm:text-2xl">طاقم النخبة</span>
          </NavLink>
        </div>

        <nav dir="rtl" className="hidden items-center justify-center gap-8 lg:flex" aria-label="التنقل الرئيسي">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-2">
          <div className="hidden lg:block">
            <WhatsAppButton />
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-ivory transition-colors duration-200 hover:bg-surface hover:text-gold lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-24 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
      <nav
        id="mobile-navigation"
        dir="rtl"
        aria-label="التنقل الرئيسي"
        className={`fixed inset-y-0 right-0 top-24 z-50 flex w-72 max-w-[80vw] flex-col gap-1 border-l border-gold-dark/30 bg-surface px-5 py-6 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `rounded-lg px-3 py-3 text-base transition-colors duration-200 ${
                isActive ? 'bg-gold/10 text-gold' : 'text-ivory/80 hover:bg-bg-base hover:text-gold'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
        <div className="mt-4 border-t border-gold-dark/20 pt-4">
          <WhatsAppButton className="w-full justify-center" />
        </div>
      </nav>
    </header>
  )
}