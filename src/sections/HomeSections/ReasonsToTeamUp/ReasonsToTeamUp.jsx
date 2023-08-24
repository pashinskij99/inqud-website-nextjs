import { useTranslations } from 'next-intl'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledReasonsToTeamUp } from './ReasonsToTeamUp.styled'
import Icon1 from '@/assets/images/reason-to-team-up/1.svg'
import Icon2 from '@/assets/images/reason-to-team-up/2.svg'
import Icon3 from '@/assets/images/reason-to-team-up/3.svg'
import Icon4 from '@/assets/images/reason-to-team-up/4.svg'
import Icon5 from '@/assets/images/reason-to-team-up/5.svg'
import Icon6 from '@/assets/images/reason-to-team-up/6.svg'
import { keysForLocale } from '@/config/keysForLocale'

export default function ReasonsToTeamUp() {
  const t = useTranslations('home_page.stack_the_deck_section')
  const tListTitle = useTranslations(
    'home_page.stack_the_deck_section.list_item_title'
  )
  const tListDescription = useTranslations(
    'home_page.stack_the_deck_section.list_item_description'
  )

  const gridItems = [
    {
      id: 0,
      title: tListTitle(keysForLocale.keys6[0]),
      description: tListDescription(keysForLocale.keys6[0]),
      icon: <Icon1 />,
    },
    {
      id: 1,
      title: tListTitle(keysForLocale.keys6[1]),
      description: tListDescription(keysForLocale.keys6[1]),
      icon: <Icon2 />,
    },
    {
      id: 2,
      title: tListTitle(keysForLocale.keys6[2]),
      description: tListDescription(keysForLocale.keys6[2]),
      icon: <Icon3 />,
    },
    {
      id: 3,
      title: tListTitle(keysForLocale.keys6[3]),
      description: tListDescription(keysForLocale.keys6[3]),
      icon: <Icon4 />,
    },
    {
      id: 4,
      title: tListTitle(keysForLocale.keys6[4]),
      description: tListDescription(keysForLocale.keys6[4]),
      icon: <Icon5 />,
    },
    {
      id: 5,
      title: tListTitle(keysForLocale.keys6[5]),
      description: tListDescription(keysForLocale.keys6[5]),
      icon: <Icon6 />,
    },
  ]

  return (
    <StyledReasonsToTeamUp>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='reasonsToTeamUpTitle'>
          {t('title')}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH5 className='reasonsToTeamUpSubTitle'>
          {t('paragraph')}
        </StyledTypographyUrbanistH5>

        <ul className='reasonsToTeamUpGrid'>
          {gridItems.map(({ id, description, icon, title }) => (
            <li key={id}>
              {icon}
              <StyledTypographyUrbanistH5 className='reasonsToTeamUpGridItemTitle'>
                {title}
              </StyledTypographyUrbanistH5>
              <StyledTypographyUrbanistBody className='reasonsToTeamUpGridItemDescription'>
                {description}
              </StyledTypographyUrbanistBody>
            </li>
          ))}
        </ul>
      </div>
    </StyledReasonsToTeamUp>
  )
}
