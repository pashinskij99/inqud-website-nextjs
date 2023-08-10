'use client'

import { StyledApiPageWrapper } from './ApiPage.styled'
import ApiHeroSection from '@/sections/ApiSections/ApiHeroSection'
import APIFlexibility from '@/sections/ApiSections/APIFlexibility'
import HowIntegrate from '@/sections/ApiSections/HowIntegrate'
import InstantFree from '@/sections/ApiSections/InstantFree'
import DevelopGuide from '@/sections/ApiSections/DevelopGuide'
import { PickApiSection } from '@/sections/HomeSections/PickSection/PickSection'
import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
import Tutorial from '@/sections/ApiSections/Tutorial'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
import Contact from '@/sections/ApiSections/Contact'

export default function ApiPage() {
  return (
    <StyledApiPageWrapper>
      <ApiHeroSection />
      <APIFlexibility />
      <HowIntegrate />
      <InstantFree />
      <DevelopGuide />
      <PickApiSection />
      <FeesBusiness />
      <OurLandscapeSection />
      <Tutorial />
      <QuestionsSection />
      <Contact />
    </StyledApiPageWrapper>
  )
}