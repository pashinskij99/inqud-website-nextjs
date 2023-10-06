import { Controller } from 'react-hook-form'
import Image from 'next/image'
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

export function SelectPrimary({
  name,
  label,
  placeholder,
  helperTextBottom,
  control,
  listItems,
}) {
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
            IconComponent={<Image src={Arrow} alt='Arrow' />}
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
            {listItems.map((industry) => (
              <StyledMenuItem key={industry} value={industry}>
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
