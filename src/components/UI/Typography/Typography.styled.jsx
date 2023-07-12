import styled from '@emotion/styled'
import {urbanist, IBM} from '@/utils/font'
import {rem} from '@/utils/rem';

export const StyledTypographyUrbanistDisplay = styled.p`
  color: var(--directness-black, #2d3439);

  ${urbanist.style}
  font-size: ${rem(80)};
  font-weight: 400;
  line-height: ${rem(90)};
  letter-spacing: -${rem(1.6)};

  @media (max-width: 576px) {
    font-size: ${rem(64)};
    line-height: ${rem(74)};
  }
`

export const StyledTypographyUrbanistH1 = styled.h1`
  color: var(--directness-black, #2d3439);

  font-size: ${rem(64)};
  ${urbanist.style}
  font-weight: 400;
  line-height: ${rem(74)};
  letter-spacing: -${rem(1.28)};

  @media (max-width: 576px) {
    font-size: ${rem(40)};
    line-height: ${rem(46)};
    font-weight: 700;
  }
`

export const StyledTypographyUrbanistH2 = styled.h2`
  color: var(--directness-black, #2d3439);

  ${urbanist.style}

  font-size: ${rem(56)};
  font-weight: 400;
  line-height: ${rem(66)};

  @media (max-width: 576px) {
    font-size: ${rem(40)};
    font-weight: 700;
    line-height: ${rem(50)};
  }
`

export const StyledTypographyUrbanistH3 = styled.h3`
  color: var(--directness-black, #2d3439);
  ${urbanist.style}

  font-size: ${rem(40)};
  font-weight: 400;
  line-height: ${rem(46)};
  @media (max-width: 576px) {
    font-size: ${rem(32)};
    line-height: ${rem(42)};
    font-weight: 700;
  }
`

export const StyledTypographyUrbanistH4 = styled.h4`
  color: var(--directness-black, #2d3439);
  ${urbanist.style}

  font-size: ${rem(32)};
  font-weight: 400;
  line-height: ${rem(42)};

  @media (max-width: 576px) {
    font-size: ${rem(24)};
    line-height: ${rem(34)};
  }
`

export const StyledTypographyUrbanistH5 = styled.h5`
  color: var(--directness-black, #2d3439);
  ${urbanist.style}

  font-size: ${rem(24)};
  font-weight: 400;
  line-height: ${rem(34)};

  @media (max-width: 576px) {
    font-size: ${rem(18)};
    line-height: ${rem(22)};
  }
`

export const StyledTypographyUrbanistBody = styled.p`
  color: var(--directness-black, #2d3439);
  ${urbanist.style}

  font-size: ${rem(18)};
  font-weight: 400;
  line-height: ${rem(26)};
`

export const StyledTypographyUrbanistSmallSpaces = styled.p`
  ${urbanist.style}
  color: var(--directness-black, #2D3439);

  font-size: ${rem(14)};
  font-weight: 500;
  line-height: ${rem(18)};
`

export const StyledTypographyUrbanistCTA = styled.p`
  ${urbanist.style}
  color: var(--ambitious-green, #077453);

  font-size: ${rem(18)};
  font-weight: 700;
  line-height: ${rem(26)};
`

export const StyledTypographyIBMH4 = styled.h4`
  ${IBM.style}
  color: var(--ambitious-green, #077453);

  font-size: ${rem(18)};
  font-weight: 700;
  line-height: ${rem(26)};
`

export const StyledTypographyIBMH5 = styled.h5`
  ${IBM.style}
  color: #272727;

  font-size: ${rem(24)};
  font-weight: 400;
  line-height: ${rem(30)};
  letter-spacing: ${rem(2.4)};
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: ${rem(14)};
    line-height: ${rem(11)};
  }
`
