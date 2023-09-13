import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blog: '',
}

const breadcrumbSlice = createSlice({
  name: 'breadcrumbSlice',
  initialState,
  reducers: {
    setBlogBreadcrumbs: (state, action) => {
      state.blog = action.payload
    },
  },
})

export const { setBlogBreadcrumbs } = breadcrumbSlice.actions
export default breadcrumbSlice.reducer
