import clsx from 'clsx'
import { StyledTypographyUrbanistSmallSpaces } from '../Typography/Typography.styled'
import {
  StyledInputSearchWrapper,
  StyledInputSendRequestWrapper,
  StyledInputTextWrapper,
  StyledTextAreaSendRequest,
} from './Input.styled'
import ErrorInput from '@/assets/icons/error-input.svg'
import Search from '@/assets/icons/search.svg'

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

export function InputSearch(props) {
  const {
    classNameWrapper,
    // classNameWrapperIcon,
    classNameIcon,
    className,
  } = props

  return (
    <StyledInputSearchWrapper className={classNameWrapper}>
      {/* <button className={classNameWrapperIcon}> */}
      <Search className={classNameIcon} />
      {/* </button> */}
      <input className={clsx('input', className)} {...props} />
    </StyledInputSearchWrapper>
  )
}

export function InputSendRequest(props) {
  const { classNameWrapper, label } = props
  return (
    <StyledInputSendRequestWrapper className={classNameWrapper}>
      <StyledTypographyUrbanistSmallSpaces className='label'>
        {label}
      </StyledTypographyUrbanistSmallSpaces>
      <input className='input' {...props} />
    </StyledInputSendRequestWrapper>
  )
}

export function TextAreaSendRequest(props) {
  const { classNameWrapper, label } = props
  return (
    <StyledTextAreaSendRequest className={classNameWrapper}>
      <StyledTypographyUrbanistSmallSpaces className='label'>
        {label}
      </StyledTypographyUrbanistSmallSpaces>
      <textarea className='input' {...props} />
    </StyledTextAreaSendRequest>
  )
}
