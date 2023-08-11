import { configureStore } from '@reduxjs/toolkit'
import currentPageTabReducer from './features/currentPageTab/currentPageTabSlice'
import searchHelpCenterReducer from './features/searchHelpCenter/searchHelpCenterSlice'

export const store = configureStore({
  reducer: {
    activeTab: currentPageTabReducer,
    searchHelpCenter: searchHelpCenterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
})
