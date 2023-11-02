'use client'

import { StructuredText } from 'react-datocms/structured-text'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import { StyledAmlCftPolicyUabSectionWrapper } from './MainSection.styled'

function MainSection({ data }) {
  return (
    <StyledAmlCftPolicyUabSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH1>
          {data.antiMoneyLaundering.title}
        </StyledTypographyUrbanistH1>
        <StyledTypographyUrbanistBody>
          {data.antiMoneyLaundering.lastUpdated}
        </StyledTypographyUrbanistBody>
        <StructuredText data={data.antiMoneyLaundering.content} />
      </div>
    </StyledAmlCftPolicyUabSectionWrapper>
  )
}

export default MainSection
