'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import CartRequirement from '@/components/CartRequirement'

const DynamicYourNeedsSectionModalForm = dynamic(
  () => import('./YourNeedsSectionModalForm'),
  {
    ssr: false,
  }
)

export default function YourNeedsSectionModalWithButton({
  buttonText,
  description,
  title,
  image,
  data,
}) {
  const [openModalSendRequest, setOpenModalSendRequest] = useState(false)

  const handleOpen = () => {
    setOpenModalSendRequest(true)
  }

  const handleClose = () => {
    setOpenModalSendRequest(false)
  }
  return (
    <>
      <CartRequirement
        buttonText={buttonText}
        description={description}
        href='#'
        handleClick={handleOpen}
        imageSrc={image}
        title={title}
      />
      {openModalSendRequest ? (
        <DynamicYourNeedsSectionModalForm
          openModalSendRequest={openModalSendRequest}
          handleClose={handleClose}
          data={data}
        />
      ) : null}
    </>
  )
}
