import Image from 'next/image'
// import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import { StyledConnectCryptoSectionWrapper } from './ConnectCryptoSection.styled'
import { ButtonGetStartedLight } from '@/components/UI/Button'
import image from '../../../assets/images/crypto-widget/page/connect/image.png'
import { PageContext } from '@/contexts/PageContext/PageContext'
// import { PageContext } from '@/contexts/PageContext/PageContext'
// import { useContext } from 'react'

export default function ConnectCryptoSection() {
  // const t = useTranslations('crypto_centre_page.connect_with_crypto_section')

  const {
    dataPage: { cryptoWidgetPage: data },
  } = useContext(PageContext)

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

        <ButtonGetStartedLight className='get-started'>
          {/* {t('button_text')} */}
          {data.leadForm2Button}
        </ButtonGetStartedLight>
      </div>
    </StyledConnectCryptoSectionWrapper>
  )
}
