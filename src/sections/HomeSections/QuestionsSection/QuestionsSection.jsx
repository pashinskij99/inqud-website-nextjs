import { useState } from 'react'
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

const questions = [
  { id: 0, title: 'Reduce transaction cost?', description: '' },
  { id: 1, title: 'Expand payments provider line up?', description: '' },
  { id: 2, title: 'Find off-market solutions?', description: '' },
  { id: 3, title: 'Effortlessly manage funds?', description: '' },
]

export default function QuestionsSection() {
  const [expanded, setExpanded] = useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <StyledQuestionsSection className='faq'>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='questionsTitle'>
          Frequently asked questions
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH2 className='questionsTitleMobile'>
          FAQ
        </StyledTypographyUrbanistH2>
        <div className='questionsAccordion'>
          {questions.map(({ description, id, title }) => (
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
          Didn’t get an answers?
          <ButtonLearnMore className='questionsButtonHelp desktop'>
            Go to Help centre
          </ButtonLearnMore>
          <ButtonLearnMore className='questionsButtonHelp mobile'>
            Help centre
          </ButtonLearnMore>
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
