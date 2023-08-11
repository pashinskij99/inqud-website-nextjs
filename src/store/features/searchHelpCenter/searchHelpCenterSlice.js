import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
}

const searchHelpCenterSlice = createSlice({
  name: 'searchHelpCenterSlice',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.searchValue = action.payload
    },
  },
})

export const { setSearchValue } = searchHelpCenterSlice.actions

export default searchHelpCenterSlice.reducer
