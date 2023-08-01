import {
  StyledTypographyIBMH4,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH3,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledCoreSectionWrapper,
  StyledGridCartWrapper,
} from './CoreSection.styled'

const grid = [
  {
    id: '01',
    title: 'Trustworthiness',
    description:
      'Reliable and secure financial technology services with utmost integrity.',
  },
  {
    id: '02',
    title: 'Client-centric',
    description:
      'Understanding unique needs, delivering personalized solutions.',
  },
  {
    id: '03',
    title: 'Expertise',
    description:
      'Deep knowledge in finance, crypto, tech, and payments for quality solutions.',
  },
  {
    id: '04',
    title: 'Transparency',
    description:
      'Clear operations, pricing, and policies for client understanding..',
  },
  {
    id: '05',
    title: 'Commitment',
    description:
      'Dedicated to client success, exceeding expectations and supporting growth.',
  },
  {
    id: '06',
    title: 'Growth together',
    description: 'Our growth is intertwined with the success of our customers.',
  },
]

export default function CoreSection() {
  return (
    <StyledCoreSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          Our core values
        </StyledTypographyUrbanistH2>

        <ul className='grid'>
          {grid.map(({ id, title, description }) => (
            <li key={id}>
              <GridCart id={id} title={title} description={description} />
            </li>
          ))}
        </ul>
      </div>
    </StyledCoreSectionWrapper>
  )
}

function GridCart({ id, title, description }) {
  return (
    <StyledGridCartWrapper>
      <div className='cart-id-wrapper'>
        <StyledTypographyIBMH4 className='cart-id'>{id}</StyledTypographyIBMH4>
      </div>
      <div className='cart-text-wrapper'>
        <StyledTypographyUrbanistH3 className='cart-title'>
          {title}
        </StyledTypographyUrbanistH3>
        <StyledTypographyUrbanistBody className='cart-description'>
          {description}
        </StyledTypographyUrbanistBody>
      </div>
    </StyledGridCartWrapper>
  )
}
