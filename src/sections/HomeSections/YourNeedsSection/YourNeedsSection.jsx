import Image from 'next/image'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import styles from './YourNeedsSection.module.scss'
import Image1 from '@/assets/images/your-needs/image1.webp'
import Image2 from '@/assets/images/your-needs/image2.webp'
import Image3 from '@/assets/images/your-needs/image3.webp'
import Coins1 from '@/assets/images/your-needs/Coins1.svg'
import Coins2 from '@/assets/images/your-needs/Coins2.svg'
import Coins3 from '@/assets/images/your-needs/Coins3.svg'
import Coins4 from '@/assets/images/your-needs/Coins4.svg'
import Coins5 from '@/assets/images/your-needs/Coins5.svg'
import { keysForLocale } from '@/config/keysForLocale'
import CoinsList from './components/CoinsList'
import Device, { DESKTOP } from '@/components/Device/Device'
import { getData } from '@/lib/datocms'
import { HOME_B2B_NEEDS } from '@/lib/datocmsQuery'
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
  () =>
    import('./components/YourNeedsSectionDesktopCarts').then(
      (res) => res.default
    ),
  {
    ssr: false,
  }
)

export default async function YourNeedsSection({ trans, transCart, params }) {
  const { homePage: data } = await getData(HOME_B2B_NEEDS, {
    locale: params.locale,
  })
  const list = [
    {
      id: 0,
      title: trans.tList(keysForLocale.keys3[0]),
      description: trans.tList2(keysForLocale.keys3[0]),
      image: Image1.src,
    },
    {
      id: 1,
      title: trans.tList(keysForLocale.keys3[1]),
      description: trans.tList2(keysForLocale.keys3[1]),
      image: Image2.src,
    },
    {
      id: 2,
      title: trans.tList(keysForLocale.keys3[2]),
      description: trans.tList2(keysForLocale.keys3[2]),
      image: Image3.src,
    },
  ]

  return (
    <section className={styles.wrapper}>
      <div className='container'>
        <StyledTypographyUrbanistH2
          className={clsx(styles.title, styles['title-desktop'])}
        >
          {trans.t('title')}
        </StyledTypographyUrbanistH2>

        <CoinsList coinsList={coinsList} />

        <StyledTypographyUrbanistH5
          component='p'
          className={clsx(styles.subTitle, styles['subTitle-desktop'])}
        >
          {trans.t('paragraph')}
        </StyledTypographyUrbanistH5>

        <Device device={DESKTOP}>
          <DynamicYourNeedsSectionDesktopCarts
            list={list}
            transCart={transCart}
            data={data}
          />
        </Device>

        <YourNeedsSectionSwiper trans={transCart} list={list} data={data} />
      </div>
    </section>
  )
}
