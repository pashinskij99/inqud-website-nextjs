import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHelpCentreData = createAsyncThunk(
  'helpCentre/fetchHelpCentreData',
  async (searchData) => {
    try {
      const axios = await import('axios').then((res) => res.default)

      const response = await axios.post('/api/get-help-centre-data', searchData)

      return await response.data
    } catch (error) {
      return {}
    }
  }
)

export const fetchHelpCentreDetailsData = createAsyncThunk(
  'helpCentre/fetchHelpCentreDetailsData',
  async (searchData, { dispatch }) => {
    try {
      const axios = await import('axios').then((res) => res.default)

      const response = await axios.post(
        '/api/get-help-centre-details-data',
        searchData
      )

      const { data } = await response.data
      const setBlogBreadcrumbs = await import(
        '../breadcrumb/breadcrumbSlice'
      ).then((res) => res.setBlogBreadcrumbs)
      dispatch(setBlogBreadcrumbs(data.helpCentre.mainTitle))
      return data
    } catch (error) {
      return {}
    }
  }
)
