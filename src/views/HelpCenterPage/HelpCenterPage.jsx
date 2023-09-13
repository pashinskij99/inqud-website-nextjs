'use client';

import { usePathname } from 'next/navigation';
// import { useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'
import { StyledHelpCenterPageWrapper } from '@/views/HelpCenterPage/HelpCenterPage.styled';
import MainSection from '@/sections/HelpCenterSections/MainSection';
// import SearchResultSection from '@/sections/HelpCenterSections/SearchResultSection'
import HelpHeroSection from '@/sections/HelpCenterSections/HelpHeroSection';
import { HelpCentreProvider } from '@/contexts/HelpCentreContext/HelpCentreContext';
import SearchResultSection from '@/sections/HelpCenterSections/SearchResultSection';

function HelpCenterPage({ children, data }) {
  const path = usePathname();

  return (
    <StyledHelpCenterPageWrapper>
      <HelpHeroSection
        data={data}
        page={path.search('general') !== -1 ? 'general' : null}
      />

      {children}
    </StyledHelpCenterPageWrapper>
  );
}

export function HelpCenterPageContent({ data, isSearch, searchValue }) {
  if (!data) return null;

  return (
    <HelpCentreProvider searchValue={searchValue} data={data}>
      {isSearch ? <SearchResultSection /> : <MainSection />}
    </HelpCentreProvider>
  );
}

export default HelpCenterPage;
