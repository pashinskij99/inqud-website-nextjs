import Image from 'next/image'
import { StyledHowIntegrateCryptoSectionWrapper } from './HowIntegrateCryptoSection.styled'
import { StyledStepCartHowIntegrateWrapper } from '@/sections/ApiSections/HowIntegrate/HowIntegrate.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import arrowImage from '@/assets/images/homeB2C/how-to-start/arrow.png'
import arrowImageMobile from '@/assets/images/homeB2C/PassKYC/arrow-down.png'
import TimeIcon from '@/assets/images/homeB2C/how-to-start/time.svg'
import Icon1 from '@/assets/images/api/how-integrate/num1-min.svg'
import Icon2 from '@/assets/images/api/how-integrate/num2-min.svg'
import Icon3 from '@/assets/images/api/how-integrate/num3-min.svg'
import Icon4 from '@/assets/images/api/how-integrate/num4-min.svg'
import { ButtonGetStarted } from '@/components/UI/Button'

const stepsContent = [
  {
    id: 1,
    title: (
      <>
        Complete your <br /> KYB verification
      </>
    ),
    titleLaptop: (
      <>
        Complete your <br /> KYB verification
      </>
    ),
    titleTablet: (
      <>
        Complete your <br /> KYB verification
      </>
    ),
    titleMobile: (
      <>
        Complete your <br /> KYB verification
      </>
    ),
    time: 'less than 48 hours',
    icon: <Icon1 className='step-icon' />,
  },
  { id: 2, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
  {
    id: 3,
    title: (
      <>
        Sign <br /> the agreement
      </>
    ),
    titleLaptop: (
      <>
        Sign <br /> the agreement
      </>
    ),
    titleTablet: <>Sign the agreement</>,
    titleMobile: <>Sign the agreement</>,
    time: '5-10 minutes',
    icon: <Icon2 className='step-icon' />,
  },
  { id: 4, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
  {
    id: 5,
    title: <>Comprehensive onboarding</>,
    titleLaptop: (
      <>
        Comprehensive <br /> onboarding
      </>
    ),
    titleTablet: (
      <>
        Embed your crypto <br /> widget
      </>
    ),
    titleMobile: <>Embed your crypto widget</>,
    time: '60 minutes',
    icon: <Icon3 className='step-icon' />,
  },
  { id: 6, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
  {
    id: 7,
    title: 'Embed your crypto widget',
    titleLaptop: (
      <>
        Embed your <br /> crypto widget
      </>
    ),
    titleTablet: <>Comprehensive onboarding</>,
    titleMobile: <>Comprehensive onboarding</>,
    time: '1-2 hours',
    icon: <Icon4 className='step-icon' />,
  },
]

export default function HowIntegrateCryptoSection() {
  return (
    <StyledHowIntegrateCryptoSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          How to integrate crypto to your business?
        </StyledTypographyUrbanistH2>

        <div className='steps-wrapper'>
          {stepsContent.map(
            ({
              description,
              icon,
              imageSrcMobile,
              id,
              imageSrc,
              time,
              title,
              titleLaptop,
              titleTablet,
              titleMobile,
              button,
            }) => (
              <div key={id} className='step-wrapper'>
                <StepContent
                  key={id}
                  id={id}
                  icon={icon}
                  imageSrcMobile={imageSrcMobile}
                  imageSrc={imageSrc}
                  time={time}
                  title={title}
                  titleLaptop={titleLaptop}
                  titleTablet={titleTablet}
                  titleMobile={titleMobile}
                  button={button}
                  description={description}
                />
              </div>
            )
          )}
        </div>

        <ButtonGetStarted className='get-started-button'>
          Get started
        </ButtonGetStarted>
      </div>
    </StyledHowIntegrateCryptoSectionWrapper>
  )
}

function StepContent({
  id,
  title,
  titleLaptop,
  titleTablet,
  titleMobile,
  imageSrcMobile,
  icon,
  time,
  imageSrc,
  button,
}) {
  return id % 2 === 0 ? (
    <div className='step-image-wrapper'>
      <Image
        className='step-image desktopOrTablet'
        src={imageSrc}
        width={171}
        height={15}
        alt='arrow'
      />
      <Image
        className='step-image mobile'
        src={imageSrcMobile}
        width={16}
        height={24}
        alt='arrow'
      />
    </div>
  ) : (
    <StepCart
      id={id}
      time={time}
      title={title}
      titleLaptop={titleLaptop}
      titleTablet={titleTablet}
      titleMobile={titleMobile}
      icon={icon}
      button={button}
    />
  )
}

function StepCart({
  icon,
  title,
  titleLaptop,
  titleTablet,
  titleMobile,
  time,
}) {
  return (
    <StyledStepCartHowIntegrateWrapper>
      {icon}
      <StyledTypographyUrbanistH4 className='step-cart-title step-cart-title-1'>
        {title}
      </StyledTypographyUrbanistH4>
      <StyledTypographyUrbanistH4 className='step-cart-title step-cart-title-2'>
        {titleLaptop}
      </StyledTypographyUrbanistH4>
      <StyledTypographyUrbanistH4 className='step-cart-title step-cart-title-3'>
        {titleTablet}
      </StyledTypographyUrbanistH4>
      <StyledTypographyUrbanistH4 className='step-cart-title step-cart-title-4'>
        {titleMobile}
      </StyledTypographyUrbanistH4>

      <div className='step-cart-time-wrapper'>
        <TimeIcon />
        <StyledTypographyUrbanistBody className='step-cart-time'>
          {time}
        </StyledTypographyUrbanistBody>
      </div>
    </StyledStepCartHowIntegrateWrapper>
  )
}
