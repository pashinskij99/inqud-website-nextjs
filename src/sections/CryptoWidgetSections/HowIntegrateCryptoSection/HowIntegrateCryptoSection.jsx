// import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import { StyledHowIntegrateCryptoSectionWrapper } from './HowIntegrateCryptoSection.styled'
import { StyledTypographyUrbanistH2 } from '@/components/UI/Typography/Typography.styled'
import arrowImage from '@/assets/images/homeB2C/how-to-start/arrow.png'
import arrowImageMobile from '@/assets/images/homeB2C/PassKYC/arrow-down.png'
import Icon1 from '@/assets/images/api/how-integrate/num1-min.svg'
import Icon2 from '@/assets/images/api/how-integrate/num2-min.svg'
import Icon3 from '@/assets/images/api/how-integrate/num3-min.svg'
import Icon4 from '@/assets/images/api/how-integrate/num4-min.svg'
import { ButtonGetStarted } from '@/components/UI/Button'
// import { keysForLocale } from '@/config/keysForLocale'
import { StepContent } from '@/sections/ApiSections/HowIntegrate/HowIntegrate'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function HowIntegrateCryptoSection() {
  // const t = useTranslations('crypto_centre_page.how_integrate_section')
  // const tTitles = useTranslations(
  //   'crypto_centre_page.how_integrate_section.items_title'
  // )
  // const tTimes = useTranslations(
  //   'crypto_centre_page.how_integrate_section.items_time'
  // )

  const {
    dataPage: { cryptoWidgetPage: data },
  } = useContext(PageContext)

  const stepsContent = [
    {
      id: 1,
      title: data.screen6Step[0].title,
      titleLaptop: data.screen6Step[0].title,
      titleTablet: data.screen6Step[0].title,
      titleMobile: data.screen6Step[0].title,
      time: data.screen6Step[0].time,
      icon: <Icon1 className='step-icon' />,
    },
    { id: 2, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
    {
      id: 3,
      title: data.screen6Step[1].title,
      titleLaptop: data.screen6Step[1].title,
      titleTablet: data.screen6Step[1].title,
      titleMobile: data.screen6Step[1].title,
      time: data.screen6Step[1].time,
      icon: <Icon2 className='step-icon' />,
    },
    { id: 4, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
    {
      id: 5,
      title: data.screen6Step[2].title,
      titleLaptop: data.screen6Step[2].title,
      titleTablet: data.screen6Step[2].title,
      titleMobile: data.screen6Step[2].title,
      time: data.screen6Step[2].time,
      icon: <Icon3 className='step-icon' />,
    },
    { id: 6, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
    {
      id: 7,
      title: data.screen6Step[3].title,
      titleLaptop: data.screen6Step[3].title,
      titleTablet: data.screen6Step[3].title,
      titleMobile: data.screen6Step[3].title,
      time: data.screen6Step[3].time,
      icon: <Icon4 className='step-icon' />,
    },
  ]

  return (
    <StyledHowIntegrateCryptoSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          {/* {t('title')} */}
          {data.screen6Title}
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
          {/* {t('button_text')} */}
          {data.buttonScreen6}
        </ButtonGetStarted>
      </div>
    </StyledHowIntegrateCryptoSectionWrapper>
  )
}
