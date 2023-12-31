'use client'

import { useContext, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { StyledHowIntegrateCryptoSectionWrapper } from './HowIntegrateCryptoSection.styled'
import { StyledTypographyUrbanistH2 } from '@/components/UI/Typography/Typography.styled'
import arrowImage from '@/assets/images/homeB2C/how-to-start/arrow.png'
import arrowImageMobile from '@/assets/images/homeB2C/PassKYC/arrow-down.png'
import Icon1 from '@/assets/images/api/how-integrate/num1-min.svg'
import Icon2 from '@/assets/images/api/how-integrate/num2-min.svg'
import Icon3 from '@/assets/images/api/how-integrate/num3-min.svg'
import Icon4 from '@/assets/images/api/how-integrate/num4-min.svg'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StepContent } from '@/sections/ApiSections/HowIntegrate/HowIntegrate'
import { PageContext } from '@/contexts/PageContext/PageContext'

const DynamicHowIntegrateCryptoSectionModal = dynamic(() =>
  import('./components/HowIntegrateCryptoSectionModal')
)

export default function HowIntegrateCryptoSection() {
  const [openModalSendRequest, setOpenModalSendRequest] = useState(false)
  const {
    dataPage: { cryptoWidgetPage: data, formSendResponse: formData },
  } = useContext(PageContext)

  const handleOpen = () => {
    setOpenModalSendRequest(true)
  }

  const handleClose = () => {
    setOpenModalSendRequest(false)
  }

  const stepsContent = [
    {
      id: 1,
      title: data.screen6Step[0].title,
      titleLaptop: data.screen6Step[0].title,
      titleTablet: data.screen6Step[0].title,
      titleMobile: data.screen6Step[0].title,
      time: data.screen6Step[0].time,
      icon: <Image src={Icon1} alt='Icon1' className='step-icon' />,
    },
    { id: 2, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
    {
      id: 3,
      title: data.screen6Step[1].title,
      titleLaptop: data.screen6Step[1].title,
      titleTablet: data.screen6Step[1].title,
      titleMobile: data.screen6Step[1].title,
      time: data.screen6Step[1].time,
      icon: <Image src={Icon2} alt='Icon2' className='step-icon' />,
    },
    { id: 4, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
    {
      id: 5,
      title: data.screen6Step[2].title,
      titleLaptop: data.screen6Step[2].title,
      titleTablet: data.screen6Step[2].title,
      titleMobile: data.screen6Step[2].title,
      time: data.screen6Step[2].time,
      icon: <Image src={Icon3} alt='Icon3' className='step-icon' />,
    },
    { id: 6, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
    {
      id: 7,
      title: data.screen6Step[3].title,
      titleLaptop: data.screen6Step[3].title,
      titleTablet: data.screen6Step[3].title,
      titleMobile: data.screen6Step[3].title,
      time: data.screen6Step[3].time,
      icon: <Image src={Icon4} alt='Icon4' className='step-icon' />,
    },
  ]

  return (
    <StyledHowIntegrateCryptoSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
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

        <ButtonGetStarted onClick={handleOpen} className='get-started-button'>
          {data.buttonScreen6}
        </ButtonGetStarted>

        {openModalSendRequest ? (
          <DynamicHowIntegrateCryptoSectionModal
            handleClose={handleClose}
            open={openModalSendRequest}
            data={formData}
          />
        ) : null}
      </div>
    </StyledHowIntegrateCryptoSectionWrapper>
  )
}
