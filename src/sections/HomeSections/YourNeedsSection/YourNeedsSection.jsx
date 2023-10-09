import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import clsx from 'clsx'
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

const DynamicCartRequirement = dynamic(
  () => import('@/components/CartRequirement').then((mod) => mod.default),
  {
    ssr: false,
  }
)

const DynamicCartRequirementModalWithCart = dynamic(
  () =>
    import('./components/YourNeedsSectionModalWithButton').then(
      (res) => res.default
    ),
  {
    ssr: false,
  }
)
export default async function YourNeedsSectionWrapper({ params }) {
  const { homePage: data } = await getData(HOME_B2B_NEEDS, {
    locale: params.locale,
  })

  return <YourNeedsSection data={data} />
}

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

function YourNeedsSection({ data }) {
  const t = useTranslations('home_page_your_needs_section')
  const tList = useTranslations('home_page_your_needs_section_list_item_title')
  const tList2 = useTranslations(
    'home_page_your_needs_section_list_item_description'
  )

  const list = [
    {
      id: 0,
      title: tList(keysForLocale.keys3[0]),
      description: tList2(keysForLocale.keys3[0]),
      image: Image1.src,
    },
    {
      id: 1,
      title: tList(keysForLocale.keys3[1]),
      description: tList2(keysForLocale.keys3[1]),
      // buttonText: data.buttonScreen2,
      // open: openModalSendRequest,
      // handleClick: handleOpen,
      image: Image2.src,
    },
    {
      id: 2,
      title: tList(keysForLocale.keys3[2]),
      description: tList2(keysForLocale.keys3[2]),
      image: Image3.src,
    },
  ]

  return (
    <section className={styles.wrapper}>
      <div className='container'>
        <StyledTypographyUrbanistH2
          className={clsx(styles.title, styles['title-desktop'])}
        >
          {t('title')}
        </StyledTypographyUrbanistH2>

        <CoinsList coinsList={coinsList} />

        <StyledTypographyUrbanistH5
          component='p'
          className={clsx(styles.subTitle, styles['subTitle-desktop'])}
        >
          {t('paragraph')}
        </StyledTypographyUrbanistH5>

        <Device device={DESKTOP}>
          <div className={styles.listRequirements}>
            {list.map(({ id, description, image, title }) =>
              id !== 1 ? (
                <DynamicCartRequirement
                  key={id}
                  description={description}
                  href='#'
                  imageSrc={image}
                  title={title}
                />
              ) : (
                <DynamicCartRequirementModalWithCart data={data} />
              )
            )}
          </div>
        </Device>

        <YourNeedsSectionSwiper list={list} data={data} />
      </div>
    </section>
  )
}
