'use client'

import HeroSection from '@/sections/HomeSections/HeroSection'
import {StyledHomeWrapper} from './HomePage.styled'
import YourNeedsSection from '@/sections/HomeSections/YourNeedsSection'
import CryptoWidgetSection from '@/sections/HomeSections/CryptoWidgetSection'
import SmoothAPISection from '@/sections/HomeSections/SmoothAPISection'
import PickSection from '@/sections/HomeSections/PickSection'
import CryptoWidget2Section from '@/sections/HomeSections/CryptoWidget2Section'
import ReasonsToTeamUp from '@/sections/HomeSections/ReasonsToTeamUp'
import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
import BlogsSection from '@/sections/HomeSections/BlogsSection'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
import FeesBusiness from '@/sections/HomeSections/FeesBusiness'

export default function HomePage() {
  return (
    <StyledHomeWrapper>
      <HeroSection/>
      <YourNeedsSection/>
      <CryptoWidgetSection/>
      <SmoothAPISection/>
      <PickSection className="pickSection" variant="dontLose"/>
      <CryptoWidget2Section/>
      <ReasonsToTeamUp/>
      <FeesBusiness/>
      <OurLandscapeSection/>
      <PickSection className="pickSection2"/>
      <BlogsSection/>
      <QuestionsSection/>
    </StyledHomeWrapper>
  )
}
