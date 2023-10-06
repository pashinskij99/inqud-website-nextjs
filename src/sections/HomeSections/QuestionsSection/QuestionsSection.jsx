import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { renderNodeRule, StructuredText } from 'react-datocms/structured-text'
import { isParagraph } from 'datocms-structured-text-utils'
import { useWindowSize } from '@uidotdev/usehooks'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledQuestionsSection,
  StyledQuestionsSectionAccordion,
  StyledQuestionsSectionAccordionDetails,
  StyledQuestionsSectionAccordionSummary,
} from './QuestionsSection.styled'
// import Plus from '@/assets/icons/plus.svg'
// import Minus from '@/assets/icons/minus.svg'
import { ButtonLearnMore } from '@/components/UI/Button'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { getPageData } from '@/lib/datocms'
import { FAQ_QUERY } from '@/lib/datocmsQuery'
import { responseBreakPoint } from '@/utils/response'

export default function QuestionsSection() {
  const [expanded, setExpanded] = useState('')
  const [faq, setFaq] = useState({})

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  const { params, nameCMSPage } = useContext(PageContext)

  useEffect(() => {
    const getData = async () => {
      const pageData = await getPageData({
        variables: {
          locale: params.locale,
        },
        query: FAQ_QUERY({ pageCMSName: nameCMSPage }),
      })

      setFaq(pageData[nameCMSPage])
    }

    getData()
  }, [])

  const size = useWindowSize()

  return (
    <StyledQuestionsSection className='faq'>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='questionsTitle'>
          {faq.faqMainTitle}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH2 className='questionsTitleMobile'>
          {faq.faqMainTitleMobile}
        </StyledTypographyUrbanistH2>
        <div className='questionsAccordion'>
          {faq.faqContent?.map(({ description, id, title }) => (
            <AccordionItem
              key={id}
              description={description}
              title={title}
              expanded={expanded}
              handleChange={handleChange}
            />
          ))}
        </div>
        <StyledTypographyUrbanistH5 className='questionsButton'>
          {faq.faqDescription}
          {size.width && size.width > responseBreakPoint.mobile ? (
            <Link href='/help-centre'>
              <ButtonLearnMore className='questionsButtonHelp'>
                {faq.faqButton}
              </ButtonLearnMore>
            </Link>
          ) : null}

          {size.width && size.width <= responseBreakPoint.mobile ? (
            <Link href='/help-centre'>
              <ButtonLearnMore className='questionsButtonHelp'>
                {faq.faqButtonMobile}
              </ButtonLearnMore>
            </Link>
          ) : null}
        </StyledTypographyUrbanistH5>
      </div>
    </StyledQuestionsSection>
  )
}

export function AccordionItem({
  title,
  expanded,
  description,
  handleChange,
  isStructuredText = false,
}) {
  return (
    <StyledQuestionsSectionAccordion
      expanded={expanded === title}
      onChange={handleChange(title)}
    >
      <StyledQuestionsSectionAccordionSummary
        expanded={expanded === title}
        // expandIcon={expanded === title ? <Minus /> : <Plus />}
      >
        <StyledTypographyUrbanistH5 className='questionsAccordionTitle'>
          {title}
        </StyledTypographyUrbanistH5>
      </StyledQuestionsSectionAccordionSummary>
      <StyledQuestionsSectionAccordionDetails expanded={expanded === title}>
        {isStructuredText ? (
          <StructuredText
            customNodeRules={[
              // eslint-disable-next-line react/no-unstable-nested-components
              renderNodeRule(isParagraph, ({ children, key }) => (
                <StyledTypographyUrbanistBody
                  key={key}
                  className='questionsAccordionBodyText'
                >
                  {children}
                </StyledTypographyUrbanistBody>
              )),
            ]}
            data={description?.value}
          />
        ) : (
          <StyledTypographyUrbanistBody className='questionsAccordionBodyText'>
            {description || ''}
          </StyledTypographyUrbanistBody>
        )}
      </StyledQuestionsSectionAccordionDetails>
    </StyledQuestionsSectionAccordion>
  )
}
