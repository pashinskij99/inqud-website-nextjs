'use client'

import { useContext, Fragment, useMemo } from 'react'
import Link from 'next/link'
import { render } from 'datocms-structured-text-to-html-string'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledSearchCartWrapper,
  StyledSearchResultSectionWrapper,
} from './SearchResultSection.styled'
import { StyledButtonLearnMore } from '@/components/UI/Button/Button.styled'
import { HelpCentreContext } from '@/contexts/HelpCentreContext/HelpCentreContext'
import { useFilter } from '@/app/[locale]/help-centre/useFilter'
import { getHighlightedText } from '@/utils/getHighlightedText'

export default function SearchResultSection() {
  const { searchValue, data } = useContext(HelpCentreContext)
  const newArray = useMemo(() => [...data], [data])
  const { filteredValue } = useFilter({
    data: newArray,
    searchValue,
  })

  return (
    <StyledSearchResultSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH3 className='title'>
          Search results for: <span className='search-text'>{searchValue}</span>
        </StyledTypographyUrbanistH3>
        <div className='list-search-result'>
          {/* eslint-disable-next-line no-use-before-define */}
          {filteredValue.length > 0 ? (
            filteredValue.map(({ id: idElement, is, content, description }) =>
              content.map(({ id, descriptions, title, type }) => (
                <Cart
                  id={idElement}
                  key={id}
                  is={is}
                  type={type}
                  title={title}
                  descriptions={descriptions}
                  description={description}
                />
              ))
            )
          ) : (
            <StyledTypographyUrbanistH4 className='error-message'>
              Nothing was found for your request!
            </StyledTypographyUrbanistH4>
          )}
        </div>
      </div>
    </StyledSearchResultSectionWrapper>
  )
}

function Cart({ id, title, is, description, descriptions }) {
  const { searchValue } = useContext(HelpCentreContext)

  return (
    <StyledSearchCartWrapper>
      <div className='cart-text-wrapper'>
        <StyledTypographyUrbanistH5 className='cart-title'>
          {title}
        </StyledTypographyUrbanistH5>
        {is !== 'description' ? (
          <>
            {descriptions.map(({ description }, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={i}>
                <StyledTypographyUrbanistBody className='cart-description'>
                  {render(description)
                    .replace(/(<([^>]+)>)/gi, '')
                    .replace(/(&[a-z]*;|<([^>]+)>)/gi, '')}
                </StyledTypographyUrbanistBody>
                <br />
              </Fragment>
            ))}
          </>
        ) : (
          <>{getHighlightedText(description, searchValue)}</>
        )}
      </div>

      <StyledButtonLearnMore className='cart-btn'>
        <Link href={`/help-centre/${id}`}>
          <StyledTypographyUrbanistBody className='cart-btn-text'>
            Learn more
          </StyledTypographyUrbanistBody>
        </Link>
      </StyledButtonLearnMore>
    </StyledSearchCartWrapper>
  )
}

// const data = [
//   {
//     id: 0,
//     title: 'How to start using INQUD?',
//     description: (
//       <>
//         We are building a holistic fintech platform providing global{' '}
//         <span className='select'>wallet</span> from both fiat and crypto worlds
//         with a <span className='select'>wallet</span> range of financial
//         services, accessible through single...
//       </>
//     ),
//   },
//   {
//     id: 1,
//     title: 'What is INQUD?',
//     description: (
//       <>
//         We are building a holistic fintech platform providing global{' '}
//         <span className='select'>wallet</span> from both fiat and crypto worlds
//         with a <span className='select'>wallet</span> range of financial
//         services, accessible through single...
//       </>
//     ),
//   },
//   {
//     id: 2,
//     title: 'Why did I get an email that says my password was disabled?',
//     description: (
//       <>
//         We are building a holistic fintech platform providing global{' '}
//         <span className='select'>wallet</span> from both fiat and crypto worlds
//         with a <span className='select'>wallet</span> range of financial
//         services, accessible through single...
//       </>
//     ),
//   },
//   {
//     id: 3,
//     title: 'Why the KYC/AML?',
//     description: (
//       <>
//         We are building a holistic fintech platform providing global{' '}
//         <span className='select'>wallet</span> from both fiat and crypto worlds
//         with a <span className='select'>wallet</span> range of financial
//         services, accessible through single...
//       </>
//     ),
//   },
// ]
