import { useContext } from 'react'
import Link from 'next-intl/link'
import Image from 'next/image'
import { StyledBlogHeroSectionWrapper } from './BlogHeroSection.styled'
import Dot from '@/assets/icons/dot.svg'
import ArrowBack from '@/assets/icons/arrow-back.svg'
import ArrowRightBackground from '@/assets/images/hero-blog/arrow-right-background.svg'
import ArrowLeftBackground from '@/assets/images/hero-blog/arrow-left-background.svg'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'
import { getTimeForBlog } from '@/utils/getTimeForBlog'

export default function BlogHeroSection() {
  const {
    blogDetails: { mainTitle, _createdAt, timeToRead },
    heroSectionData,
  } = useContext(BlogContext)

  const { date } = getTimeForBlog(_createdAt)

  return (
    <StyledBlogHeroSectionWrapper>
      <Image
        src={ArrowLeftBackground}
        className='arrowLeftBackground'
        alt='ArrowLeftBackground'
      />
      <Image
        src={ArrowRightBackground}
        className='arrowRightBackground'
        alt='ArrowRightBackground'
      />

      <div className='container'>
        <StyledTypographyUrbanistH1 className='title'>
          {mainTitle}
        </StyledTypographyUrbanistH1>

        <div className='date-wrapper'>
          <StyledTypographyUrbanistBody>{date}</StyledTypographyUrbanistBody>
          <Image src={Dot} alt='Dot' />
          <StyledTypographyUrbanistBody>
            {timeToRead} read
          </StyledTypographyUrbanistBody>
        </div>
      </div>

      <Link href='/blog'>
        <button className='button-back'>
          <Image src={ArrowBack} alt='ArrowBack' />
          <StyledTypographyUrbanistBody>
            {heroSectionData.buttonBack}
          </StyledTypographyUrbanistBody>
        </button>
      </Link>
    </StyledBlogHeroSectionWrapper>
  )
}
