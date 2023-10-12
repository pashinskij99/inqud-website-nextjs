import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tab: 0,
}

export const currentPageTab = createSlice({
  name: 'currentPageTab',
  initialState,
  reducers: {
    setCurrentPageTab: (state, action) => {
      state.tab = action.payload
    },
  },
})

export const { setCurrentPageTab } = currentPageTab.actions

export default currentPageTab.reducer
