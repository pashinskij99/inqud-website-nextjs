'use client'

import { useSelector } from 'react-redux'
import HomeB2CPage from '@/views/HomeB2CPage'
import HomePage from '@/views/HomePage'

export default function Home() {
  const { tab } = useSelector((state) => state.activeTab)
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{tab === 0 ? <HomePage /> : <HomeB2CPage />}</>
  // return <HomeB2CPage />
}
