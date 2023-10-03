import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
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
import { Animated2GifOnView } from '@/components/AnimatedVideo/AnimatedVideo'
import { responseBreakPoint } from '@/utils/response'
import { getPageData } from '@/lib/datocms'
import { HOME_B2B_SMOOTH_API } from '@/lib/datocmsQuery'

export default function SmoothAPISection() {
  const [data, setData] = useState({})

  // const {
  //   dataPage: { homePage: data },
  // } = useContext(PageContext)

  const { params } = useContext(PageContext)

  useEffect(() => {
    const getData = async () => {
      const pageData = await getPageData({
        variables: {
          locale: params.locale,
        },
        query: HOME_B2B_SMOOTH_API,
      })

      setData(pageData.homePage)
    }

    getData()
  }, [])

  const size = useWindowSize()

  return (
    <StyledSmoothAPISection>
      <div className='container'>
        <div className='leftSide'>
          {size.width && size.width >= responseBreakPoint.tablet ? (
            <AnimatedVideoOnScroll
              className='graphic'
              height={600}
              timeRepeat={5000}
              urlFirstVideo='/video/il-api.mp4'
              width={416.45}
            />
          ) : null}
        </div>

        <div className='rightSide'>
          <StyledTypographyIBMH5 className='smoothAPISubTitle'>
            {data.screen4SubTitle}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH2 className='smoothAPITitle'>
            {data.screen4Title}
          </StyledTypographyUrbanistH2>

          {size.width && size.width <= responseBreakPoint.mobile ? (
            <Animated2GifOnView
              className='smoothAPIImageTablet'
              height={232.88}
              timeRepeat={5000}
              stillSecondVideo='/video/b2b_api_mobile.webp'
              urlSecondVideo='/video/b2b_api_mobile.gif'
              timeSecondAnimate={5000}
              width={343}
            />
          ) : null}

          {size.width &&
          size.width > responseBreakPoint.mobile &&
          size.width < responseBreakPoint.desktop ? (
            <AnimatedVideoOnScroll
              className='smoothAPIImageTablet'
              height={600}
              timeRepeat={5000}
              urlFirstVideo='/video/b2b_api_video_tablet.mp4'
              width={416.45}
            />
          ) : null}

          {size.width && size.width <= responseBreakPoint.mobile ? (
            <StyledTypographyUrbanistH5 className='smoothAPIDescriptionMobile'>
              {data.screen4Description}
            </StyledTypographyUrbanistH5>
          ) : null}
          {size.width &&
          size.width > responseBreakPoint.mobile &&
          size.width < responseBreakPoint.desktop ? (
            <StyledTypographyUrbanistH5 className='smoothAPIDescription tablet'>
              {data.screen4Description}
            </StyledTypographyUrbanistH5>
          ) : null}
          {size.width && size.width >= responseBreakPoint.desktop ? (
            <StyledTypographyUrbanistBody className='smoothAPIDescription desktop'>
              {data.screen4Description}
            </StyledTypographyUrbanistBody>
          ) : null}

          <ul className='smoothAPIGrid'>
            {data.screen4Features?.map(
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
            <Link href='/inqud-api'>
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
