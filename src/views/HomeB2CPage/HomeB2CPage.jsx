'use client'

import { useContext, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { StyledHomeB2CPageWrapper } from './HomeB2CPage.styled'
import HeroB2CSection from '@/sections/HomeB2CSections/HeroB2CSection'
// import FeaturesB2CSection from '@/sections/HomeB2CSections/FeaturesB2CSection'
// import ProductLineB2CSection from '@/sections/HomeB2CSections/ProductLineB2CSection'
// import HowToStartsB2CSection from '@/sections/HomeB2CSections/HowToStartsB2CSection'
// import PassKYCB2CSection from '@/sections/HomeB2CSections/PassKYCB2CSection'
// import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
// import BlogsSection from '@/sections/HomeSections/BlogsSection'
import { NotFoundContext } from '@/contexts/NotFoundContext/NotFoundContext'
import PageProvider from '@/contexts/PageContext/PageContext'

const DynamicFeaturesB2CSection = dynamic(() =>
  import('@/sections/HomeB2CSections/FeaturesB2CSection').then(
    (res) => res.default
  )
)
const DynamicProductLineB2CSection = dynamic(() =>
  import('@/sections/HomeB2CSections/ProductLineB2CSection').then(
    (res) => res.default
  )
)
const DynamicHowToStartsB2CSection = dynamic(() =>
  import('@/sections/HomeB2CSections/HowToStartsB2CSection').then(
    (res) => res.default
  )
)
const DynamicPassKYCB2CSection = dynamic(() =>
  import('@/sections/HomeB2CSections/PassKYCB2CSection').then(
    (res) => res.default
  )
)
const DynamicBlogsSection = dynamic(() =>
  import('@/sections/HomeSections/BlogsSection').then((res) => res.default)
)
const DynamicQuestionsSection = dynamic(() =>
  import('@/sections/HomeSections/QuestionsSection').then((res) => res.default)
)

export default function HomeB2CPage({ data }) {
  const { setIsNotFound } = useContext(NotFoundContext)

  useEffect(() => {
    setIsNotFound(true)

    return () => {
      setIsNotFound(false)
    }
  }, [])

  return (
    <PageProvider isFaq dataPage={data} nameCMSPage='homeB2c'>
      <StyledHomeB2CPageWrapper>
        <HeroB2CSection />
        <DynamicFeaturesB2CSection />
        <DynamicProductLineB2CSection />
        <DynamicHowToStartsB2CSection />
        <DynamicPassKYCB2CSection />
        <DynamicBlogsSection />
        <DynamicQuestionsSection />
      </StyledHomeB2CPageWrapper>
    </PageProvider>
  )
}
