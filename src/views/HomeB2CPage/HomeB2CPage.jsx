import { useTranslations } from 'next-intl'
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
  const blogTrans = {
    t: useTranslations('blog_name_section'),
  }
  return (
    <PageProvider isFaq dataPage={data} nameCMSPage='homeB2c'>
      <StyledHomeB2CPageWrapper>
        <HeroB2CSection data={data.homeB2c} params={params} />
        <FeaturesB2CSection data={data.homeB2c} />
        <ProductLineB2CSection />
        <HowToStartsB2CSection />
        <PassKYCB2CSection />
        <BlogsSection
          data={data.homePage}
          blogs={data.allBlogs}
          trans={blogTrans}
          params={params}
        />
        <QuestionsSection
          faq={data.homeB2c}
          nameCMSPage='homeB2c'
          params={params}
        />
      </StyledHomeB2CPageWrapper>
    </PageProvider>
  )
}
