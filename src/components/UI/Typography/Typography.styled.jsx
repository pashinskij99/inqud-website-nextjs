import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { nunito } from '@/utils/font'
import { rem } from '@/utils/rem'
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

  font-size: ${rem(56)};
  font-weight: 400;
  line-height: ${rem(66)};
  ${responsive.xs`
    font-size: ${rem(40)};
    font-weight: 700;
    line-height: ${rem(50)};
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

  font-size: ${rem(40)};
  font-weight: 400;
  line-height: ${rem(46)};
  ${responsive.xs`
    font-size: ${rem(32)};
    line-height: ${rem(42)};
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

  font-size: ${rem(32)};
  font-weight: 400;
  line-height: ${rem(42)};
  ${responsive.xs`
    font-size: ${rem(24)};
    line-height: ${rem(34)};
  `}
`

export function StyledTypographyUrbanistH5({
  children,
  component = 'h5',
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

  font-size: ${rem(24)};
  font-weight: 400;
  line-height: ${rem(34)};
  ${responsive.xs`
    font-size: ${rem(18)};
    line-height: ${rem(22)};
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

  font-size: ${rem(18)};
  font-weight: 400;
  line-height: ${rem(26)};
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

  font-size: ${rem(14)};
  font-weight: 500;
  line-height: ${rem(18)};
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

  font-size: ${rem(18)};
  font-weight: 700;
  line-height: ${rem(26)};
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

  font-size: ${rem(18)};
  font-weight: 700;
  line-height: ${rem(26)};
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
  line-height: ${rem(30)};
  letter-spacing: ${rem(2.4)};
  text-transform: uppercase;
  ${responsive.xs`
    font-size: ${rem(14)};
    line-height: ${rem(11)};
  `}
`
