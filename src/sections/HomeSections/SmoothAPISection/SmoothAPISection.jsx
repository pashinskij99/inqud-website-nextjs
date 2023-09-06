import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledSmoothAPISection } from './SmoothAPISection.styled'
import { ButtonGetStarted } from '@/components/UI/Button/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import Check from '@/assets/icons/check-green-background.svg'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { AnimatedVideoOnScroll } from '@/components/AnimatedVideo'

export default function SmoothAPISection() {
  const {
    dataPage: { homePage: data },
  } = useContext(PageContext)

  return (
    <StyledSmoothAPISection>
      <div className='container'>
        <div className='leftSide'>
          {/* <Image
            src={data.screen4Image.url}
            width={416.45}
            height={600}
            alt={data.screen4Title}
          /> */}
          <AnimatedVideoOnScroll
            className='graphic'
            height={600}
            timeRepeat={5000}
            urlFirstVideo='/video/b2b_api_video.mp4'
            width={416.45}
          />
        </div>

        <div className='rightSide'>
          <StyledTypographyIBMH5 className='smoothAPISubTitle'>
            {data.screen4SubTitle}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH2 className='smoothAPITitle'>
            {data.screen4Title}
          </StyledTypographyUrbanistH2>

          {/* <Image
            src={data.screen4Image.url}
            width={416.45}
            height={600}
            alt={data.screen4Title}
            className='smoothAPIImageTablet'
          /> */}
          <AnimatedVideoOnScroll
            className='smoothAPIImageTablet'
            height={600}
            timeRepeat={5000}
            urlFirstVideo='/video/b2b_api_video_tablet.mp4'
            width={416.45}
          />

          <StyledTypographyUrbanistBody className='smoothAPIDescription desktop'>
            {data.screen4Description}
          </StyledTypographyUrbanistBody>

          <StyledTypographyUrbanistH5 className='smoothAPIDescription tablet'>
            {data.screen4Description}
          </StyledTypographyUrbanistH5>

          <StyledTypographyUrbanistH5 className='smoothAPIDescriptionMobile'>
            {data.screen4Description}
          </StyledTypographyUrbanistH5>

          <ul className='smoothAPIGrid'>
            {data.screen4Features.map(
              ({ description, id, image: { url }, title }) => (
                <li
                  className='smoothAPIGridItem'
                  data-slug='comming soon'
                  key={id}
                >
                  <Check className='check' />
                  <Image src={url} alt={title} width={48} height={48} />
                  <StyledTypographyUrbanistH5 className='smoothAPIGridItemTitle'>
                    {title}
                  </StyledTypographyUrbanistH5>
                  <StyledTypographyUrbanistBody className='smoothAPIGridItemDescription'>
                    {description}
                  </StyledTypographyUrbanistBody>
                </li>
              )
            )}
          </ul>

          <div className='smoothAPIButtonWrapper'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <ButtonGetStarted className='smoothAPIButtonGetStarted'>
                {data.buttonScreen4GetStarted}
              </ButtonGetStarted>
            </Link>
            <Link target='_blank' href='/api'>
              <StyledButtonGhost className='smoothAPIButtonGhost'>
                {data.buttonScreen4LearnMore}
              </StyledButtonGhost>
            </Link>
          </div>
        </div>
      </div>
    </StyledSmoothAPISection>
  )
}
