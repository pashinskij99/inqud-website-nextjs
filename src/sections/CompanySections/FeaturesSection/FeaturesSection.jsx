import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { InView } from 'react-intersection-observer'
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
  StyledFeaturesSectionWrapper,
} from './FeaturesSection.styled'
import img from '@/assets/images/company/features/image.webp'

const accordionData = [
  {
    key: 0,
    id: '01.',
    title: 'Bespoke diversity payments',
    description:
      'At Inqud, we excel in crafting customized payment solutions that are perfectly tailored to meet your specific requirements. Simply inform us of the new payment methods you wish to incorporate, and we will handle the rest with utmost care.',
  },
  {
    key: 1,
    id: '02.',
    title: 'Eliminate chargebacks',
    description:
      'At Inqud, we excel in crafting customized payment solutions that are perfectly tailored to meet your specific requirements. Simply inform us of the new payment methods you wish to incorporate, and we will handle the rest with utmost care.',
  },
  {
    key: 2,
    id: '03.',
    title: 'Transparent Pricing',
    description:
      'At Inqud, we excel in crafting customized payment solutions that are perfectly tailored to meet your specific requirements. Simply inform us of the new payment methods you wish to incorporate, and we will handle the rest with utmost care.',
  },
  {
    key: 3,
    id: '04.',
    title: (
      <>
        Round-the-Clock <br /> Expert Support
      </>
    ),
    description:
      'At Inqud, we excel in crafting customized payment solutions that are perfectly tailored to meet your specific requirements. Simply inform us of the new payment methods you wish to incorporate, and we will handle the rest with utmost care.',
  },
]

export default function FeaturesSection() {
  const [expanded, setExpanded] = useState(accordionData[0].key)
  const [percent, setPercent] = useState(0)
  const [isInterval, setIsInterval] = useState(true)
  const [isPause, setIsPause] = useState(true)
  const interval = useRef(null)

  const onPause = () => {
    setIsPause(true)
  }

  const onStart = () => {
    setIsPause(false)
  }

  const handleInView = (inView) => {
    if (inView) onStart()
    else onPause()
  }

  useEffect(() => {
    interval.current = setInterval(() => {
      if (!isPause) {
        setPercent((prevState) => {
          if (prevState === 250) return 0
          return prevState + 1
        })
      }
    }, 100)

    return () => {
      clearInterval(interval.current)
    }
  }, [isPause])

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
    <InView as={StyledFeaturesSectionWrapper} onChange={handleInView}>
      <div className='container'>
        <div className='left-side'>
          <StyledTypographyUrbanistH2 className='title'>
            Our Features and <br className='br-desktop' /> Approaches that Stand
            <br className='br-desktop' /> Out!
          </StyledTypographyUrbanistH2>

          <div className='accordion'>
            {accordionData.map(({ key, id, title, description }) => (
              <AccordionItem
                key={key}
                id={key}
                number={id}
                title={title}
                description={description}
                expanded={expanded}
                handleChange={handleChange}
                width={setWidth}
                isInterval={isInterval}
                percent={percent}
                count={accordionData.length - 1}
              />
            ))}
          </div>
        </div>

        <div className='right-side'>
          <Image
            src={img.src}
            alt='Our Features and Approaches that Stand Out!'
            width={559}
            height={650}
          />
        </div>
      </div>
    </InView>
  )
}

function AccordionItem({
  id,
  number,
  title,
  description,
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
          <StyledTypographyUrbanistBody>{number}</StyledTypographyUrbanistBody>
          <StyledTypographyUrbanistH5>{title}</StyledTypographyUrbanistH5>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypographyUrbanistBody>
            {description}
          </StyledTypographyUrbanistBody>
        </AccordionDetails>
      </Accordion>

      {id === count ? null : (
        <StyledAccordionLoading
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
