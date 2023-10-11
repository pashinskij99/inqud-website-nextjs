import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchBlogs = createAsyncThunk(
  'blog/fetchBlogs',
  async (searchData) => {
    try {
      const response = await fetch('/api/get-blogs', {
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
