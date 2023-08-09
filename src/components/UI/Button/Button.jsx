import ArrowGetStarted from '@/assets/icons/arrow-green-get-started.svg'
import ArrowLearnMore from '@/assets/icons/arrow-green-dark-learn-more.svg'
import ArrowGetStartedLight from '@/assets/icons/arrow-get-started-light.svg'
import {
  StyledButtonGetStarted,
  StyledButtonGetStartedLight,
  StyledButtonGhostCrypto,
  StyledButtonLearnMore,
  StyledLoadMoreLarge,
} from './Button.styled'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistCTA,
} from '../Typography/Typography.styled'

export function ButtonGetStarted(props) {
  const { children } = props
  return (
    <StyledButtonGetStarted {...props}>
      <StyledTypographyUrbanistCTA className='text'>
        {children}
      </StyledTypographyUrbanistCTA>
      <ArrowGetStarted />
    </StyledButtonGetStarted>
  )
}

export function ButtonGetStartedLight(props) {
  const { children } = props
  return (
    <StyledButtonGetStartedLight {...props}>
      <StyledTypographyUrbanistCTA className='text'>
        {children}
      </StyledTypographyUrbanistCTA>
      <ArrowGetStartedLight />
    </StyledButtonGetStartedLight>
  )
}

export function ButtonLearnMore(props) {
  const { children } = props
  return (
    <StyledButtonLearnMore {...props}>
      <StyledTypographyUrbanistCTA className='text'>
        {children}
      </StyledTypographyUrbanistCTA>
      <ArrowLearnMore />
    </StyledButtonLearnMore>
  )
}

export function ButtonGhostCrypto(props) {
  const { children } = props

  return (
    <StyledButtonGhostCrypto {...props}>
      <StyledTypographyIBMH5 className='text'>{children}</StyledTypographyIBMH5>
    </StyledButtonGhostCrypto>
  )
}

export function ButtonLoadMoreLarge(props) {
  const { children } = props

  return (
    <StyledLoadMoreLarge {...props}>
      <StyledTypographyUrbanistCTA>{children}</StyledTypographyUrbanistCTA>
    </StyledLoadMoreLarge>
  )
}
