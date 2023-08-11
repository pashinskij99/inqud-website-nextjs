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
import ConnectCryptoSection from '@/sections/CryptoWidgetSections/ConnectCryptoSection'
import Tutorial from '@/sections/ApiSections/Tutorial'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
import SendRequestSection from '@/sections/CryptoWidgetSections/SendRequestSection'

export default function CryptoWidget() {
  return (
    <StyledCryptoWidgetWrapper>
      <CryptoWidgetHeroSection />
      <CryptoWidgetFlexibility />
      <CryptoBusinessSection />
      <CryptoWidgetFeatures />
      <FeesBusiness />
      <HowIntegrateCryptoSection />
      <SafetyReliability />
      <OurLandscapeSection />
      <ConnectCryptoSection />
      <Tutorial />
      <QuestionsSection />
      <SendRequestSection />
    </StyledCryptoWidgetWrapper>
  )
}
