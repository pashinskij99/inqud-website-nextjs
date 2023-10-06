'use client'

import React, { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import HeroSection from '@/sections/HomeSections/HeroSection'
import { StyledHomeWrapper } from './HomePage.styled'
import YourNeedsSection from '@/sections/HomeSections/YourNeedsSection'
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
        {/* {size.width && size.width <= responseBreakPoint.mobile ? ( */}
        {/*   <FeesBusiness modelId='2540165' autoId={10} /> */}
        {/* ) : null} */}
        <CryptoWidgetSection /> {/* good */}
        <SmoothAPISection /> {/* good */}
        <PickSection className='pickSection' variant='dontLose' />
        <CryptoWidget2Section />
        <ReasonsToTeamUp />
        {/* {size.width && size.width <= responseBreakPoint.mobile ? ( */}
        {/*   <PickSection className='pickSection2' /> */}
        {/* ) : null} */}
        {/* {size.width && size.width > responseBreakPoint.mobile ? ( */}
        <FeesBusiness modelId='2540165' autoId={10} />
        {/* ) : null} */}
        <OurLandscapeSection />
        {/* {size.width && size.width > responseBreakPoint.mobile ? ( */}
        <PickSection className='pickSection2' />
        {/* ) : null} */}
        <BlogsSection />
        <QuestionsSection />
        {/* Content loading in client */}
        {/* <InView */}
        {/*   threshold={0} */}
        {/*   as='div' */}
        {/*   className='content-wrapper-homepage' */}
        {/*   rootMargin='440px' */}
        {/*   triggerOnce */}
        {/*   onChange={(inView) => setLoad(inView)} */}
        {/* > */}
        {/*   {load ? <DynamicHomePageWrapper /> : null} */}
        {/* </InView> */}
      </StyledHomeWrapper>
    </PageProvider>
  )
}

const DynamicHomePageWrapper = dynamic(() =>
  import('./components/HomePageWrapper').then((res) => res.default)
)
