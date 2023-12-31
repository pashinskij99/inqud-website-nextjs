import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './styles.module.scss'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import Check from '@/assets/icons/check-dark.svg'
import { ButtonGhostCrypto } from '@/components/UI/Button'
import Animated2GifOnView from '@/components/AnimatedVideo/Animated2GifOnView'
import Device, {
  DESKTOP,
  MOBILE,
  TABLET,
  TABLET_OR_DESKTOP,
} from '@/components/Device/Device'
import { CryptoWidget2ModalWithButton } from './components/CryptoWidget2ModalWithButton'

const DynamicAnimatedVideoOnScroll = dynamic(
  () => import('@/components/AnimatedVideo/AnimatedVideoOnScroll'),
  {
    ssr: false,
  }
)

export default async function CryptoWidget2Section({ data }) {
  return (
    <section className={styles.wrapper}>
      <div className='container'>
        <div className='leftSide'>
          <StyledTypographyIBMH5 className='crypto2SubTitle'>
            {data.screen5SubTitle}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH2 className='crypto2Title'>
            {data.screen5Title}
          </StyledTypographyUrbanistH2>
          <Device device={TABLET}>
            <DynamicAnimatedVideoOnScroll
              className='crypto2WidgetTablet'
              width={500}
              height={500}
              timeRepeat={5000}
              urlFirstVideo='/video/b2b_cart2crypto.webm'
            />
          </Device>
          <Device device={MOBILE}>
            <Animated2GifOnView
              className='crypto2WidgetTablet'
              width={500}
              height={500}
              timeRepeat={5000}
              stillSecondVideo='/video/b2b_cart2crypto.webp'
              urlSecondVideo='/video/b2b_cart2crypto.gif'
              timeSecondAnimate={5000}
            />
          </Device>

          <StyledTypographyUrbanistBody className='crypto2Description'>
            {data.screen5Description}
          </StyledTypographyUrbanistBody>

          <ul className='crypto2Grid'>
            {data.screen5Features?.map(
              ({ description, id, image: { url }, title }) => (
                <li
                  className='crypto2GridItem'
                  data-slug='comming soon'
                  key={id}
                >
                  <Image className='check' src={Check} alt='check' />
                  <Device device={TABLET_OR_DESKTOP}>
                    <Image
                      className='icon'
                      src={url}
                      alt={title}
                      width={48}
                      height={48}
                    />
                  </Device>

                  <StyledTypographyUrbanistH5
                    component='h3'
                    className='crypto2GridItemTitle'
                  >
                    {title}
                  </StyledTypographyUrbanistH5>
                  <StyledTypographyUrbanistBody className='crypto2GridItemDescription'>
                    {description}
                  </StyledTypographyUrbanistBody>
                </li>
              )
            )}
          </ul>

          <div className='crypto2Footer'>
            <StyledTypographyUrbanistH5 className='crypto2FooterTitle'>
              {data.lead5Screen}
            </StyledTypographyUrbanistH5>
            <div className='crypto2FooterButtons'>
              <ButtonGhostCrypto className='crypto2FooterButtonCrypto'>
                {data.buttonLead2A}
              </ButtonGhostCrypto>
              <ButtonGhostCrypto className='crypto2FooterButtonCryptoCalendar'>
                <Image
                  src={data.buttonLead2B?.url}
                  alt={data.lead5Screen}
                  width={18}
                  height={18}
                />
              </ButtonGhostCrypto>
            </div>

            <CryptoWidget2ModalWithButton data={data} />
          </div>
        </div>
        <div className='rightSide'>
          <Device device={DESKTOP}>
            <DynamicAnimatedVideoOnScroll
              className='graphic'
              width={500}
              height={500}
              timeRepeat={5000}
              urlFirstVideo='/video/b2b_cart2crypto.webm'
            />
          </Device>
        </div>
      </div>
    </section>
  )
}
