import Image from 'next/image'
import Banner from '@public/project.png'

export const CarouselItem = () => {
     return (
          <Image
               src={Banner}
               alt="Slide Enersok"
               className="max-h-[321px] w-full rounded-xl"
          />
     )
}