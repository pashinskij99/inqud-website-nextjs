'use client'

import { StructuredText } from 'react-datocms/structured-text'
import { StyledModernSlaverySectionWrapper } from './MainSection.styled'

function MainSection({ data }) {
  return (
    <StyledModernSlaverySectionWrapper>
      <div className='container'>
        <StructuredText data={data.modernSlaveryStatement.content} />
      </div>
    </StyledModernSlaverySectionWrapper>
  )
}

export default MainSection
