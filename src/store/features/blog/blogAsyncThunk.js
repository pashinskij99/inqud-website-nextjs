import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchBlogs = createAsyncThunk(
  'blog/fetchBlogs',
  async (searchData) => {
    try {
      const axios = await import('axios').then((res) => res.default)
      const response = await axios.post('/api/get-blogs', searchData)

      const data = await response.data
      return data
    } catch (error) {
      console.log(error)
      return {}
    }
  }
)
