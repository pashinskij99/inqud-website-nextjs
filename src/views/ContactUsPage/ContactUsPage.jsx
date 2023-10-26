'use client'

import PageProvider from '@/contexts/PageContext/PageContext'
import { StyledContactUsPageWrapper } from './ContactUsPage.styled'
import ContactUsHeroSection from '@/sections/ContactUsSections/ContactUsHeroSection'

import ContactUsListSection from '@/sections/ContactUsSections/ContactUsListSection'
import SetterBreadcrumbComponent from '@/components/SetterBreadcrumbComponent'

function ContactUsPage({ data }) {
  return (
    <PageProvider dataPage={data} nameCMSPage='contactUsPage'>
      <SetterBreadcrumbComponent
        data={[
          {
            name: data.contactUsPage.breadcrumb,
            href: '',
          },
        ]}
      />
      <StyledContactUsPageWrapper>
        <ContactUsHeroSection />
        <ContactUsListSection />
      </StyledContactUsPageWrapper>
    </PageProvider>
  )
}

export default ContactUsPage
