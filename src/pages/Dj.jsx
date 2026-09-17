import ServiceGalleryPage from '../components/ServiceGalleryPage'
import img_1 from '../assets/dj/men/img_1.jpeg'
import img_2 from '../assets/dj/woman/img_2.jpg'
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
       
        
        {
          id: 1,
          type: 'image',
          src: img_2,
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