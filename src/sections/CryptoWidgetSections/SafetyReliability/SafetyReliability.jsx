import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { StyledSafetyReliabilitySection } from './SafetyReliability.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  StyledAccordionLoading,
} from '../../CompanySections/FeaturesSection/FeaturesSection.styled'
import img from '../../../assets/images/crypto-widget/page/reliability/shield.png'

const accordionData = [
  {
    key: 0,
    id: '01.',
    title: 'Safeguarding data',
    description:
      '2FA for account access, settings approval, and fund transfers. Encryption of sensitive information.',
    descriptionMobile: (
      <>
        2FA for account access, settings approval, and fund transfers.
        <span className='offset'>Encryption of sensitive information.</span>
      </>
    ),
  },
  {
    key: 1,
    id: '02.',
    title: 'Anti-Fraud measures',
    description:
      '2FA for account access, settings approval, and fund transfers. Encryption of sensitive information.',
    descriptionMobile: (
      <>
        2FA for account access, settings approval, and fund transfers.
        Encryption of sensitive information.
      </>
    ),
  },
  {
    key: 2,
    id: '03.',
    title: 'Security compliance',
    description:
      '2FA for account access, settings approval, and fund transfers. Encryption of sensitive information.',
    descriptionMobile: (
      <>
        2FA for account access, settings approval, and fund transfers.
        Encryption of sensitive information.
      </>
    ),
  },
]

export default function SafetyReliability() {
  const [expanded, setExpanded] = useState(accordionData[0].key)
  const [percent, setPercent] = useState(0)
  const [isInterval, setIsInterval] = useState(true)
  const interval = useRef(null)

  useEffect(() => {
    interval.current = setInterval(() => {
      setPercent((prevState) => {
        if (prevState === 250) return 0
        return prevState + 1
      })
    }, 100)

    return () => {
      clearInterval(interval.current)
    }
  }, [])

  useEffect(() => {
    if (percent === 250) {
      setExpanded((prevState) => {
        const nextState = prevState + 1

        if (prevState === accordionData.length - 1) {
          return 0
        }

        return nextState
      })
      setPercent(0)
    }
  }, [percent])

  const getPercent = (number, total) => (number / total) * 100

  // eslint-disable-next-line no-shadow
  const setWidth = ({ isInterval, expanded, percent, count }) => {
    if (expanded === count) {
      return isInterval ? getPercent(percent, 250) : 100
    }

    return isInterval ? getPercent(percent, 250) : 100
  }

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
    clearInterval(interval.current)
    setIsInterval(false)
  }

  return (
    <StyledSafetyReliabilitySection>
      <div className='container'>
        <div className='left-side'>
          <StyledTypographyUrbanistH2 className='title'>
            Safety & reliability
          </StyledTypographyUrbanistH2>

          <div className='accordion'>
            {accordionData.map(
              ({ key, id, title, description, descriptionMobile }) => (
                <AccordionItem
                  key={key}
                  id={key}
                  number={id}
                  title={title}
                  description={description}
                  descriptionMobile={descriptionMobile}
                  expanded={expanded}
                  handleChange={handleChange}
                  width={setWidth}
                  isInterval={isInterval}
                  percent={percent}
                  count={accordionData.length - 1}
                />
              )
            )}
          </div>
        </div>

        <div className='right-side'>
          <div className='cart'>
            <Image
              src={img.src}
              alt='Safety & reliability'
              width={212.223}
              height={241.7}
            />
          </div>
        </div>
      </div>
    </StyledSafetyReliabilitySection>
  )
}

function AccordionItem({
  id,
  number,
  title,
  description,
  descriptionMobile,
  expanded,
  handleChange,
  width,
  isInterval,
  percent,
  count,
}) {
  return (
    <>
      <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary expanded={expanded === id}>
          <StyledTypographyUrbanistBody className='accordion-sub-title'>
            {number}
          </StyledTypographyUrbanistBody>
          <StyledTypographyUrbanistH5 className='accordion-title'>
            {title}
          </StyledTypographyUrbanistH5>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypographyUrbanistBody className='accordion-description accordion-description-1'>
            {description}
          </StyledTypographyUrbanistBody>
          <StyledTypographyUrbanistBody className='accordion-description accordion-description-2'>
            {descriptionMobile}
          </StyledTypographyUrbanistBody>
        </AccordionDetails>
      </Accordion>

      {id === count ? null : (
        <StyledAccordionLoading
          className='line'
          width={
            expanded === id
              ? width({ isInterval, expanded, percent, count })
              : 0
          }
        />
      )}
    </>
  )
}
