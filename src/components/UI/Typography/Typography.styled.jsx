import styled from '@emotion/styled'
import { nunito } from '@/utils/font'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledTypographyUrbanistH1 = styled.h1`
  color: var(--directness-black, #2d3439);

  font-size: ${rem(64)};
  ${nunito.style}
  font-weight: 400;
  line-height: ${rem(74)};
  letter-spacing: -${rem(1.28)};
  ${responsive.xs`
    font-size: ${rem(40)};
    line-height: ${rem(46)};
    font-weight: 700;
  `}
`

export const StyledTypographyUrbanistH2 = styled.h2`
  color: var(--directness-black, #2d3439);

  ${nunito.style}

  font-size: ${rem(56)};
  font-weight: 400;
  line-height: ${rem(66)};
  ${responsive.xs`
    font-size: ${rem(40)};
    font-weight: 700;
    line-height: ${rem(50)};
  `}
`

export const StyledTypographyUrbanistH3 = styled.h3`
  color: var(--directness-black, #2d3439);
  ${nunito.style}

  font-size: ${rem(40)};
  font-weight: 400;
  line-height: ${rem(46)};
  ${responsive.xs`
    font-size: ${rem(32)};
    line-height: ${rem(42)};
    font-weight: 700;
  `}
`

export const StyledTypographyUrbanistH4 = styled.h4`
  color: var(--directness-black, #2d3439);
  ${nunito.style}

  font-size: ${rem(32)};
  font-weight: 400;
  line-height: ${rem(42)};
  ${responsive.xs`
    font-size: ${rem(24)};
    line-height: ${rem(34)};
  `}
`

export const StyledTypographyUrbanistH5 = styled.h5`
  color: var(--directness-black, #2d3439);
  ${nunito.style}

  font-size: ${rem(24)};
  font-weight: 400;
  line-height: ${rem(34)};
  ${responsive.xs`
    font-size: ${rem(18)};
    line-height: ${rem(22)};
  `}
`

export const StyledTypographyUrbanistBody = styled.p`
  color: var(--directness-black, #2d3439);
  ${nunito.style}

  font-size: ${rem(18)};
  font-weight: 400;
  line-height: ${rem(26)};
`

export const StyledTypographyUrbanistSmallSpaces = styled.p`
  ${nunito.style}
  color: var(--directness-black, rgba(45, 52, 57, 0));
  pointer-events: none;

  font-size: ${rem(14)};
  font-weight: 500;
  line-height: ${rem(18)};
`

export const StyledTypographyUrbanistCTA = styled.p`
  ${nunito.style}
  color: var(--ambitious-green, #077453);

  font-size: ${rem(18)};
  font-weight: 700;
  line-height: ${rem(26)};
`

export const StyledTypographyIBMH4 = styled.h4`
  ${nunito.style}
  color: var(--ambitious-green, #077453);

  font-size: ${rem(18)};
  font-weight: 700;
  line-height: ${rem(26)};
`

export const StyledTypographyIBMH5 = styled.h5`
  ${nunito.style};
  color: #272727;

  font-size: ${rem(24)};
  font-weight: 400;
  line-height: ${rem(30)};
  letter-spacing: ${rem(2.4)};
  text-transform: uppercase;
  ${responsive.xs`
    font-size: ${rem(14)};
    line-height: ${rem(11)};
  `}
`
