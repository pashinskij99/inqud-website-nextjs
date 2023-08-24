import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { StyledDevelopGuideWrapper } from './DevelopGuide.styled'
import image from '../../../assets/images/api/develop-guide/image.webp'
import {
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { keysForLocale } from '@/config/keysForLocale'

export default function DevelopGuide() {
  const t = useTranslations('api_page.simplified_developer_section')
  const tButtonsGetStarted = useTranslations(
    'api_page.instant_fee_section.button_get_started'
  )

  return (
    <StyledDevelopGuideWrapper>
      <div className='container'>
        <div className='left-side'>
          <div className='cart-wrapper'>
            <Image
              src={image.src}
              width={343}
              height={472}
              alt='Simplified developer guides'
            />
          </div>
        </div>
        <div className='right-side'>
          <StyledTypographyUrbanistH3 className='title'>
            {t('title')}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistH5 className='description'>
            {t('description')}
          </StyledTypographyUrbanistH5>

          <ButtonGetStarted className='get-started-button get-started-button-1'>
            {t('button_text_get_started')}
          </ButtonGetStarted>
          <ButtonGetStarted className='get-started-button get-started-button-2'>
            {tButtonsGetStarted(keysForLocale.keys2[0])}
          </ButtonGetStarted>
        </div>
      </div>
    </StyledDevelopGuideWrapper>
  )
}
