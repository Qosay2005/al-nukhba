import { MessageCircle } from 'lucide-react'

const whatsappUrl = 'https://wa.me/970597969574?text=مرحباً%20شركة%20النخبة';

export default function WhatsAppButton({ className = '' }) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 border border-gold px-4 py-2 text-sm font-semibold text-gold transition-colors duration-300 hover:bg-gold hover:text-bg-base ${className}`}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span>تواصل معنا</span>
    </a>
  )
}