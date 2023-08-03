import { configureStore } from '@reduxjs/toolkit'
import currentPageTabReducer from './features/currentPageTab/currentPageTabSlice'

export const store = configureStore({
  reducer: {
    activeTab: currentPageTabReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
