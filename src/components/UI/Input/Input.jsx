import { StyledTypographyUrbanistSmallSpaces } from '../Typography/Typography.styled'
import { StyledInputTextWrapper } from './Input.styled'
import ErrorInput from '@/assets/icons/error-input.svg'

export function InputText(props) {
  const { label, type, id, helperTextBottom, helperTextTop, placeholder } =
    props

  return (
    <StyledInputTextWrapper {...props}>
      <label htmlFor={id} className='inputTextLabel'>
        <StyledTypographyUrbanistSmallSpaces className='inputTextLabelText'>
          {label}
        </StyledTypographyUrbanistSmallSpaces>
        <span className='inputTextHelperTextTop'>{helperTextTop}</span>
      </label>
      <div className='inputTextInputWrapper'>
        <input
          className='inputTextInput'
          placeholder={placeholder}
          id={id}
          type={type}
        />
        <ErrorInput />
      </div>
      <StyledTypographyUrbanistSmallSpaces className='inputTextHelperTextBottom'>
        {helperTextBottom}
      </StyledTypographyUrbanistSmallSpaces>
    </StyledInputTextWrapper>
  )
}
