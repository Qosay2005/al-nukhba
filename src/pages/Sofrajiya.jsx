import ServiceGalleryPage from '../components/ServiceGalleryPage'
import video from '../assets/sofra/men/video_1.mp4'
import img_1 from '../assets/sofra/woman/img_1.PNG'
export default function Sofrajiya() {
  const categories = [
    {
      name: 'رجال',
      items: [
        /*
        {
          id: 1,
          type: 'image',
          src: '/images/sofrajiya/men-1.jpg',
          alt: 'طاقم سفرجية رجال',
        },
        */
        {
          id: 2,
          type: 'video',
          src: video,
          alt: 'طاقم سفرجية رجال',
        },
      ],
    },
    {
      name: 'نساء',
      items: [
        {
          id: 3,
          type: 'image',
          src: img_1,
          alt: 'طاقم سفرجية نساء',
        },
      ],
    },
  ]

  return (
    <ServiceGalleryPage
      title="طاقم السفرجية"
      description="نقدم لكم أفضل طاقم سفرجية لتلبية جميع مناسباتكم السعيدة."
      categories={categories}
    />
  )
}