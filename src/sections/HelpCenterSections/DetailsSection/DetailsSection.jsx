'use client'

import clsx from 'clsx'
import { useContext, useEffect, useState } from 'react'
import { InView } from 'react-intersection-observer'
import { Element, Link } from 'react-scroll'
import NextLink from 'next/link'
import { StructuredText } from 'react-datocms/structured-text'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'next/navigation'
import {
  StyledCenterSideWrapper,
  StyledContentItemAccordion,
  StyledContentItemAccordionDetails,
  StyledContentItemAccordionSummary,
  StyledLeftSideWrapper,
  StyledPersonalSectionWrapper,
  StyledRightSideWrapper,
} from '@/sections/HelpCenterSections/DetailsSection/DetailsSection.styled'
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
import {
  ArticleContext,
  ArticleProvider,
} from '@/contexts/ArticleContext/ArticleContext'
import {
  HelpCentreDetailsContext,
  HelpCentreDetailsProvider,
} from '@/contexts/HelpCentreDetailsContext/HelpCentreDetailsContext'
import { setBlogBreadcrumbs } from '@/store/features/breadcrumb/breadcrumbSlice'
import { SearchResultDetailsSection } from '@/sections/HelpCenterSections/SearchResultSection'

function DetailsSection({ data, type }) {
  const { tab } = useSelector((state) => state.activeTab)
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setBlogBreadcrumbs(data.helpCentre.mainTitle))

    return () => {
      dispatch(setBlogBreadcrumbs(''))
    }
  }, [tab, data])
  const searchIn = searchParams.get('searchIn')
  return (
    <HelpCentreDetailsProvider searchIn={searchIn} data={data} type={type}>
      <ArticleProvider>
        {searchIn ? <SearchResultDetailsSection /> : <DetailsSectionInner />}
      </ArticleProvider>
    </HelpCentreDetailsProvider>
  )
}

function DetailsSectionInner() {
  const [expanded, setExpanded] = useState('')
  const { activeHeader, setActiveHeader } = useContext(ArticleContext)
  const { data } = useContext(HelpCentreDetailsContext)
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  useEffect(() => {
    if (data.content) {
      setActiveHeader(data.content[0].title)
    }
  }, [data])

  return (
    <StyledPersonalSectionWrapper>
      <div className='container'>
        <StyledLeftSideWrapper>
          <StyledTypographyUrbanistH5 className='title'>
            {data.mainTitle}
          </StyledTypographyUrbanistH5>
          <ul className='list'>
            {data?.content?.map(({ id, title }) => (
              <li
                key={id}
                className={clsx('list-item', {
                  ['active']: activeHeader === title,
                })}
              >
                <Link to={title} offset={-100} spy smooth duration={500}>
                  <StyledTypographyUrbanistBody
                    className={clsx('list-item-text', {
                      ['active']: activeHeader === title,
                    })}
                  >
                    {title}
                  </StyledTypographyUrbanistBody>
                </Link>
              </li>
            ))}
          </ul>
        </StyledLeftSideWrapper>
        <StyledCenterSideWrapper>
          {data?.content?.map(({ id, descriptions, title }) => (
            <Content
              key={id}
              title={title}
              description={descriptions}
              expanded={expanded}
              handleChange={handleChange}
            />
          ))}
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
                <NextLink
                  href='https://www.figma.com/file/g8vmnkHQy5n7SDAks9S0v6/inqud?type=design&node-id=2377-117526&mode=design&t=6yq52EWlUoti5nLT-4'
                  target='_blank'
                >
                  <StyledTypographyUrbanistBody className='cart-button-text'>
                    Contact us
                  </StyledTypographyUrbanistBody>
                </NextLink>
              </StyledButtonLearnMore>
            </div>
          </div>
        </StyledRightSideWrapper>
      </div>
    </StyledPersonalSectionWrapper>
  )
}

function Content({ title, description, expanded, handleChange }) {
  const { setActiveHeader } = useContext(ArticleContext)

  return (
    <>
      <Element className='content content-1' name={title}>
        <InView
          threshold={0}
          as='div'
          id={title}
          rootMargin='-30% 0px -70% 0px'
          onChange={(inView) => (inView ? setActiveHeader(title) : null)}
        >
          <div className=''>
            <StyledTypographyUrbanistH4 className='content-title'>
              {title}
            </StyledTypographyUrbanistH4>
            <div className='content-description-wrapper'>
              {description.map(({ description, id }) => (
                // eslint-disable-next-line no-undef, react/no-array-index-key
                <StyledTypographyUrbanistBody
                  // eslint-disable-next-line react/no-array-index-key
                  key={id}
                  className='content-description'
                >
                  <StructuredText key={id} data={description} />
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
        </InView>
      </Element>
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
          {description.map(({ description }) => (
            <StructuredText data={description} />
          ))}
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

export default DetailsSection
