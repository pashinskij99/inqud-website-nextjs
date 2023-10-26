import { StyledTypographyUrbanistH2 } from '@/components/UI/Typography/Typography.styled'
import OurLandscapeTabComponent from './components/OurLandscapeTabComponent'
import { StyledOurLandscapeSection } from '@/sections/HomeSections/OurLandscapeSection/OurLandscapeSection.styled'

export default async function OurLandscapeSection({ data }) {
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
