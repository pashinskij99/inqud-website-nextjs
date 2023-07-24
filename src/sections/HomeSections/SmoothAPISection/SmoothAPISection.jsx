import Image from 'next/image'
import Link from 'next/link'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledSmoothAPISection } from './SmoothAPISection.styled'
import { ButtonGetStarted } from '@/components/UI/Button/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import Graphic from '@/assets/images/smooth-API/graphic.svg'
import GraphicTabletImage from '@/assets/images/smooth-API/graphic-tablet.png'
import Icon1 from '@/assets/images/smooth-API/icon1.svg'
import Icon2 from '@/assets/images/smooth-API/icon2.svg'
import Icon3 from '@/assets/images/smooth-API/icon3.svg'
import Icon4 from '@/assets/images/smooth-API/icon4.svg'
import Check from '@/assets/icons/check-green-background.svg'

const gridContent = [
  {
    id: 0,
    icon: <Icon1 className='icon' />,
    title: 'Developer-friendly documentation',
    description:
      'Clear, comprehensive guides aiding swift integration and hassle-free development',
  },
  {
    id: 1,
    icon: <Icon2 className='icon' />,
    title: 'Advanced anti-fraud features',
    description:
      'Fraud-Proof Transactions: Benefit from our sophisticated security features.',
  },
  {
    id: 2,
    icon: <Icon3 className='icon' />,
    title: 'Full-fledged onboarding',
    description:
      'Initial setup to full implementation, guiding you through every step for a seamless, worry-free start.',
  },
  {
    id: 3,
    icon: <Icon4 className='icon' />,
    title: 'Accept crypto & local fiat',
    description:
      "Expand your business's financial accessibility and customer reach.",
  },
]

export default function SmoothAPISection() {
  return (
    <StyledSmoothAPISection>
      <div className='container'>
        <div className='leftSide'>
          <Graphic />
        </div>

        <div className='rightSide'>
          <StyledTypographyIBMH5 className='smoothAPISubTitle'>
            Tailored for business
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH1 className='smoothAPITitle'>
            Smooth API <br className='br-1200' /> integration
          </StyledTypographyUrbanistH1>

          <Image
            src={GraphicTabletImage}
            alt='Smooth API integration'
            className='smoothAPIImageTablet'
          />

          <StyledTypographyUrbanistH5 className='smoothAPIDescription'>
            Advanced onramp & offramp payment processing, customization,
            scalability, and seamless integration. Streamline your payment
            process and spur growth with API integration. Experience boosted
            efficiency, scalability, and heightened business growth.
          </StyledTypographyUrbanistH5>

          <StyledTypographyUrbanistH5 className='smoothAPIDescriptionMobile'>
            Efficient onramp & offramp processing for business growth. Scale,
            integrate, succeed.
          </StyledTypographyUrbanistH5>

          <ul className='smoothAPIGrid'>
            {gridContent.map(({ description, id, icon, title }) => (
              <li
                className='smoothAPIGridItem'
                data-slug='comming soon'
                key={id}
              >
                <Check className='check' />
                {icon}
                <StyledTypographyUrbanistH5 className='smoothAPIGridItemTitle'>
                  {title}
                </StyledTypographyUrbanistH5>
                <StyledTypographyUrbanistBody className='smoothAPIGridItemDescription'>
                  {description}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <div className='smoothAPIButtonWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='smoothAPIButtonGetStarted'>
                Get started
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost className='smoothAPIButtonGhost'>
              Learn more
            </StyledButtonGhost>
          </div>
        </div>
      </div>
    </StyledSmoothAPISection>
  )
}
