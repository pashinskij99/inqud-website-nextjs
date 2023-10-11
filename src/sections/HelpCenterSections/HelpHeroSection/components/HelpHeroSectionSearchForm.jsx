import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { InputSearch } from '@/components/UI/Input'
import { setSearchValue } from '@/store/features/blog/blogSlice'
import { setIsSearch } from '@/store/features/helpCentre/helpCentreSlice'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import Device, { DESKTOP, MOBILE_OR_TABLET } from '@/components/Device/Device'

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

  return (
    <form onSubmit={handleSubmit(handleSearch)} className='search-wrapper'>
      <Device device={DESKTOP}>
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
      </Device>
      <Device device={MOBILE_OR_TABLET}>
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
      </Device>

      <StyledButtonSecondaryLight type='submit' className='search-btn'>
        {data.helpCentreHero.button}
      </StyledButtonSecondaryLight>
    </form>
  )
}
