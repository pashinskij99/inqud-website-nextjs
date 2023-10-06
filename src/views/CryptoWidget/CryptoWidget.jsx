'use client'

import { StyledCryptoWidgetWrapper } from './CryptoWidget.styled'
// import CryptoWidgetHeroSection from '@/sections/CryptoWidgetSections/CryptoWidgetHeroSection'
import CryptoWidgetFlexibility from '@/sections/CryptoWidgetSections/CryptoWidgetFlexibility'
import CryptoBusinessSection from '@/sections/CryptoWidgetSections/CryptoBusinessSection'
import CryptoWidgetFeatures from '@/sections/CryptoWidgetSections/CryptoWidgetFeatures'
import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
import HowIntegrateCryptoSection from '@/sections/CryptoWidgetSections/HowIntegrateCryptoSection'
import SafetyReliability from '@/sections/CryptoWidgetSections/SafetyReliability'
import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
import SendRequestSection from '@/sections/CryptoWidgetSections/SendRequestSection'
import PageProvider from '@/contexts/PageContext/PageContext'
import ConnectCryptoSection from '@/sections/CryptoWidgetSections/ConnectCryptoSection'
// import ConnectCryptoSection from '@/sections/CryptoWidgetSections/ConnectCryptoSection'

// const DynamicCryptoWidgetHeroSection = dynamic(
//   import('@/sections/CryptoWidgetSections/CryptoWidgetHeroSection').then(
//     (res) => res.default
//   ),
//   {
//     ssr: false,
//   }
// )

export default function CryptoWidget({ data }) {
  return (
    <PageProvider dataPage={data} isFaq nameCMSPage='cryptoWidgetPage'>
      <StyledCryptoWidgetWrapper>
        {/* <CryptoWidgetHeroSection /> */}
        {/* <DynamicCryptoWidgetHeroSection /> */}
        {/* <DynamicCryptoWidgetFlexibility />
        <DynamicCryptoBusinessSection />
        <DynamicCryptoWidgetFeatures />
        <DynamicFeesBusiness modelId='2540254' />
        <DynamicHowIntegrateCryptoSection />
        <DynamicSafetyReliability />
        <DynamicOurLandscapeSection />
        <DynamicConnectCryptoSection />
        <DynamicQuestionsSection />
        <DynamicSendRequestSection /> */}

        {/* <CryptoWidgetHeroSection /> */}
        <CryptoWidgetFlexibility />
        <CryptoBusinessSection />
        <CryptoWidgetFeatures />
        <FeesBusiness modelId='2540254' />
        <HowIntegrateCryptoSection />
        <SafetyReliability />
        <OurLandscapeSection />
        <ConnectCryptoSection />
        <QuestionsSection />
        <SendRequestSection />
      </StyledCryptoWidgetWrapper>
    </PageProvider>
  )
}
