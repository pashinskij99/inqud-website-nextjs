'use client'

import React from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import { StyledPrivacyNoticeSectionWrapper } from './MainSection.styled'

function MainSection({ data }) {
  return (
    <StyledPrivacyNoticeSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH1>{data.title}</StyledTypographyUrbanistH1>
        <StyledTypographyUrbanistBody>
          Last Updated: 21 July 2023
        </StyledTypographyUrbanistBody>
        <StructuredText data={data.content} />
      </div>
    </StyledPrivacyNoticeSectionWrapper>
  )
}

export default MainSection
