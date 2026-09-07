import ServiceGalleryPage from '../components/ServiceGalleryPage'

export default function Studio() {
  const categories = [
    {
      name: 'رجال',
      items: [
        {
          id: 1,
          type: 'image',
          src: '/images/studio/men-1.jpg',
          alt: 'تصوير رجال',
        },
      ],
    },
    {
      name: 'نساء',
      items: [
        {
          id: 2,
          type: 'image',
          src: '/images/studio/women-1.jpg',
          alt: 'تصوير نساء',
        },
      ],
    },
  ]

  return (
    <ServiceGalleryPage
      title="ستوديو التصوير"
      description="نوثق أجمل لحظاتكم بأعلى جودة واحترافية."
      categories={categories}
    />
  )
}