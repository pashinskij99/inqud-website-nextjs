import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledTutorialCartPlayButtonWrapper,
  StyledTutorialCartWrapper,
  StyledTutorialWrapper,
} from './Tutorial.styled'
import image1 from '@/assets/images/api/tutorials/image1.png'
import image2 from '@/assets/images/api/tutorials/image2.png'
import image3 from '@/assets/images/api/tutorials/image3.png'
import Play from '@/assets/images/api/tutorials/play.svg'
import { StyledLoadMoreLarge } from '@/components/UI/Button/Button.styled'

const tutorials = [
  {
    id: 0,
    title: 'Understanding blockchain technology',
    image: image1.src,
  },
  {
    id: 1,
    title: 'Expand payments provider line up',
    image: image2.src,
  },
  {
    id: 2,
    title: 'Reduce transaction cost',
    image: image3.src,
  },
]

export default function Tutorial() {
  return (
    <StyledTutorialWrapper className='tutorial'>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          Tutorials
        </StyledTypographyUrbanistH2>

        <div className='grid desktopAndLaptop'>
          {tutorials.map(({ id, image, title }) => (
            <TutorialCart key={id} imageSrc={image} title={title} />
          ))}
        </div>

        <div className='grid tabletAndMobile'>
          <Swiper
            scrollbar={{
              dragSize: 200 / 3,
              horizontalClass: 'swiper-scrollbar',
              hide: true,
            }}
            modules={[Scrollbar]}
            updateOnWindowResize
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 8,
                loop: true,
                initialSlide: 1,
                centeredSlides: true,
              },
              420: {
                slidesPerView: 'auto',
                spaceBetween: 24,
                loop: false,
                initialSlide: 0,
                centeredSlides: false,
              },
            }}
            className='grid-swiper'
          >
            {tutorials.map(({ id, image, title }) => (
              <SwiperSlide className='grid-swiper-slide' key={id}>
                <TutorialCart imageSrc={image} title={title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <StyledLoadMoreLarge className='load-more'>
          <StyledTypographyUrbanistBody>Load more</StyledTypographyUrbanistBody>
        </StyledLoadMoreLarge>
      </div>
    </StyledTutorialWrapper>
  )
}

function TutorialCart({ imageSrc, title }) {
  return (
    <StyledTutorialCartWrapper>
      <div className='cart-image-wrapper'>
        <Image
          className='cart-image'
          src={imageSrc}
          alt={title}
          width={440}
          height={250}
        />
        <PlayButton />
      </div>
      <StyledTypographyUrbanistH4 className='cart-title'>
        {title}
      </StyledTypographyUrbanistH4>
    </StyledTutorialCartWrapper>
  )
}

function PlayButton() {
  return (
    <StyledTutorialCartPlayButtonWrapper>
      <Play className='play-icon' />
      <StyledTypographyUrbanistBody className='play-text'>
        Play
      </StyledTypographyUrbanistBody>
    </StyledTutorialCartPlayButtonWrapper>
  )
}
