import { useContext } from 'react'
import { Element } from 'react-scroll'
import { StructuredText } from 'react-datocms/structured-text'
import Image from 'next/image'
import { Tooltip } from '@mui/material'
import { usePathname } from 'next-intl/client'
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
import copyIcon from '@/assets/icons/copy.png'
import { copyTextToClipboard } from '@/utils/copyTextToClipboard'

export function DetailsSectionModalFormContent({
  title,
  description,
  expanded,
  handleChange,
}) {
  const { setActiveHeader } = useContext(ArticleContext)

  const pathName = usePathname()

  const onCopy = async (event, text) => {
    event.isPropagationStopped()
    const toast = await import('react-toastify').then((res) => res.toast)
    copyTextToClipboard(
      `${window.location.origin}${pathName}?anchor=${encodeURI(text)}`
    )
    toast.success('You have successfully copied the text!')
  }

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
          <div>
            <div className='content-title-wrappper'>
              <StyledTypographyUrbanistH4 className='content-title'>
                {title}
              </StyledTypographyUrbanistH4>
              <Tooltip
                onClick={(event) => onCopy(event, title)}
                className='icon-copy-tooltip'
                title='Copy link'
              >
                <Image
                  className='icon-copy'
                  src={copyIcon}
                  alt='copy icon'
                  width={20}
                  height={20}
                />
              </Tooltip>
            </div>
            <div className='content-description-wrapper'>
              {description.map(({ description, id }) => (
                <StyledTypographyUrbanistBody
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
          onCopy={onCopy}
          title={title}
          description={description}
          expanded={expanded}
          handleChange={handleChange}
        />
      </div>
    </>
  )
}

function ContentAccordionItem({
  title,
  expanded,
  description,
  handleChange,
  onCopy,
}) {
  return (
    <Element className='content content-2' name={title}>
      <StyledContentItemAccordion
        expanded={expanded === title}
        onChange={handleChange(title)}
      >
        <StyledContentItemAccordionSummary
          expanded={expanded === title}
          expandIcon={
            expanded === title ? (
              <Image src={Minus} alt='minus' height={2} />
            ) : (
              <Image src={Plus} alt='plus' height={22} />
            )
          }
        >
          <StyledTypographyUrbanistH5 className='questionsAccordionTitle'>
            {title}
          </StyledTypographyUrbanistH5>
          <button
            onClick={(event) => onCopy(event, title)}
            className='questionsAccordionCopy'
          >
            <Image src={copyIcon} alt='copy icon' width={20} height={20} />
          </button>
        </StyledContentItemAccordionSummary>
        <StyledContentItemAccordionDetails expanded={expanded === title}>
          <StyledTypographyUrbanistBody className='questionsAccordionBodyText'>
            {description.map(({ description }) => (
              <StructuredText data={description} />
            ))}
          </StyledTypographyUrbanistBody>
        </StyledContentItemAccordionDetails>
      </StyledContentItemAccordion>
    </Element>
  )
}
