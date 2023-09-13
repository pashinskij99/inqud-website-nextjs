'use client'

import CompanyHeroSection from '@/sections/CompanySections/CompanyHeroSection/CompanyHeroSection'
import { StyledCompanyPageWrapper } from './CompanyPage.styled'
import CoreSection from '@/sections/CompanySections/CoreSection'
import LandscapeSection from '@/sections/CompanySections/LandscapeSection/LandscapeSection'
// import TeamSection from '@/sections/CompanySections/TeamSection'
import FeaturesSection from '@/sections/CompanySections/FeaturesSection'
import PageProvider from '@/contexts/PageContext/PageContext'

export default function CompanyPage({ data }) {
  return (
    <PageProvider dataPage={data}>
      <StyledCompanyPageWrapper>
        <CompanyHeroSection />
        <CoreSection />
        <LandscapeSection />
        {/* <TeamSection /> */}
        <FeaturesSection />
      </StyledCompanyPageWrapper>
    </PageProvider>
  )
}
