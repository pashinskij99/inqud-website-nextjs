'use client'

import Image from 'next/image'
import { StyledCartRequirement } from './CartRequirement.styled'
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
    <StyledCartRequirement className='cart-requirements'>
      <Image
        className='cartImage'
        src={imageSrc}
        alt={title}
        width={440}
        height={300}
      />
      <div className='cartBody'>
        <StyledTypographyUrbanistH4 className='cartTitle'>
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
    </StyledCartRequirement>
  )
}
