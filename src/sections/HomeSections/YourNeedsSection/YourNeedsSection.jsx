import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import { Fragment, useContext, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { useWindowSize } from '@uidotdev/usehooks'
import dynamic from 'next/dynamic'
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
// import { ModalSendRequest } from '@/components/Modal'
import { keysForLocale } from '@/config/keysForLocale'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { createBlog } from '@/lib/datocms'
import { userSchema2 } from '@/utils/userSchema'
import { responseBreakPoint } from '@/utils/response'

const DynamicModalSendRequest = dynamic(
  () => import('@/components/Modal').then((mod) => mod.ModalSendRequest),
  {
    ssr: false,
  }
)

export default function YourNeedsSection() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      message: '',
    },
    resolver: yupResolver(userSchema2),
  })

  const [openModalSendRequest, setOpenModalSendRequest] = useState(false)
  const t = useTranslations('home_page_your_needs_section')
  const tList = useTranslations('home_page_your_needs_section_list_item_title')
  const tList2 = useTranslations(
    'home_page_your_needs_section_list_item_description'
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

  const onSubmit = async (data) => {
    await toast.promise(createBlog({ data, modelId: '2537177' }), {
      pending: 'Sending data',
      success: 'Data sent',
    })

    handleClose()
    reset()
  }

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
      buttonText: data.buttonScreen2,
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

  const size = useWindowSize()

  return (
    <YourNeedsSectionWrapper>
      <div className='container'>
        {size.width && size.width > responseBreakPoint.mobile ? (
          <StyledTypographyUrbanistH2 className='title title-desktop'>
            {t('title')}
          </StyledTypographyUrbanistH2>
        ) : null}

        {size.width && size.width <= responseBreakPoint.mobile ? (
          <StyledTypographyUrbanistH1 className='title title-mobile'>
            {t('title')}
          </StyledTypographyUrbanistH1>
        ) : null}

        <CoinsList />

        <StyledTypographyUrbanistH5 className='subTitle subTitle-desktop'>
          {t('paragraph')}
        </StyledTypographyUrbanistH5>

        {size.width && size.width > responseBreakPoint.mobile ? (
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
        ) : null}

        {size.width && size.width <= responseBreakPoint.mobile ? (
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
        ) : null}
      </div>

      <DynamicModalSendRequest
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        handleClose={handleClose}
        errors={errors}
        open={openModalSendRequest}
      />
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
