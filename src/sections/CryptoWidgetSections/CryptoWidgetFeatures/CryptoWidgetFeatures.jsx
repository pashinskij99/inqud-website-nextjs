import Image from 'next/image'
import { InView } from 'react-intersection-observer'
import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import { StyledCryptoWidgetFeaturesWrapper } from './CryptoWidgetFeatures.styled'
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

import image1 from '@/assets/images/crypto-widget/page/features/image1.png'
import image2 from '@/assets/images/crypto-widget/page/features/image2.png'
import image3 from '@/assets/images/crypto-widget/page/features/image3.png'
import image4 from '@/assets/images/crypto-widget/page/features/image4.png'
import image5 from '@/assets/images/crypto-widget/page/features/image5.png'
import image6 from '@/assets/images/crypto-widget/page/features/image6.png'
import image7 from '@/assets/images/crypto-widget/page/features/image7.png'
import { keysForLocale } from '@/config/keysForLocale'
import { useIntervalStep } from '@/hooks/useIntervalStep'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function CryptoWidgetFeatures() {
  // const t = useTranslations('crypto_centre_page.crypto_widget_features_section')
  const tTitles = useTranslations(
    'crypto_centre_page.crypto_widget_features_section.items_title'
  )
  const tDescriptions = useTranslations(
    'crypto_centre_page.crypto_widget_features_section.items_description'
  )
  const accordionData = [
    {
      key: 0,
      id: '01.',
      title: tTitles(keysForLocale.keys7[0]),
      description: tDescriptions(keysForLocale.keys7[0]),
      image: {
        src: (
          <Image
            src={image1.src}
            alt={tTitles(keysForLocale.keys7[0])}
            width={343}
            height={282}
          />
        ),
        width: 343,
        height: 282,
      },
    },
    {
      key: 1,
      id: '02.',
      title: tTitles(keysForLocale.keys7[1]),
      description: tDescriptions(keysForLocale.keys7[1]),

      image: {
        src: (
          <Image
            src={image2.src}
            alt='Auto-conversion'
            width={343}
            height={370}
          />
        ),
        width: 343,
        height: 282,
      },
    },
    {
      key: 2,
      id: '03.',
      title: tTitles(keysForLocale.keys7[2]),
      description: tDescriptions(keysForLocale.keys7[2]),

      image: {
        src: (
          <Image
            src={image3.src}
            alt='Auto-conversion'
            width={343}
            height={256}
          />
        ),
        width: 343,
        height: 256,
      },
    },
    {
      key: 3,
      id: '04.',
      title: tTitles(keysForLocale.keys7[3]),
      description: tDescriptions(keysForLocale.keys7[3]),
      image: {
        src: (
          <Image
            src={image4.src}
            alt='Auto-conversion'
            width={343}
            height={472}
          />
        ),
        width: 343,
        height: 472,
      },
    },
    {
      key: 4,
      id: '05.',
      title: tTitles(keysForLocale.keys7[4]),
      description: tDescriptions(keysForLocale.keys7[4]),

      image: {
        src: (
          <Image
            src={image5.src}
            alt='Auto-conversion'
            width={343}
            height={534}
          />
        ),
        width: 343,
        height: 534,
      },
    },
    {
      key: 5,
      id: '06.',
      title: tTitles(keysForLocale.keys7[5]),
      description: tDescriptions(keysForLocale.keys7[5]),

      image: {
        src: (
          <Image
            src={image6.src}
            alt='Auto-conversion'
            width={351}
            height={500}
          />
        ),
        width: 351,
        height: 500,
      },
    },
    {
      key: 6,
      id: '07.',
      title: tTitles(keysForLocale.keys7[6]),
      description: tDescriptions(keysForLocale.keys7[6]),

      image: {
        src: (
          <Image
            src={image7.src}
            alt='Auto-conversion'
            width={351}
            height={546}
          />
        ),
        width: 351,
        height: 546,
      },
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
    accordionData: data.screen4Features.map((el, i) => ({ ...el, key: i })),
  })

  return (
    <InView as={StyledCryptoWidgetFeaturesWrapper} onChange={handleInView}>
      <div className='container'>
        <div className='left-side'>
          <StyledTypographyUrbanistH2 className='title'>
            {/* {t('title')} */}
            {data.screen4Title}
          </StyledTypographyUrbanistH2>

          <div className='accordion'>
            {data.screen4Features.map(({ cartId, title, description }, i) => (
              <AccordionItem
                key={cartId}
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
            ))}
          </div>
        </div>

        <div className='right-side'>
          <div className='cart'>
            <Image
              src={data.screen4Features[expanded].image.url}
              alt=''
              width={343}
              height={282}
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
          <StyledTypographyUrbanistBody className='accordion-description'>
            {description}
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
