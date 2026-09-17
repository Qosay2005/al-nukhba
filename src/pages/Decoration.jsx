import ServiceGalleryPage from '../components/ServiceGalleryPage'
import video_1A from'../assets/decoration/video_1A.mp4'
import video_2A from'../assets/decoration/video_2A.mp4'
import video_3A from'../assets/decoration/video_3A.mp4'
import img_1A from '../assets/decoration/img_1A.jpeg'
import video_1B from '../assets/decoration/video_1B.mp4'
import video_2B from '../assets/decoration/video_2B.mp4'
import video_3C from '../assets/decoration/video_3C.mp4'
export default function Decoration() {
  const categories = [
    {
      name: 'تزيين قاعات عرس وكتب كتاب',
      items: [
        
        {
          id: 1,
          type: 'video',
          src: video_1A,
          alt: 'تزيين قاعات عرس',
        },
        {
          id: 2,
          type: 'video',
          src: video_2A,
          alt: 'تزيين قاعات عرس',
        },
        {
          id: 3,
          type: 'video',
          src: video_3A,
          alt: 'تزيين قاعات عرس',
        },{
          id: 4,
          type: 'image',
          src: img_1A,
          alt: 'تزيين قاعات عرس',
        }
      ],
    },
    {
      name: 'تزيين قاعات حناء وجلبة الحناء',
      items: [
        
        {
          id: 1,
          type: 'video',
          src: video_1B,
          alt: 'تزيين قاعات حناء',
        },
        {
          id: 2,
          type: 'video',
          src: video_2B,
          alt: 'تزيين قاعات حناء',
        }
        
      ],
    },
     {
      name: 'تزيين سيارات',
      items: [
        
        {
          id: 1,
          type: 'video',
          src: video_3C,
          alt: 'تزيين سيارات',
        },
        
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