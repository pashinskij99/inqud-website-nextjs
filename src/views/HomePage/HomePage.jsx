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
  return (
    <main className={styles.wrapper}>
      <HeroSection dataPage={data} params={params} />
      <YourNeedsSection data={data.homePage} />
      <CryptoWidgetSection data={data.homePage} />
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
        leadData={data.cryptoLeadForm}
        modelId='2540165'
        autoId={10}
      />
      <OurLandscapeSection data={data.ourLandscape} />
      <PickSection
        data={data.homePage}
        leadFormData={data.pickLeadForm}
        className={styles.pickSection2}
        buttonText={data.homePage.buttonLead3Book}
      />
      <BlogsSection data={data.blogSection} blogs={data.allBlogs} />
      <QuestionsSection faq={data.homePage} />
      {/* CryptoWidget2Section, QuestionsSection, ReasonsToTeamUp, FeesBusiness no ssr */}
    </main>
  )
}
