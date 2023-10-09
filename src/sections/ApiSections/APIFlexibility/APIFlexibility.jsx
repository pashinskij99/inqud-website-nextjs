'use client'

// import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import { StyledAPIFlexibilityWrapper } from './APIFlexibility.styled'
// import Icon1 from '@/assets/images/api/flexibility/icon1-min.svg'
// import Icon2 from '@/assets/images/api/flexibility/icon2-min.svg'
// import Icon3 from '@/assets/images/api/flexibility/icon3-min.svg'
// import Icon4 from '@/assets/images/api/flexibility/icon4-min.svg'
// import Icon5 from '@/assets/images/api/flexibility/icon5-min.svg'
// import Icon6 from '@/assets/images/api/flexibility/icon6-min.svg'
// import { keysForLocale } from '@/config/keysForLocale'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function APIFlexibility() {
  // const t = useTranslations('api_page.api_flexibility_section')
  // const tFeaturesTitle = useTranslations(
  //   'api_page.api_flexibility_section.features_list_title'
  // )
  // const tFeaturesDescription = useTranslations(
  //   'api_page.api_flexibility_section.features_list_description'
  // )

  // const grid = [
  //   {
  //     id: 0,
  //     icon: <Icon1 />,
  //     title: tFeaturesTitle(keysForLocale.keys6[0]),
  //     titleOnlyTablet: tFeaturesTitle(keysForLocale.keys6[0]),
  //     description: tFeaturesDescription(keysForLocale.keys6[0]),
  //     descriptionOnlyTablet: tFeaturesDescription(keysForLocale.keys6[0]),
  //   },
  //   {
  //     id: 1,
  //     icon: <Icon2 />,
  //     title: tFeaturesTitle(keysForLocale.keys6[1]),
  //     titleOnlyTablet: tFeaturesTitle(keysForLocale.keys6[1]),
  //     description: tFeaturesDescription(keysForLocale.keys6[1]),
  //     descriptionOnlyTablet: tFeaturesDescription(keysForLocale.keys6[1]),
  //   },
  //   {
  //     id: 2,
  //     icon: <Icon3 />,
  //     title: tFeaturesTitle(keysForLocale.keys6[2]),
  //     titleOnlyTablet: tFeaturesTitle(keysForLocale.keys6[2]),
  //     description: tFeaturesDescription(keysForLocale.keys6[2]),
  //     descriptionOnlyTablet: tFeaturesDescription(keysForLocale.keys6[2]),
  //   },
  //   {
  //     id: 3,
  //     icon: <Icon4 />,
  //     title: tFeaturesTitle(keysForLocale.keys6[3]),
  //     titleOnlyTablet: tFeaturesTitle(keysForLocale.keys6[3]),
  //     description: tFeaturesDescription(keysForLocale.keys6[3]),
  //     descriptionOnlyTablet: tFeaturesDescription(keysForLocale.keys6[3]),
  //   },
  //   {
  //     id: 4,
  //     icon: <Icon5 />,
  //     title: tFeaturesTitle(keysForLocale.keys6[4]),
  //     titleOnlyTablet: tFeaturesTitle(keysForLocale.keys6[4]),

  //     description: tFeaturesDescription(keysForLocale.keys6[4]),
  //     descriptionOnlyTablet: tFeaturesDescription(keysForLocale.keys6[4]),
  //   },
  //   {
  //     id: 5,
  //     icon: <Icon6 />,
  //     title: tFeaturesTitle(keysForLocale.keys6[5]),
  //     titleOnlyTablet: tFeaturesTitle(keysForLocale.keys6[5]),
  //     description: tFeaturesDescription(keysForLocale.keys6[5]),
  //     descriptionOnlyTablet: tFeaturesDescription(keysForLocale.keys6[5]),
  //   },
  // ]

  const {
    dataPage: { apiPage: data },
  } = useContext(PageContext)

  return (
    <StyledAPIFlexibilityWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          {/* {t('title')} */}
          {data.screen2Title}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistBody className='description'>
          {/* {t('description')} */}
          {data.screen2Description}
        </StyledTypographyUrbanistBody>

        <ul className='features-grid'>
          {data.screen2Content.map(({ description, image, id, title }) => (
            <li className='features-grid-item' key={id}>
              <Image src={image.url} alt='' width={64} height={64} />
              <StyledTypographyUrbanistH4 className='features-grid-item-title features-grid-item-title-1'>
                {title}
              </StyledTypographyUrbanistH4>
              <StyledTypographyUrbanistH4 className='features-grid-item-title features-grid-item-title-2'>
                {title}
              </StyledTypographyUrbanistH4>
              <StyledTypographyUrbanistBody className='features-grid-item-description features-grid-item-description-1'>
                {description}
              </StyledTypographyUrbanistBody>
              <StyledTypographyUrbanistBody className='features-grid-item-description features-grid-item-description-2'>
                {description}
              </StyledTypographyUrbanistBody>
            </li>
          ))}
        </ul>
      </div>
    </StyledAPIFlexibilityWrapper>
  )
}
