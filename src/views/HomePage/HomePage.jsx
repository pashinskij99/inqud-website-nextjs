import { useTranslations } from 'next-intl'
import HeroSection from '@/sections/HomeSections/HeroSection'
import styles from './HomePage.module.scss'
import SmoothAPISection from '@/sections/HomeSections/SmoothAPISection'
import YourNeedsSection from '@/sections/HomeSections/YourNeedsSection/YourNeedsSection'
import CryptoWidgetSection from '@/sections/HomeSections/CryptoWidgetSection/CryptoWidgetSection'
import PickSection from '@/sections/HomeSections/PickSection'
import CryptoWidget2Section from '@/sections/HomeSections/CryptoWidget2Section'
import ReasonsToTeamUp from '@/sections/HomeSections/ReasonsToTeamUp'
import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
import BlogsSection from '@/sections/HomeSections/BlogsSection/BlogsSection'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
import { keysForLocale } from '@/config/keysForLocale'

export default function HomePage({ params }) {
  const yourNeedsSectionTrans = {
    t: useTranslations('home_page_your_needs_section'),
    tList: useTranslations('home_page_your_needs_section_list_item_title'),
    tList2: useTranslations(
      'home_page_your_needs_section_list_item_description'
    ),
    cartDescription: useTranslations(
      'home_page_your_needs_section_list_item_description'
    )(keysForLocale.keys3[1]),
    cartTitle: useTranslations(
      'home_page_your_needs_section_list_item_description'
    )(keysForLocale.keys3[0]),
  }
  const yourNeedsSectionTransCart = {
    cartDescription: useTranslations(
      'home_page_your_needs_section_list_item_description'
    )(keysForLocale.keys3[1]),
    cartTitle: useTranslations(
      'home_page_your_needs_section_list_item_description'
    )(keysForLocale.keys3[0]),
  }
  const cryptoWidgetTrans = {
    t: useTranslations('home_page_crypto_widget_section'),
  }
  const blogTrans = {
    t: useTranslations('blog_name_section'),
  }

  return (
    <main className={styles.wrapper}>
      <HeroSection params={params} />
      <YourNeedsSection
        trans={yourNeedsSectionTrans}
        transCart={yourNeedsSectionTransCart}
        params={params}
      />
      <CryptoWidgetSection trans={cryptoWidgetTrans} params={params} />
      <SmoothAPISection params={params} />
      <PickSection
        className={styles.pickSection}
        variant='dontLose'
        params={params}
      />
      <CryptoWidget2Section params={params} />
      <ReasonsToTeamUp params={params} />
      <FeesBusiness modelId='2540165' autoId={10} params={params} />
      <OurLandscapeSection params={params} />
      <PickSection className={styles.pickSection2} params={params} />
      <BlogsSection trans={blogTrans} params={params} />
      <QuestionsSection params={params} nameCMSPage='homePage' />
      {/* QuestionsSection, ReasonsToTeamUp, FeesBusiness no ssr */}
    </main>
  )
}
