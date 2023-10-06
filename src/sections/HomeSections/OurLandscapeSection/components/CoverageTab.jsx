import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledCoverageWrapper } from '../OurLandscapeSection.styled'

export function CoverageTab({ data }) {
  // const {
  //   dataPage: { ourLandscape: data },
  // } = useContext(PageContext)

  return (
    <StyledCoverageWrapper>
      <div className='headerWrapper'>
        <StyledTypographyUrbanistH5 className='ourLandscapeDescription'>
          {data.description2}
        </StyledTypographyUrbanistH5>
        <ul className='list desktop'>
          {data.coverageFeatures.map(
            ({ id, description, image: { url, height, width }, title }) => (
              <li key={id}>
                <div className='coverageWrapper'>
                  <Image src={url} alt={title} width={width} height={height} />
                </div>
                <div className='descriptionWrapper'>
                  <StyledTypographyUrbanistBody className='name'>
                    {title}
                  </StyledTypographyUrbanistBody>
                  <StyledTypographyUrbanistBody className='description'>
                    {description}
                  </StyledTypographyUrbanistBody>
                </div>
              </li>
            )
          )}
        </ul>
      </div>

      <div className='coverageWrapper'>
        <Image
          src={data.coverageMap.url}
          width={775.02}
          height={400}
          alt={data.description2}
        />
      </div>
    </StyledCoverageWrapper>
  )
}
