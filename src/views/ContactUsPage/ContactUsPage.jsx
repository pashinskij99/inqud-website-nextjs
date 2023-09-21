'use client'

import PageProvider from '@/contexts/PageContext/PageContext'
import { StyledContactUsPageWrapper } from './ContactUsPage.styled'
import ContactUsHeroSection from '@/sections/ContactUsSections/ContactUsHeroSection'
import ContactUsListSection from '@/sections/ContactUsSections/ContactUsListSection'

function ContactUsPage({ data }) {
  return (
    <PageProvider dataPage={data} nameCMSPage='contactUsPage'>
      <StyledContactUsPageWrapper>
        <ContactUsHeroSection />
        <ContactUsListSection />
      </StyledContactUsPageWrapper>
    </PageProvider>
  )
}

export default ContactUsPage
