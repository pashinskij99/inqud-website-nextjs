import { StyledTypographyUrbanistH2 } from '@/components/UI/Typography/Typography.styled'
import OurLandscapeTabComponent from './components/OurLandscapeTabComponent'
// import { getData } from '@/lib/datocms'
// import { HOME_B2B_LANDSCAPE } from '@/lib/datocmsQuery'
// import styles from './styles.module.scss'
import { StyledOurLandscapeSection } from '@/sections/HomeSections/OurLandscapeSection/OurLandscapeSection.styled'

export default async function OurLandscapeSection({ data }) {
  // const { ourLandscape: data } = await getData(HOME_B2B_LANDSCAPE, {
  //   locale: params.locale,
  // })
  return (
    <StyledOurLandscapeSection className='our-landscape'>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='ourLandscapeTitle'>
          {data.title}
        </StyledTypographyUrbanistH2>
        <OurLandscapeTabComponent data={data} />
      </div>
    </StyledOurLandscapeSection>
  )
}
