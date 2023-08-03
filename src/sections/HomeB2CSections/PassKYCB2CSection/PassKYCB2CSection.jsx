import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledPassKYCB2CSectionWrapper,
  StyledStepCartKYCWrapper,
} from './PassKYCB2CSection.styled'
import { ButtonLearnMore } from '@/components/UI/Button'
import TimeIcon from '@/assets/images/homeB2C/how-to-start/time.svg'
import arrowImage from '@/assets/images/homeB2C/how-to-start/arrow.png'
import arrowImageMobile from '@/assets/images/homeB2C/PassKYC/arrow-down.png'
import Icon1 from '@/assets/images/homeB2C/PassKYC/icon1.svg'
import Icon2 from '@/assets/images/homeB2C/PassKYC/icon2.svg'
import Icon3 from '@/assets/images/homeB2C/PassKYC/icon3.svg'
import Icon4 from '@/assets/images/homeB2C/PassKYC/icon4.svg'

const stepsContent = [
  {
    id: 1,
    title: 'Email confirmation',
    time: 'Less than 60 sec',
    icon: <Icon1 className='step-icon' />,
  },
  { id: 2, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
  {
    id: 3,
    title: 'Phone confirmation',
    time: 'Less than 5 min',
    icon: <Icon2 className='step-icon' />,
  },
  { id: 4, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
  {
    id: 5,
    title: 'ID confirmation',
    time: 'Less than 3 min',
    icon: <Icon3 className='step-icon' />,
  },
  { id: 6, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
  {
    id: 7,
    title: 'Full success',
    time: '',
    button: 'Get started',
    icon: <Icon4 className='step-icon' />,
  },
]

export default function PassKYCB2CSection() {
  return (
    <StyledPassKYCB2CSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH1 className='title'>
          Pass KYC in a breeze!
        </StyledTypographyUrbanistH1>
        <StyledTypographyUrbanistH4 className='sub-title'>
          Get verified in less then 5 minutes!
        </StyledTypographyUrbanistH4>

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
                  button={button}
                  description={description}
                />
              </div>
            )
          )}
        </div>
      </div>
    </StyledPassKYCB2CSectionWrapper>
  )
}

function StepContent({
  id,
  title,
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
    <StepCart id={id} time={time} title={title} icon={icon} button={button} />
  )
}

function StepCart({ icon, title, time, button }) {
  return (
    <StyledStepCartKYCWrapper>
      {icon}
      <StyledTypographyUrbanistH4 className='step-cart-title'>
        {title}
      </StyledTypographyUrbanistH4>
      {!time && button ? (
        <ButtonLearnMore className='step-cart-button'>{button}</ButtonLearnMore>
      ) : (
        <div className='step-cart-time-wrapper'>
          <TimeIcon />
          <StyledTypographyUrbanistBody className='step-cart-time'>
            {time}
          </StyledTypographyUrbanistBody>
        </div>
      )}
    </StyledStepCartKYCWrapper>
  )
}
