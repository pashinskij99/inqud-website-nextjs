'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'

const DynamicApiHeroSectionModalForm = dynamic(
  () => import('./ApiHeroSectionModalForm'),
  { ssr: false }
)

export default function ApiHeroButtonShowModal({ data }) {
  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleHideModal = () => {
    setShowModal(false)
  }
  return (
    <>
      <StyledButtonGhost onClick={handleShowModal} className='ghostButton'>
        {data.buttonScreen1B}
      </StyledButtonGhost>
      {showModal ? (
        <DynamicApiHeroSectionModalForm
          data={data}
          handleClose={handleHideModal}
          showModal={showModal}
        />
      ) : null}
    </>
  )
}
