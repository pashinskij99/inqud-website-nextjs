import Image from 'next/image'
import { StyledDevelopGuideWrapper } from './DevelopGuide.styled'
import image from '../../../assets/images/api/develop-guide/image.png'
import {
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { ButtonGetStarted } from '@/components/UI/Button'

export default function DevelopGuide() {
  return (
    <StyledDevelopGuideWrapper>
      <div className='container'>
        <div className='left-side'>
          <div className='cart-wrapper'>
            <Image
              src={image.src}
              width={343}
              height={472}
              alt='Simplified developer guides'
            />
          </div>
        </div>
        <div className='right-side'>
          <StyledTypographyUrbanistH3 className='title'>
            Simplified developer guides
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistH5 className='description'>
            Navigate the integration process effortlessly with our concise and
            structured guides, providing developers with the necessary
            information for successful implementation.
          </StyledTypographyUrbanistH5>

          <ButtonGetStarted className='get-started-button get-started-button-1'>
            Documentation
          </ButtonGetStarted>
          <ButtonGetStarted className='get-started-button get-started-button-2'>
            Get started now
          </ButtonGetStarted>
        </div>
      </div>
    </StyledDevelopGuideWrapper>
  )
}
