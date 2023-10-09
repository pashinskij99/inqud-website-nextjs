'use client'

import Image from 'next/image'
import { useContext } from 'react'
import Link from 'next/link'
import { StyledDevelopGuideWrapper } from './DevelopGuide.styled'
import {
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function DevelopGuide() {
  const {
    dataPage: { apiPage: data },
  } = useContext(PageContext)

  return (
    <StyledDevelopGuideWrapper>
      <div className='container'>
        <div className='left-side'>
          <div className='cart-wrapper'>
            <Image
              src={data.screen5Image.url}
              width={343}
              height={472}
              alt='Simplified developer guides'
            />
          </div>
        </div>
        <div className='right-side'>
          <StyledTypographyUrbanistH3 className='title'>
            {data.screen5Title}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistH5 className='description'>
            {data.screen5Description}
          </StyledTypographyUrbanistH5>
          <Link target='_blank' href='https://docs.inqud.com/'>
            <ButtonGetStarted className='get-started-button get-started-button-1'>
              {data.buttonScreen5}
            </ButtonGetStarted>
          </Link>
          <Link target='_blank' href='https://docs.inqud.com/'>
            <ButtonGetStarted className='get-started-button get-started-button-2'>
              {data.buttonScreen5}
            </ButtonGetStarted>
          </Link>
        </div>
      </div>
    </StyledDevelopGuideWrapper>
  )
}
