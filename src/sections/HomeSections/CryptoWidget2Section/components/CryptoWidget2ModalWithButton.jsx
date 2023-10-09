'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'

const DynamicModalSubmitEmailWrapper = dynamic(
  () => import('./ModalSubmitEmailWrapper').then((mod) => mod.default),
  {
    ssr: false,
  }
)

export function CryptoWidget2ModalWithButton({ data, params }) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <StyledButtonSecondaryLight
        onClick={handleOpen}
        className='crypto2FooterApplyButton'
      >
        {data.buttonLead2C}
      </StyledButtonSecondaryLight>

      {open ? (
        <DynamicModalSubmitEmailWrapper
          params={params}
          open={open}
          handleClose={handleClose}
        />
      ) : null}
    </>
  )
}
