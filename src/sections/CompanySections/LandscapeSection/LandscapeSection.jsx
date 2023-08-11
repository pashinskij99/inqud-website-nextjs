import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledLandscapeSectionWrapper } from './LandscapeSection.styled'
import Icon1 from '@/assets/images/our-landscape/coverage1.svg'
import Icon2 from '@/assets/images/our-landscape/coverage6.png'
import Icon3 from '@/assets/images/our-landscape/coverage3.svg'
import map from '@/assets/images/our-landscape/map.webp'

const grid = [
  {
    id: 0,
    icon: <Icon1 />,
    title: 'Worldwide',
    description: 'crypto coverage',
  },
  {
    id: 1,
    icon: (
      <Image src={Icon2.src} width={38.189} height={33.638} alt='coverage' />
    ),
    title: 'European',
    description: 'license coverage',
  },
  {
    id: 2,
    icon: <Icon3 />,
    title: 'Focus 2023',
    description: 'Latin America, Africa, Asia',
  },
]

export default function LandscapeSection() {
  return (
    <StyledLandscapeSectionWrapper>
      <div className='container'>
        <div className='text-wrapper'>
          <div className='title-wrapper'>
            <StyledTypographyUrbanistH2 className='title'>
              Our landscape
            </StyledTypographyUrbanistH2>
            <StyledTypographyUrbanistH5 className='description'>
              With our clients, we grow and advance every day,{' '}
              <br className='br-desktop' />
              pushing boundaries and achieving new heights.
            </StyledTypographyUrbanistH5>
          </div>

          <ul className='list'>
            {grid.map(({ id, description, icon, title }) => (
              <li className='list-item' key={id}>
                <div className='list-item-icon-wrapper'>{icon}</div>

                <div className='list-item-text-wrapper'>
                  <StyledTypographyUrbanistBody className='list-item-title'>
                    {title}
                  </StyledTypographyUrbanistBody>
                  <StyledTypographyUrbanistBody className='list-item-description'>
                    {description}
                  </StyledTypographyUrbanistBody>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={map.src}
          alt='Map'
          width={775.02}
          height={400}
          className='map'
        />
      </div>
    </StyledLandscapeSectionWrapper>
  )
}
