import ServiceGalleryPage from '../components/ServiceGalleryPage'

export default function Decoration() {
  const categories = [
    {
      name: 'تزيين قاعات عرس وكتب كتاب',
      items: [
        /*
        {
          id: 1,
          type: 'image',
          src: '/images/wedding/decoration-1.jpg',
          alt: 'تزيين قاعات عرس',
        },
        */
      ],
    },
    {
      name: 'تزيين قاعات حناء وجلبة الحناء',
      items: [
        /*
        {
          id: 2,
          type: 'image',
          src: '/images/wedding/henna-1.jpg',
          alt: 'تزيين قاعات حناء',
        },
        */
      ],
    },
     {
      name: 'تزيين سيارات',
      items: [
        /*
        {
          id: 2,
          type: 'image',
          src: '/images/wedding/henna-1.jpg',
          alt: 'تزيين قاعات حناء',
        },
        */
      ],
    },
  ]

  return (
    <ServiceGalleryPage
      title="تزيين"
      description="نقدم أجمل تجهيزات وتزيينات الأعراس والمناسبات."
      categories={categories}
    />
  )
}