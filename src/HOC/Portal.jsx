'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

function Portal({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(children, document.querySelector('#myportal'))
    : null
}

export default Portal
