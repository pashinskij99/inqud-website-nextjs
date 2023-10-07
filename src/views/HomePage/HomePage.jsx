// 'use client'

import HeroSection from '@/sections/HomeSections/HeroSection'
import styles from './HomePage.module.scss'

// import { useContext, useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'
// import { StyledHomeWrapper } from './HomePage.styled'
// import { NotFoundContext } from '@/contexts/NotFoundContext/NotFoundContext'
// import PageProvider from '@/contexts/PageContext/PageContext'
// import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
// import CryptoWidgetSection from '@/sections/HomeSections/CryptoWidgetSection'
import SmoothAPISection from '@/sections/HomeSections/SmoothAPISection'
// import PickSection from '@/sections/HomeSections/PickSection'
// import CryptoWidget2Section from '@/sections/HomeSections/CryptoWidget2Section'
// import ReasonsToTeamUp from '@/sections/HomeSections/ReasonsToTeamUp'
// import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
// import BlogsSection from '@/sections/HomeSections/BlogsSection'
// import QuestionsSection from '@/sections/HomeSections/QuestionsSection'
// import HeroSection from '@/sections/HomeSections/HeroSection'
// import YourNeedsSection from '@/sections/HomeSections/YourNeedsSection'
import YourNeedsSectionWrapper from '@/sections/HomeSections/YourNeedsSection/YourNeedsSection'
import CryptoWidgetSectionWrapper from '@/sections/HomeSections/CryptoWidgetSection/CryptoWidgetSection'
import PickSection from '@/sections/HomeSections/PickSection'
import CryptoWidget2Section from '@/sections/HomeSections/CryptoWidget2Section'
import ReasonsToTeamUp from '@/sections/HomeSections/ReasonsToTeamUp'
import FeesBusiness from '@/sections/HomeSections/FeesBusiness'
import OurLandscapeSection from '@/sections/HomeSections/OurLandscapeSection'
import BlogsSectionWrapper from '@/sections/HomeSections/BlogsSection/BlogsSection'
import QuestionsSection from '@/sections/HomeSections/QuestionsSection'

export default function HomePage({ params }) {
  // const { setIsNotFound } = useContext(NotFoundContext)
  // const [load, setLoad] = useState(false)

  // useEffect(() => {
  //   setIsNotFound(true)

  //   return () => {
  //     setIsNotFound(false)
  //   }
  // }, [])
  // console.log({ params })
  // return <>12321312</>
  return (
    <main className={styles.wrapper}>
      <HeroSection params={params} />
      <YourNeedsSectionWrapper params={params} />
      <CryptoWidgetSectionWrapper params={params} />
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
      <BlogsSectionWrapper params={params} />
      <QuestionsSection params={params} nameCMSPage='homePage' />
    </main>
    // <PageProvider isFaq dataPage={data} params={params} nameCMSPage='homePage'>
    // <StyledHomeWrapper>

    // </StyledHomeWrapper>
    // </PageProvider>
  )
}
