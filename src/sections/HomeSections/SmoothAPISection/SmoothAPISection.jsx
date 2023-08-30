import Image from 'next/image'
import Link from 'next/link'
// import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledSmoothAPISection } from './SmoothAPISection.styled'
import { ButtonGetStarted } from '@/components/UI/Button/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
// import Graphic from '@/assets/images/smooth-API/graphic.svg'
// import GraphicTabletImage from '@/assets/images/smooth-API/graphic-tablet.png'
// import Icon1 from '@/assets/images/smooth-API/icon1.svg'
// import Icon2 from '@/assets/images/smooth-API/icon2.svg'
// import Icon3 from '@/assets/images/smooth-API/icon3.svg'
// import Icon4 from '@/assets/images/smooth-API/icon4.svg'
import Check from '@/assets/icons/check-green-background.svg'
// import { keysForLocale } from '@/config/keysForLocale'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function SmoothAPISection() {
  // const t = useTranslations('home_page.smooth_api_section')
  // const t2 = useTranslations('home_page.hero_section')
  // const t3 = useTranslations('home_page.crypto_widget_section')
  // const tList = useTranslations('home_page.smooth_api_section.list_item_title')
  // const tList2 = useTranslations(
  //   'home_page.smooth_api_section.list_item_description'
  // )

  const {
    dataPage: { homePage: data },
  } = useContext(PageContext)

  // const gridContent = [
  //   {
  //     id: 0,
  //     icon: <Icon1 className='icon' />,
  //     title: tList(keysForLocale.keys4[0]),
  //     description: tList2(keysForLocale.keys4[0]),
  //   },
  //   {
  //     id: 1,
  //     icon: <Icon2 className='icon' />,
  //     title: tList(keysForLocale.keys4[1]),
  //     description: tList2(keysForLocale.keys4[1]),
  //   },
  //   {
  //     id: 2,
  //     icon: <Icon3 className='icon' />,
  //     title: tList(keysForLocale.keys4[2]),
  //     description: tList2(keysForLocale.keys4[2]),
  //   },
  //   {
  //     id: 3,
  //     icon: <Icon4 className='icon' />,
  //     title: tList(keysForLocale.keys4[3]),
  //     description: tList2(keysForLocale.keys4[3]),
  //   },
  // ]

  return (
    <StyledSmoothAPISection>
      <div className='container'>
        <div className='leftSide'>
          <Image
            src={data.screen4Image.url}
            width={416.45}
            height={600}
            alt={data.screen4Title}
          />
          {/* <Graphic /> */}
        </div>

        <div className='rightSide'>
          <StyledTypographyIBMH5 className='smoothAPISubTitle'>
            {/* {t('sub_title')} */}
            {data.screen4SubTitle}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH2 className='smoothAPITitle'>
            {/* {t('title')} */}
            {data.screen4Title}
          </StyledTypographyUrbanistH2>

          <Image
            src={data.screen4Image.url}
            width={416.45}
            height={600}
            alt={data.screen4Title}
            className='smoothAPIImageTablet'
          />

          <StyledTypographyUrbanistBody className='smoothAPIDescription desktop'>
            {/* {t('paragraph')} */}
            {data.screen4Description}
          </StyledTypographyUrbanistBody>

          <StyledTypographyUrbanistH5 className='smoothAPIDescription tablet'>
            {/* {t('paragraph')} */}
            {data.screen4Description}
          </StyledTypographyUrbanistH5>

          <StyledTypographyUrbanistH5 className='smoothAPIDescriptionMobile'>
            {/* {t('paragraph_mobile')} */}
            {data.screen4Description}
          </StyledTypographyUrbanistH5>

          <ul className='smoothAPIGrid'>
            {data.screen4Features.map(
              ({ description, id, image: { url }, title }) => (
                <li
                  className='smoothAPIGridItem'
                  data-slug='comming soon'
                  key={id}
                >
                  <Check className='check' />
                  <Image src={url} alt={title} width={48} height={48} />
                  <StyledTypographyUrbanistH5 className='smoothAPIGridItemTitle'>
                    {title}
                  </StyledTypographyUrbanistH5>
                  <StyledTypographyUrbanistBody className='smoothAPIGridItemDescription'>
                    {description}
                  </StyledTypographyUrbanistBody>
                </li>
              )
            )}
          </ul>

          <div className='smoothAPIButtonWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='smoothAPIButtonGetStarted'>
                {/* {t2('button_text_get_started')} */}
                {data.buttonScreen4GetStarted}
              </ButtonGetStarted>
            </Link>
            <Link target='_blank' href='/api'>
              <StyledButtonGhost className='smoothAPIButtonGhost'>
                {/* {t3('button_text_learn_more')} */}
                {data.buttonScreen4LearnMore}
              </StyledButtonGhost>
            </Link>
          </div>
        </div>
      </div>
    </StyledSmoothAPISection>
  )
}
