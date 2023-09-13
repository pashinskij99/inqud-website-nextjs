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
  listItems,
  activeItem,
  handleChange,
}) {
  return (
    <StyledSelectWrapper>
      <StyledTypographyUrbanistSmallSpaces className='label'>
        {label}
      </StyledTypographyUrbanistSmallSpaces>
      <StyledSelect
        IconComponent={Arrow}
        value={activeItem}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        displayEmpty
      >
        <StyledMenuItem value=''>
          <StyledTypographyUrbanistBody className='placeholder'>
            {placeholder}
          </StyledTypographyUrbanistBody>
        </StyledMenuItem>
        {listItems.map((item) => (
          <StyledMenuItem key={item} value={item}>
            <StyledTypographyUrbanistBody>{item}</StyledTypographyUrbanistBody>
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  )
}
