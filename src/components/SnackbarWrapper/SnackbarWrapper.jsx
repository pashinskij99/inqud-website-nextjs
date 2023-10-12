'use client'

import Snackbar from '@mui/material/Snackbar'
import { useContext } from 'react'
import { SnackbarContext } from '@/contexts/SnackbarContext/SnackbarContext'

export default function SnackbarWrapper() {
  const { handleClose, status } = useContext(SnackbarContext)

  return (
    <>
      <Snackbar
        autoHideDuration={6000}
        open={status.loading}
        onClose={() => handleClose({ loading: true })}
      />
      <Snackbar
        autoHideDuration={6000}
        severity='success'
        open={status.success}
        content='asdasdsadsa'
        onClose={() => handleClose({ success: '' })}
      />
      <Snackbar
        autoHideDuration={6000}
        open={status.error}
        onClose={() => handleClose({ error: '' })}
      />
    </>
  )
}
