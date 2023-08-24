import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import { StyledConnectCryptoSectionWrapper } from './ConnectCryptoSection.styled'
import { ButtonGetStartedLight } from '@/components/UI/Button'
import image from '../../../assets/images/crypto-widget/page/connect/image.png'
import image2 from '../../../assets/images/crypto-widget/page/connect/image2.png'

export default function ConnectCryptoSection() {
  const t = useTranslations('crypto_centre_page.connect_with_crypto_section')

  return (
    <StyledConnectCryptoSectionWrapper>
      <Image
        className='background background-1'
        src={image.src}
        width={1920}
        height={568}
        alt='Connect with crypto customers!'
      />
      <Image
        className='background background-2'
        src={image2.src}
        width={1280}
        height={568}
        alt='Connect with crypto customers!'
      />
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          {t('title')}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH4 className='description'>
          {t('description')} <span>{t('description_selected')}</span>
        </StyledTypographyUrbanistH4>

        <ButtonGetStartedLight className='get-started'>
          {t('button_text')}
        </ButtonGetStartedLight>
      </div>
    </StyledConnectCryptoSectionWrapper>
  )
}
