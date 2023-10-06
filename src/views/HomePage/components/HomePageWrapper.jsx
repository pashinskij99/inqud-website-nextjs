import React from 'react'
import CryptoWidgetSection from '@/sections/HomeSections/CryptoWidgetSection'
import SmoothAPISection from '@/sections/HomeSections/SmoothAPISection'
import PickSection from '@/sections/HomeSections/PickSection'
import CryptoWidget2Section from '@/sections/HomeSections/CryptoWidget2Section'
import ReasonsToTeamUp from '@/sections/HomeSections/ReasonsToTeamUp'
import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
import BlogsSection from '@/sections/HomeSections/BlogsSection'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'

function HomePageWrapper() {
  return (
    <>
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
    </>
  )
}

export default HomePageWrapper
