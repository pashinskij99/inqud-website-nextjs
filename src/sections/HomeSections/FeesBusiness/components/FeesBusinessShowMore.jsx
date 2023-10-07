'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { render } from 'datocms-structured-text-to-html-string'
import { StyledTypographyUrbanistSmallSpaces } from '@/components/UI/Typography/Typography.styled'
import { StyledButtonLearnMore } from '@/components/UI/Button/Button.styled'

export default function FeesBusinessShowMore({ data }) {
  const [showMore, setShowMore] = useState(false)
  const hadleShowMore = () => setShowMore((prevState) => !prevState)

  return (
    <div className='description-wrapper'>
      <StyledTypographyUrbanistSmallSpaces
        className={clsx('description', {
          ['learnMore']: !showMore,
        })}
      >
        {data.footerDescription ? (
          <LearnMoreText
            showMore={showMore}
            text={render(data.footerDescription)
              .replace(/(<([^>]+)>)/gi, '')
              .replace(/(&[a-z]*;|<([^>]+)>)/gi, '')}
            endText={141}
          />
        ) : null}
      </StyledTypographyUrbanistSmallSpaces>

      <StyledButtonLearnMore
        onClick={hadleShowMore}
        className='learnMoreButton'
      >
        {showMore ? 'Hide text' : 'Show more'}
      </StyledButtonLearnMore>
    </div>
  )
}

function LearnMoreText({ endText, text, showMore }) {
  return <>{showMore ? text : text.substring(0, endText)}</>
}
