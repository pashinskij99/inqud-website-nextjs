'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image2 from '@/assets/images/your-needs/image2.webp'
import CartRequirement from '@/components/CartRequirement'

const DynamicYourNeedsSectionModalForm = dynamic(
  () => import('./YourNeedsSectionModalForm').then((mod) => mod.default),
  {
    ssr: false,
  }
)

export default function YourNeedsSectionModalWithButton({ data, trans }) {
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
        buttonText={data.buttonScreen2}
        description={trans.cartDescription}
        href='#'
        handleClick={handleOpen}
        imageSrc={Image2.src}
        title={trans.cartTitle}
      />
      {openModalSendRequest ? (
        <DynamicYourNeedsSectionModalForm
          openModalSendRequest={openModalSendRequest}
          handleClose={handleClose}
        />
      ) : null}
    </>
  )
}
