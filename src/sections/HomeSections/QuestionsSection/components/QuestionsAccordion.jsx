'use client'

import { StructuredText, renderNodeRule } from 'react-datocms/structured-text'
import { isParagraph } from 'datocms-structured-text-utils'
import { useState } from 'react'
import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import Plus from '@/assets/icons/plus.svg'
import Minus from '@/assets/icons/minus.svg'
import {
  StyledQuestionsSectionAccordion,
  StyledQuestionsSectionAccordionDetails,
  StyledQuestionsSectionAccordionSummary,
} from '../QuestionsSection.styled'

export default function QuestionsAccordion({ faq }) {
  const [expanded, setExpanded] = useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  return (
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
        expandIcon={
          expanded === title ? (
            <Image src={Minus} alt='minus' />
          ) : (
            <Image src={Plus} alt='Plus' />
          )
        }
      >
        <StyledTypographyUrbanistH5 className='questionsAccordionTitle'>
          {title}
        </StyledTypographyUrbanistH5>
      </StyledQuestionsSectionAccordionSummary>
      <StyledQuestionsSectionAccordionDetails expanded={expanded === title}>
        {isStructuredText ? (
          <StructuredText
            customNodeRules={[
              // eslint-disable-next-line react/no-unstable-nested-components, no-undef
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
