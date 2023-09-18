import { useContext, useState } from 'react'
import Link from 'next/link'
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
import Plus from '@/assets/icons/plus.svg'
import Minus from '@/assets/icons/minus.svg'
import { ButtonLearnMore } from '@/components/UI/Button'
import { PageContext } from '@/contexts/PageContext/PageContext'

// const questions = [
//   { id: 0, title: 'Reduce transaction cost?', description: '' },
//   { id: 1, title: 'Expand payments provider line up?', description: '' },
//   { id: 2, title: 'Find off-market solutions?', description: '' },
//   { id: 3, title: 'Effortlessly manage funds?', description: '' },
// ]

export default function QuestionsSection() {
  const [expanded, setExpanded] = useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  const { faq } = useContext(PageContext)

  return (
    <StyledQuestionsSection className='faq'>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='questionsTitle'>
          {faq.faqTitle}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH2 className='questionsTitleMobile'>
          {faq.faqTitleMobile}
        </StyledTypographyUrbanistH2>
        <div className='questionsAccordion'>
          {faq.faqContent.map(({ description, id, title }) => (
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
          <Link href='/help-centre'>
            <ButtonLearnMore className='questionsButtonHelp desktop'>
              {faq.faqButton}
            </ButtonLearnMore>
          </Link>
          <Link href='/help-centre'>
            <ButtonLearnMore className='questionsButtonHelp mobile'>
              {faq.faqButtonMobile}
            </ButtonLearnMore>
          </Link>
        </StyledTypographyUrbanistH5>
      </div>
    </StyledQuestionsSection>
  )
}

function AccordionItem({ title, expanded, description, handleChange }) {
  return (
    <StyledQuestionsSectionAccordion
      expanded={expanded === title}
      onChange={handleChange(title)}
    >
      <StyledQuestionsSectionAccordionSummary
        expanded={expanded === title}
        expandIcon={expanded === title ? <Minus /> : <Plus />}
      >
        <StyledTypographyUrbanistH5 className='questionsAccordionTitle'>
          {title}
        </StyledTypographyUrbanistH5>
      </StyledQuestionsSectionAccordionSummary>
      <StyledQuestionsSectionAccordionDetails expanded={expanded === title}>
        <StyledTypographyUrbanistBody className='questionsAccordionBodyText'>
          {description ||
            'Get on board with the future of payments - our embeddable crypto widget for your website makes it simple to accept cryptocurrency payments including Bitcoin, Ethereum and other crypto.'}
        </StyledTypographyUrbanistBody>
      </StyledQuestionsSectionAccordionDetails>
    </StyledQuestionsSectionAccordion>
  )
}
