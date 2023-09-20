'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledHelpCenterPageWrapper } from '@/views/HelpCenterPage/HelpCenterPage.styled'
import MainSection from '@/sections/HelpCenterSections/MainSection'
import HelpHeroSection from '@/sections/HelpCenterSections/HelpHeroSection'
import { HelpCentreProvider } from '@/contexts/HelpCentreContext/HelpCentreContext'
import { SearchResultSection } from '@/sections/HelpCenterSections/SearchResultSection'
import { fetchHelpCentreData } from '@/store/features/helpCentre/helpCentreAsyncThunk'
import Loader from '@/components/Loader'
import { setIsSearch } from '@/store/features/helpCentre/helpCentreSlice'

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
  const { helpCentreData, isSearch, loading } = useSelector(
    (state) => state.helpCentre
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsSearch(false))
    dispatch(fetchHelpCentreData({ params }))

    return () => {
      dispatch(setIsSearch(false))
    }
  }, [])

  // if (!helpCentreData.length) return null
  if (loading) {
    return (
      <>
        {loading ? (
          <div className='help-centre-loading-wrapper'>
            <Loader />
          </div>
        ) : null}
      </>
    )
  }
  return (
    <HelpCentreProvider data={helpCentreData}>
      {isSearch ? <SearchResultSection /> : <MainSection />}
    </HelpCentreProvider>
  )
}

export default HelpCenterPage
