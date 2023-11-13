'use client'

import Image from 'next/image'
import { useContext, useState } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import { PopupModal } from 'react-calendly'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import { StyledConnectCryptoSectionWrapper } from './ConnectCryptoSection.styled'
import { ButtonGetStartedLight } from '@/components/UI/Button'
import image from '@/assets/images/crypto-widget/page/connect/background.svg'
import { PageContext } from '@/contexts/PageContext/PageContext'
import {
  addGlobalScrollBar,
  removeGlobalScrollBar,
} from '@/utils/addOrRemoveGlobalScrollBar'

export default function ConnectCryptoSection() {
  const {
    dataPage: { cryptoWidgetPage: data },
  } = useContext(PageContext)

  const [calendlyModal, setCalendlyModal] = useState(false)

  const handleOpenCalendlyModal = () => {
    setCalendlyModal(true)
    removeGlobalScrollBar()
  }
  const handleCloseCalendlyModal = () => {
    setCalendlyModal(false)
    addGlobalScrollBar()
  }

  return (
    <StyledConnectCryptoSectionWrapper>
      <Image
        className='background background-1'
        src={image.src}
        width={1920}
        height={568}
        alt='Connect with crypto customers!'
      />

      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          {data.lead2Title}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH4 className='description'>
          <StructuredText data={data.leadForm2Description} />
        </StyledTypographyUrbanistH4>

        <ButtonGetStartedLight
          onClick={handleOpenCalendlyModal}
          className='get-started'
        >
          {data.leadForm2Button}
        </ButtonGetStartedLight>
        {calendlyModal ? (
          <PopupModal
            url='https://calendly.com/inqud_team/30-minute-free-consultation'
            onModalClose={handleCloseCalendlyModal}
            open={calendlyModal}
            rootElement={document.getElementById('calendly-model-wrapper')}
          />
        ) : null}
      </div>
    </StyledConnectCryptoSectionWrapper>
  )
}
