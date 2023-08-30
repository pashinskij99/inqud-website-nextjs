import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import { useState, Fragment, useContext } from 'react'
import { useTranslations } from 'next-intl'
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
import { keysForLocale } from '@/config/keysForLocale'
import { PageContext } from '@/contexts/PageContext/PageContext'
// import { PageContext } from '@/contexts/PageContext/PageContext'

export default function YourNeedsSection() {
  const [openModalSendRequest, setOpenModalSendRequest] = useState(false)
  const t = useTranslations('home_page.your_needs_section')
  const tList = useTranslations('home_page.your_needs_section.list_item_title')
  const tList2 = useTranslations(
    'home_page.your_needs_section.list_item_description'
  )

  const handleOpen = () => {
    setOpenModalSendRequest(true)
  }
  const handleClose = () => {
    setOpenModalSendRequest(false)
  }

  const {
    dataPage: { homePage: data },
  } = useContext(PageContext)

  const list = [
    {
      id: 0,
      title: tList(keysForLocale.keys3[0]),
      description: tList2(keysForLocale.keys3[0]),
      image: Image1.src,
    },
    {
      id: 1,
      title: tList(keysForLocale.keys3[1]),
      description: tList2(keysForLocale.keys3[1]),
      buttonText: t('list_item_button_text'),
      open: openModalSendRequest,
      handleClick: handleOpen,
      image: Image2.src,
    },
    {
      id: 2,
      title: tList(keysForLocale.keys3[2]),
      description: tList2(keysForLocale.keys3[2]),
      image: Image3.src,
    },
  ]

  return (
    <YourNeedsSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title title-desktop'>
          {t('title')}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH1 className='title title-mobile'>
          {t('title')}
        </StyledTypographyUrbanistH1>

        <CoinsList />

        <StyledTypographyUrbanistH5 className='subTitle subTitle-desktop'>
          {t('paragraph')}
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
              initialSlide: '1',
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
          {list.map(({ id, description, image, title, handleClick }) => (
            <SwiperSlide className='listRequirementsSwiperItems' key={id}>
              <CartRequirement
                buttonText={id === 1 && data.buttonScreen2}
                description={description}
                href='#'
                handleClick={handleClick}
                imageSrc={image}
                title={title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ModalSendRequest handleClose={handleClose} open={openModalSendRequest} />
    </YourNeedsSectionWrapper>
  )
}

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
