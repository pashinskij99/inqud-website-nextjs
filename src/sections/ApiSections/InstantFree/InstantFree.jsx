import Image from 'next/image'
import Link from 'next-intl/link'
// import { useContext } from 'react'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledInstantFreeWrapper } from './InstantFree.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
// import { PageContext } from '@/contexts/PageContext/PageContext'
import InstantFreeModalWithButton from './components/InstantFreeModalWithButton'

export default function InstantFree({ data }) {
  // const {
  //   dataPage: { apiPage: data },
  // } = useContext(PageContext)

  return (
    <StyledInstantFreeWrapper>
      <div className='container'>
        <div className='left-side'>
          <StyledTypographyUrbanistH3 className='title'>
            {data.screen4Title}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistH5 className='description'>
            {data.screen4Description}
          </StyledTypographyUrbanistH5>

          <div className='grid'>
            {data.screen4Features.map(({ id, title, image }) => (
              <div key={id} className='cart'>
                <Image src={image.url} alt='' width={48} height={48} />
                <StyledTypographyUrbanistBody className='cart-description'>
                  {title}
                </StyledTypographyUrbanistBody>
              </div>
            ))}
          </div>

          <div className='buttonsWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='getStarted getStarted-1'>
                {data.buttonScreen4A}
              </ButtonGetStarted>
              <ButtonGetStarted className='getStarted getStarted-2'>
                {data.buttonScreen4A}
              </ButtonGetStarted>
            </Link>

            <InstantFreeModalWithButton data={data} />
          </div>
        </div>
        <div className='right-side'>
          <div className='cart-wrapper'>
            <Image
              src={data.screen4Image.url}
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
