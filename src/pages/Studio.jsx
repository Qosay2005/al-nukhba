import ServiceGalleryPage from '../components/ServiceGalleryPage'
import video from '../assets/studio/women/video.mp4'
import img_1 from '../assets/studio/women/img_1.jpeg'
import video_men from '../assets/studio/men/video_men.mp4'
export default function Studio() {
  const categories = [
    {
      name: 'رجال',
      items: [
      
        {
          id: 1,
          type: 'image',
          src: img_1,
          alt: 'تصوير رجال',
        },
        {
          id: 2,
          type: 'video',
          src: video_men,
          alt: 'تصوير رجال',
        }
      ],
    },
    {
      name: 'نساء',
      items: [
        {
          
          id: 1,
          type: 'image',
          src: img_1,
          alt: 'تصوير نساء',
        }, 
        {
          
          id: 2,
          type: 'video',
          src: video,
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