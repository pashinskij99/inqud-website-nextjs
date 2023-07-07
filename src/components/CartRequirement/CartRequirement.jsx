import Image from 'next/image'
import { StyledCartRequirement } from './CartRequirement.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
} from '../UI/Typography/Typography.styled'
import { ButtonLearnMore } from '../UI/Button/Button'

export function CartRequirement({ title, imageSrc, description, buttonText }) {
  return (
    <StyledCartRequirement>
      <div className='cartImageContainer'>
        <Image className='cartImage' src={imageSrc} alt={title} fill />
      </div>
      <div className='cartBody'>
        <StyledTypographyUrbanistH3 className='cartTitle'>
          {title}
        </StyledTypographyUrbanistH3>
        <StyledTypographyUrbanistBody className='cartDescription'>
          {description}
        </StyledTypographyUrbanistBody>

        <ButtonLearnMore className='cartBtn'>{buttonText}</ButtonLearnMore>
      </div>
    </StyledCartRequirement>
  )
}
