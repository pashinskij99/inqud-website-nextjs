'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { ArticleProvider } from '@/contexts/ArticleContext/ArticleContext'
import { HelpCentreDetailsProvider } from '@/contexts/HelpCentreDetailsContext/HelpCentreDetailsContext'
import { setBlogBreadcrumbs } from '@/store/features/breadcrumb/breadcrumbSlice'
import { FullScreenLoader } from '@/components/Loader'
import { setIsSearch } from '@/store/features/helpCentre/helpCentreSlice'
import { DetailsSectionInner } from '@/sections/HelpCenterSections/DetailsSection/components/DetailsSectionInner'

function DetailsSection({ params, formData, contactUsData }) {
  const { tab } = useSelector((state) => state.activeTab)
  const dispatch = useDispatch()
  const { loading, helpCentreDetailsData, isSearch } = useSelector(
    (state) => state.helpCentre
  )

  useEffect(() => {
    const fetchData = async () => {
      const fetchHelpCentreDetailsData = await import(
        '@/store/features/helpCentre/helpCentreAsyncThunk'
      ).then((res) => res.fetchHelpCentreDetailsData)
      dispatch(setIsSearch(false))
      dispatch(fetchHelpCentreDetailsData({ params }))
    }

    fetchData()
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
          <DetailsSectionInner
            formData={formData}
            contactUsData={contactUsData}
          />
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

export default DetailsSection
