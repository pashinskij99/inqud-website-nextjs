'use client'

import { Controller } from 'react-hook-form'
import {
  StyledMenuItem,
  StyledSelect,
  StyledSelectWrapper,
} from './Select.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistSmallSpaces,
} from '../Typography/Typography.styled'

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
            // eslint-disable-next-line react/no-unstable-nested-components
            IconComponent={(props) => <SelectIcon {...props} />}
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

function SelectIcon(props) {
  return (
    <svg
      {...props}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Icons 16x16'>
        <path
          id='Rectangle 270 (Stroke)'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.99933 9.90055L3.04898 4.9502L1.63477 6.36441L7.99933 12.729L14.3639 6.36441L12.9497 4.9502L7.99933 9.90055Z'
          fill='#2D3439'
        />
      </g>
    </svg>
  )
}
