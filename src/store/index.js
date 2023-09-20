import { configureStore } from '@reduxjs/toolkit'
import currentPageTabReducer from '@/store/features/currentPageTab/currentPageTabSlice'
import searchReducer from '@/store/features/search/searchSlice'
import langReducer from '@/store/features/lang/langSlice'
import breadcrumbReducer from '@/store/features/breadcrumb/breadcrumbSlice'
import blogReducer from '@/store/features/blog/blogSlice'
import helpCentreReducer from '@/store/features/helpCentre/helpCentreSlice'

export const store = configureStore({
  reducer: {
    activeTab: currentPageTabReducer,
    search: searchReducer,
    lang: langReducer,
    breadcrumb: breadcrumbReducer,
    blog: blogReducer,
    helpCentre: helpCentreReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
