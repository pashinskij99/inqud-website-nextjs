'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { StyledHelpCenterPageWrapper } from '@/views/HelpCenterPage/HelpCenterPage.styled'
import MainSection from '@/sections/HelpCenterSections/MainSection'
import HelpHeroSection from '@/sections/HelpCenterSections/HelpHeroSection'
import { HelpCentreProvider } from '@/contexts/HelpCentreContext/HelpCentreContext'
import { SearchResultSection } from '@/sections/HelpCenterSections/SearchResultSection'

function HelpCenterPage({ children, data }) {
  const path = usePathname()

  return (
    <StyledHelpCenterPageWrapper>
      <HelpHeroSection
        data={data}
        page={path.split('/').length === 2 ? 'main' : 'detail'}
      />

      {children}
    </StyledHelpCenterPageWrapper>
  )
}

export function HelpCenterPageContent({ data, isSearch, searchValue }) {
  const router = useRouter()

  useEffect(
    () => router.replace('/help-centre', undefined, { shallow: true }),
    []
  )

  if (!data) return null
  return (
    <HelpCentreProvider searchValue={searchValue} data={data}>
      {isSearch ? <SearchResultSection /> : <MainSection />}
    </HelpCentreProvider>
  )
}

export default HelpCenterPage
