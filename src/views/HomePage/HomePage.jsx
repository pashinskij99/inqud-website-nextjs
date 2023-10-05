'use client'

import { useContext, useEffect } from 'react'
import HeroSection from '@/sections/HomeSections/HeroSection'
import { StyledHomeWrapper } from './HomePage.styled'
import YourNeedsSection from '@/sections/HomeSections/YourNeedsSection'
import { NotFoundContext } from '@/contexts/NotFoundContext/NotFoundContext'
import PageProvider from '@/contexts/PageContext/PageContext'
import CryptoWidgetSection from '@/sections/HomeSections/CryptoWidgetSection'
import SmoothAPISection from '@/sections/HomeSections/SmoothAPISection'
import PickSection from '@/sections/HomeSections/PickSection'
import CryptoWidget2Section from '@/sections/HomeSections/CryptoWidget2Section'
import ReasonsToTeamUp from '@/sections/HomeSections/ReasonsToTeamUp'
import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
import BlogsSection from '@/sections/HomeSections/BlogsSection'

export default function HomePage({ data, params }) {
  const { setIsNotFound } = useContext(NotFoundContext)

  useEffect(() => {
    setIsNotFound(true)

    return () => {
      setIsNotFound(false)
    }
  }, [])
  return (
    <PageProvider isFaq dataPage={data} params={params} nameCMSPage='homePage'>
      <StyledHomeWrapper>
        {/* Content loading ssr */}
        <HeroSection />
        <YourNeedsSection />
        {/* Content loading in client */}
        <CryptoWidgetSection /> {/* good */}
        <SmoothAPISection /> {/* good */}
        <PickSection className='pickSection' variant='dontLose' />
        <CryptoWidget2Section />
        <ReasonsToTeamUp />
        <FeesBusiness modelId='2540165' autoId={10} />
        <OurLandscapeSection />
        <PickSection className='pickSection2' />
        <BlogsSection />
        <QuestionsSection />
      </StyledHomeWrapper>
    </PageProvider>
  )
}
