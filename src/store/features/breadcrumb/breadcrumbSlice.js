import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blog: '',
  breadcrumb: [],
}

const breadcrumbSlice = createSlice({
  name: 'breadcrumbSlice',
  initialState,
  reducers: {
    setBlogBreadcrumbs: (state, action) => {
      state.blog = action.payload
    },
    setBreadCrumb: (state, action) => {
      state.breadcrumb = action.payload
    },
  },
})

export const { setBlogBreadcrumbs, setBreadCrumb } = breadcrumbSlice.actions
export default breadcrumbSlice.reducer
