import { useContext, useState } from 'react'
import { StyledTypographyUrbanistH2 } from '@/components/UI/Typography/Typography.styled'
import { StyledContactUsListSectionWrapper } from './ContactUsListSection.styled'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { AccordionItem } from '@/sections/HomeSections/QuestionsSection/QuestionsSection'

function ContactUsListSection() {
  const {
    dataPage: { contactUsPage },
  } = useContext(PageContext)

  const [expanded, setExpanded] = useState(contactUsPage.listItems[0].title)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <StyledContactUsListSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='listTitle'>
          {contactUsPage.listTitle}
        </StyledTypographyUrbanistH2>
        <ul className='list'>
          {contactUsPage.listItems.map(({ description, id, title }) => (
            <AccordionItem
              description={description}
              expanded={expanded}
              handleChange={handleChange}
              isStructuredText
              title={title}
              key={id}
            />
          ))}
        </ul>
      </div>
    </StyledContactUsListSectionWrapper>
  )
}

export default ContactUsListSection
