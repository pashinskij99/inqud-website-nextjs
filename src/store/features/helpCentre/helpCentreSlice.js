import { createSlice } from '@reduxjs/toolkit'
import {
  fetchHelpCentreData,
  fetchHelpCentreDetailsData,
} from './helpCentreAsyncThunk'

const initialState = {
  helpCentreData: [],
  helpCentreDetailsData: {},
  loading: true,
  error: '',
  isSearch: false,
  searchValue: '',
}

export const helpCentreSlice = createSlice({
  name: 'helpCentre',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    setIsSearch(state, action) {
      state.isSearch = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHelpCentreData.pending, (state) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(fetchHelpCentreData.fulfilled, (state, action) => {
      state.loading = false
      state.helpCentreData = action.payload.data.allHelpCentres
    })
    builder.addCase(fetchHelpCentreData.rejected, (state) => {
      state.loading = false
      state.error = 'Something went wrong!'
    })

    builder.addCase(fetchHelpCentreDetailsData.pending, (state) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(fetchHelpCentreDetailsData.fulfilled, (state, action) => {
      state.loading = false
      state.helpCentreDetailsData = action.payload.helpCentre
    })
    builder.addCase(fetchHelpCentreDetailsData.rejected, (state) => {
      state.loading = false
      state.error = 'Something went wrong!'
    })
  },
})

export const { setSearchValue, setIsSearch } = helpCentreSlice.actions
export default helpCentreSlice.reducer
