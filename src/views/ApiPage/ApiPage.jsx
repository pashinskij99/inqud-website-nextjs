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
// import Tutorial from '@/sections/ApiSections/Tutorial'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
import Contact from '@/sections/ApiSections/Contact'
import PageProvider from '@/contexts/PageContext/PageContext'

// const DynamicAPIFlexibility = dynamic(() =>
//   import('@/sections/ApiSections/APIFlexibility').then((res) => res.default)
// )
// const DynamicHowIntegrate = dynamic(() =>
//   import('@/sections/ApiSections/HowIntegrate').then((res) => res.default)
// )
// const DynamicInstantFree = dynamic(() =>
//   import('@/sections/ApiSections/InstantFree').then((res) => res.default)
// )
// const DynamicDevelopGuide = dynamic(() =>
//   import('@/sections/ApiSections/DevelopGuide').then((res) => res.default)
// )
// const DynamicPickApiSection = dynamic(() =>
//   import('@/sections/HomeSections/PickSection/PickSection').then(
//     (res) => res.PickApiSection
//   )
// )
// const DynamicFeesBusiness = dynamic(() =>
//   import('@/sections/HomeSections/FeesBusiness').then((res) => res.default)
// )
// const DynamicOurLandscapeSection = dynamic(() =>
//   import('@/sections/HomeSections/OurLandscapeSection').then(
//     (res) => res.default
//   )
// )
// const DynamicQuestionsSection = dynamic(() =>
//   import('@/sections/HomeSections/QuestionsSection').then((res) => res.default)
// )
// const DynamicContact = dynamic(() =>
//   import('@/sections/ApiSections/Contact').then((res) => res.default)
// )

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
        {/* <Tutorial /> */}
        <QuestionsSection />
        <Contact />
      </StyledApiPageWrapper>
    </PageProvider>
  )
}
