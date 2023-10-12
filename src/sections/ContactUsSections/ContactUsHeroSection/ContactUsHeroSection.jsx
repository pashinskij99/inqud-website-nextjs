import { useContext, useState } from 'react'
import dynamic from 'next/dynamic'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledContactUsHeroSectionWrapper } from './ContactUsHeroSection.styled'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { StyledButtonSecondary } from '@/components/UI/Button/Button.styled'

const DynamicModalCalendaly = dynamic(
  () => import('@/components/CalendlyForm').then((mod) => mod.default),
  {
    ssr: false,
  }
)

function ContactUsHeroSection() {
  const {
    dataPage: { contactUsPage },
  } = useContext(PageContext)

  const [calendlyModal, setCalendlyModal] = useState(false)

  const handleOpenCalendlyModal = () => {
    setCalendlyModal(true)
  }
  const handleCloseCalendlyModal = () => {
    setCalendlyModal(false)
  }

  return (
    <StyledContactUsHeroSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH1 className='mainTitle'>
          {contactUsPage.mainTitle}
        </StyledTypographyUrbanistH1>
        <StyledTypographyUrbanistH5 className='mainSubTitle'>
          {contactUsPage.mainSubTitle}
        </StyledTypographyUrbanistH5>
        <StyledButtonSecondary
          onClick={handleOpenCalendlyModal}
          className='mainButton'
        >
          <StyledTypographyUrbanistBody>
            {contactUsPage.mainButtonText}
          </StyledTypographyUrbanistBody>
        </StyledButtonSecondary>

        {calendlyModal ? (
          <DynamicModalCalendaly
            handleClose={handleCloseCalendlyModal}
            open={calendlyModal}
          />
        ) : null}
      </div>
    </StyledContactUsHeroSectionWrapper>
  )
}

export default ContactUsHeroSection
