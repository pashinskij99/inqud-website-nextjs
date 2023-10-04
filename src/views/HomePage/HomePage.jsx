'use client'

import { useContext, useEffect } from 'react'
import dynamic from 'next/dynamic'
import HeroSection from '@/sections/HomeSections/HeroSection'
import { StyledHomeWrapper } from './HomePage.styled'
import YourNeedsSection from '@/sections/HomeSections/YourNeedsSection'
import { NotFoundContext } from '@/contexts/NotFoundContext/NotFoundContext'
import PageProvider from '@/contexts/PageContext/PageContext'

const DynamicFeesBusiness = dynamic(
  () =>
    import('@/sections/HomeSections/FeesBusiness').then((res) => res.default),
  {
    ssr: false,
  }
)

const DynamicOurLandscapeSection = dynamic(
  () =>
    import('@/sections/HomeSections/OurLandscapeSection').then(
      (res) => res.default
    ),
  {
    ssr: false,
  }
)

const DynamicBlogSection = dynamic(
  () =>
    import('@/sections/HomeSections/BlogsSection').then((res) => res.default),
  {
    ssr: false,
  }
)

const DynamicPickSection = dynamic(
  () =>
    import('@/sections/HomeSections/PickSection').then((res) => res.default),
  {
    ssr: false,
  }
)

const DynamicQuestionsSection = dynamic(
  () =>
    import('@/sections/HomeSections/QuestionsSection').then(
      (res) => res.default
    ),
  {
    ssr: false,
  }
)
const DynamicCryptoWidgetSection = dynamic(
  () =>
    import('@/sections/HomeSections/CryptoWidgetSection').then(
      (res) => res.default
    ),
  {
    ssr: false,
  }
)

const DynamicSmoothAPISection = dynamic(
  () =>
    import('@/sections/HomeSections/SmoothAPISection').then(
      (res) => res.default
    ),
  {
    ssr: false,
  }
)

const DynamicCryptoWidget2Section = dynamic(
  () =>
    import('@/sections/HomeSections/CryptoWidget2Section').then(
      (res) => res.default
    ),
  {
    ssr: false,
  }
)

const DynamicReasonsToTeamUp = dynamic(
  () =>
    import('@/sections/HomeSections/ReasonsToTeamUp').then(
      (res) => res.default
    ),
  {
    ssr: false,
  }
)

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
        <DynamicCryptoWidgetSection /> {/* good */}
        <DynamicSmoothAPISection /> {/* good */}
        <DynamicPickSection className='pickSection' variant='dontLose' />
        <DynamicCryptoWidget2Section />
        <DynamicReasonsToTeamUp />
        <DynamicFeesBusiness modelId='2540165' autoId={10} />
        <DynamicOurLandscapeSection />
        <DynamicPickSection className='pickSection2' />
        <DynamicBlogSection />
        <DynamicQuestionsSection />
      </StyledHomeWrapper>
    </PageProvider>
  )
}
