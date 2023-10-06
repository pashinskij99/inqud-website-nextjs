'use client'

import { useContext, useEffect } from 'react'
import { StyledHomeWrapper } from './HomePage.styled'
import { NotFoundContext } from '@/contexts/NotFoundContext/NotFoundContext'
import PageProvider from '@/contexts/PageContext/PageContext'
import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
import CryptoWidgetSection from '@/sections/HomeSections/CryptoWidgetSection'
import SmoothAPISection from '@/sections/HomeSections/SmoothAPISection'
import PickSection from '@/sections/HomeSections/PickSection'
import CryptoWidget2Section from '@/sections/HomeSections/CryptoWidget2Section'
import ReasonsToTeamUp from '@/sections/HomeSections/ReasonsToTeamUp'
import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
import BlogsSection from '@/sections/HomeSections/BlogsSection'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
import HeroSection from '@/sections/HomeSections/HeroSection'
import YourNeedsSection from '@/sections/HomeSections/YourNeedsSection'

export default function HomePage({ data, params }) {
  const { setIsNotFound } = useContext(NotFoundContext)
  // const [load, setLoad] = useState(false)

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
        <CryptoWidgetSection />
        <SmoothAPISection />
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
