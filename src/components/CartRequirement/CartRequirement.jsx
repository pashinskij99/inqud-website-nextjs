import Image from 'next/image'
import { StyledCartRequirement } from './CartRequirement.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
} from '../UI/Typography/Typography.styled'
import { ButtonLearnMore } from '../UI/Button/Button'

export function CartRequirement({
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
        <StyledTypographyUrbanistH3 className='cartTitle'>
          {title}
        </StyledTypographyUrbanistH3>
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
