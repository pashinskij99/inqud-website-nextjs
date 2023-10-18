import Image from 'next/image'
import { StyledFeaturesB2CSectionWrapper } from './FeaturesB2CSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'

export default function FeaturesB2CSection({ data }) {
  return (
    <StyledFeaturesB2CSectionWrapper>
      <div className='container'>
        <ul className='features-grid'>
          {data.screen2Content.map(
            ({ description, image: { url }, id, title }) => (
              <li className='features-grid-item' key={id}>
                <Image src={url} alt='' width={64} height={64} />
                <StyledTypographyUrbanistH4 className='title'>
                  {title}
                </StyledTypographyUrbanistH4>
                <StyledTypographyUrbanistBody className='description'>
                  {description}
                </StyledTypographyUrbanistBody>
              </li>
            )
          )}
        </ul>
      </div>
    </StyledFeaturesB2CSectionWrapper>
  )
}
