import { configureStore } from '@reduxjs/toolkit';
import currentPageTabReducer from '@/store/features/currentPageTab/currentPageTabSlice';
import searchReducer from '@/store/features/search/searchSlice';
import langReducer from '@/store/features/lang/langSlice';

export const store = configureStore({
  reducer: {
    activeTab: currentPageTabReducer,
    search: searchReducer,
    lang: langReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});
