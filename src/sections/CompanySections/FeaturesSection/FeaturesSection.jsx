'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import InView from '@/components/InView'
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
import { keysForLocale } from '@/config/keysForLocale'
import { useIntervalStep } from '@/hooks/useIntervalStep'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function FeaturesSection() {
  const tTitles = useTranslations(
    'company_page.our_features_section.items_title'
  )
  const tDescriptions = useTranslations(
    'company_page.our_features_section.items_description'
  )

  const accordionData = [
    {
      key: 0,
      id: '01.',
      title: tTitles(keysForLocale.keys4[0]),
      description: tDescriptions(keysForLocale.keys4[0]),
    },
    {
      key: 1,
      id: '02.',
      title: tTitles(keysForLocale.keys4[1]),
      description: tDescriptions(keysForLocale.keys4[1]),
    },
    {
      key: 2,
      id: '03.',
      title: tTitles(keysForLocale.keys4[2]),
      description: tDescriptions(keysForLocale.keys4[2]),
    },
    {
      key: 3,
      id: '04.',
      title: tTitles(keysForLocale.keys4[3]),
      description: tDescriptions(keysForLocale.keys4[3]),
    },
  ]

  const {
    setWidth,
    handleInView,
    handleChange,
    expanded,
    isInterval,
    percent,
  } = useIntervalStep({ accordionData })

  const {
    dataPage: { aboutUsPage: data },
  } = useContext(PageContext)

  return (
    <InView as={StyledFeaturesSectionWrapper} onView={handleInView}>
      <div className='container'>
        <div className='left-side'>
          <StyledTypographyUrbanistH2 className='title'>
            {/* {t('title')} */}
            {data.screen5Title}
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
          <Image
            src={data.screen5Features[expanded].image.url}
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
          <StyledTypographyUrbanistH5 component='h5'>
            {title}
          </StyledTypographyUrbanistH5>
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
