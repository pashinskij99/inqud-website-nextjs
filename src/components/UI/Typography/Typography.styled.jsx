'use client'

import styled from '@emotion/styled'
import { nunito } from '@/utils/font'
import { responsive } from '@/utils/response'

export function StyledTypographyUrbanistH1({
  children,
  component = 'h1',
  ...props
}) {
  const TypographyUrbanistH1 = styled[component]`
    color: var(--directness-black, #2d3439);

    font-size: 64px;
    ${nunito.style}
    font-weight: 400;
    line-height: 74px;
    letter-spacing: -1.28px;
    ${responsive.sm`
      font-size: 40px;
      line-height: 46px;
      font-weight: 700;
    `}
  `
  return (
    <TypographyUrbanistH1 component={component} {...props}>
      {children}
    </TypographyUrbanistH1>
  )
}

export function StyledTypographyUrbanistH2({
  children,
  component = 'h2',
  ...props
}) {
  const TypographyUrbanistH2 = styled[component]`
    color: var(--directness-black, #2d3439);

    ${nunito.style}

    font-size: 56px;
    font-weight: 400;
    line-height: 66px;
    ${responsive.sm`
      font-size: 40px;
      font-weight: 700;
      line-height: 50px;
    `}
  `

  return (
    <TypographyUrbanistH2 component={component} {...props}>
      {children}
    </TypographyUrbanistH2>
  )
}

export function StyledTypographyUrbanistH3({
  children,
  component = 'h3',
  ...props
}) {
  const TypographyUrbanistH3 = styled[component]`
    color: var(--directness-black, #2d3439);
    ${nunito.style}

    font-size: 40px;
    font-weight: 400;
    line-height: 46px;
    ${responsive.sm`
      font-size: 32px;
      line-height: 42px;
      font-weight: 700;
    `}
  `
  return (
    <TypographyUrbanistH3 component={component} {...props}>
      {children}
    </TypographyUrbanistH3>
  )
}

export function StyledTypographyUrbanistH4({
  children,
  component = 'h4',
  ...props
}) {
  const TypographyUrbanistH4 = styled[component]`
    color: var(--directness-black, #2d3439);
    ${nunito.style}

    font-size: 32px;
    font-weight: 400;
    line-height: 42px;
    ${responsive.sm`
      font-size: 24px;
      line-height: 34px;
    `}
  `
  return (
    <TypographyUrbanistH4 component={component} {...props}>
      {children}
    </TypographyUrbanistH4>
  )
}

export function StyledTypographyUrbanistH5({
  children,
  component = 'p',
  ...props
}) {
  const TypographyUrbanistH5 = styled[component]`
    color: var(--directness-black, #2d3439);
    ${nunito.style}

    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    ${responsive.sm`
      font-size: 18px;
      line-height: 22px;
    `}
  `

  return (
    <TypographyUrbanistH5 component={component} {...props}>
      {children}
    </TypographyUrbanistH5>
  )
}

export function StyledTypographyUrbanistBody({
  children,
  component = 'p',
  ...props
}) {
  const TypographyUrbanistBody = styled[component]`
    color: var(--directness-black, #2d3439);
    ${nunito.style}

    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
  `
  return (
    <TypographyUrbanistBody component={component} {...props}>
      {children}
    </TypographyUrbanistBody>
  )
}

export function StyledTypographyUrbanistSmallSpaces({
  children,
  component = 'p',
  ...props
}) {
  const TypographyUrbanistSmallSpaces = styled[component]`
    ${nunito.style}
    color: var(--directness-black, rgba(45, 52, 57, 0));
    pointer-events: none;

    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  `
  return (
    <TypographyUrbanistSmallSpaces component={component} {...props}>
      {children}
    </TypographyUrbanistSmallSpaces>
  )
}

export function StyledTypographyUrbanistCTA({
  children,
  component = 'p',
  ...props
}) {
  const TypographyUrbanistCTA = styled[component]`
    ${nunito.style}
    color: var(--ambitious-green, #077453);

    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
  `
  return (
    <TypographyUrbanistCTA component={component} {...props}>
      {children}
    </TypographyUrbanistCTA>
  )
}

export function StyledTypographyIBMH4({ children, component = 'p', ...props }) {
  const TypographyIBMH4 = styled[component]`
    ${nunito.style}
    color: var(--ambitious-green, #077453);

    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
  `
  return (
    <TypographyIBMH4 component={component} {...props}>
      {children}
    </TypographyIBMH4>
  )
}

export function StyledTypographyIBMH5({ children, component = 'p', ...props }) {
  const TypographyIBMH5 = styled[component]`
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
  return (
    <TypographyIBMH5 component={component} {...props}>
      {children}
    </TypographyIBMH5>
  )
}
