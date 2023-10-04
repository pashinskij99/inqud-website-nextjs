import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { performRequest } from '@/lib/datocms'

const initialState = {
  searchHelpCenterValue: '',
  searchBlogValue: '',
  blogs: [],
  blog_error: '',
}

const PAGE_CONTENT_SEARCH_BY_TAG_NAME_PRODUCT_INDUSTRY = `
query Blog($searchValue: String) {
  allBlogs(filter: { mainTitle: {matches: {pattern: "^(?=.*$searchValue).*"}}}) {
    mainTitle
    slugPage
    seoMetaTag {
      description
      title
      twitterCard
      image {
        url
      }
    }
  }
}`

export const fetchBlog = createAsyncThunk(
  'searchSlice/fetchBlog',
  async (searchValue, { rejectWithValue }) => {
    try {
      const {
        data: { allBlogs },
      } = await performRequest({
        query: PAGE_CONTENT_SEARCH_BY_TAG_NAME_PRODUCT_INDUSTRY,
        variables: { searchValue },
      })

      return allBlogs
    } catch (e) {
      // console.log(e);
      return rejectWithValue(e)
    }
  }
)

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlog.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.blog_error = ''
      state.blogs.push(action.payload)
    })
    builder.addCase(fetchBlog.rejected, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.blog_error = action.payload
    })
  },
})

export default searchSlice.reducer
