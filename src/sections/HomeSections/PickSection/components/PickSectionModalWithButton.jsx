'use client'

import { useState } from 'react'
// import dynamic from 'next/dynamic'
import { PopupModal } from 'react-calendly'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'

// const DynamicModalCalendaly = dynamic(
//   () => import('@/components/CalendlyForm').then((mod) => mod.default),
//   {
//     ssr: false,
//   }
// )

export default function PickSectionModalWithButton({ buttonText }) {
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
        {buttonText}
      </StyledButtonSecondaryLight>
      {calendlyModal ? (
        <PopupModal
          url='https://calendly.com/inqud_team/30-minute-free-consultation'
          onModalClose={handleCloseCalendlyModal}
          open={calendlyModal}
          rootElement={document.getElementById('calendly-model-wrapper')}
        />
      ) : null}
      {/* // <DynamicModalCalendaly
        //   handleClose={handleCloseCalendlyModal}
        //   open={calendlyModal}
        // /> */}
    </>
  )
}
