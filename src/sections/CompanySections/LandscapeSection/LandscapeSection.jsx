import Image from 'next/image'
// import { useContext } from 'react'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledLandscapeSectionWrapper } from './LandscapeSection.styled'
// import { PageContext } from '@/contexts/PageContext/PageContext'

export default function LandscapeSection({ data }) {
  // const {
  //   dataPage: { aboutUsPage: data },
  // } = useContext(PageContext)

  return (
    <StyledLandscapeSectionWrapper>
      <div className='container'>
        <div className='text-wrapper'>
          <div className='title-wrapper'>
            <StyledTypographyUrbanistH2 className='title'>
              {data.screen3Title}
            </StyledTypographyUrbanistH2>
            <StyledTypographyUrbanistH5 className='description'>
              {data.screen3Description}
            </StyledTypographyUrbanistH5>
          </div>

          <ul className='list'>
            {data.screen3List.map(
              ({ id, description, image: { url, width, height }, title }) => (
                <li className='list-item' key={id}>
                  <div className='list-item-icon-wrapper'>
                    <Image src={url} alt='' width={width} height={height} />
                  </div>

                  <div className='list-item-text-wrapper'>
                    <StyledTypographyUrbanistBody className='list-item-title'>
                      {title}
                    </StyledTypographyUrbanistBody>
                    <StyledTypographyUrbanistBody className='list-item-description'>
                      {description}
                    </StyledTypographyUrbanistBody>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>

        <Image
          src={data.screen3Image.url}
          alt='Map'
          width={775.02}
          height={400}
          className='map'
        />
      </div>
    </StyledLandscapeSectionWrapper>
  )
}
