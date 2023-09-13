'use client';

import React from 'react';
import { StructuredText } from 'react-datocms/structured-text';
import {
  StyledTypographyUrbanistH1,
} from '@/components/UI/Typography/Typography.styled';
import { StyledCookiePolicySectionWrapper } from './MainSection.styled';

function MainSection({data}) {


  return (
    <StyledCookiePolicySectionWrapper>
      <div className="container">
      <StyledTypographyUrbanistH1>{data.cookiePolicy.title}</StyledTypographyUrbanistH1>
      <StructuredText data={data.cookiePolicy.content} />
      </div>
    </StyledCookiePolicySectionWrapper>
  );
}

export default MainSection;
