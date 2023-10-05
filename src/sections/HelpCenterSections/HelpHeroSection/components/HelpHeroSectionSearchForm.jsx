import { useWindowSize } from '@uidotdev/usehooks'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'
import { InputSearch } from '@/components/UI/Input'
import { setSearchValue } from '@/store/features/blog/blogSlice'
import { setIsSearch } from '@/store/features/helpCentre/helpCentreSlice'
import { responseBreakPoint } from '@/utils/response'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'

export default function HelpHeroSectionSearchForm({ data }) {
  const dispatch = useDispatch()

  const { handleSubmit, control, reset } = useForm()

  const handleClear = () => {
    dispatch(setIsSearch(false))
    reset({
      search: '',
    })
  }

  const handleSearch = (data) => {
    dispatch(setSearchValue(data.search))

    dispatch(setIsSearch(true))
  }

  const size = useWindowSize()

  return (
    <form onSubmit={handleSubmit(handleSearch)} className='search-wrapper'>
      {size.width && size.width >= responseBreakPoint.desktop ? (
        <Controller
          control={control}
          name='search'
          render={({ field: { onChange, value } }) => (
            <InputSearch
              placeholder={data.helpCentreHero.placeholder}
              classNameWrapper='input-wrapper input-wrapper-1'
              value={value}
              onChange={(event) => {
                onChange(event.target.value)
              }}
              handleClear={handleClear}
            />
          )}
        />
      ) : null}
      {size.width && size.width < responseBreakPoint.desktop ? (
        <Controller
          control={control}
          name='search'
          render={({ field: { onChange, value } }) => (
            <InputSearch
              placeholder={data.helpCentreHero.placeholder}
              classNameWrapper='input-wrapper input-wrapper-2'
              value={value}
              onChange={(event) => {
                onChange(event.target.value)
              }}
              handleClear={handleClear}
            />
          )}
        />
      ) : null}

      <StyledButtonSecondaryLight type='submit' className={clsx('search-btn')}>
        {data.helpCentreHero.button}
      </StyledButtonSecondaryLight>
    </form>
  )
}
