import { useTranslations } from 'next-intl'
import styles from './HomePage.module.scss'
import HeroSection from '@/sections/HomeSections/HeroSection'
import SmoothAPISection from '@/sections/HomeSections/SmoothAPISection'
import CryptoWidgetSection from '@/sections/HomeSections/CryptoWidgetSection/CryptoWidgetSection'
import PickSection from '@/sections/HomeSections/PickSection'
import CryptoWidget2Section from '@/sections/HomeSections/CryptoWidget2Section'
import ReasonsToTeamUp from '@/sections/HomeSections/ReasonsToTeamUp'
import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
import YourNeedsSection from '@/sections/HomeSections/YourNeedsSection/YourNeedsSection'
import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
import BlogsSection from '@/sections/HomeSections/BlogsSection/BlogsSection'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'

export default function HomePage({ params, data }) {
  // console.log(data)
  // const yourNeedsSectionTrans = {
  //   t: useTranslations('home_page_your_needs_section'),
  //   tList: useTranslations('home_page_your_needs_section_list_item_title'),
  //   tList2: useTranslations(
  //     'home_page_your_needs_section_list_item_description'
  //   ),
  //   cartDescription: useTranslations(
  //     'home_page_your_needs_section_list_item_description'
  //   )(keysForLocale.keys3[1]),
  //   cartTitle: useTranslations(
  //     'home_page_your_needs_section_list_item_description'
  //   )(keysForLocale.keys3[0]),
  // }
  // const yourNeedsSectionTransCart = {
  //   cartDescription: useTranslations(
  //     'home_page_your_needs_section_list_item_description'
  //   )(keysForLocale.keys3[1]),
  //   cartTitle: useTranslations(
  //     'home_page_your_needs_section_list_item_description'
  //   )(keysForLocale.keys3[0]),
  // }
  const cryptoWidgetTrans = {
    t: useTranslations('home_page_crypto_widget_section'),
  }
  const blogTrans = {
    t: useTranslations('blog_name_section'),
  }

  return (
    <main className={styles.wrapper}>
      <HeroSection dataPage={data} params={params} />
      <YourNeedsSection data={data.homePage} />
      <CryptoWidgetSection trans={cryptoWidgetTrans} data={data.homePage} />
      <SmoothAPISection data={data.homePage} />
      <PickSection
        buttonText={data.homePage.buttonLead1Book}
        data={data.homePage}
        leadFormData={data.pickLeadForm}
        className={styles.pickSection}
        variant='dontLose'
      />
      <CryptoWidget2Section data={data.homePage} />
      <ReasonsToTeamUp data={data.homePage} />
      <FeesBusiness
        data={data.feesYourBusiness}
        modelId='2540165'
        autoId={10}
        params={params}
      />
      <OurLandscapeSection data={data.ourLandscape} />
      <PickSection
        data={data.homePage}
        leadFormData={data.pickLeadForm}
        className={styles.pickSection2}
        buttonText={data.homePage.buttonLead3Book}
      />
      <BlogsSection
        data={data.homePage}
        blogs={data.allBlogs}
        trans={blogTrans}
      />
      <QuestionsSection faq={data.homePage} />
      {/* CryptoWidget2Section, QuestionsSection, ReasonsToTeamUp, FeesBusiness no ssr */}
    </main>
  )
}
