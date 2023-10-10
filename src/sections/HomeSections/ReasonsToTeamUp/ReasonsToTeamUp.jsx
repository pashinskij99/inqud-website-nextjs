import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledReasonsToTeamUp } from './ReasonsToTeamUp.styled'
import { HOME_B2B_REASONS_TEAM_UP } from '@/lib/datocmsQuery'
import { getData } from '@/lib/datocms'

export default async function ReasonsToTeamUp({ params }) {
  const { homePage: data } = await getData(HOME_B2B_REASONS_TEAM_UP, {
    locale: params.locale,
  })

  return (
    <StyledReasonsToTeamUp>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='reasonsToTeamUpTitle'>
          {data.screen6Title}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH5
          component='p'
          className='reasonsToTeamUpSubTitle'
        >
          {data.screen6Description}
        </StyledTypographyUrbanistH5>

        <ul className='reasonsToTeamUpGrid'>
          {data.screen6Features?.map(
            ({ id, description, image: { url }, title }) => (
              <li key={id}>
                <Image src={url} alt='' width={64} height={64} />
                <StyledTypographyUrbanistH5 className='reasonsToTeamUpGridItemTitle'>
                  {title}
                </StyledTypographyUrbanistH5>
                <StyledTypographyUrbanistBody className='reasonsToTeamUpGridItemDescription'>
                  {description}
                </StyledTypographyUrbanistBody>
              </li>
            )
          )}
        </ul>
      </div>
    </StyledReasonsToTeamUp>
  )
}
