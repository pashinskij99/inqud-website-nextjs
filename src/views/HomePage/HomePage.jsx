'use client'

import { useContext, useEffect, useState } from 'react'
import { InView } from 'react-intersection-observer'
import dynamic from 'next/dynamic'
import HeroSection from '@/sections/HomeSections/HeroSection'
import { StyledHomeWrapper } from './HomePage.styled'
import YourNeedsSection from '@/sections/HomeSections/YourNeedsSection'
import { NotFoundContext } from '@/contexts/NotFoundContext/NotFoundContext'
import PageProvider from '@/contexts/PageContext/PageContext'

export default function HomePage({ data, params }) {
  const { setIsNotFound } = useContext(NotFoundContext)
  const [load, setLoad] = useState(false)

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
        <InView
          threshold={0}
          as='div'
          rootMargin='-30% 0px -70% 0px'
          triggerOnce
          onChange={(inView) => setLoad(inView)}
        >
          {load ? <DynamicHomePageWrapper /> : null}
        </InView>
      </StyledHomeWrapper>
    </PageProvider>
  )
}

const DynamicHomePageWrapper = dynamic(() =>
  import('./components/HomePageWrapper').then((res) => res.default)
)
