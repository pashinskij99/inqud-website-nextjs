'use client'

import { createContext, useMemo, useReducer } from 'react'

export const SnackbarContext = createContext(null)

export const STATUS_LOADING = 'STATUS_LOADING'
export const STATUS_SUCCESS = 'STATUS_SUCCESS'
export const STATUS_ERROR = 'STATUS_ERROR'

function reducer(state, action) {
  switch (action.type) {
    case STATUS_LOADING:
      return { ...state, loading: true, success: false, error: false }
    case STATUS_SUCCESS:
      return { ...state, success: true, loading: false }
    case STATUS_ERROR:
      return { error: true, success: false, loading: false }

    default:
      return state
  }
}

export default function SnackbarProvider({ children }) {
  const [status, dispatch] = useReducer(reducer, {
    success: '',
    loading: '',
    error: '',
  })
  // const [state, setState] = useState({
  //   success: '',
  //   loading: '',
  //   error: '',
  // })

  const handleClose = () => {
    // setState((prevState) => ({ ...prevState, ...state }))
  }
  const value = useMemo(
    () => ({
      handleClose,
      status,
      dispatch,
    }),
    [status]
  )
  return (
    <SnackbarContext.Provider value={value}>
      {children}
    </SnackbarContext.Provider>
  )
}
