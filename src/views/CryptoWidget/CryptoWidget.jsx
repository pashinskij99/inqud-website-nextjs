'use client'

import { StyledCryptoWidgetWrapper } from './CryptoWidget.styled'
import CryptoWidgetHeroSection from '@/sections/CryptoWidgetSections/CryptoWidgetHeroSection'
import CryptoWidgetFlexibility from '@/sections/CryptoWidgetSections/CryptoWidgetFlexibility'
import CryptoBusinessSection from '@/sections/CryptoWidgetSections/CryptoBusinessSection'
import CryptoWidgetFeatures from '@/sections/CryptoWidgetSections/CryptoWidgetFeatures'
import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
import HowIntegrateCryptoSection from '@/sections/CryptoWidgetSections/HowIntegrateCryptoSection'
import SafetyReliability from '@/sections/CryptoWidgetSections/SafetyReliability'
import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
import Tutorial from '@/sections/ApiSections/Tutorial'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
import SendRequestSection from '@/sections/CryptoWidgetSections/SendRequestSection'
import PageProvider from '@/contexts/PageContext/PageContext'

export default function CryptoWidget({ data }) {
  return (
    <PageProvider dataPage={data}>
      <StyledCryptoWidgetWrapper>
        <CryptoWidgetHeroSection />
        <CryptoWidgetFlexibility />
        <CryptoBusinessSection />
        <CryptoWidgetFeatures />
        <FeesBusiness modelId='2540254' />
        <HowIntegrateCryptoSection />
        <SafetyReliability />
        <OurLandscapeSection />
        {/* <ConnectCryptoSection /> */}
        <Tutorial />
        <QuestionsSection />
        <SendRequestSection />
      </StyledCryptoWidgetWrapper>
    </PageProvider>
  )
}
