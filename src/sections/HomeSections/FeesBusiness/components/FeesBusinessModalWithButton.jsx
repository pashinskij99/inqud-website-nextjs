'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'

const DynamicFeeModalWrapper = dynamic(
  () => import('./FeeModalWrapper').then((res) => res.default),
  { ssr: false }
)

export default function FeesBusinessModalWithButton({ modelId, data, params }) {
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
          modelId={modelId}
          showModal={showModal}
          handleHideModal={handleHideModal}
          params={params}
        />
      ) : null}
    </>
  )
}
