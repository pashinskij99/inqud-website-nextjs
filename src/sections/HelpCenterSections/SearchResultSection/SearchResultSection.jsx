'use client'

import { Fragment, useMemo } from 'react'
import Link from 'next/link'
import { render } from 'datocms-structured-text-to-html-string'
import { useSelector } from 'react-redux'
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
import { useFilter } from '@/app/[locale]/help-centre/useFilter'
import { getHighlightedText } from '@/utils/getHighlightedText'

// import { setIsSearch } from '@/store/features/helpCentre/helpCentreSlice'

export function SearchResultSection() {
  const { helpCentreData, searchValue } = useSelector(
    (state) => state.helpCentre
  )
  const newArray = useMemo(() => [...helpCentreData], [helpCentreData])

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
            filteredValue.map(
              ({ id: idElement, is, description, descriptions, title }) => (
                <Cart
                  id={idElement}
                  key={idElement}
                  is={is}
                  title={title}
                  descriptions={descriptions}
                  description={description}
                />
              )
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
  const { searchValue } = useSelector((state) => state.helpCentre)
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

export function SearchResultDetailsSection() {
  // const { searchIn, fullData } = useContext(HelpCentreDetailsContext)
  const { helpCentreDetailsData, searchValue } = useSelector(
    (state) => state.helpCentre
  )

  const newArray = useMemo(
    () => [...[helpCentreDetailsData]],
    [helpCentreDetailsData]
  )

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
            filteredValue.map(
              ({ id: idElement, is, description, descriptions, title }) => (
                <Cart
                  id={idElement}
                  key={idElement}
                  is={is}
                  title={title}
                  descriptions={descriptions}
                  description={description}
                />
              )
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
