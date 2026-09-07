import ServiceGalleryPage from '../components/ServiceGalleryPage'
import img_1 from '../assets/dj/men/img_1.jpeg'
export default function Dj() {
  const categories = [
    {
      name: 'رجال',
      items: [
        {
          id: 1,
          type: 'image',
          src: img_1,
          alt: 'دي جي رجال',
        },
      ],
    },
    {
      name: 'نساء',
      items: [
       
        /*
        {
          id: 2,
          type: 'video',
          src: '/videos/dj/women-1.mp4',
          alt: 'دي جي نساء',
        },
        */
       
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