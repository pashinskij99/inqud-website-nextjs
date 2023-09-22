import Image from 'next/image'
import Link from 'next/link'
// import { useTranslations } from 'next-intl'
import { useContext, useState } from 'react'
import dynamic from 'next/dynamic'
import {
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
  StyledTypographyUrbanistBody,
} from '@/components/UI/Typography/Typography.styled'
import { StyledInstantFreeWrapper } from './InstantFree.styled'
// import image from '../../../assets/images/api/instant/graphic.webp'
// import Icon1 from '../../../assets/images/api/instant/icon1.svg'
// import Icon2 from '../../../assets/images/api/instant/icon2.svg'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
// import { keysForLocale } from '@/config/keysForLocale'
import { PageContext } from '@/contexts/PageContext/PageContext'

const DynamicModalCalendaly = dynamic(
  () => import('react-calendly').then((mod) => mod.PopupModal),
  {
    ssr: false,
  }
)

export default function InstantFree() {
  // const t = useTranslations('api_page.instant_fee_section')
  // const tFeatures = useTranslations(
  //   'api_page.instant_fee_section.features_list'
  // )
  // const tButtonsGetStarted = useTranslations(
  //   'api_page.instant_fee_section.button_get_started'
  // )
  // const tButtonsContactSales = useTranslations(
  //   'api_page.instant_fee_section.button_contact_sales'
  // )

  // const grid = [
  //   {
  //     id: 0,
  //     icon: <Icon1 />,
  //     description: tFeatures(keysForLocale.keys2[0]),
  //   },
  //   { id: 1, icon: <Icon2 />, description: tFeatures(keysForLocale.keys2[1]) },
  // ]

  const [calendlyModal, setCalendlyModal] = useState(false)

  // useCalendlyEventListener({
  //   onEventScheduled: (e) => console.log(e),
  // })

  const handleOpenCalendlyModal = () => {
    setCalendlyModal(true)
  }
  const handleCloseCalendlyModal = () => {
    setCalendlyModal(false)
  }

  const {
    dataPage: { apiPage: data },
  } = useContext(PageContext)

  return (
    <StyledInstantFreeWrapper>
      <div className='container'>
        <div className='left-side'>
          <StyledTypographyUrbanistH3 className='title'>
            {/* {t('title')} */}
            {data.screen4Title}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistH5 className='description'>
            {/* {t('description')} */}
            {data.screen4Description}
          </StyledTypographyUrbanistH5>

          <div className='grid'>
            {data.screen4Features.map(({ id, title, image }) => (
              <div key={id} className='cart'>
                <Image src={image.url} alt='' width={48} height={48} />
                <StyledTypographyUrbanistBody className='cart-description'>
                  {title}
                </StyledTypographyUrbanistBody>
              </div>
            ))}
          </div>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted getStarted-1'>
                {/* {tButtonsGetStarted(keysForLocale.keys2[0])} */}
                {data.buttonScreen4A}
              </ButtonGetStarted>
              <ButtonGetStarted className='getStarted getStarted-2'>
                {/* {tButtonsGetStarted(keysForLocale.keys2[1])} */}
                {data.buttonScreen4A}
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost
              onClick={handleOpenCalendlyModal}
              className='ghostButton ghostButton-1'
            >
              {/* {tButtonsContactSales(keysForLocale.keys2[0])} */}
              {data.buttonScreen4B}
            </StyledButtonGhost>
            <StyledButtonGhost
              onClick={handleOpenCalendlyModal}
              className='ghostButton ghostButton-2'
            >
              {/* {tButtonsContactSales(keysForLocale.keys2[1])} */}
              {data.buttonScreen4B}
            </StyledButtonGhost>
            <DynamicModalCalendaly
              onModalClose={handleCloseCalendlyModal}
              open={calendlyModal}
              rootElement={document.getElementById('calendly-model-wrapper')}
              url='https://calendly.com/inqud_team/call-with-inqud'
            />
          </div>
        </div>
        <div className='right-side'>
          <div className='cart-wrapper'>
            <Image
              src={data.screen4Image.url}
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
