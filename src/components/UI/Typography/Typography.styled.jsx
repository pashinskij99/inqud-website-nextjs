'use client'

import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { nunito } from '@/utils/font'
import { responsive } from '@/utils/response'

export function StyledTypographyUrbanistH1({
  children,
  component = 'h1',
  ...props
}) {
  return (
    <TypographyUrbanistH1 component={component} {...props}>
      {children}
    </TypographyUrbanistH1>
  )
}

const TypographyUrbanistH1 = styled(Typography)`
  color: var(--directness-black, #2d3439);

  font-size: 64px;
  ${nunito.style}
  font-weight: 400;
  line-height: 74px;
  letter-spacing: -1.28px;
  ${responsive.xs`
    font-size: 40px;
    line-height: 46px;
    font-weight: 700;
  `}
`

export function StyledTypographyUrbanistH2({
  children,
  component = 'h2',
  ...props
}) {
  return (
    <TypographyUrbanistH2 component={component} {...props}>
      {children}
    </TypographyUrbanistH2>
  )
}

const TypographyUrbanistH2 = styled(Typography)`
  color: var(--directness-black, #2d3439);

  ${nunito.style}

  font-size: 56px;
  font-weight: 400;
  line-height: 66px;
  ${responsive.xs`
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
  `}
`

export function StyledTypographyUrbanistH3({
  children,
  component = 'h3',
  ...props
}) {
  return (
    <TypographyUrbanistH3 component={component} {...props}>
      {children}
    </TypographyUrbanistH3>
  )
}

const TypographyUrbanistH3 = styled(Typography)`
  color: var(--directness-black, #2d3439);
  ${nunito.style}

  font-size: 40px;
  font-weight: 400;
  line-height: 46px;
  ${responsive.xs`
    font-size: 32px;
    line-height: 42px;
    font-weight: 700;
  `}
`

export function StyledTypographyUrbanistH4({
  children,
  component = 'h4',
  ...props
}) {
  return (
    <TypographyUrbanistH4 component={component} {...props}>
      {children}
    </TypographyUrbanistH4>
  )
}

const TypographyUrbanistH4 = styled(Typography)`
  color: var(--directness-black, #2d3439);
  ${nunito.style}

  font-size: 32px;
  font-weight: 400;
  line-height: 42px;
  ${responsive.xs`
    font-size: 24px;
    line-height: 34px;
  `}
`

export function StyledTypographyUrbanistH5({
  children,
  component = 'p',
  ...props
}) {
  return (
    <TypographyUrbanistH5 component={component} {...props}>
      {children}
    </TypographyUrbanistH5>
  )
}

const TypographyUrbanistH5 = styled(Typography)`
  color: var(--directness-black, #2d3439);
  ${nunito.style}

  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  ${responsive.xs`
    font-size: 18px;
    line-height: 22px;
  `}
`

export function StyledTypographyUrbanistBody({
  children,
  component = 'p',
  ...props
}) {
  return (
    <TypographyUrbanistBody component={component} {...props}>
      {children}
    </TypographyUrbanistBody>
  )
}

const TypographyUrbanistBody = styled(Typography)`
  color: var(--directness-black, #2d3439);
  ${nunito.style}

  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
`

export function StyledTypographyUrbanistSmallSpaces({
  children,
  component = 'p',
  ...props
}) {
  return (
    <TypographyUrbanistSmallSpaces component={component} {...props}>
      {children}
    </TypographyUrbanistSmallSpaces>
  )
}

const TypographyUrbanistSmallSpaces = styled(Typography)`
  ${nunito.style}
  color: var(--directness-black, rgba(45, 52, 57, 0));
  pointer-events: none;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`

export function StyledTypographyUrbanistCTA({
  children,
  component = 'p',
  ...props
}) {
  return (
    <TypographyUrbanistCTA component={component} {...props}>
      {children}
    </TypographyUrbanistCTA>
  )
}

const TypographyUrbanistCTA = styled(Typography)`
  ${nunito.style}
  color: var(--ambitious-green, #077453);

  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`

export function StyledTypographyIBMH4({ children, component = 'p', ...props }) {
  return (
    <TypographyIBMH4 component={component} {...props}>
      {children}
    </TypographyIBMH4>
  )
}

const TypographyIBMH4 = styled(Typography)`
  ${nunito.style}
  color: var(--ambitious-green, #077453);

  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`

export function StyledTypographyIBMH5({ children, component = 'p', ...props }) {
  return (
    <TypographyIBMH5 component={component} {...props}>
      {children}
    </TypographyIBMH5>
  )
}

const TypographyIBMH5 = styled(Typography)`
  ${nunito.style};
  color: #272727;

  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  ${responsive.xs`
    font-size: 14px;
    line-height: 11px;
  `}
`
