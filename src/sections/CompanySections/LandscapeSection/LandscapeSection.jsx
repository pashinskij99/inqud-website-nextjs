import Image from 'next/image'
// import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledLandscapeSectionWrapper } from './LandscapeSection.styled'
// import Icon1 from '@/assets/images/our-landscape/coverage1.svg'
// import Icon2 from '@/assets/images/our-landscape/coverage6.png'
// import Icon3 from '@/assets/images/our-landscape/coverage3.svg'
// import map from '@/assets/images/our-landscape/map.webp'
// import { keysForLocale } from '@/config/keysForLocale'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function LandscapeSection() {
  // const t = useTranslations('company_page.our_landscape_section')
  // const tTitles = useTranslations(
  //   'company_page.our_landscape_section.items_title'
  // )
  // const tDescriptions = useTranslations(
  //   'company_page.our_landscape_section.items_description'
  // )

  // const grid = [
  //   {
  //     id: 0,
  //     icon: <Icon1 />,
  //     title: tTitles(keysForLocale.keys3[0]),
  //     description: tDescriptions(keysForLocale.keys3[0]),
  //   },
  //   {
  //     id: 1,
  //     icon: (
  //       <Image src={Icon2.src} width={38.189} height={33.638} alt='coverage' />
  //     ),
  //     title: tTitles(keysForLocale.keys3[1]),
  //     description: tDescriptions(keysForLocale.keys3[1]),
  //   },
  //   {
  //     id: 2,
  //     icon: <Icon3 />,
  //     title: tTitles(keysForLocale.keys3[2]),
  //     description: tDescriptions(keysForLocale.keys3[2]),
  //   },
  // ]

  const {
    dataPage: { aboutUsPage: data },
  } = useContext(PageContext)

  return (
    <StyledLandscapeSectionWrapper>
      <div className='container'>
        <div className='text-wrapper'>
          <div className='title-wrapper'>
            <StyledTypographyUrbanistH2 className='title'>
              {/* {t('title')} */}
              {data.screen3Title}
            </StyledTypographyUrbanistH2>
            <StyledTypographyUrbanistH5 className='description'>
              {/* {t('description')} */}
              {data.screen3Description}
            </StyledTypographyUrbanistH5>
          </div>

          <ul className='list'>
            {data.screen3List.map(
              ({ id, description, image: { url, width, height }, title }) => (
                <li className='list-item' key={id}>
                  <div className='list-item-icon-wrapper'>
                    <Image src={url} alt='' width={width} height={height} />
                  </div>

                  <div className='list-item-text-wrapper'>
                    <StyledTypographyUrbanistBody className='list-item-title'>
                      {title}
                    </StyledTypographyUrbanistBody>
                    <StyledTypographyUrbanistBody className='list-item-description'>
                      {description}
                    </StyledTypographyUrbanistBody>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>

        <Image
          src={data.screen3Image.url}
          alt='Map'
          width={775.02}
          height={400}
          className='map'
        />
      </div>
    </StyledLandscapeSectionWrapper>
  )
}
