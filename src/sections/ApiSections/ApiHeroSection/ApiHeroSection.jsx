import Link from 'next/link'
import { useContext, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useWindowSize } from '@uidotdev/usehooks'
import { SubTitle } from '@/sections/HomeB2CSections/HeroB2CSection/HeroB2CSection'
import { StyledApiHeroSectionWrapper } from './ApiHeroSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import { PaymentList } from '@/sections/HomeSections/HeroSection/HeroSection'
import Check from '@/assets/icons/check-green-background.svg'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { GetPersonalizedModal } from '@/components/Modal'
import { userSchema2 } from '@/utils/userSchema'
import { AnimatedOneVideo } from '@/components/AnimatedVideo'
import { responseBreakPoint } from '@/utils/response'
import { Animated2Gif } from '@/components/AnimatedVideo/AnimatedVideo'
import { submitForFormActiveCampaign } from '@/lib/activeCampaign'

export default function ApiHeroSection() {
  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleHideModal = () => {
    setShowModal(false)
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(userSchema2),
  })

  const onSubmit = async (data) => {
    const newData = {
      email: data.email,
      fieldValues: [
        {
          field: '1',
          value: data.message,
        },
      ],
    }

    console.log(newData)

    await toast.promise(
      submitForFormActiveCampaign(newData, '/api/create-contact', 7),
      {
        pending: 'Sending data',
        success: 'Data sent',
      }
    )

    // await toast.promise(createBlog({ data, modelId: '2540346' }), {
    //   pending: 'Sending data',
    //   success: 'Data sent',
    // })

    handleHideModal()
    reset()
  }

  const {
    dataPage: { apiPage: data },
  } = useContext(PageContext)

  const size = useWindowSize()

  return (
    <StyledApiHeroSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <SubTitle className='sub-title'>{data.subTitle}</SubTitle>
          <StyledTypographyUrbanistH1 className='title title-1'>
            {data.title}
          </StyledTypographyUrbanistH1>
          <StyledTypographyUrbanistH1 className='title title-2'>
            {data.title}
          </StyledTypographyUrbanistH1>

          <ul className='features'>
            {data.features.map((text) => (
              <li key={text}>
                <Check />
                <StyledTypographyUrbanistBody key={text}>
                  {text}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted'>
                {data.buttonScreen1A}
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost
              onClick={handleShowModal}
              className='ghostButton'
            >
              {data.buttonScreen1B}
            </StyledButtonGhost>
            <GetPersonalizedModal
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
              errors={errors}
              data={data}
              handleClose={handleHideModal}
              open={showModal}
            />
          </div>

          <PaymentList />
        </div>
        <div className='right-side'>
          {size.width && size.width > responseBreakPoint.mobile ? (
            <AnimatedOneVideo
              className='cart'
              width={500}
              height={488}
              timeRepeat={10000}
              urlFirstVideo='/video/api_page_hero.mp4'
            />
          ) : null}
          {size.width && size.width <= responseBreakPoint.mobile ? (
            <Animated2Gif
              className='cart'
              width={500}
              height={488}
              timeRepeat={5000}
              timeFirstAnimate={10000}
              urlFirstVideo='/video/api_page_hero.gif'
              stillFirstVideo='/video/api_page_hero.webp'
              urlSecondVideo='/video/api_page_hero.gif'
              stillSecondVideo='/video/api_page_hero.webp'
              timeSecondAnimate={10000}
            />
          ) : null}
        </div>
      </div>
    </StyledApiHeroSectionWrapper>
  )
}
