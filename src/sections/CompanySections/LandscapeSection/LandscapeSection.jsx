import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledLandscapeSectionWrapper } from './LandscapeSection.styled'
import Icon1 from '@/assets/images/our-landscape/coverage1.svg'
import Icon2 from '@/assets/images/our-landscape/coverage6.png'
import Icon3 from '@/assets/images/our-landscape/coverage3.svg'
import map from '@/assets/images/our-landscape/map.png'

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
        <StyledTypographyUrbanistH1 className='title'>
          Our landscape
        </StyledTypographyUrbanistH1>
        <StyledTypographyUrbanistH5 className='description'>
          With our clients, we grow and advance every day,
          <br className='br-desktop' />
          pushing boundaries and achieving new heights.
        </StyledTypographyUrbanistH5>

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

        <Image src={map.src} width={999.998} height={516.117} className='map' />
      </div>
    </StyledLandscapeSectionWrapper>
  )
}
