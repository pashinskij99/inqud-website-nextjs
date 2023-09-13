'use client'

import HomePage from '../HomePage/HomePage'
import PageProvider from '@/contexts/PageContext/PageContext'

export default function HomePageWrapper({ data }) {
  return (
    <PageProvider dataPage={data}>
      <HomePage />
    </PageProvider>
  )
}
