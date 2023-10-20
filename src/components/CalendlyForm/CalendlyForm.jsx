'use client'

import { useEffect } from 'react'
import { StyledDialog } from '@/components/CalendlyForm/CalendlyForm.styled'

function CalendlyFormModal({ handleClose, open }) {
  useEffect(() => {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    )
    head.appendChild(script)
  }, [])

  return (
    <StyledDialog open={open} onClose={handleClose} scroll='body'>
      <div
        className='calendly-inline-widget w-screen h-screen'
        data-url='https://calendly.com/inqud_team/30-minute-free-consultation'
      />
    </StyledDialog>
  )
}

export default CalendlyFormModal
