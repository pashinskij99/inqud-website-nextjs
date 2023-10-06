'use client'

// import dynamic from 'next/dynamic'
import { StyledApiPageWrapper } from './ApiPage.styled'
import ApiHeroSection from '@/sections/ApiSections/ApiHeroSection'
import APIFlexibility from '@/sections/ApiSections/APIFlexibility'
import HowIntegrate from '@/sections/ApiSections/HowIntegrate'
import InstantFree from '@/sections/ApiSections/InstantFree'
import DevelopGuide from '@/sections/ApiSections/DevelopGuide'
import { PickApiSection } from '@/sections/HomeSections/PickSection/PickSection'
import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
import Contact from '@/sections/ApiSections/Contact'
import PageProvider from '@/contexts/PageContext/PageContext'

export default function ApiPage({ data }) {
  return (
    <PageProvider isFaq dataPage={data} nameCMSPage='apiPage'>
      <StyledApiPageWrapper>
        <ApiHeroSection />
        <APIFlexibility />
        <HowIntegrate />
        <InstantFree />
        <DevelopGuide />
        <PickApiSection />
        <FeesBusiness modelId='2540343' />
        <OurLandscapeSection />
        <QuestionsSection />
        <Contact />
      </StyledApiPageWrapper>
    </PageProvider>
  )
}
