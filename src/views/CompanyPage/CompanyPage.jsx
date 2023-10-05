'use client'

import dynamic from 'next/dynamic'
import CompanyHeroSection from '@/sections/CompanySections/CompanyHeroSection/CompanyHeroSection'
import { StyledCompanyPageWrapper } from './CompanyPage.styled'
// import CoreSection from '@/sections/CompanySections/CoreSection'
// import LandscapeSection from '@/sections/CompanySections/LandscapeSection/LandscapeSection'
// import TeamSection from '@/sections/CompanySections/TeamSection'
// import FeaturesSection from '@/sections/CompanySections/FeaturesSection'
import PageProvider from '@/contexts/PageContext/PageContext'

const DynamicCoreSection = dynamic(() =>
  import('@/sections/CompanySections/CoreSection').then((res) => res.default)
)

const DynamicLandscapeSection = dynamic(() =>
  import('@/sections/CompanySections/LandscapeSection/LandscapeSection').then(
    (res) => res.default
  )
)

const DynamicFeaturesSection = dynamic(() =>
  import('@/sections/CompanySections/FeaturesSection').then(
    (res) => res.default
  )
)

export default function CompanyPage({ data }) {
  return (
    <PageProvider dataPage={data} nameCMSPage='aboutUsPage'>
      <StyledCompanyPageWrapper>
        <CompanyHeroSection />
        <DynamicCoreSection />
        <DynamicLandscapeSection />
        <DynamicFeaturesSection />
        {/* <CoreSection />
        <LandscapeSection />
        <FeaturesSection /> */}
      </StyledCompanyPageWrapper>
    </PageProvider>
  )
}
