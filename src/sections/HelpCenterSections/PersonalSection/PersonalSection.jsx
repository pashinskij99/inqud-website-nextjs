import clsx from 'clsx'
// import { useState } from 'react'
import { useState } from 'react'
import {
  StyledCenterSideWrapper,
  StyledContentItemAccordion,
  StyledContentItemAccordionDetails,
  StyledContentItemAccordionSummary,
  StyledLeftSideWrapper,
  StyledPersonalSectionWrapper,
  StyledRightSideWrapper,
} from '@/sections/HelpCenterSections/PersonalSection/PersonalSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import DislikeIcon from '@/assets/images/help-center/dislike.svg'
import LikeIcon from '@/assets/images/help-center/like.svg'
import MessageIcon from '@/assets/images/help-center/message.svg'
import { StyledButtonLearnMore } from '@/components/UI/Button/Button.styled'
import Plus from '@/assets/icons/plus.svg'
import Minus from '@/assets/icons/minus.svg'

const list = [
  { id: 0, text: 'How to start using INQUD?' },
  { id: 7, text: 'What is INQUD?' },
  { id: 1, text: 'Can anyone use INQUD?' },
  { id: 2, text: 'Where is Inqud registered?' },
  { id: 3, text: 'How to sign-up for Swapin?' },
  { id: 4, text: 'How I can log in to my Inqud account?' },
  { id: 5, text: 'How do I reset my Password?' },
  { id: 6, text: 'What countries are supported by Inqud?' },
]

function PersonalSection() {
  const [expanded, setExpanded] = useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <StyledPersonalSectionWrapper>
      <div className='container'>
        <StyledLeftSideWrapper>
          <StyledTypographyUrbanistH5 className='title'>
            General
          </StyledTypographyUrbanistH5>
          <ul className='list'>
            {list.map(({ id, text }) => (
              <li
                key={id}
                className={clsx('list-item', {
                  ['active']: id === 0,
                })}
              >
                <StyledTypographyUrbanistBody
                  className={clsx('list-item-text', {
                    ['active']: id === 0,
                  })}
                >
                  {' '}
                  {/* active */}
                  {text}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>
        </StyledLeftSideWrapper>
        <StyledCenterSideWrapper>
          <Content
            title='How to start using INQUD?'
            description={[
              'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
              'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
            ]}
            expanded={expanded}
            handleChange={handleChange}
          />
          <Content
            title='What is INQUD?'
            description={[
              'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
            ]}
            expanded={expanded}
            handleChange={handleChange}
          />
          <Content
            title='Can anyone use INQUD?'
            description={[
              'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API. ',
              'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
            ]}
            expanded={expanded}
            handleChange={handleChange}
          />
          <Content
            title='Effortlessly manage funds?'
            description={[
              'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
            ]}
            expanded={expanded}
            handleChange={handleChange}
          />
          <Content
            title='What is INQUD?'
            description={[
              'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
            ]}
            expanded={expanded}
            handleChange={handleChange}
          />
          <Content
            title='Can anyone use INQUD?'
            description={[
              'We are building a holistic fintech platform providing global business from both fiat and crypto worlds with a wide range of financial services, accessible through single API integration. Mercuryo is backed by a team of 200+ professionals and a high profile fintech investor. Together we create cutting-edge business payment solutions binding conventional and crypto finance. This is the future, and we already know everything about it.',
            ]}
            expanded={expanded}
            handleChange={handleChange}
          />
        </StyledCenterSideWrapper>
        <StyledRightSideWrapper>
          <div className='cart'>
            <div className='cart-left-side'>
              <MessageIcon />
            </div>
            <div className='cart-right-side'>
              <StyledTypographyUrbanistBody className='cart-title'>
                Didn’t get an answers?
              </StyledTypographyUrbanistBody>

              <StyledButtonLearnMore className='cart-button'>
                <StyledTypographyUrbanistBody className='cart-button-text'>
                  Contact us
                </StyledTypographyUrbanistBody>
              </StyledButtonLearnMore>
            </div>
          </div>
        </StyledRightSideWrapper>
      </div>
    </StyledPersonalSectionWrapper>
  )
}

function Content({ title, description, expanded, handleChange }) {
  // const [like, setLike] = useState(null)

  return (
    <>
      <div className='content content-1'>
        <StyledTypographyUrbanistH4 className='content-title'>
          {title}
        </StyledTypographyUrbanistH4>
        <div className='content-description-wrapper'>
          {description.map((text, i) => (
            <StyledTypographyUrbanistBody
              // eslint-disable-next-line react/no-array-index-key
              key={text + i}
              className='content-description'
            >
              {text}
            </StyledTypographyUrbanistBody>
          ))}
        </div>

        <div className='content-footer'>
          <StyledTypographyUrbanistBody className='content-footer-text'>
            Did this answer your question?
          </StyledTypographyUrbanistBody>

          <div className='likeOrDislike'>
            <DislikeIcon />
            <LikeIcon />
          </div>
        </div>
      </div>
      <div className='content content-2'>
        <ContentAccordionItem
          title={title}
          description={description}
          expanded={expanded}
          handleChange={handleChange}
        />
      </div>
    </>
  )
}

function ContentAccordionItem({ title, expanded, description, handleChange }) {
  return (
    <StyledContentItemAccordion
      expanded={expanded === title}
      onChange={handleChange(title)}
    >
      <StyledContentItemAccordionSummary
        expanded={expanded === title}
        expandIcon={expanded === title ? <Minus /> : <Plus />}
      >
        <StyledTypographyUrbanistH5 className='questionsAccordionTitle'>
          {title}
        </StyledTypographyUrbanistH5>
      </StyledContentItemAccordionSummary>
      <StyledContentItemAccordionDetails expanded={expanded === title}>
        <StyledTypographyUrbanistBody className='questionsAccordionBodyText'>
          {description ||
            'Get on board with the future of payments - our embeddable crypto widget for your website makes it simple to accept cryptocurrency payments including Bitcoin, Ethereum and other crypto.'}
        </StyledTypographyUrbanistBody>
        <div className='content-footer'>
          <StyledTypographyUrbanistBody className='content-footer-text'>
            Did this answer your question?
          </StyledTypographyUrbanistBody>

          <div className='likeOrDislike'>
            <DislikeIcon />
            <LikeIcon />
          </div>
        </div>
      </StyledContentItemAccordionDetails>
    </StyledContentItemAccordion>
  )
}

export default PersonalSection
