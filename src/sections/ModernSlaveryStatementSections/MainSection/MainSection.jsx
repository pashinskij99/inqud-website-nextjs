'use client'

import { useTranslations } from 'next-intl'
import React from 'react'
import { StyledTypographyUrbanistBody } from '@/components/UI/Typography/Typography.styled'
import { StyledModernSlaverySectionWrapper } from './MainSection.styled'

function MainSection() {
  const t = useTranslations('modern_slavery_statement')

  return (
    <StyledModernSlaverySectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistBody>
          {t('paragraph1')}
        </StyledTypographyUrbanistBody>
        <StyledTypographyUrbanistBody>
          {t('paragraph2')}
        </StyledTypographyUrbanistBody>
        <StyledTypographyUrbanistBody>
          {t('paragraph3')}
        </StyledTypographyUrbanistBody>
        {/* eslint-disable-next-line camelcase */}
        <a
          href='/file/modern_slavery_file.pdf'
          target='_blank'
          rel='noreferrer'
        >
          Modern Slavery Statement (PDF 3 MB)
        </a>
      </div>
    </StyledModernSlaverySectionWrapper>
  )
}

export default MainSection
