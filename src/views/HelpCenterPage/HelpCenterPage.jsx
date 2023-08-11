'use client'

// import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import { StyledHelpCenterPageWrapper } from '@/views/HelpCenterPage/HelpCenterPage.styled'
// import HelpHeroSection from '@/sections/HelpCenterSections/HelpHeroSection'
import BusinessSection from '@/sections/HelpCenterSections/BusinessSection'
import SearchResultSection from '@/sections/HelpCenterSections/SearchResultSection'
import PersonalSection from '@/sections/HelpCenterSections/PersonalSection'
import HelpHeroSection from '@/sections/HelpCenterSections/HelpHeroSection'
// import SearchResultSection from '@/sections/HelpCenterSections/SearchResultSection'
// import PersonalSection from '@/sections/HelpCenterSections/PersonalSection'
// import BusinessSection from '@/sections/HelpCenterSections/BusinessSection';
// import PersonalSection from '@/sections/HelpCenterSections/PersonalSection'

function HelpCenterPage({ children }) {
  const path = usePathname()

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <StyledHelpCenterPageWrapper>
      <HelpHeroSection
        page={path.search('general') !== -1 ? 'general' : null}
      />

      {children}
    </StyledHelpCenterPageWrapper>
  )
}

export function HelpCenterPageContent() {
  const { searchValue } = useSelector((state) => state.searchHelpCenter)
  const path = usePathname()

  return (
    <>
      {/* eslint-disable-next-line no-nested-ternary */}
      {searchValue ? (
        <SearchResultSection />
      ) : path.search('general') !== -1 ? (
        <PersonalSection />
      ) : (
        <BusinessSection />
      )}
    </>
  )
}

export default HelpCenterPage
