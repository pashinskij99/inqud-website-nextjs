'use client'

import { useState } from 'react'
import { PopupModal } from 'react-calendly'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import {
  addGlobalScrollBar,
  removeGlobalScrollBar,
} from '@/utils/addOrRemoveGlobalScrollBar'

export default function InstantFreeModalWithButton({ data }) {
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
        {data.buttonScreen4B}
      </StyledButtonGhost>
      {calendlyModal ? (
        <PopupModal
          url='https://calendly.com/inqud_team/30-minute-free-consultation'
          onModalClose={handleCloseCalendlyModal}
          open={calendlyModal}
          rootElement={document.getElementById('calendly-model-wrapper')}
        />
      ) : null}
    </>
  )
}
