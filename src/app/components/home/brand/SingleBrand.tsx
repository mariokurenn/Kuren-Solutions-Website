import Image from 'next/image'
import Slider from 'react-infinite-logo-slider'

const SingleBrand = ({ brand }: { brand: any }) => {
  const { image, title, darkImg } = brand

  return (
    <Slider.Slide>
      <div className='flex items-center'>
        <Image
          src={image}
          alt={title}
          height={90}
          width={450}

          style={{filter:'invert(1)', objectFit: 'contain', width:'300px'}}
          className='dark:hidden swiper-logo-image h-12'
        />
        <Image
          src={darkImg}
          alt={title}
                    height={90}
          width={450}
          style={{objectFit: 'contain', width:'300px'}}
          className='dark:block hidden swiper-logo-image h-10'
        />
      </div>
    </Slider.Slide>
  )
}

export default SingleBrand
