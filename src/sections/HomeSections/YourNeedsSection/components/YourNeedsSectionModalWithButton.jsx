'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import Image2 from '@/assets/images/your-needs/image2.webp'
import CartRequirement from '@/components/CartRequirement'
import { keysForLocale } from '@/config/keysForLocale'

// const DynamicYourNeedsSectionSwiper = dynamic(
//   () =>
//     import('./components/YourNeedsSectionSwiper').then((mod) => mod.default),
//   {
//     ssr: false,
//   }
// )

const DynamicYourNeedsSectionModalForm = dynamic(
  () => import('./YourNeedsSectionModalForm').then((mod) => mod.default),
  {
    ssr: false,
  }
)

export default function YourNeedsSectionModalWithButton({ data }) {
  const [openModalSendRequest, setOpenModalSendRequest] = useState(false)
  const tList = useTranslations('home_page_your_needs_section_list_item_title')
  const tList2 = useTranslations(
    'home_page_your_needs_section_list_item_description'
  )

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
        description={tList2(keysForLocale.keys3[1])}
        href='#'
        handleClick={handleOpen}
        imageSrc={Image2.src}
        title={tList(keysForLocale.keys3[1])}
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
