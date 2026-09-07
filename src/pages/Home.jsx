import { Link } from 'react-router-dom'
import Video from '../assets/video.mp4'
export default function Home() {
  return (
    <section
      dir="rtl"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-base px-5 py-32 text-center sm:px-8"
    >
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source
          src={Video}
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-bg-base/70" aria-hidden="true" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center">
        <p className="mb-5 font-body text-xs font-medium tracking-[0.25em] text-gold sm:text-sm">
          شركة النخبة
        </p>
        <h1 className="max-w-3xl font-heading text-4xl leading-normal text-ivory sm:text-5xl sm:leading-[1.45] lg:text-6xl">
          شركة النخبة لتلبية جميع مناسباتكم السعيدة
        </h1>
        <div className="my-8 h-px w-24 bg-gold sm:my-10" aria-hidden="true" />
        <Link
          to="/sofrajiya"
          className="border border-gold bg-gold px-8 py-3 font-body text-sm font-semibold text-bg-base transition-colors duration-300 hover:bg-gold-dark hover:text-ivory focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg-base"
        >
          تصفح خدماتنا
        </Link>
      </div>
    </section>
  )
}
