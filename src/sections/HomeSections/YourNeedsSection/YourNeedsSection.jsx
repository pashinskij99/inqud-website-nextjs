import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import { useState, Fragment } from 'react'
import {
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledCoinsListWrapper,
  YourNeedsSectionWrapper,
} from './YourNeedsSection.styled'
import Image1 from '@/assets/images/your-needs/image1.png'
import Image2 from '@/assets/images/your-needs/image2.png'
import Image3 from '@/assets/images/your-needs/image3.png'
import Coins1 from '@/assets/images/your-needs/Coins1.svg'
import Coins2 from '@/assets/images/your-needs/Coins2.svg'
import Coins3 from '@/assets/images/your-needs/Coins3.svg'
import Coins4 from '@/assets/images/your-needs/Coins4.svg'
import Coins5 from '@/assets/images/your-needs/Coins5.svg'
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

  // const slickSettings = {
  //   dots: false,
  //   infinite: true,
  //   centerMode: true,
  //   slidesToShow: 2,
  //   centerPadding: '60px',
  //   // slidesToScroll: 2,
  // }

  return (
    <YourNeedsSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title title-desktop'>
          We understand your needs
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH1 className='title title-mobile'>
          We understand <br className='br-mobile' /> your needs
        </StyledTypographyUrbanistH1>

        <CoinsList />

        <StyledTypographyUrbanistH5 className='subTitle subTitle-desktop'>
          Backed by industry expertise
        </StyledTypographyUrbanistH5>

        <div className='listRequirements'>
          {list.map(
            ({ id, buttonText, description, image, title, handleClick }) => (
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

        {/* <Slider {...slickSettings}>
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
              slidesPerView: 1,
              spaceBetween: 8,
              centeredSlides: true,
              loop: true,
              initialSlide: '0',
            },
            500: {
              slidesPerView: 'auto',
              spaceBetween: 8,
              initialSlide: '0',
              loop: false,
              centeredSlides: false,
            },
            767: {
              slidesPerView: 'auto',
              loop: false,
              centeredSlides: false,
              initialSlide: '0',
              spaceBetween: 24,
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

const coinsList = [
  { id: 3, icon: <Coins4 /> },
  { id: 4, icon: <Coins5 /> },
  { id: 0, icon: <Coins1 /> },
  { id: 1, icon: <Coins2 /> },
  { id: 2, icon: <Coins3 /> },
]

function CoinsList() {
  return (
    <StyledCoinsListWrapper>
      {coinsList.map(({ id, icon }) => (
        <Fragment key={id}>{icon}</Fragment>
      ))}
    </StyledCoinsListWrapper>
  )
}
