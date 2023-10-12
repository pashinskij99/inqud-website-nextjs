import { useContext } from 'react'
import { Element } from 'react-scroll'
import { StructuredText } from 'react-datocms/structured-text'
import Image from 'next/image'
import InView from '@/components/InView'
import {
  StyledContentItemAccordion,
  StyledContentItemAccordionDetails,
  StyledContentItemAccordionSummary,
} from '@/sections/HelpCenterSections/DetailsSection/DetailsSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import Plus from '@/assets/icons/plus.svg'
import Minus from '@/assets/icons/minus.svg'
import { ArticleContext } from '@/contexts/ArticleContext/ArticleContext'

export function DetailsSectionModalFormContent({
  title,
  description,
  expanded,
  handleChange,
}) {
  const { setActiveHeader } = useContext(ArticleContext)

  return (
    <>
      <Element className='content content-1' name={title}>
        <InView
          options={{
            threshold: 0,
            rootMargin: '-30% 0px -70% 0px',
          }}
          as='div'
          id={title}
          onView={(inView) => (inView ? setActiveHeader(title) : null)}
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
        expandIcon={
          expanded === title ? (
            <Image src={Minus} alt='minus' />
          ) : (
            <Image src={Plus} alt='plus' />
          )
        }
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
      </StyledContentItemAccordionDetails>
    </StyledContentItemAccordion>
  )
}
