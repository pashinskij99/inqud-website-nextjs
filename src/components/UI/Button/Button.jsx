'use client'

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
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Arrow'>
          <circle id='Ellipse 102' cx='20' cy='20' r='20' fill='#BFFFC8' />
          <path
            id='Union'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9.4668 11.6558C9.4668 10.4922 10.4101 9.54883 11.5738 9.54883H24.2158C25.3794 9.54883 26.3228 10.4922 26.3228 11.6558C26.3228 12.8195 25.3794 13.7628 24.2158 13.7628H11.5738C10.4101 13.7628 9.4668 12.8195 9.4668 11.6558ZM28.4273 30.6191C27.2636 30.6191 26.3203 29.6758 26.3203 28.5121V15.8702C26.3203 14.7065 27.2636 13.7632 28.4273 13.7632C29.591 13.7632 30.5343 14.7065 30.5343 15.8702V28.5121C30.5343 29.6758 29.591 30.6191 28.4273 30.6191ZM10.9274 26.1742C10.1045 26.997 10.1045 28.3311 10.9274 29.1539C11.7502 29.9768 13.0843 29.9768 13.9071 29.1539L22.8463 20.2147C23.6692 19.3919 23.6692 18.0578 22.8463 17.235C22.0235 16.4121 20.6894 16.4121 19.8666 17.235L10.9274 26.1742Z'
            fill='#077453'
          />
        </g>
      </svg>
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
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Arrow'>
          <circle id='Ellipse 102' cx='20' cy='20' r='20' fill='#077453' />
          <path
            id='Union'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9.4668 11.6558C9.4668 10.4922 10.4101 9.54883 11.5738 9.54883H24.2158C25.3794 9.54883 26.3228 10.4922 26.3228 11.6558C26.3228 12.8195 25.3794 13.7628 24.2158 13.7628H11.5738C10.4101 13.7628 9.4668 12.8195 9.4668 11.6558ZM28.4273 30.6191C27.2636 30.6191 26.3203 29.6758 26.3203 28.5121V15.8702C26.3203 14.7065 27.2636 13.7632 28.4273 13.7632C29.591 13.7632 30.5343 14.7065 30.5343 15.8702V28.5121C30.5343 29.6758 29.591 30.6191 28.4273 30.6191ZM10.9274 26.1742C10.1045 26.997 10.1045 28.3311 10.9274 29.1539C11.7502 29.9768 13.0843 29.9768 13.9071 29.1539L22.8463 20.2147C23.6692 19.3919 23.6692 18.0578 22.8463 17.235C22.0235 16.4121 20.6894 16.4121 19.8666 17.235L10.9274 26.1742Z'
            fill='#BFFFC8'
          />
        </g>
      </svg>
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
      <svg
        width='24'
        height='24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='12' cy='12' r='12' fill='#077453' />
        <path
          d='M5.68 6.993c0-.698.566-1.264 1.264-1.264h7.586a1.264 1.264 0 1 1 0 2.529H6.944A1.264 1.264 0 0 1 5.68 6.993zm11.376 11.379a1.264 1.264 0 0 1-1.264-1.265V9.522a1.264 1.264 0 1 1 2.529 0v7.585c0 .698-.566 1.265-1.265 1.265zm-10.5-2.668a1.264 1.264 0 0 0 1.788 1.788l5.364-5.363a1.264 1.264 0 1 0-1.788-1.788l-5.364 5.364z'
          fill='#BFFFC8'
        />
      </svg>
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
