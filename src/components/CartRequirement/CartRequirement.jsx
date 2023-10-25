'use client'

import { Image as DatoImage } from 'react-datocms'
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
      <DatoImage className='cartImage' data={imageSrc.responsiveImage} />
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
    </div>
  )
}
