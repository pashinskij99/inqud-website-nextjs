'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'
import dynamic from 'next/dynamic'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledInstantFreeWrapper } from './InstantFree.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { PageContext } from '@/contexts/PageContext/PageContext'
import {
  addGlobalScrollBar,
  removeGlobalScrollBar,
} from '@/utils/addOrRemoveGlobalScrollBar'

const DynamicModalCalendaly = dynamic(
  () => import('@/components/CalendlyForm').then((mod) => mod.default),
  {
    ssr: false,
  }
)

export default function InstantFree() {
  const [calendlyModal, setCalendlyModal] = useState(false)

  const handleOpenCalendlyModal = () => {
    setCalendlyModal(true)
    removeGlobalScrollBar()
  }
  const handleCloseCalendlyModal = () => {
    setCalendlyModal(false)
    addGlobalScrollBar()
  }

  const {
    dataPage: { apiPage: data },
  } = useContext(PageContext)

  return (
    <StyledInstantFreeWrapper>
      <div className='container'>
        <div className='left-side'>
          <StyledTypographyUrbanistH3 className='title'>
            {data.screen4Title}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistH5 className='description'>
            {data.screen4Description}
          </StyledTypographyUrbanistH5>

          <div className='grid'>
            {data.screen4Features.map(({ id, title, image }) => (
              <div key={id} className='cart'>
                <Image src={image.url} alt='' width={48} height={48} />
                <StyledTypographyUrbanistBody className='cart-description'>
                  {title}
                </StyledTypographyUrbanistBody>
              </div>
            ))}
          </div>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted getStarted-1'>
                {data.buttonScreen4A}
              </ButtonGetStarted>
              <ButtonGetStarted className='getStarted getStarted-2'>
                {data.buttonScreen4A}
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost
              onClick={handleOpenCalendlyModal}
              className='ghostButton ghostButton-1'
            >
              {data.buttonScreen4B}
            </StyledButtonGhost>
            <StyledButtonGhost
              onClick={handleOpenCalendlyModal}
              className='ghostButton ghostButton-2'
            >
              {data.buttonScreen4B}
            </StyledButtonGhost>
            {calendlyModal ? (
              <DynamicModalCalendaly
                handleClose={handleCloseCalendlyModal}
                open={calendlyModal}
              />
            ) : null}
          </div>
        </div>
        <div className='right-side'>
          <div className='cart-wrapper'>
            <Image
              src={data.screen4Image.url}
              width={343}
              height={534}
              alt='Instant Free A2A Payments for Merchants'
            />
          </div>
        </div>
      </div>
    </StyledInstantFreeWrapper>
  )
}
