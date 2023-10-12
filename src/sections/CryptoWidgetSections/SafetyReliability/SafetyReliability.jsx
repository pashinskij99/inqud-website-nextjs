'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import InView from '@/components/InView'
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
import { keysForLocale } from '@/config/keysForLocale'
import { useIntervalStep } from '@/hooks/useIntervalStep'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function SafetyReliability() {
  const tTitles = useTranslations(
    'crypto_centre_page.safety_&_reliability_section.items_title'
  )
  const tDescriptions = useTranslations(
    'crypto_centre_page.safety_&_reliability_section.items_description'
  )

  const accordionData = [
    {
      key: 0,
      id: '01.',
      title: tTitles(keysForLocale.keys3[0]),
      description: tDescriptions(keysForLocale.keys3[0]),
      descriptionMobile: tDescriptions(keysForLocale.keys3[0]),
    },
    {
      key: 1,
      id: '02.',
      title: tTitles(keysForLocale.keys3[1]),
      description: tDescriptions(keysForLocale.keys3[1]),
      descriptionMobile: tDescriptions(keysForLocale.keys3[1]),
    },
    {
      key: 2,
      id: '03.',
      title: tTitles(keysForLocale.keys3[2]),
      description: tDescriptions(keysForLocale.keys3[2]),
      descriptionMobile: tDescriptions(keysForLocale.keys3[2]),
    },
  ]

  const {
    dataPage: { cryptoWidgetPage: data },
  } = useContext(PageContext)

  const {
    setWidth,
    handleInView,
    handleChange,
    expanded,
    isInterval,
    percent,
  } = useIntervalStep({
    accordionData: data.screen5Features.map((el, i) => ({ ...el, key: i })),
  })

  return (
    <InView as={StyledSafetyReliabilitySection} onView={handleInView}>
      <div className='container'>
        <div className='left-side'>
          <StyledTypographyUrbanistH2 className='title'>
            {/* {t('title')} */}
            {data.screen7Title}
          </StyledTypographyUrbanistH2>

          <div className='accordion'>
            {data.screen5Features.map(
              ({ id, cartId, title, description }, i) => (
                <AccordionItem
                  key={id}
                  id={i}
                  number={cartId}
                  title={title}
                  description={description}
                  descriptionMobile={description}
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
              src={data.screen5Features[expanded].image.url}
              alt='Safety & reliability'
              width={212.223}
              height={241.7}
            />
          </div>
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
          <StyledTypographyUrbanistH5
            component='h5'
            className='accordion-title'
          >
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

      <StyledAccordionLoading
        className='line'
        isLast={id === count}
        isExpanded={expanded === id}
        width={
          expanded === id ? width({ isInterval, expanded, percent, count }) : 0
        }
      />
    </>
  )
}
