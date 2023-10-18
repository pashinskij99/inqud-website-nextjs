'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
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

export default function CryptoWidgetHeroCalendly({ data }) {
  const [calendlyModal, setCalendlyModal] = useState(false)

  const handleOpenCalendlyModal = () => {
    setCalendlyModal(true)
    removeGlobalScrollBar()
  }
  const handleCloseCalendlyModal = () => {
    setCalendlyModal(false)
    addGlobalScrollBar()
  }
  return (
    <>
      <StyledButtonGhost
        onClick={handleOpenCalendlyModal}
        className='ghostButton'
      >
        {data.buttonScreen1B}
      </StyledButtonGhost>
      {calendlyModal ? (
        <DynamicModalCalendaly
          handleClose={handleCloseCalendlyModal}
          open={calendlyModal}
        />
      ) : null}
    </>
  )
}
