'use client'

import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('../HomePage'))
const HomeB2CPage = dynamic(() => import('../HomeB2CPage'), {
  loading: () => <HomePage />,
})

export default function HomePageWrapper() {
  const { tab } = useSelector((state) => state.activeTab)

  return <>{tab === 0 ? <HomePage /> : <HomeB2CPage />}</>
}
