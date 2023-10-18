import { useContext } from 'react'
import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import { StyledAPIFlexibilityWrapper } from './APIFlexibility.styled'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function APIFlexibility({ data }) {
  // const {
  //   dataPage: { apiPage: data },
  // } = useContext(PageContext)

  return (
    <StyledAPIFlexibilityWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          {data.screen2Title}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistBody className='description'>
          {data.screen2Description}
        </StyledTypographyUrbanistBody>

        <ul className='features-grid'>
          {data.screen2Content.map(({ description, image, id, title }) => (
            <li className='features-grid-item' key={id}>
              <Image src={image.url} alt='' width={64} height={64} />
              <StyledTypographyUrbanistH4 className='features-grid-item-title features-grid-item-title-1'>
                {title}
              </StyledTypographyUrbanistH4>
              <StyledTypographyUrbanistH4 className='features-grid-item-title features-grid-item-title-2'>
                {title}
              </StyledTypographyUrbanistH4>
              <StyledTypographyUrbanistBody className='features-grid-item-description features-grid-item-description-1'>
                {description}
              </StyledTypographyUrbanistBody>
              <StyledTypographyUrbanistBody className='features-grid-item-description features-grid-item-description-2'>
                {description}
              </StyledTypographyUrbanistBody>
            </li>
          ))}
        </ul>
      </div>
    </StyledAPIFlexibilityWrapper>
  )
}
