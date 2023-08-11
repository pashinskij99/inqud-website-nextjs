'use client'

import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledSearchCartWrapper,
  StyledSearchResultSectionWrapper,
} from './SearchResultSection.styled'
import { StyledButtonLearnMore } from '@/components/UI/Button/Button.styled'

const data = [
  {
    id: 0,
    title: 'How to start using INQUD?',
    description: (
      <>
        We are building a holistic fintech platform providing global{' '}
        <span className='select'>wallet</span> from both fiat and crypto worlds
        with a <span className='select'>wallet</span> range of financial
        services, accessible through single...
      </>
    ),
  },
  {
    id: 1,
    title: 'What is INQUD?',
    description: (
      <>
        We are building a holistic fintech platform providing global{' '}
        <span className='select'>wallet</span> from both fiat and crypto worlds
        with a <span className='select'>wallet</span> range of financial
        services, accessible through single...
      </>
    ),
  },
  {
    id: 2,
    title: 'Why did I get an email that says my password was disabled?',
    description: (
      <>
        We are building a holistic fintech platform providing global{' '}
        <span className='select'>wallet</span> from both fiat and crypto worlds
        with a <span className='select'>wallet</span> range of financial
        services, accessible through single...
      </>
    ),
  },
  {
    id: 3,
    title: 'Why the KYC/AML?',
    description: (
      <>
        We are building a holistic fintech platform providing global{' '}
        <span className='select'>wallet</span> from both fiat and crypto worlds
        with a <span className='select'>wallet</span> range of financial
        services, accessible through single...
      </>
    ),
  },
]

export default function SearchResultSection() {
  const searchValue = 'Wallet'

  return (
    <StyledSearchResultSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH3 className='title'>
          Search results for: <span className='search-text'>{searchValue}</span>
        </StyledTypographyUrbanistH3>
        <div className='list-search-result'>
          {data.map(({ id, description, title }) => (
            <Cart key={id} title={title} description={description} />
          ))}
        </div>
      </div>
    </StyledSearchResultSectionWrapper>
  )
}

function Cart({ title, description }) {
  return (
    <StyledSearchCartWrapper>
      <div className='cart-text-wrapper'>
        <StyledTypographyUrbanistH5 className='cart-title'>
          {title}
        </StyledTypographyUrbanistH5>
        <StyledTypographyUrbanistBody className='cart-description'>
          {description}
        </StyledTypographyUrbanistBody>
      </div>

      <StyledButtonLearnMore className='cart-btn'>
        <StyledTypographyUrbanistBody className='cart-btn-text'>
          Learn more
        </StyledTypographyUrbanistBody>
      </StyledButtonLearnMore>
    </StyledSearchCartWrapper>
  )
}
