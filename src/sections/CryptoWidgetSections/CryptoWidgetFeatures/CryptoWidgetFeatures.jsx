import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
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

const accordionData = [
  {
    key: 0,
    id: '01.',
    title: 'Auto-conversion',
    description:
      'Eliminate market volatility risks with our automatic conversion system. Effortlessly convert between currencies in real-time, ensuring you have the right currency at the right moment.',
    image: {
      src: (
        <Image
          src={image1.src}
          alt='Auto-conversion'
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
    title: 'BTC, ETH & other crypto',
    description:
      'Seamlessly integrate crypto payments into your business, offering a convenient and modern payment solution that enhances customer satisfaction and expands your reach in the digital economy.',

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
    title: 'Fee flexibility',
    description:
      "Empower your business with the flexibility to choose who bears the transaction fee - whether it's absorbed by your company or passed on to the customer.",

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
    title: 'Developer-friendly docs',
    description:
      'Easily integrate our services into your platform with our documentation. Our clear and comprehensive guides provide step-by-step instructions, ensuring swift integration and hassle-free development.',
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
    title: 'Instant free transfer',
    description:
      'Experience the convenience of instant and free Account-to-Account (A2A) payments within Inqud. You can reduce transaction costs and mitigate the risks associated with cash handling and unreliable platforms.',

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
    title: '24/7 expert support',
    description:
      'Round-the-clock expert support is available to assist you with any questions, concerns, or technical issues you may have, ensuring a seamless and reliable experience.',

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
    title: 'Customization',
    description:
      "Empower your business with the flexibility to choose who bears the transaction fee - whether it's absorbed by your company or passed on to the customer.",

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

export default function CryptoWidgetFeatures() {
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
    <StyledCryptoWidgetFeaturesWrapper>
      <div className='container'>
        <div className='left-side'>
          <StyledTypographyUrbanistH2 className='title'>
            Crypto widget features
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
          <div className='cart'>{accordionData[expanded].image.src}</div>
          {/* <Image
            src={img.src}
            alt='Our Features and Approaches that Stand Out!'
            width={559}
            height={650}
          /> */}
        </div>
      </div>
    </StyledCryptoWidgetFeaturesWrapper>
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
