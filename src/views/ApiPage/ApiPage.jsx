import { StyledApiPageWrapper } from './ApiPage.styled'
import ApiHeroSection from '@/sections/ApiSections/ApiHeroSection'
import APIFlexibility from '@/sections/ApiSections/APIFlexibility'
import HowIntegrate from '@/sections/ApiSections/HowIntegrate'
import InstantFree from '@/sections/ApiSections/InstantFree'
import DevelopGuide from '@/sections/ApiSections/DevelopGuide'
import { PickApiSection } from '@/sections/HomeSections/PickSection/components/PickApiSection'
import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
import Contact from '@/sections/ApiSections/Contact'
import PageProvider from '@/contexts/PageContext/PageContext'

export default function ApiPage({ data, params }) {
  return (
    <PageProvider isFaq dataPage={data} nameCMSPage='apiPage'>
      <StyledApiPageWrapper>
        <ApiHeroSection data={data.apiPage} params={params} />
        <APIFlexibility data={data.apiPage} />
        <HowIntegrate />
        <InstantFree data={data.apiPage} />
        <DevelopGuide data={data.apiPage} />
        <PickApiSection data={data.apiPage} leadFormData={data.pickLeadForm} />
        <FeesBusiness
          data={data.feesYourBusiness}
          modelId='2540343'
          params={params}
        />
        <OurLandscapeSection data={data.ourLandscape} params={params} />
        <QuestionsSection
          faq={data.apiPage}
          nameCMSPage='apiPage'
          params={params}
        />
        <Contact />
      </StyledApiPageWrapper>
    </PageProvider>
  )
}
