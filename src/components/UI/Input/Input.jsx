import clsx from 'clsx'
import Image from 'next/image'
import styles from './styles.module.scss'
import { StyledTypographyUrbanistSmallSpaces } from '../Typography/Typography.styled'
import ErrorInput from '@/assets/icons/error-input.svg'
import Search from '@/assets/icons/search.svg'
import Close from '@/assets/icons/close-search.svg'

export function InputText(props) {
  const {
    className,
    label,
    type,
    id,
    helperTextBottom,
    helperTextTop,
    placeholder,
  } = props

  return (
    <div {...props} className={clsx(styles.wrapper1, className)}>
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
    </div>
    // <StyledInputTextWrapper {...props}>
    // </StyledInputTextWrapper>
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
    ...otherProps
  } = props

  return (
    <div {...otherProps} className={clsx(classNameWrapper, styles.wrapper2)}>
      <Image
        className={clsx('search-icon', classNameIcon)}
        src={Search}
        alt='Search'
      />
      <input className={clsx('input', className)} {...props} />
      <Image
        className={clsx('close', {
          ['active']: value,
        })}
        onClick={() => handleClear('')}
        src={Close}
        alt='Close'
      />
    </div>
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
    <div className={clsx(classNameWrapper, styles.wrapper3)}>
      <StyledTypographyUrbanistSmallSpaces className='label'>
        {label}
      </StyledTypographyUrbanistSmallSpaces>
      <input className='input' {...register(name)} {...otherProps} />
      <StyledTypographyUrbanistSmallSpaces className='inputTextHelperTextBottom error'>
        {helperTextBottom}
      </StyledTypographyUrbanistSmallSpaces>
    </div>
    // <StyledInputSendRequestWrapper className={classNameWrapper}>
    // </StyledInputSendRequestWrapper>
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
    <div className={clsx(classNameWrapper, styles.wrapper4)}>
      {/* <StyledTextAreaSendRequest className={classNameWrapper}> */}
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
      {/* </StyledTextAreaSendRequest> */}
    </div>
  )
}
