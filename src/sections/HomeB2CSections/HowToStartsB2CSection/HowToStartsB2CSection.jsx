import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledHowToStartsB2CSectionWrapper,
  StyledStepCartWrapper,
} from './HowToStartsB2CSection.styled'
import arrowImage from '@/assets/images/homeB2C/how-to-start/arrow.png'
import TimeIcon from '@/assets/images/homeB2C/how-to-start/time.svg'
import { ButtonLearnMore } from '@/components/UI/Button'
import { keysForLocale } from '@/config/keysForLocale'

export default function HowToStartsB2CSection() {
  const t = useTranslations('home_b2c_page.how_start_section')
  const tListTitle = useTranslations(
    'home_b2c_page.how_start_section.items_title'
  )
  const tListDescription = useTranslations(
    'home_b2c_page.how_start_section.items_description'
  )
  const tListTime = useTranslations(
    'home_b2c_page.how_start_section.items_time'
  )

  const stepsContent = [
    {
      key: 1,
      id: '01',
      title: tListTitle(keysForLocale.keys3[0]),
      description: tListDescription(keysForLocale.keys3[0]),
      time: tListTime(keysForLocale.keys3[0]),
    },
    { key: 2, imageSrc: arrowImage.src },
    {
      key: 3,
      id: '02',
      title: tListTitle(keysForLocale.keys3[1]),
      description: tListDescription(keysForLocale.keys3[1]),
      time: tListTime(keysForLocale.keys3[1]),
    },
    { key: 4, imageSrc: arrowImage.src },
    {
      key: 5,
      id: '03',
      title: tListTitle(keysForLocale.keys3[2]),
      description: tListDescription(keysForLocale.keys3[2]),
      time: tListTime(keysForLocale.keys3[2]),
    },
  ]

  const stepsContentMobile = [
    {
      key: 1,
      id: '01',
      title: 'Sign up',
      description: 'Use your email or socilal media',
      time: 'Less than 60 sec',
    },
    { key: 2, imageSrc: arrowImage.src },
    {
      key: 3,
      id: '02',
      title: 'Pass KYC',
      description: 'Just your phone, email, and ID',
      time: 'Less than 5 min',
    },
    { key: 4, imageSrc: arrowImage.src },
    {
      key: 5,
      id: '03',
      title: 'Buy crypto',
      description: 'Tap exchange, choose crypto.',
      time: '',
      button: 'Buy crypto',
    },
  ]

  return (
    <StyledHowToStartsB2CSectionWrapper>
      <div className='container'>
        <div className='content-wrapper'>
          <StyledTypographyUrbanistH1 className='title'>
            {t('title')}
          </StyledTypographyUrbanistH1>
          <div className='steps-wrapper desktop'>
            {stepsContent.map(
              ({ description, id, key, imageSrc, time, title }) => (
                <StepContent
                  key={key}
                  keyId={key}
                  imageSrc={imageSrc}
                  time={time}
                  title={title}
                  description={description}
                  id={id}
                />
              )
            )}
          </div>

          <div className='steps-wrapper tabletOrMobile'>
            {stepsContentMobile.map(
              ({ description, id, key, imageSrc, time, title, button }) => (
                <StepContent
                  key={key}
                  keyId={key}
                  imageSrc={imageSrc}
                  time={time}
                  title={title}
                  description={description}
                  button={button}
                  id={id}
                />
              )
            )}
          </div>
        </div>
      </div>
    </StyledHowToStartsB2CSectionWrapper>
  )
}

function StepContent({
  keyId,
  id,
  title,
  description,
  time,
  imageSrc,
  button,
}) {
  return keyId % 2 === 0 ? (
    <div className='step-image-wrapper'>
      <Image
        className='step-image'
        src={imageSrc}
        width={171}
        height={15}
        alt='arrow'
      />
    </div>
  ) : (
    <StepCart
      description={description}
      id={id}
      time={time}
      title={title}
      button={button}
    />
  )
}

function StepCart({ id, title, description, time, button }) {
  return (
    <StyledStepCartWrapper>
      <div className='step-cart-id-wrapper'>
        <h3 className='step-cart-id'>{id}</h3>
      </div>
      <StyledTypographyUrbanistH4 className='step-cart-title'>
        {title}
      </StyledTypographyUrbanistH4>
      <StyledTypographyUrbanistBody className='step-cart-description'>
        {description}
      </StyledTypographyUrbanistBody>
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
    </StyledStepCartWrapper>
  )
}
