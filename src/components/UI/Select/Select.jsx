import { Controller } from 'react-hook-form'
import { useContext } from 'react'
import {
  StyledMenuItem,
  StyledSelect,
  StyledSelectWrapper,
} from './Select.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistSmallSpaces,
} from '../Typography/Typography.styled'
import Arrow from '@/assets/icons/arrow-down-select.svg'
import { PageContext } from '@/contexts/PageContext/PageContext'

export function SelectPrimary({
  name,
  label,
  placeholder,
  helperTextBottom,
  control,
}) {
  const {
    dataPage: { allIndustries: industries },
  } = useContext(PageContext)
  return (
    <StyledSelectWrapper>
      <StyledTypographyUrbanistSmallSpaces className='label'>
        {label}
      </StyledTypographyUrbanistSmallSpaces>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <StyledSelect
            IconComponent={Arrow}
            value={value}
            onChange={(event) => {
              onChange(event.target.value)
            }}
            name={name}
            placeholder={placeholder}
            displayEmpty
          >
            <StyledMenuItem value=''>
              <StyledTypographyUrbanistBody className='placeholder'>
                {placeholder}
              </StyledTypographyUrbanistBody>
            </StyledMenuItem>
            {industries.map(({ industry, id }) => (
              <StyledMenuItem key={id} value={industry}>
                <StyledTypographyUrbanistBody>
                  {industry}
                </StyledTypographyUrbanistBody>
              </StyledMenuItem>
            ))}
          </StyledSelect>
        )}
      />
      <StyledTypographyUrbanistSmallSpaces className='inputTextHelperTextBottom error'>
        {helperTextBottom}
      </StyledTypographyUrbanistSmallSpaces>
    </StyledSelectWrapper>
  )
}
