import React from 'react'
import Link from 'next/link'
import { StyledBlogHeroSectionWrapper } from './BlogHeroSection.styled'
import Dot from '@/assets/icons/dot.svg'
import ArrowBack from '@/assets/icons/arrow-back.svg'
import ArrowRightBackground from '@/assets/images/hero-blog/arrow-right-background.svg'
import ArrowLeftBackground from '@/assets/images/hero-blog/arrow-left-background.svg'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'

export default function BlogHeroSection() {
  return (
    <StyledBlogHeroSectionWrapper>
      <ArrowLeftBackground className='arrowLeftBackground' />
      <ArrowRightBackground className='arrowRightBackground' />

      <div className='container'>
        <StyledTypographyUrbanistH1 className='title'>
          How to Sell <br className='br-desktop' /> Cryptocurrencies on Our{' '}
          <br className='br-desktop' /> Platform
        </StyledTypographyUrbanistH1>

        <div className='date-wrapper'>
          <StyledTypographyUrbanistBody>
            June 21, 2023
          </StyledTypographyUrbanistBody>
          <Dot />
          <StyledTypographyUrbanistBody>
            5 min read
          </StyledTypographyUrbanistBody>
        </div>
      </div>

      <Link href='/blog'>
        <button className='button-back'>
          <ArrowBack />
          <StyledTypographyUrbanistBody>Back</StyledTypographyUrbanistBody>
        </button>
      </Link>
    </StyledBlogHeroSectionWrapper>
  )
}
