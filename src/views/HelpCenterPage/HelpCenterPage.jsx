'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import dynamic from 'next/dynamic'
import { StyledHelpCenterPageWrapper } from '@/views/HelpCenterPage/HelpCenterPage.styled'
import MainSection from '@/sections/HelpCenterSections/MainSection'
import HelpHeroSection from '@/sections/HelpCenterSections/HelpHeroSection'
import { HelpCentreProvider } from '@/contexts/HelpCentreContext/HelpCentreContext'
// import { SearchResultSection } from '@/sections/HelpCenterSections/SearchResultSection'
// import { fetchHelpCentreData } from '@/store/features/helpCentre/helpCentreAsyncThunk'
import { setIsSearch } from '@/store/features/helpCentre/helpCentreSlice'
import { FullScreenLoader } from '@/components/Loader'
// import { SearchResultSection } from '@/sections/HelpCenterSections/SearchResultSection'
// import MainSection from '@/sections/AmlCftPolicyUabSections/MainSection'
// import { FullScreenLoader } from '@/components/Loader'

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

export function HelpCenterPageContent({ params }) {
  // eslint-disable-next-line no-unused-vars
  const { helpCentreData, isSearch, loading } = useSelector(
    (state) => state.helpCentre
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const fetchHelpCentreData = await import(
        '@/store/features/helpCentre/helpCentreAsyncThunk'
      ).then((res) => res.fetchHelpCentreData)
      dispatch(setIsSearch(false))
      dispatch(fetchHelpCentreData({ params }))
    }

    fetchData()

    return () => {
      dispatch(setIsSearch(false))
    }
  }, [])

  return (
    <HelpCentreProvider data={helpCentreData}>
      <CSSTransition
        in={loading}
        timeout={350}
        unmountOnExit
        classNames='display'
      >
        <FullScreenLoader />
      </CSSTransition>
      {isSearch ? <DynamicSearchResultSection /> : <MainSection />}
    </HelpCentreProvider>
  )
}

const DynamicSearchResultSection = dynamic(
  () =>
    import('@/sections/HelpCenterSections/SearchResultSection').then(
      (res) => res.SearchResultSection
    ),
  {
    ssr: false,
  }
)
// const DynamicMainSection = dynamic(
//   () =>
//     import('@/sections/HelpCenterSections/MainSection').then(
//       (res) => res.default
//     ),
//   {
//     ssr: false,
//   }
// )

export default HelpCenterPage
