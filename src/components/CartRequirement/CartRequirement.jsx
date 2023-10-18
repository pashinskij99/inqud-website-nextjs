'use client'

import Image from 'next/image'
import clsx from 'clsx'
import styles from './styles.module.scss'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
} from '../UI/Typography/Typography.styled'
import { ButtonLearnMore } from '../UI/Button/Button'

export default function CartRequirement({
  title,
  imageSrc,
  description,
  buttonText,
  handleClick,
}) {
  return (
    <div className={clsx('cart-requirements', styles.wrapper)}>
      {/* <StyledCartRequirement> */}
      <Image
        className='cartImage'
        src={imageSrc}
        alt={title}
        width={440}
        height={300}
      />
      <div className='cartBody'>
        <StyledTypographyUrbanistH4 component='h3' className='cartTitle'>
          {title}
        </StyledTypographyUrbanistH4>
        <StyledTypographyUrbanistBody className='cartDescription'>
          {description}
        </StyledTypographyUrbanistBody>

        {buttonText ? (
          <ButtonLearnMore onClick={handleClick} className='cartBtn'>
            {buttonText}
          </ButtonLearnMore>
        ) : null}
      </div>
      {/* </StyledCartRequirement> */}
    </div>
  )
}
