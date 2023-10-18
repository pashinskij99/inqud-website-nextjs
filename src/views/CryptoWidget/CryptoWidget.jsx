import styles from './styles.module.scss'
import CryptoWidgetHeroSection from '@/sections/CryptoWidgetSections/CryptoWidgetHeroSection'
import CryptoWidgetFlexibility from '@/sections/CryptoWidgetSections/CryptoWidgetFlexibility'
import CryptoBusinessSection from '@/sections/CryptoWidgetSections/CryptoBusinessSection'
import CryptoWidgetFeatures from '@/sections/CryptoWidgetSections/CryptoWidgetFeatures'
import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
import HowIntegrateCryptoSection from '@/sections/CryptoWidgetSections/HowIntegrateCryptoSection'
import SafetyReliability from '@/sections/CryptoWidgetSections/SafetyReliability'
import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
import SendRequestSection from '@/sections/CryptoWidgetSections/SendRequestSection'
import ConnectCryptoSection from '@/sections/CryptoWidgetSections/ConnectCryptoSection'
import PageProvider from '@/contexts/PageContext/PageContext'

export default function CryptoWidget({ data, params }) {
  return (
    <PageProvider dataPage={data} isFaq nameCMSPage='cryptoWidgetPage'>
      <main className={styles.wrapper}>
        <CryptoWidgetHeroSection data={data.cryptoWidgetPage} params={params} />
        <CryptoWidgetFlexibility data={data.cryptoWidgetPage} />
        <CryptoBusinessSection />
        <CryptoWidgetFeatures />
        <FeesBusiness modelId='2540254' params={params} />
        <HowIntegrateCryptoSection />
        <SafetyReliability />
        <OurLandscapeSection params={params} />
        <ConnectCryptoSection />
        <QuestionsSection params={params} nameCMSPage='cryptoWidgetPage' />
        <SendRequestSection />
      </main>
    </PageProvider>
  )
}
