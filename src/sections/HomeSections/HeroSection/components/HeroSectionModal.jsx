'use client'

// import dynamic from 'next/dynamic'
import { useState } from 'react'
import { PopupModal } from 'react-calendly'
import styles from '../HeroSection.module.scss'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'

export default function HeroSectionModal({ data }) {
  const [calendlyModal, setCalendlyModal] = useState()

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
      <StyledButtonGhost
        onClick={handleOpenCalendlyModal}
        className={styles.ghostButton}
      >
        {data.buttonScreen1ContactSales}
      </StyledButtonGhost>
      {calendlyModal ? (
        <PopupModal
          url='https://calendly.com/inqud_team/30-minute-free-consultation'
          onModalClose={handleCloseCalendlyModal}
          open={calendlyModal}
          rootElement={document.getElementById('calendly-model-wrapper')}
        />
      ) : null}
    </>
    // <DynamicModalCalendaly
    //   handleClose={handleCloseCalendlyModal}
    //   open={calendlyModal}
    // />
  )
}

// const DynamicModalCalendaly = dynamic(
//   () => import('@/components/CalendlyForm'),
//   {
//     ssr: false,
//   }
// )
