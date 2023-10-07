// import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledReasonsToTeamUp } from './ReasonsToTeamUp.styled'
import { HOME_B2B_REASONS_TEAM_UP } from '@/lib/datocmsQuery'
import { getData } from '@/lib/datocms'

// import { PageContext } from '@/contexts/PageContext/PageContext'
// import { getPageData } from '@/lib/datocms'
// import { HOME_B2B_REASONS_TEAM_UP } from '@/lib/datocmsQuery'

export default async function ReasonsToTeamUp({ params }) {
  // const [data, setData] = useState({})

  // const { params } = useContext(PageContext)

  // useEffect(() => {
  //   const getData = async () => {
  //     const pageData = await getPageData({
  //       variables: {
  //         locale: params.locale,
  //       },
  //       query: HOME_B2B_REASONS_TEAM_UP,
  //     })

  //     setData(pageData.homePage)
  //   }

  //   getData()
  // }, [])

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
