'use client'

import dynamic from 'next/dynamic'
import { StyledCryptoWidgetWrapper } from './CryptoWidget.styled'
import CryptoWidgetHeroSection from '@/sections/CryptoWidgetSections/CryptoWidgetHeroSection'
// import CryptoWidgetFlexibility from '@/sections/CryptoWidgetSections/CryptoWidgetFlexibility'
// import CryptoBusinessSection from '@/sections/CryptoWidgetSections/CryptoBusinessSection'
// import CryptoWidgetFeatures from '@/sections/CryptoWidgetSections/CryptoWidgetFeatures'
// import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
// import HowIntegrateCryptoSection from '@/sections/CryptoWidgetSections/HowIntegrateCryptoSection'
// import SafetyReliability from '@/sections/CryptoWidgetSections/SafetyReliability'
// import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
// import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
// import SendRequestSection from '@/sections/CryptoWidgetSections/SendRequestSection'
import PageProvider from '@/contexts/PageContext/PageContext'
// import ConnectCryptoSection from '@/sections/CryptoWidgetSections/ConnectCryptoSection'

// const DynamicCryptoWidgetHeroSection = dynamic(
//   import('@/sections/CryptoWidgetSections/CryptoWidgetHeroSection').then(
//     (res) => res.default
//   ),
//   {
//     ssr: false,
//   }
// )
const DynamicCryptoWidgetFlexibility = dynamic(() =>
  import('@/sections/CryptoWidgetSections/CryptoWidgetFlexibility').then(
    (res) => res.default
  )
)
const DynamicCryptoBusinessSection = dynamic(() =>
  import('@/sections/CryptoWidgetSections/CryptoBusinessSection').then(
    (res) => res.default
  )
)

const DynamicCryptoWidgetFeatures = dynamic(
  import('@/sections/CryptoWidgetSections/CryptoWidgetFeatures').then(
    (res) => res.default
  )
)
const DynamicFeesBusiness = dynamic(() =>
  import('@/sections/HomeSections/FeesBusiness').then((res) => res.default)
)
const DynamicHowIntegrateCryptoSection = dynamic(() =>
  import('@/sections/CryptoWidgetSections/HowIntegrateCryptoSection').then(
    (res) => res.default
  )
)
const DynamicSafetyReliability = dynamic(() =>
  import('@/sections/CryptoWidgetSections/SafetyReliability').then(
    (res) => res.default
  )
)
const DynamicOurLandscapeSection = dynamic(() =>
  import('@/sections/HomeSections/OurLandscapeSection').then(
    (res) => res.default
  )
)
const DynamicConnectCryptoSection = dynamic(() =>
  import('@/sections/CryptoWidgetSections/ConnectCryptoSection').then(
    (res) => res.default
  )
)
const DynamicQuestionsSection = dynamic(() =>
  import('@/sections/HomeSections/QuestionsSection').then((res) => res.default)
)
const DynamicSendRequestSection = dynamic(() =>
  import('@/sections/CryptoWidgetSections/SendRequestSection').then(
    (res) => res.default
  )
)

export default function CryptoWidget({ data }) {
  return (
    <PageProvider dataPage={data} isFaq nameCMSPage='cryptoWidgetPage'>
      <StyledCryptoWidgetWrapper>
        <CryptoWidgetHeroSection />
        {/* <DynamicCryptoWidgetHeroSection /> */}
        <DynamicCryptoWidgetFlexibility />
        <DynamicCryptoBusinessSection />
        <DynamicCryptoWidgetFeatures />
        <DynamicFeesBusiness modelId='2540254' />
        <DynamicHowIntegrateCryptoSection />
        <DynamicSafetyReliability />
        <DynamicOurLandscapeSection />
        <DynamicConnectCryptoSection />
        <DynamicQuestionsSection />
        <DynamicSendRequestSection />

        {/* <CryptoWidgetHeroSection />
        <CryptoWidgetFlexibility />
        <CryptoBusinessSection />
        <CryptoWidgetFeatures />
        <FeesBusiness modelId='2540254' />
        <HowIntegrateCryptoSection />
        <SafetyReliability />
        <OurLandscapeSection />
        <ConnectCryptoSection />
        <QuestionsSection />
        <SendRequestSection /> */}
      </StyledCryptoWidgetWrapper>
    </PageProvider>
  )
}
