'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { ArticleProvider } from '@/contexts/ArticleContext/ArticleContext'
import { HelpCentreDetailsProvider } from '@/contexts/HelpCentreDetailsContext/HelpCentreDetailsContext'
import { setBlogBreadcrumbs } from '@/store/features/breadcrumb/breadcrumbSlice'
import { fetchHelpCentreDetailsData } from '@/store/features/helpCentre/helpCentreAsyncThunk'
import { FullScreenLoader } from '@/components/Loader'
import { setIsSearch } from '@/store/features/helpCentre/helpCentreSlice'

function DetailsSection({ params }) {
  const { tab } = useSelector((state) => state.activeTab)
  const dispatch = useDispatch()
  // eslint-disable-next-line no-unused-vars
  const { loading, helpCentreDetailsData, isSearch } = useSelector(
    (state) => state.helpCentre
  )

  useEffect(() => {
    dispatch(setIsSearch(false))
    dispatch(fetchHelpCentreDetailsData({ params }))
    return () => {
      dispatch(setIsSearch(false))
      dispatch(setBlogBreadcrumbs(''))
    }
  }, [tab])

  return (
    <HelpCentreDetailsProvider data={helpCentreDetailsData}>
      <ArticleProvider>
        <CSSTransition
          in={loading}
          timeout={350}
          unmountOnExit
          classNames='display'
        >
          <FullScreenLoader />
        </CSSTransition>
        {isSearch ? (
          <DynamicSearchResultDetailsSection />
        ) : (
          <DynamicDetailsSectionInner />
        )}
      </ArticleProvider>
    </HelpCentreDetailsProvider>
  )
}

const DynamicSearchResultDetailsSection = dynamic(
  () =>
    import('@/sections/HelpCenterSections/SearchResultSection').then(
      (res) => res.SearchResultDetailsSection
    ),
  {
    ssr: false,
  }
)
const DynamicDetailsSectionInner = dynamic(
  () =>
    import('./components/DetailsSectionInner').then(
      (res) => res.DetailsSectionInner
    ),
  {
    ssr: false,
  }
)

export default DetailsSection
