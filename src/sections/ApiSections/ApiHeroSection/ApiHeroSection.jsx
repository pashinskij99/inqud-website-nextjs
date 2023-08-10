import Link from 'next/link'
import Image from 'next/image'
import { SubTitle } from '@/sections/HomeB2CSections/HeroB2CSection/HeroB2CSection'
import { StyledApiHeroSectionWrapper } from './ApiHeroSection.styled'
import {
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistBody,
} from '@/components/UI/Typography/Typography.styled'
import { PaymentList } from '@/sections/HomeSections/HeroSection/HeroSection'
import Check from '@/assets/icons/check-green-background.svg'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import codeImage from '@/assets/images/api/code.webp'

const features = [
  { id: 0, text: '2 days seamless Integration' },
  {
    id: 1,
    text: 'Developer-friendly docs',
  },
  { id: 2, text: 'Dedicated technical support' },
  { id: 3, text: 'Zero chargebacks' },
]

export default function ApiHeroSection() {
  return (
    <StyledApiHeroSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <SubTitle className='sub-title'>API</SubTitle>
          <StyledTypographyUrbanistH1 className='title title-1'>
            Reach API customers around the world
          </StyledTypographyUrbanistH1>
          <StyledTypographyUrbanistH1 className='title title-2'>
            Reach crypto customers around the world
          </StyledTypographyUrbanistH1>

          <ul className='features'>
            {features.map(({ id, text }) => (
              <li key={id}>
                <Check />
                <StyledTypographyUrbanistBody key={id}>
                  {text}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted'>
                Get started
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost className='ghostButton'>
              Get proposal
            </StyledButtonGhost>
          </div>

          <PaymentList />
        </div>
        <div className='right-side'>
          <div className='cart'>
            <Image src={codeImage.src} width={500} height={488} />
          </div>
        </div>
      </div>
    </StyledApiHeroSectionWrapper>
  )
}
