import { StyledTypographyUrbanistH2 } from '@/components/UI/Typography/Typography.styled'
import { StyledOurLandscapeSection } from './OurLandscapeSection.styled'

import OurLandscapeTabComponent from './components/OurLandscapeTabComponent'
import { getData } from '@/lib/datocms'
import { HOME_B2B_LANDSCAPE } from '@/lib/datocmsQuery'

export default async function OurLandscapeSection({ params }) {
  // const [data, setData] = useState({})

  // const {
  //   dataPage: { ourLandscape: data },
  // } = useContext(PageContext);

  // const { params } = useContext(PageContext)

  // useEffect(() => {
  //   const getData = async () => {
  //     const pageData = await getPageData({
  //       variables: {
  //         locale: params.locale,
  //       },
  //       query: HOME_B2B_LANDSCAPE,
  //     })

  //     setData(pageData.ourLandscape)
  //   }

  //   getData()
  // }, [])
  const { ourLandscape: data } = await getData(HOME_B2B_LANDSCAPE, {
    locale: params.locale,
  })
  return (
    <StyledOurLandscapeSection className='our-landscape'>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='ourLandscapeTitle'>
          {data.title}
        </StyledTypographyUrbanistH2>

        <OurLandscapeTabComponent data={data} />
      </div>
    </StyledOurLandscapeSection>
  )
}
