'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'

const DynamicFeeModalWrapper = dynamic(() => import('./FeeModalWrapper'), {
  ssr: false,
})

export default function FeesBusinessModalWithButton({
  modelId,
  data,
  leadData,
}) {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleHideModal = () => {
    setShowModal(false)
  }
  return (
    <>
      <StyledButtonSecondaryLight onClick={handleShowModal}>
        {data.cartButton}
      </StyledButtonSecondaryLight>
      {showModal ? (
        <DynamicFeeModalWrapper
          leadData={leadData}
          modelId={modelId}
          showModal={showModal}
          handleHideModal={handleHideModal}
        />
      ) : null}
    </>
  )
}
