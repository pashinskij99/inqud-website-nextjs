'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLang } from '@/store/features/lang/langSlice'
import { getDictionary } from '../../../getDictionary'

export default function Lang({ lang }) {
  const dispatch = useDispatch()

  useEffect(async () => {
    dispatch(setLang(await getDictionary(lang)))
  }, [dispatch])

  return null
}
