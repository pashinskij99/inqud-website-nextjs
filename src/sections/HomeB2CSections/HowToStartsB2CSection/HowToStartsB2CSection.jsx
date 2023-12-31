'use client'

import Image from 'next/image'
import { Fragment, useContext } from 'react'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledHowToStartsB2CSectionWrapper,
  StyledStepCartWrapper,
} from './HowToStartsB2CSection.styled'
import arrowImage from '@/assets/images/homeB2C/how-to-start/arrow.png'
import TimeIcon from '@/assets/images/homeB2C/how-to-start/time.svg'
import { ButtonLearnMore } from '@/components/UI/Button'
import { PageContext } from '@/contexts/PageContext/PageContext'
import Device, { DESKTOP, MOBILE_OR_TABLET } from '@/components/Device/Device'

export default function HowToStartsB2CSection() {
  const {
    dataPage: { homeB2c: data },
  } = useContext(PageContext)

  return (
    <StyledHowToStartsB2CSectionWrapper>
      <div className='container'>
        <div className='content-wrapper'>
          <StyledTypographyUrbanistH1 className='title'>
            {data.screen4Title}
          </StyledTypographyUrbanistH1>
          <Device device={DESKTOP}>
            <div className='steps-wrapper desktop'>
              {data.screen4Step.map(
                ({ description, id, cartId, imageSrc, time, title }, i) => (
                  <Fragment key={id}>
                    <StepContent
                      keyId={id}
                      imageSrc={imageSrc}
                      time={time}
                      title={title}
                      description={description}
                      id={cartId}
                    />
                    {i !== data.screen4Step.length - 1 && (
                      <div className='step-image-wrapper'>
                        <Image
                          className='step-image'
                          src={arrowImage.src}
                          width={171}
                          height={20}
                        />
                      </div>
                    )}
                  </Fragment>
                )
              )}
            </div>
          </Device>
          <Device device={MOBILE_OR_TABLET}>
            <div className='steps-wrapper tabletOrMobile'>
              {data.screen4Step.map(
                ({ description, id, cartId, imageSrc, time, title }) => (
                  <StepContent
                    key={id}
                    keyId={id}
                    imageSrc={imageSrc}
                    time={time}
                    title={title}
                    description={description}
                    id={cartId}
                  />
                )
              )}
            </div>
          </Device>
        </div>
      </div>
    </StyledHowToStartsB2CSectionWrapper>
  )
}

function StepContent({ id, title, description, time, button }) {
  return (
    <StepCart
      description={description}
      id={id}
      time={time}
      title={title}
      button={button}
    />
  )
}

function StepCart({ id, title, description, time, button }) {
  return (
    <StyledStepCartWrapper>
      <div className='step-cart-id-wrapper'>
        <h3 className='step-cart-id'>{id}</h3>
      </div>
      <StyledTypographyUrbanistH4 className='step-cart-title'>
        {title}
      </StyledTypographyUrbanistH4>
      <StyledTypographyUrbanistBody className='step-cart-description'>
        {description}
      </StyledTypographyUrbanistBody>
      {!time && button ? (
        <ButtonLearnMore className='step-cart-button'>{button}</ButtonLearnMore>
      ) : (
        <div className='step-cart-time-wrapper'>
          <Image
            src={TimeIcon}
            className='step-cart-time-icon'
            alt='TimeIcon'
          />
          <StyledTypographyUrbanistBody className='step-cart-time'>
            {time}
          </StyledTypographyUrbanistBody>
        </div>
      )}
    </StyledStepCartWrapper>
  )
}
