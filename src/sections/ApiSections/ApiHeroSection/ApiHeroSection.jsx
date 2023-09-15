import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useContext, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
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
import { createBlog } from '@/lib/datocms'

export default function ApiHeroSection() {
  const t = useTranslations('api_page.hero_section')
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
    await toast.promise(createBlog({ data, modelId: '2540346' }), {
      pending: 'Sending data',
      success: 'Data sent',
    })

    handleHideModal()
    reset()
  }

  const {
    dataPage: { apiPage: data },
  } = useContext(PageContext)

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
          <div className='cart'>
            <Image
              src={data.image.url}
              width={500}
              height={488}
              alt={t('title')}
            />
          </div>
        </div>
      </div>
    </StyledApiHeroSectionWrapper>
  )
}
