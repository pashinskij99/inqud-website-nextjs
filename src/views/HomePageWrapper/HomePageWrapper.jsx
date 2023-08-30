'use client'

import { useSelector } from 'react-redux'
// import dynamic from 'next/dynamic'
import HomePage from '../HomePage/HomePage'
import HomeB2CPage from '../HomeB2CPage'
import PageProvider from '@/contexts/PageContext/PageContext'

// const HomePage = dynamic(() => import('../HomePage'))
// const HomeB2CPage = dynamic(() => import('../HomeB2CPage'), {
// loading: () => <HomePage />,
// })

export default function HomePageWrapper({ data }) {
  const { tab } = useSelector((state) => state.activeTab)

  return (
    <PageProvider dataPage={data}>
      {tab === 0 ? <HomePage /> : <HomeB2CPage />}
    </PageProvider>
  )
}
