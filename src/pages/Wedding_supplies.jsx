import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

import img_1 from '../assets/dj/men/img_1.jpeg'
import video from '../assets/video.mp4'

const mediaItems = [
  /*
  {
    id: 1,
    type: 'image',
    src: img_1,
    alt: 'لوازم أعراس',
  },
  {
    id: 2,
    type: 'image',
    src: img_2,
    alt: 'لوازم أعراس',
  },
  
  {
    id: 3,
    type: 'video',
    src: video,
    alt: 'فيديو لوازم الأعراس',
  },
  */
]

export default function Wedding_supplies() {
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    if (!selectedItem) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedItem(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedItem])

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-bg-base px-5 pb-20 pt-32 sm:px-8 lg:pt-40"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium tracking-[0.25em] text-gold sm:text-sm">
            شركة النخبة
          </p>

          <h1 className="font-heading text-4xl leading-normal text-ivory sm:text-5xl">
            لوازم الأعراس
          </h1>

          <div
            className="mx-auto my-7 h-px w-20 bg-gold"
            aria-hidden="true"
          />

          <p className="text-sm leading-8 text-ivory/65 sm:text-base">
            مجموعة من مستلزمات وتجهيزات الأعراس التي تضيف لمناسباتكم لمسة من
            الأناقة والفخامة.
          </p>
        </header>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {mediaItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-md border border-gold-dark/30 bg-surface focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label={`فتح ${item.alt}`}
            >
              {item.type === 'video' ? (
                <video
                  className="block h-auto max-h-136 w-full object-cover transition duration-500 group-hover:scale-105"
                  muted
                  loop
                  autoPlay
                  playsInline
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

              {item.type === 'video' && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-14 items-center justify-center rounded-full border border-gold bg-bg-base/70 text-sm text-gold">
                    تشغيل
                  </span>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-bg-base/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedItem(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedItem(null)}
            className="absolute left-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border border-gold-dark/50 text-ivory transition-colors hover:border-gold hover:text-gold"
            aria-label="إغلاق العرض"
          >
            <X size={22} />
          </button>

          <div
            className="max-h-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            {selectedItem.type === 'video' ? (
              <video
                className="max-h-[calc(100vh-2rem)] max-w-full object-contain sm:max-h-[calc(100vh-4rem)]"
                controls
                autoPlay
                playsInline
              >
                <source src={selectedItem.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="max-h-[calc(100vh-2rem)] max-w-full object-contain sm:max-h-[calc(100vh-4rem)]"
              />
            )}
          </div>
        </div>
      )}
    </main>
  )
}