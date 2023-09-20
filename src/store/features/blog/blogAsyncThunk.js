import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBlogs = createAsyncThunk(
  'blog/fetchBlogs',
  async (searchData) => {
    try {
      const response = await axios.post('/api/get-blogs', searchData)

      const data = await response.data
      return data
    } catch (error) {
      console.log(error)
      return {}
    }
  }
)
