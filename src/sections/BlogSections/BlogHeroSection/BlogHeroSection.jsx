import React, { useContext } from 'react';
import Link from 'next/link';
import { StyledBlogHeroSectionWrapper } from './BlogHeroSection.styled';
import Dot from '@/assets/icons/dot.svg';
import ArrowBack from '@/assets/icons/arrow-back.svg';
import ArrowRightBackground from '@/assets/images/hero-blog/arrow-right-background.svg';
import ArrowLeftBackground from '@/assets/images/hero-blog/arrow-left-background.svg';
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled';
import { BlogContext } from '@/contexts/BlogContext/BlogContext';
import { getTimeForBlog } from '@/utils/getTimeForBlog';

export default function BlogHeroSection() {
  const {
    data: { mainTitle, dateAndTime },
  } = useContext(BlogContext);

  const { date, time } = getTimeForBlog(dateAndTime);

  return (
    <StyledBlogHeroSectionWrapper>
      <ArrowLeftBackground className="arrowLeftBackground" />
      <ArrowRightBackground className="arrowRightBackground" />

      <div className="container">
        <StyledTypographyUrbanistH1 className="title">
          {mainTitle}
        </StyledTypographyUrbanistH1>

        <div className="date-wrapper">
          <StyledTypographyUrbanistBody>{date}</StyledTypographyUrbanistBody>
          <Dot />
          <StyledTypographyUrbanistBody>
            {time} read
          </StyledTypographyUrbanistBody>
        </div>
      </div>

      <Link href="/blog">
        <button className="button-back">
          <ArrowBack />
          <StyledTypographyUrbanistBody>Back</StyledTypographyUrbanistBody>
        </button>
      </Link>
    </StyledBlogHeroSectionWrapper>
  );
}
