import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchBlogs = createAsyncThunk(
  'blog/fetchBlogs',
  async (searchData) => {
    try {
      const axios = await import('axios').then((res) => res.default)
      const response = await axios.post('/api/get-blogs', searchData)

      return await response.data
    } catch (error) {
      return {}
    }
  }
)
