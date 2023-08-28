'use client'

import { usePathname } from 'next/navigation'
// import { useSelector } from 'react-redux'
import { StyledHelpCenterPageWrapper } from '@/views/HelpCenterPage/HelpCenterPage.styled'
import MainSection from '@/sections/HelpCenterSections/MainSection'
// import SearchResultSection from '@/sections/HelpCenterSections/SearchResultSection'
import HelpHeroSection from '@/sections/HelpCenterSections/HelpHeroSection'
import { HelpCentreProvider } from '@/contexts/HelpCentreContext/HelpCentreContext'
// import { getHighlightedText } from '@/utils/getHighlightedText'

function HelpCenterPage({ children }) {
  const path = usePathname()

  return (
    <StyledHelpCenterPageWrapper>
      <HelpHeroSection
        page={path.search('general') !== -1 ? 'general' : null}
      />

      {children}
    </StyledHelpCenterPageWrapper>
  )
}

export function HelpCenterPageContent({ data }) {
  // const { searchHelpCenterValue } = useSelector((state) => state.search)

  if (!data) return null

  return (
    <HelpCentreProvider
      browseByProduct={data.allHelpCentreBlocks}
      exploreByCategory={data.allHelpCentreBlockSeconds}
    >
      {/* {getHighlightedText('Hello my name is Yaroslav name Yaros', 'Yaros')} */}
      {/* eslint-disable-next-line no-nested-ternary */}
      {/* {searchHelpCenterValue ? <SearchResultSection /> : <MainSection />} */}
      <MainSection />
    </HelpCentreProvider>
  )
}

export default HelpCenterPage
