import ServiceGalleryPage from '../components/ServiceGalleryPage'

export default function Dj() {
  const categories = [
    {
      name: 'رجال',
      items: [
        {
          id: 1,
          type: 'image',
          src: '/images/dj/men-1.jpg',
          alt: 'دي جي رجال',
        },
      ],
    },
    {
      name: 'نساء',
      items: [
        {
          id: 2,
          type: 'video',
          src: '/videos/dj/women-1.mp4',
          alt: 'دي جي نساء',
        },
      ],
    },
  ]

  return (
    <ServiceGalleryPage
      title="دي جي"
      description="أجواء مميزة وموسيقى تناسب جميع مناسباتكم."
      categories={categories}
    />
  )
}