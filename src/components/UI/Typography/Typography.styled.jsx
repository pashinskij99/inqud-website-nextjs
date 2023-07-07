import styled from '@emotion/styled'
import { urbanist, IBM } from '@/utils/font'

export const StyledTypographyUrbanistDisplay = styled.p`
  color: var(--directness-black, #2d3439);

  ${urbanist.style}
  font-size: 8rem;
  font-weight: 400;
  line-height: 9rem;
  letter-spacing: -0.16rem;

  @media (max-width: 576px) {
    font-size: 6.4rem;
    line-height: 7.4rem;
  }
`

export const StyledTypographyUrbanistH1 = styled.h1`
  color: var(--directness-black, #2d3439);

  font-size: 6.4rem;
  ${urbanist.style}
  font-weight: 400;
  line-height: 7.4rem;
  letter-spacing: -0.128rem;

  @media (max-width: 576px) {
    font-size: 4rem;
    line-height: 4.6rem;
    font-weight: 700;
  }
`

export const StyledTypographyUrbanistH2 = styled.h2`
  color: var(--directness-black, #2d3439);

  ${urbanist.style}

  font-size: 5.6rem;
  font-weight: 400;
  line-height: 6.6rem;

  @media (max-width: 576px) {
    font-size: 4rem;
    font-weight: 700;
    line-height: 5rem;
  }
`

export const StyledTypographyUrbanistH3 = styled.h3`
  color: var(--directness-black, #2d3439);
  ${urbanist.style}

  font-size: 4rem;
  font-weight: 400;
  line-height: 4.6rem;
  @media (max-width: 576px) {
    font-size: 3.2rem;
    line-height: 4.2rem;
    font-weight: 700;
  }
`

export const StyledTypographyUrbanistH4 = styled.h4`
  color: var(--directness-black, #2d3439);
  ${urbanist.style}

  font-size: 3.2rem;
  font-weight: 400;
  line-height: 4.2rem;

  @media (max-width: 576px) {
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
`

export const StyledTypographyUrbanistH5 = styled.h5`
  color: var(--directness-black, #2d3439);
  ${urbanist.style}

  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3.4rem;

  @media (max-width: 576px) {
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
`

export const StyledTypographyUrbanistBody = styled.p`
  color: var(--directness-black, #2d3439);
  ${urbanist.style}

  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.6rem;
`

export const StyledTypographyUrbanistSmallSpaces = styled.p`
  ${urbanist.style}
  color: var(--directness-black, #2D3439);

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
`

export const StyledTypographyUrbanistCTA = styled.p`
  ${urbanist.style}
  color: var(--ambitious-green, #077453);

  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.6rem;
`

export const StyledTypographyIBMH4 = styled.h4`
  ${IBM.style}
  color: var(--ambitious-green, #077453);

  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.6rem;
`

export const StyledTypographyIBMH5 = styled.h5`
  ${IBM.style}
  color: #272727;

  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: 0.24rem;
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: 1.4rem;
    line-height: 1.1rem;
  }
`
