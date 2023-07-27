'use client'

import CompanyHeroSection from '@/sections/CompanySections/CompanyHeroSection/CompanyHeroSection'
import { StyledCompanyPageWrapper } from './CompanyPage.styled'
import CoreSection from '@/sections/CompanySections/CoreSection'
import LandscapeSection from '@/sections/CompanySections/LandscapeSection/LandscapeSection'
import TeamSection from '@/sections/CompanySections/TeamSection'
import FeaturesSection from '@/sections/CompanySections/FeaturesSection'

export default function CompanyPage() {
  return (
    <StyledCompanyPageWrapper>
      <CompanyHeroSection />
      <CoreSection />
      <LandscapeSection />
      <TeamSection />
      <FeaturesSection />
    </StyledCompanyPageWrapper>
  )
}
