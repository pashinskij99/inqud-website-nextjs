import Image from 'next/image'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import styles from './YourNeedsSection.module.scss'
import Coins1 from '@/assets/images/your-needs/Coins1.svg'
import Coins2 from '@/assets/images/your-needs/Coins2.svg'
import Coins3 from '@/assets/images/your-needs/Coins3.svg'
import Coins4 from '@/assets/images/your-needs/Coins4.svg'
import Coins5 from '@/assets/images/your-needs/Coins5.svg'
import CoinsList from './components/CoinsList'
import Device, { DESKTOP } from '@/components/Device/Device'
import YourNeedsSectionSwiper from './components/YourNeedsSectionSwiper'

const coinsList = [
  {
    id: 3,
    icon: <Image src={Coins4} alt='coins' />,
  },
  {
    id: 4,
    icon: <Image src={Coins5} alt='coins' />,
  },
  {
    id: 0,
    icon: <Image src={Coins1} alt='coins' />,
  },
  {
    id: 1,
    icon: <Image src={Coins2} alt='coins' />,
  },
  {
    id: 2,
    icon: <Image src={Coins3} alt='coins' />,
  },
]

const DynamicYourNeedsSectionDesktopCarts = dynamic(
  () => import('./components/YourNeedsSectionDesktopCarts'),
  {
    ssr: false,
  }
)

export default async function YourNeedsSection({ data }) {
  return (
    <section className={styles.wrapper}>
      <div className='container'>
        <StyledTypographyUrbanistH2
          className={clsx(styles.title, styles['title-desktop'])}
        >
          {data.section2Title}
        </StyledTypographyUrbanistH2>

        <CoinsList coinsList={coinsList} />

        <StyledTypographyUrbanistH5
          component='p'
          className={clsx(styles.subTitle, styles['subTitle-desktop'])}
        >
          {data.section2SubTitle}
        </StyledTypographyUrbanistH5>

        <Device device={DESKTOP}>
          <DynamicYourNeedsSectionDesktopCarts data={data} />
        </Device>

        <YourNeedsSectionSwiper data={data} />
      </div>
    </section>
  )
}
