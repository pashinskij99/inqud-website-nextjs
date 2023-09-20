import { useContext } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { InputSearch } from '@/components/UI/Input/Input'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import { StyledBlogsPageMainSection } from '@/sections/BlogsSections/BlogsPageMainSection/BlogsPageMainSection.styled'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'
import { fetchBlogs } from '@/store/features/blog/blogAsyncThunk'
import {
  resetBlogsState,
  setIsLoadingRule,
  setSearchValue,
} from '@/store/features/blog/blogSlice'
import Loader from '@/components/Loader'

function BlogsPageMainSection() {
  const { heroSectionData, params } = useContext(BlogContext)
  const { searchValue, pagination, activeTags, isLoading } = useSelector(
    (state) => state.blog
  )
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(setSearchValue(event.target.value))
  }

  const handleClear = () => {
    setSearchValue('')
    dispatch(resetBlogsState())
    // dispatch(setIsLoadingRule(false))
    dispatch(
      fetchBlogs({
        params,
        paginationParams: {
          first: 12,
          skip: 0,
          count: 0,
        },
        tags: [],
        searchValue: '',
      })
    )
  }

  const handleClick = () => {
    dispatch(setIsLoadingRule(false))
    dispatch(
      fetchBlogs({
        params,
        paginationParams: pagination,
        tags: activeTags,
        searchValue,
      })
    )
  }

  if (!heroSectionData) return null

  return (
    <StyledBlogsPageMainSection className='blogsPageMainSection'>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='blogsPageTitle'>
          {heroSectionData.title}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH5 className='blogsPageDescription'>
          <StructuredText data={heroSectionData.description} />
        </StyledTypographyUrbanistH5>

        <form className='blogsPageSearchWrapper'>
          <InputSearch
            onChange={handleChange}
            value={searchValue}
            classNameWrapper='inputWrapper'
            placeholder={heroSectionData.inputPlaceholder}
            handleClear={handleClear}
          />

          <StyledButtonSecondaryLight
            onClick={handleClick}
            type='button'
            className='blogsPageSearchButton'
          >
            {heroSectionData.button}
            {!isLoading ? <Loader className='loader' /> : null}
          </StyledButtonSecondaryLight>
        </form>
      </div>
    </StyledBlogsPageMainSection>
  )
}

export default BlogsPageMainSection
