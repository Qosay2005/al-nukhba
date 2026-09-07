import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

function GalleryItem({ item, onOpen }) {
  const isVideo = item.type === 'video'

  return (
    <button
      type="button"
      className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-md border border-gold-dark/30 bg-surface text-right focus:outline-none focus:ring-2 focus:ring-gold"
      onClick={() => onOpen(item)}
      aria-label={`فتح ${item.alt}`}
    >
      {isVideo ? (
        <video
          className="block h-auto max-h-136 w-full object-cover transition duration-500 group-hover:scale-105"
          muted
          loop
          autoPlay
          playsInline
          poster={item.poster}
        >
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          className="block h-auto max-h-136 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      )}
      <span className="absolute inset-0 bg-bg-base/0 transition-colors duration-300 group-hover:bg-bg-base/20" />
      {isVideo && (
        <span className="absolute inset-0 flex items-center justify-center text-gold" aria-hidden="true">
          <span className="flex size-12 items-center justify-center rounded-full border border-gold bg-bg-base/70 text-lg">
            تشغيل
          </span>
        </span>
      )}
    </button>
  )
}

function Lightbox({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-bg-base/95 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute left-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border border-gold-dark/50 text-ivory transition-colors hover:border-gold hover:text-gold"
        onClick={onClose}
        aria-label="إغلاق العرض"
      >
        <X size={22} aria-hidden="true" />
      </button>

      <div className="max-h-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
        {item.type === 'video' ? (
          <video
            className="max-h-[calc(100vh-2rem)] max-w-full object-contain sm:max-h-[calc(100vh-4rem)]"
            controls
            autoPlay
            muted
            playsInline
          >
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <img src={item.src} alt={item.alt} className="max-h-[calc(100vh-2rem)] max-w-full object-contain sm:max-h-[calc(100vh-4rem)]" />
        )}
      </div>
    </div>
  )
}

export default function ServiceGalleryPage({ title, description, categories }) {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [selectedItem, setSelectedItem] = useState(null)
  const activeItems = categories.find((category) => category.name === activeCategory.name)?.items ?? []

  return (
    <main dir="rtl" className="min-h-screen bg-bg-base px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium tracking-[0.25em] text-gold sm:text-sm">شركة النخبة</p>
          <h1 className="font-heading text-4xl leading-normal text-ivory sm:text-5xl">{title}</h1>
          <div className="mx-auto my-7 h-px w-20 bg-gold" aria-hidden="true" />
          <p className="text-sm leading-8 text-ivory/65 sm:text-base">{description}</p>
        </header>

        <nav className="mx-auto mt-12 flex max-w-md items-center justify-center gap-2 border-b border-gold-dark/30" aria-label="تصنيفات المعرض">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              className={`relative min-w-24 px-5 py-3 text-sm transition-colors duration-300 ${
                activeCategory.name === category.name ? 'text-gold' : 'text-ivory/55 hover:text-ivory'
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory.name === category.name}
            >
              {category.name}
              <span
                className={`absolute inset-x-3 -bottom-px h-px origin-center bg-gold transition-transform duration-300 ${
                  activeCategory.name === category.name ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="mt-10 columns-1 gap-4 transition-opacity duration-500 sm:columns-2 lg:columns-3">
          {activeItems.map((item) => (
            <GalleryItem key={item.id} item={item} onOpen={setSelectedItem} />
          ))}
        </div>
      </div>

      {selectedItem && <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </main>
  )
}