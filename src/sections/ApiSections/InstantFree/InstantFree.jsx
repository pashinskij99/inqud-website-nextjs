import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import {
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
  StyledTypographyUrbanistBody,
} from '@/components/UI/Typography/Typography.styled'
import { StyledInstantFreeWrapper } from './InstantFree.styled'
import image from '../../../assets/images/api/instant/graphic.webp'
import Icon1 from '../../../assets/images/api/instant/icon1.svg'
import Icon2 from '../../../assets/images/api/instant/icon2.svg'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { keysForLocale } from '@/config/keysForLocale'

export default function InstantFree() {
  const t = useTranslations('api_page.instant_fee_section')
  const tFeatures = useTranslations(
    'api_page.instant_fee_section.features_list'
  )
  const tButtonsGetStarted = useTranslations(
    'api_page.instant_fee_section.button_get_started'
  )
  const tButtonsContactSales = useTranslations(
    'api_page.instant_fee_section.button_contact_sales'
  )

  const grid = [
    {
      id: 0,
      icon: <Icon1 />,
      description: tFeatures(keysForLocale.keys2[0]),
    },
    { id: 1, icon: <Icon2 />, description: tFeatures(keysForLocale.keys2[1]) },
  ]

  return (
    <StyledInstantFreeWrapper>
      <div className='container'>
        <div className='left-side'>
          <StyledTypographyUrbanistH3 className='title'>
            {t('title')}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistH5 className='description'>
            {t('description')}
          </StyledTypographyUrbanistH5>

          <div className='grid'>
            {grid.map(({ id, description, icon }) => (
              <div key={id} className='cart'>
                {icon}
                <StyledTypographyUrbanistBody className='cart-description'>
                  {description}
                </StyledTypographyUrbanistBody>
              </div>
            ))}
          </div>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted getStarted-1'>
                {tButtonsGetStarted(keysForLocale.keys2[0])}
              </ButtonGetStarted>
              <ButtonGetStarted className='getStarted getStarted-2'>
                {tButtonsGetStarted(keysForLocale.keys2[1])}
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost className='ghostButton ghostButton-1'>
              {tButtonsContactSales(keysForLocale.keys2[0])}
            </StyledButtonGhost>
            <StyledButtonGhost className='ghostButton ghostButton-2'>
              {tButtonsContactSales(keysForLocale.keys2[1])}
            </StyledButtonGhost>
          </div>
        </div>
        <div className='right-side'>
          <div className='cart-wrapper'>
            <Image
              src={image.src}
              width={343}
              height={534}
              alt='Instant Free A2A Payments for Merchants'
            />
          </div>
        </div>
      </div>
    </StyledInstantFreeWrapper>
  )
}
