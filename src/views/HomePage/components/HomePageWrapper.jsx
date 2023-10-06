import React from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import CryptoWidgetSection from '@/sections/HomeSections/CryptoWidgetSection'
import SmoothAPISection from '@/sections/HomeSections/SmoothAPISection'
import PickSection from '@/sections/HomeSections/PickSection'
import CryptoWidget2Section from '@/sections/HomeSections/CryptoWidget2Section'
import ReasonsToTeamUp from '@/sections/HomeSections/ReasonsToTeamUp'
import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
import BlogsSection from '@/sections/HomeSections/BlogsSection'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
import { responseBreakPoint } from '@/utils/response'

function HomePageWrapper() {
  const size = useWindowSize()
  return (
    <>
      {size.width && size.width <= responseBreakPoint.mobile ? (
        <FeesBusiness modelId='2540165' autoId={10} />
      ) : null}
      <CryptoWidgetSection /> {/* good */}
      <SmoothAPISection /> {/* good */}
      <PickSection className='pickSection' variant='dontLose' />
      <CryptoWidget2Section />
      <ReasonsToTeamUp />
      {size.width && size.width <= responseBreakPoint.mobile ? (
        <PickSection className='pickSection2' />
      ) : null}
      {size.width && size.width > responseBreakPoint.mobile ? (
        <FeesBusiness modelId='2540165' autoId={10} />
      ) : null}
      <OurLandscapeSection />
      {size.width && size.width > responseBreakPoint.mobile ? (
        <PickSection className='pickSection2' />
      ) : null}
      <BlogsSection />
      <QuestionsSection />
    </>
  )
}

export default HomePageWrapper
