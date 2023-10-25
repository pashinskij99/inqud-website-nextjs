'use client'

import Image from 'next/image'
// import { useTranslations } from 'next-intl'
import { useContext, useState } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
// import dynamic from 'next/dynamic'
import { PopupModal } from 'react-calendly'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import { StyledConnectCryptoSectionWrapper } from './ConnectCryptoSection.styled'
import { ButtonGetStartedLight } from '@/components/UI/Button'
import image from '../../../assets/images/crypto-widget/page/connect/image.png'
import { PageContext } from '@/contexts/PageContext/PageContext'
import {
  addGlobalScrollBar,
  removeGlobalScrollBar,
} from '@/utils/addOrRemoveGlobalScrollBar'
// import { PageContext } from '@/contexts/PageContext/PageContext'
// import { useContext } from 'react'

// const DynamicModalCalendaly = dynamic(
//   () => import('@/components/CalendlyForm').then((mod) => mod.default),
//   {
//     ssr: false,
//   }
// )

export default function ConnectCryptoSection() {
  // const t = useTranslations('crypto_centre_page.connect_with_crypto_section')

  const {
    dataPage: { cryptoWidgetPage: data },
  } = useContext(PageContext)

  const [calendlyModal, setCalendlyModal] = useState(false)

  // useCalendlyEventListener({
  //   onEventScheduled: (e) => console.log(e),
  // })

  const handleOpenCalendlyModal = () => {
    setCalendlyModal(true)
    removeGlobalScrollBar()
  }
  const handleCloseCalendlyModal = () => {
    setCalendlyModal(false)
    addGlobalScrollBar()
  }

  // const {
  //   dataPage: { cryptoWidgetPage: data },
  // } = useContext(PageContext)

  return (
    <StyledConnectCryptoSectionWrapper>
      <Image
        className='background background-1'
        src={image.src}
        width={1920}
        height={568}
        alt='Connect with crypto customers!'
      />
      {/* <Image
        className='background background-2'
        src={image2.src}
        width={1280}
        height={568}
        alt='Connect with crypto customers!'
      /> */}
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          {/* {t('title')} */}
          {data.lead2Title}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH4 className='description'>
          <StructuredText data={data.leadForm2Description} />
        </StyledTypographyUrbanistH4>

        <ButtonGetStartedLight
          onClick={handleOpenCalendlyModal}
          className='get-started'
        >
          {/* {t('button_text')} */}
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
        {/* // <DynamicModalCalendaly
        //   handleClose={handleCloseCalendlyModal}
        //   open={calendlyModal}
        // /> */}
      </div>
    </StyledConnectCryptoSectionWrapper>
  )
}
