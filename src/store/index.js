import { configureStore } from '@reduxjs/toolkit'
import currentPageTabReducer from '@/store/features/currentPageTab/currentPageTabSlice'
import breadcrumbReducer from '@/store/features/breadcrumb/breadcrumbSlice'
import blogReducer from '@/store/features/blog/blogSlice'
import helpCentreReducer from '@/store/features/helpCentre/helpCentreSlice'

export const store = configureStore({
  reducer: {
    activeTab: currentPageTabReducer,
    breadcrumb: breadcrumbReducer,
    blog: blogReducer,
    helpCentre: helpCentreReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
