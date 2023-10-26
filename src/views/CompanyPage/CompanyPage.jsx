import { StyledCompanyPageWrapper } from './CompanyPage.styled'
import PageProvider from '@/contexts/PageContext/PageContext'
import CompanyHeroSection from '@/sections/CompanySections/CompanyHeroSection/CompanyHeroSection'
import CoreSection from '@/sections/CompanySections/CoreSection'
import LandscapeSection from '@/sections/CompanySections/LandscapeSection/LandscapeSection'
import FeaturesSection from '@/sections/CompanySections/FeaturesSection'
import SetterBreadcrumbComponent from '@/components/SetterBreadcrumbComponent'

export default function CompanyPage({ data }) {
  return (
    <PageProvider dataPage={data} nameCMSPage='aboutUsPage'>
      <SetterBreadcrumbComponent
        data={[
          {
            name: data.aboutUsPage.breadcrumb,
            href: '',
          },
        ]}
      />
      <StyledCompanyPageWrapper>
        <CompanyHeroSection data={data.aboutUsPage} />
        <CoreSection data={data.aboutUsPage} />
        <LandscapeSection data={data.aboutUsPage} />
        <FeaturesSection />
      </StyledCompanyPageWrapper>
    </PageProvider>
  )
}
