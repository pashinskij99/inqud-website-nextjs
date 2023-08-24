import { useTranslations } from 'next-intl'
import {
  StyledTypographyIBMH4,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH3,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledCoreSectionWrapper,
  StyledGridCartWrapper,
} from './CoreSection.styled'
import { keysForLocale } from '@/config/keysForLocale'

export default function CoreSection() {
  const t = useTranslations('company_page.our_core_section')
  const tTitles = useTranslations('company_page.our_core_section.items_title')
  const tDescriptions = useTranslations(
    'company_page.our_core_section.items_description'
  )

  const grid = [
    {
      id: '01',
      title: tTitles(keysForLocale.keys6[0]),
      description: tDescriptions(keysForLocale.keys6[0]),
    },
    {
      id: '02',
      title: tTitles(keysForLocale.keys6[1]),
      description: tDescriptions(keysForLocale.keys6[1]),
    },
    {
      id: '03',
      title: tTitles(keysForLocale.keys6[2]),
      description: tDescriptions(keysForLocale.keys6[2]),
    },
    {
      id: '04',
      title: tTitles(keysForLocale.keys6[3]),
      description: tDescriptions(keysForLocale.keys6[3]),
    },
    {
      id: '05',
      title: tTitles(keysForLocale.keys6[4]),
      description: tDescriptions(keysForLocale.keys6[4]),
    },
    {
      id: '06',
      title: tTitles(keysForLocale.keys6[5]),
      description: tDescriptions(keysForLocale.keys6[5]),
    },
  ]
  return (
    <StyledCoreSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          {t('title')}
        </StyledTypographyUrbanistH2>

        <ul className='grid'>
          {grid.map(({ id, title, description }) => (
            <li key={id}>
              <GridCart id={id} title={title} description={description} />
            </li>
          ))}
        </ul>
      </div>
    </StyledCoreSectionWrapper>
  )
}

function GridCart({ id, title, description }) {
  return (
    <StyledGridCartWrapper>
      <div className='cart-id-wrapper'>
        <StyledTypographyIBMH4 className='cart-id'>{id}</StyledTypographyIBMH4>
      </div>
      <div className='cart-text-wrapper'>
        <StyledTypographyUrbanistH3 className='cart-title'>
          {title}
        </StyledTypographyUrbanistH3>
        <StyledTypographyUrbanistBody className='cart-description'>
          {description}
        </StyledTypographyUrbanistBody>
      </div>
    </StyledGridCartWrapper>
  )
}
