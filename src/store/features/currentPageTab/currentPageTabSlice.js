import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tab: 0,
}

export const currentPageTab = createSlice({
  name: 'currentPageTab',
  initialState,
  reducers: {
    setCurrentPageTab: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.tab = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentPageTab } = currentPageTab.actions

export default currentPageTab.reducer
