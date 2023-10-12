'use client'

import Script from 'next/script'
import { StyledDialog } from '@/components/CalendlyForm/CalendlyForm.styled'

function CalendlyFormModal({ handleClose, open }) {
  return (
    <StyledDialog open={open} onClose={handleClose} scroll='body'>
      <div
        className='calendly-inline-widget w-screen h-screen'
        data-url='https://calendly.com/inqud_team/30-minute-free-consultation'
      />

      <Script
        type='text/javascript'
        src='https://assets.calendly.com/assets/external/widget.js'
        async
      />
    </StyledDialog>
  )
}

export default CalendlyFormModal
