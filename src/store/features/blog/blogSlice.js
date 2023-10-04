import { createSlice } from '@reduxjs/toolkit'
import { fetchBlogs } from './blogAsyncThunk'

const initialState = {
  blogs: [],
  loading: true,
  searchValue: '',
  error: '',
  activeTags: [],
  tags: [],
  isLoading: true,
  allTags: [],
  page: 1,
  allPages: 0,
  pagination: {
    first: 12,
    skip: 0,
    count: 0,
  },
}

export const blogSlice = createSlice({
  name: 'blogSlice',
  initialState,
  reducers: {
    setTags(state, action) {
      state.tags = action.payload
      state.allTags = action.payload
    },
    setPage(state, action) {
      state.page = action.payload
    },
    setActiveTag(state, action) {
      state.tags = state.tags.filter((tag) => tag.id !== action.payload.id)
      state.activeTags.push(action.payload)
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    setIsLoadingRule(state, action) {
      state.isLoading = action.payload
    },
    resetBlogsState(state) {
      state.blogs = []
      state.loading = true
      state.searchValue = ''
      state.error = ''
      state.tags = state.allTags
      state.activeTags = []
      state.pagination = {
        first: 12,
        skip: 0,
        count: 0,
      }
    },
    removeActiveTag(state, action) {
      state.activeTags = state.activeTags.filter(
        (tag) => tag.id !== action.payload.id
      )
      state.tags.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.error = ''
      state.loading = state.isLoading
    })
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.error = ''
      state.loading = false
      state.blogs = action.payload.data
      state.pagination = action.payload.pagination
      state.isLoading = true
    })
    builder.addCase(fetchBlogs.rejected, (state) => {
      state.error = 'Something went wrong!'
      state.loading = false
      state.blogs = []
      state.isLoading = true
    })
  },
})

export const {
  setTags,
  setActiveTag,
  removeActiveTag,
  setSearchValue,
  resetBlogsState,
  setIsLoadingRule,
  setPage,
} = blogSlice.actions
export default blogSlice.reducer
