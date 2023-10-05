import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'
import { fetchBlogs } from '@/store/features/blog/blogAsyncThunk'
import {
  resetBlogsState,
  setIsLoadingRule,
  setSearchValue,
} from '@/store/features/blog/blogSlice'
import { InputSearch } from '@/components/UI/Input'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import { Loader } from '@/components/Loader'

export default function BlogsPageMainSectionForm() {
  const { pagination, activeTags, isLoading } = useSelector(
    (state) => state.blog
  )
  const { heroSectionData, params } = useContext(BlogContext)
  const dispatch = useDispatch()

  const handleClick = (data) => {
    dispatch(setIsLoadingRule(false))
    dispatch(
      fetchBlogs({
        params,
        paginationParams: pagination,
        tags: activeTags,
        searchValue: data.search,
      })
    )
  }

  const { handleSubmit, reset, control } = useForm()

  const handleClear = () => {
    dispatch(setSearchValue(''))
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
    reset({
      search: '',
    })
  }
  return (
    <form
      onSubmit={handleSubmit(handleClick)}
      className='blogsPageSearchWrapper'
    >
      <Controller
        control={control}
        name='search'
        render={({ field: { value, onChange } }) => (
          <InputSearch
            onChange={(event) => {
              onChange(event.target.value)
            }}
            value={value}
            classNameWrapper='inputWrapper'
            placeholder={heroSectionData.inputPlaceholder}
            handleClear={handleClear}
          />
        )}
      />

      <StyledButtonSecondaryLight className='blogsPageSearchButton'>
        {heroSectionData.button}
        {!isLoading ? <Loader className='loader' /> : null}
      </StyledButtonSecondaryLight>
    </form>
  )
}
