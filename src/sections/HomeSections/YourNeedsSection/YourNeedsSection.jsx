import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import { useState } from 'react'
import {
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import {
  // StyledCustomScrollbarWrapper,
  YourNeedsSectionWrapper,
} from './YourNeedsSection.styled'
import Image1 from '@/assets/images/your-needs/image1.png'
import Image2 from '@/assets/images/your-needs/image2.png'
import Image3 from '@/assets/images/your-needs/image3.png'
import { CartRequirement } from '@/components/CartRequirement'
import { ModalSendRequest } from '@/components/Modal'

export default function YourNeedsSection() {
  const [openModalSendRequest, setOpenModalSendRequest] = useState(false)

  const handleOpen = () => {
    setOpenModalSendRequest(true)
  }
  const handleClose = () => {
    setOpenModalSendRequest(false)
  }

  const list = [
    {
      id: 0,
      title: 'Accept global crypto payments',
      description:
        'Simplify your global payment process by accepting crypto currencies from around the world.',
      // buttonText: 'Learn more',
      image: Image1.src,
    },
    {
      id: 1,
      title: 'Tailored payment options',
      description:
        "Need a specific payment method or currency for your business? Just ask! We'll be in touch to make it happen.",
      buttonText: 'Add your request',
      open: openModalSendRequest,
      handleClick: handleOpen,
      image: Image2.src,
    },
    {
      id: 2,
      title: 'Reliable alternative payment system',
      description:
        'Ensure uninterrupted transactions with our robust backup payment system, offering rock-solid reliability and security.',
      // buttonText: 'Learn more',
      image: Image3.src,
    },
  ]

  return (
    <YourNeedsSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH1 className='title title-desktop'>
          We understand <br className='br-mobile' /> your needs,{' '}
          <br className='br-desktop' /> backed by industry expertise
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
          {list.map(
            ({ id, buttonText, description, image, title, handleClick }, i) =>
              i < 3 && (
                <CartRequirement
                  key={id}
                  buttonText={buttonText}
                  description={description}
                  href='#'
                  handleClick={handleClick}
                  imageSrc={image}
                  title={title}
                />
              )
          )}
        </div>

        {/* mobile */}

        {/* <Slider
          slidesToShow={1.2}
          centerMode
          initialSlide={1}
          arrows={false}
          adaptiveHeight
          afterChange={(index) => {
            console.log(index)
          }}
          onSwipe={(direction) => {
            console.log(direction)
          }}
          duration={100}
          shift={10}
        >
          {list.map(
            ({ id, buttonText, description, image, title, handleClick }) => (
              // <SwiperSlide className='listRequirementsSwiperItems' key={id}>
              <CartRequirement
                key={id}
                buttonText={buttonText}
                description={description}
                href='#'
                handleClick={handleClick}
                imageSrc={image}
                title={title}
              />
              // </SwiperSlide>
            )
          )}
        </Slider> */}

        <Swiper
          className='listRequirementsSwiper'
          slidesPerView='auto'
          centeredSlides
          initialSlide={1}
          updateOnWindowResize
          scrollbar={{
            dragSize: 200 / 3,
            horizontalClass: 'listRequirementsSwiperScollbar',
            hide: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 8,
              centeredSlides: true,
              initialSlide: '1',
            },
            576: {
              slidesPerView: 'auto',
              spaceBetween: 28,
              initialSlide: '1',
            },
            1536: {
              slidesPerView: 'auto',
              spaceBetween: 28,
              initialSlide: '1',
            },
          }}
          modules={[Scrollbar]}
        >
          {list.map(
            ({ id, buttonText, description, image, title, handleClick }) => (
              <SwiperSlide className='listRequirementsSwiperItems' key={id}>
                <CartRequirement
                  buttonText={buttonText}
                  description={description}
                  href='#'
                  handleClick={handleClick}
                  imageSrc={image}
                  title={title}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      <ModalSendRequest handleClose={handleClose} open={openModalSendRequest} />
    </YourNeedsSectionWrapper>
  )
}
// {/* <CustomScrollBarSwiper count={3} length={200} /> */}

// function CustomScrollBarSwiper({ count, length, activeSlide }) {
//   const lengthActiveLine = length / count

//   return (
//     <StyledCustomScrollbarWrapper>
//       <div style={{ width: `${length}px` }} className='scrollBarLine' />
//       <div
//         style={{ width: `${lengthActiveLine}px` }}
//         className='scrollBarLineActive'
//       />
//     </StyledCustomScrollbarWrapper>
//   )
// }
