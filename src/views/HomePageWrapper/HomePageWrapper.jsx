'use client'

import { useSelector } from 'react-redux'
import HomePage from '../HomePage/HomePage'
import HomeB2CPage from '../HomeB2CPage'

export default function HomePageWrapper() {
  const { tab } = useSelector((state) => state.activeTab)

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{tab === 0 ? <HomePage /> : <HomeB2CPage />}</>
}
