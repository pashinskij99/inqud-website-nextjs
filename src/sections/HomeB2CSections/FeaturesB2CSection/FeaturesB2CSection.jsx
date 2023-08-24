import { useTranslations } from 'next-intl'
import { StyledFeaturesB2CSectionWrapper } from './FeaturesB2CSection.styled'
import Icon1 from '@/assets/images/homeB2C/features/icon1.svg'
import Icon2 from '@/assets/images/homeB2C/features/icon2.svg'
import Icon3 from '@/assets/images/homeB2C/features/icon3.svg'
import Icon4 from '@/assets/images/homeB2C/features/icon4.svg'
import Icon5 from '@/assets/images/homeB2C/features/icon5.svg'
import Icon6 from '@/assets/images/homeB2C/features/icon6.svg'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import { keysForLocale } from '@/config/keysForLocale'

export default function FeaturesB2CSection() {
  const tListTitle = useTranslations(
    'home_b2c_page.features_section.features_items_title'
  )
  const tListDescription = useTranslations(
    'home_b2c_page.features_section.features_items_description'
  )

  const grid = [
    {
      id: 0,
      icon: <Icon1 />,
      title: tListTitle(keysForLocale.keys6[0]),
      description: tListDescription(keysForLocale.keys6[0]),
    },
    {
      id: 1,
      icon: <Icon2 />,
      title: tListTitle(keysForLocale.keys6[1]),
      description: tListDescription(keysForLocale.keys6[1]),
    },
    {
      id: 2,
      icon: <Icon3 />,
      title: tListTitle(keysForLocale.keys6[2]),
      description: tListDescription(keysForLocale.keys6[2]),
    },
    {
      id: 3,
      icon: <Icon4 />,
      title: tListTitle(keysForLocale.keys6[3]),
      description: tListDescription(keysForLocale.keys6[3]),
    },
    {
      id: 4,
      icon: <Icon5 />,
      title: tListTitle(keysForLocale.keys6[4]),
      description: tListDescription(keysForLocale.keys6[4]),
    },
    {
      id: 5,
      icon: <Icon6 />,
      title: tListTitle(keysForLocale.keys6[5]),
      description: tListDescription(keysForLocale.keys6[5]),
    },
  ]

  return (
    <StyledFeaturesB2CSectionWrapper>
      <div className='container'>
        <ul className='features-grid'>
          {grid.map(({ description, icon, id, title }) => (
            <li className='features-grid-item' key={id}>
              {icon}
              <StyledTypographyUrbanistH4 className='title'>
                {title}
              </StyledTypographyUrbanistH4>
              <StyledTypographyUrbanistBody className='description'>
                {description}
              </StyledTypographyUrbanistBody>
            </li>
          ))}
        </ul>
      </div>
    </StyledFeaturesB2CSectionWrapper>
  )
}
