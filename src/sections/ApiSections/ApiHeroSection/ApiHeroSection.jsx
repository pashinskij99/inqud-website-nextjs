import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useContext, useState } from 'react'
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
