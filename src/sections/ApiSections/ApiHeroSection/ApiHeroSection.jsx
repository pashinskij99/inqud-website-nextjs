import Link from 'next-intl/link'
import Image from 'next/image'
import { SubTitle } from '@/sections/HomeB2CSections/HeroB2CSection/HeroB2CSection'
import { StyledApiHeroSectionWrapper } from './ApiHeroSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import Check from '@/assets/icons/check-green-background.svg'
import { ButtonGetStarted } from '@/components/UI/Button'
import HeroSectionPaymentList from '@/sections/HomeSections/HeroSection/components/HeroSectionPaymentList'
import ApiHeroButtonShowModal from './components/ApiHeroButtonShowModal'

export default function ApiHeroSection({ paymentListData, params, data }) {
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
                <Image src={Check} alt='Check' />
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

            <ApiHeroButtonShowModal data={data} />
          </div>

          <HeroSectionPaymentList data={paymentListData} params={params} />
        </div>
        <div className='right-side'>
          {/* <Device device={TABLET_OR_DESKTOP}>
            <Image
              priority
              loading='eager'
              className='cart'
              width={500}
              height={488}
              // src='/video/api_page_hero.avif'
              src='/video/api_page_hero_2.avif'
              alt='animations'
            />
          </Device> */}
          <Image
            priority
            loading='eager'
            className='cart cart-2'
            width={500}
            height={488}
            // src='/video/api_page_hero.avif'
            src='/video/api_page_hero_2.avif'
            // src='/video/api_page_hero_3.webp'
            alt='animations'
          />
        </div>
      </div>
    </StyledApiHeroSectionWrapper>
  )
}
