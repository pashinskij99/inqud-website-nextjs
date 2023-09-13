'use client'

import { useContext, useEffect } from 'react'
import { StyledHomeB2CPageWrapper } from './HomeB2CPage.styled'
import HeroB2CSection from '@/sections/HomeB2CSections/HeroB2CSection'
import FeaturesB2CSection from '@/sections/HomeB2CSections/FeaturesB2CSection'
import ProductLineB2CSection from '@/sections/HomeB2CSections/ProductLineB2CSection'
import HowToStartsB2CSection from '@/sections/HomeB2CSections/HowToStartsB2CSection'
import PassKYCB2CSection from '@/sections/HomeB2CSections/PassKYCB2CSection'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
import BlogsSection from '@/sections/HomeSections/BlogsSection'
import { NotFoundContext } from '@/contexts/NotFoundContext/NotFoundContext'
import PageProvider from '@/contexts/PageContext/PageContext'

export default function HomeB2CPage({ data }) {
  const { setIsNotFound } = useContext(NotFoundContext)

  useEffect(() => {
    setIsNotFound(true)

    return () => {
      setIsNotFound(false)
    }
  }, [])

  return (
    <PageProvider dataPage={data}>
      <StyledHomeB2CPageWrapper>
        <HeroB2CSection />
        <FeaturesB2CSection />
        <ProductLineB2CSection />
        <HowToStartsB2CSection />
        <PassKYCB2CSection />
        <BlogsSection />
        <QuestionsSection />
      </StyledHomeB2CPageWrapper>
    </PageProvider>
  )
}
