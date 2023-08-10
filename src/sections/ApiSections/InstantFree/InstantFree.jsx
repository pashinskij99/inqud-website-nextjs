import Image from 'next/image'
import Link from 'next/link'
import {
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
  StyledTypographyUrbanistBody,
} from '@/components/UI/Typography/Typography.styled'
import { StyledInstantFreeWrapper } from './InstantFree.styled'
import image from '../../../assets/images/api/instant/graphic.webp'
import Icon1 from '../../../assets/images/api/instant/icon1.svg'
import Icon2 from '../../../assets/images/api/instant/icon2.svg'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'

const grid = [
  {
    id: 0,
    icon: <Icon1 />,
    description: 'Mitigate cash handling risks and platforms unreliability',
  },
  { id: 1, icon: <Icon2 />, description: 'Reduce transaction costs' },
]

export default function InstantFree() {
  return (
    <StyledInstantFreeWrapper>
      <div className='container'>
        <div className='left-side'>
          <StyledTypographyUrbanistH3 className='title'>
            Instant Free A2A Payments for Merchants
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistH5 className='description'>
            Seamlessly connect with your partners and enjoy fee-free
            transactions for sending and receiving payments within Inqud in
            seconds.
          </StyledTypographyUrbanistH5>

          <div className='grid'>
            {grid.map(({ id, description, icon }) => (
              <div key={id} className='cart'>
                {icon}
                <StyledTypographyUrbanistBody className='cart-description'>
                  {description}
                </StyledTypographyUrbanistBody>
              </div>
            ))}
          </div>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted getStarted-1'>
                Get started now
              </ButtonGetStarted>
              <ButtonGetStarted className='getStarted getStarted-2'>
                Get started
              </ButtonGetStarted>
            </Link>

            <StyledButtonGhost className='ghostButton ghostButton-1'>
              Contact an expert
            </StyledButtonGhost>
            <StyledButtonGhost className='ghostButton ghostButton-2'>
              Contact sales
            </StyledButtonGhost>
          </div>
        </div>
        <div className='right-side'>
          <div className='cart-wrapper'>
            <Image
              src={image.src}
              width={343}
              height={534}
              alt='Instant Free A2A Payments for Merchants'
            />
          </div>
        </div>
      </div>
    </StyledInstantFreeWrapper>
  )
}
