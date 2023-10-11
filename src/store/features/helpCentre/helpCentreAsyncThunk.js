import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHelpCentreData = createAsyncThunk(
  'helpCentre/fetchHelpCentreData',
  async (searchData) => {
    try {
      const response = await fetch('/api/get-help-centre-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchData),
      })
      const data = await response.json()

      return data
    } catch (error) {
      return {}
    }
  }
)

export const fetchHelpCentreDetailsData = createAsyncThunk(
  'helpCentre/fetchHelpCentreDetailsData',
  async (searchData, { dispatch }) => {
    try {
      const response = await fetch('/api/get-help-centre-details-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchData),
      })
      const { data } = await response.json()

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
