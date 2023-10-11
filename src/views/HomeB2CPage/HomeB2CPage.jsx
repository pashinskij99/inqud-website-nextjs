import { StyledHomeB2CPageWrapper } from './HomeB2CPage.styled'
import PageProvider from '@/contexts/PageContext/PageContext'
import HeroB2CSection from '@/sections/HomeB2CSections/HeroB2CSection'
import FeaturesB2CSection from '@/sections/HomeB2CSections/FeaturesB2CSection'
import ProductLineB2CSection from '@/sections/HomeB2CSections/ProductLineB2CSection'
import HowToStartsB2CSection from '@/sections/HomeB2CSections/HowToStartsB2CSection'
import PassKYCB2CSection from '@/sections/HomeB2CSections/PassKYCB2CSection'
import BlogsSection from '@/sections/HomeSections/BlogsSection'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'

export default function HomeB2CPage({ data, params }) {
  return (
    <PageProvider isFaq dataPage={data} nameCMSPage='homeB2c'>
      <StyledHomeB2CPageWrapper>
        <HeroB2CSection />
        <FeaturesB2CSection />
        <ProductLineB2CSection />
        <HowToStartsB2CSection />
        <PassKYCB2CSection />
        <BlogsSection params={params} />
        <QuestionsSection nameCMSPage='homeB2c' params={params} />
      </StyledHomeB2CPageWrapper>
    </PageProvider>
  )
}
