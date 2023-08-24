/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lang: {},
}

export const langSlice = createSlice({
  name: 'langSlice',
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload
    },
  },
})

export const { setLang } = langSlice.actions
export default langSlice.reducer
