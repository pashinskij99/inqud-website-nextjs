'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'

const DynamicModalCalendaly = dynamic(
  () => import('@/components/CalendlyForm').then((mod) => mod.default),
  {
    ssr: false,
  }
)

export default function PickSectionModalWithButton({ leadFormData }) {
  const [calendlyModal, setCalendlyModal] = useState(false)

  const handleOpenCalendlyModal = async () => {
    setCalendlyModal(true)
    const removeGlobalScrollBar = await import(
      '@/utils/addOrRemoveGlobalScrollBar'
    ).then((res) => res.removeGlobalScrollBar)
    removeGlobalScrollBar()
  }
  const handleCloseCalendlyModal = async () => {
    setCalendlyModal(false)
    const addGlobalScrollBar = await import(
      '@/utils/addOrRemoveGlobalScrollBar'
    ).then((res) => res.addGlobalScrollBar)
    addGlobalScrollBar()
  }

  return (
    <>
      <StyledButtonSecondaryLight
        onClick={handleOpenCalendlyModal}
        className='pickPickButton'
      >
        {leadFormData?.buttonText}
      </StyledButtonSecondaryLight>
      {calendlyModal ? (
        <DynamicModalCalendaly
          onModalClose={handleCloseCalendlyModal}
          open={calendlyModal}
        />
      ) : null}
    </>
  )
}
