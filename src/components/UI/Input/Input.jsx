import clsx from 'clsx'
import Image from 'next/image'
import { StyledTypographyUrbanistSmallSpaces } from '../Typography/Typography.styled'
import {
  StyledInputSearchWrapper,
  StyledInputSendRequestWrapper,
  StyledInputTextWrapper,
  StyledTextAreaSendRequest,
} from './Input.styled'
import ErrorInput from '@/assets/icons/error-input.svg'
import Search from '@/assets/icons/search.svg'
import Close from '@/assets/icons/close-search.svg'

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
        <Image src={ErrorInput} alt='ErrorInput' />
      </div>
      <StyledTypographyUrbanistSmallSpaces className='inputTextHelperTextBottom error'>
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
    value,
    handleClear,
  } = props

  return (
    <StyledInputSearchWrapper className={classNameWrapper}>
      {/* <button className={classNameWrapperIcon}> */}
      <Image
        className={clsx('search-icon', classNameIcon)}
        src={Search}
        alt='Search'
      />
      {/* </button> */}
      <input className={clsx('input', className)} {...props} />
      <Image
        className={clsx('close', {
          ['active']: value,
        })}
        onClick={() => handleClear('')}
        src={Close}
        alt='Close'
      />
      {/* <Close
        onClick={() => handleClear('')}
        className={clsx('close', {
          ['active']: value,
        })}
      /> */}
    </StyledInputSearchWrapper>
  )
}

export function InputSendRequest(props) {
  const {
    classNameWrapper,
    label,
    helperTextBottom,
    register,
    name,
    ...otherProps
  } = props
  return (
    <StyledInputSendRequestWrapper className={classNameWrapper}>
      <StyledTypographyUrbanistSmallSpaces className='label'>
        {label}
      </StyledTypographyUrbanistSmallSpaces>
      <input className='input' {...register(name)} {...otherProps} />
      <StyledTypographyUrbanistSmallSpaces className='inputTextHelperTextBottom error'>
        {helperTextBottom}
      </StyledTypographyUrbanistSmallSpaces>
    </StyledInputSendRequestWrapper>
  )
}

export function TextAreaSendRequest(props) {
  const {
    classNameWrapper,
    label,
    helperTextBottom,
    register,
    name,
    ...otherProps
  } = props
  return (
    <StyledTextAreaSendRequest className={classNameWrapper}>
      <StyledTypographyUrbanistSmallSpaces className='label'>
        {label}
      </StyledTypographyUrbanistSmallSpaces>
      <textarea
        className='input'
        {...register(name)}
        name={name}
        {...otherProps}
      />
      <StyledTypographyUrbanistSmallSpaces className='inputTextHelperTextBottom error'>
        {helperTextBottom}
      </StyledTypographyUrbanistSmallSpaces>
    </StyledTextAreaSendRequest>
  )
}
