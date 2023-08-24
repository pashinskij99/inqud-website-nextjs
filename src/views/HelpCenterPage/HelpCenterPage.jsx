'use client';

import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { StyledHelpCenterPageWrapper } from '@/views/HelpCenterPage/HelpCenterPage.styled';
import BusinessSection from '@/sections/HelpCenterSections/BusinessSection';
import SearchResultSection from '@/sections/HelpCenterSections/SearchResultSection';
import PersonalSection from '@/sections/HelpCenterSections/PersonalSection';
import HelpHeroSection from '@/sections/HelpCenterSections/HelpHeroSection';
import { ArticleProvider } from '@/contexts/ArticleContext/ArticleContext';

function HelpCenterPage({ children }) {
  const path = usePathname();

  return (
    <StyledHelpCenterPageWrapper>
      <HelpHeroSection
        page={path.search('general') !== -1 ? 'general' : null}
      />

      {children}
    </StyledHelpCenterPageWrapper>
  );
}

export function HelpCenterPageContent() {
  const { searchHelpCenterValue } = useSelector((state) => state.search);
  const path = usePathname();

  return (
    <>
      {/* eslint-disable-next-line no-nested-ternary */}
      {searchHelpCenterValue ? (
        <SearchResultSection />
      ) : path.search('general') !== -1 ? (
        <ArticleProvider>
          <PersonalSection />
        </ArticleProvider>
      ) : (
        <BusinessSection />
      )}
    </>
  );
}

export default HelpCenterPage;
