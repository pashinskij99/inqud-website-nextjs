import Link from 'next/link'
import Image from 'next/image'
import { SubTitle } from '@/sections/HomeB2CSections/HeroB2CSection/HeroB2CSection'
import { StyledCryptoWidgetHeroSectionWrapper } from './CryptoWidgetHeroSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { PaymentList } from '@/sections/HomeSections/HeroSection/HeroSection'
import image from '../../../assets/images/crypto-widget/page/hero/Image.png'

export default function CryptoWidgetHeroSection() {
  return (
    <StyledCryptoWidgetHeroSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <SubTitle className='subTitle'>Crypto widget</SubTitle>
          <StyledTypographyUrbanistH1 className='title'>
            Reach crypto customers around the world
          </StyledTypographyUrbanistH1>
          <StyledTypographyUrbanistBody className='description'>
            Boost your business with our crypto widget. Draw in crypto-users,
            ensure quick, minimize chargebacks, and reach a global market
            effortlessly.
          </StyledTypographyUrbanistBody>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted'>
                Get started
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost className='ghostButton'>
              Contact sales
            </StyledButtonGhost>
          </div>

          <PaymentList />
        </div>

        <div className='right-side'>
          <Image
            unoptimized
            src={image.src}
            alt='Crypto widget'
            width={633.969}
            height={572.441}
          />
        </div>
      </div>
    </StyledCryptoWidgetHeroSectionWrapper>
  )
}
