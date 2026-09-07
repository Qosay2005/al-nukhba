import ServiceGalleryPage from '../components/ServiceGalleryPage'

export default function WeddingSupplies() {
  const categories = [
    {
      name: 'تزيين قاعات عرس وكتب كتاب',
      items: [
        {
          id: 1,
          type: 'image',
          src: '/images/wedding/decoration-1.jpg',
          alt: 'تزيين قاعات عرس',
        },
      ],
    },
    {
      name: 'تزيين قاعات حناء وجلبة الحناء',
      items: [
        {
          id: 2,
          type: 'image',
          src: '/images/wedding/henna-1.jpg',
          alt: 'تزيين قاعات حناء',
        },
      ],
    },
  ]

  return (
    <ServiceGalleryPage
      title="لوازم الأعراس"
      description="نقدم أجمل تجهيزات وتزيينات الأعراس والمناسبات."
      categories={categories}
    />
  )
}