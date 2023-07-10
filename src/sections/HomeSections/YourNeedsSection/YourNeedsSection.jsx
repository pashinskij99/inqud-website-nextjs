import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import {
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import { YourNeedsSectionWrapper } from './YourNeedsSection.styled'
import Image1 from '@/assets/images/your-needs/image1.png'
import Image2 from '@/assets/images/your-needs/image2.png'
import Image3 from '@/assets/images/your-needs/image3.png'
import { CartRequirement } from '@/components/CartRequirement'

const list = [
  {
    id: 0,
    title: 'Accept global crypto payments',
    description:
      'Simplify your global payment process by accepting crypto currencies from around the world.',
    buttonText: 'Learn more',
    image: Image1.src,
  },
  {
    id: 1,
    title: 'Tailored payment options',
    description:
      "Need a specific payment method or currency for your business? Just ask! We'll be in touch to make it happen.",
    buttonText: 'Add your request',
    image: Image2.src,
  },
  {
    id: 2,
    title: 'Reliable alternative payment system',
    description:
      'Ensure uninterrupted transactions with our robust backup payment system, offering rock-solid reliability and security.',
    buttonText: 'Learn more',
    image: Image3.src,
  },
]

export default function YourNeedsSection() {
  return (
    <YourNeedsSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH1 className='title title-desktop'>
          We understand <br className='br-mobile' /> your needs, <br className='br-desktop' /> backed by industry expertise
        </StyledTypographyUrbanistH1>
        <StyledTypographyUrbanistH1 className='title title-mobile'>
          We understand <br className='br-mobile' /> your needs
        </StyledTypographyUrbanistH1>

        <StyledTypographyUrbanistH4 className='subTitle subTitle-desktop'>
          Catering to these requirements and beyond.
        </StyledTypographyUrbanistH4>
        <StyledTypographyUrbanistH4 className='subTitle subTitle-mobile'>
          backed by industry expertise
        </StyledTypographyUrbanistH4>

        <div className='listRequirements'>
          {list.map(({ id, buttonText, description, image, title }) => (
            <CartRequirement
              key={id}
              buttonText={buttonText}
              description={description}
              href='#'
              imageSrc={image}
              title={title}
            />
          ))}
        </div>

        {/* mobile */}

        <Swiper
          className='listRequirementsSwiper'
          slidesPerView={1.5}
          centeredSlides
          spaceBetween={40}
          initialSlide="1"
          scrollbar={{
            dragSize: 200 / 3,
            // dragClass: 'listRequirementsSwiperDrag',
            horizontalClass: 'listRequirementsSwiperScollbar',
            hide: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 8
            },
            576: {
              slidesPerView: 1.5,
            },
            1000: {
              slidesPerView: 2.5,
            },
          }}
          modules={[Scrollbar]}
        >
          {list.map(({ id, buttonText, description, image, title }) => (
            <SwiperSlide className='listRequirementsSwiperItems' key={id}>
              <CartRequirement
                buttonText={buttonText}
                description={description}
                href='#'
                imageSrc={image}
                title={title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </YourNeedsSectionWrapper>
  )
}
