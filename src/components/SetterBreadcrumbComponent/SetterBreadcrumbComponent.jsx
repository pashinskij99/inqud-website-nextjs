'use client'

import { useDispatch } from 'react-redux'
import { setBreadCrumb } from '@/store/features/breadcrumb/breadcrumbSlice'

export default function SetterBreadcrumbComponent({ data }) {
  const dispatch = useDispatch()

  dispatch(setBreadCrumb(data))

  return null
}
