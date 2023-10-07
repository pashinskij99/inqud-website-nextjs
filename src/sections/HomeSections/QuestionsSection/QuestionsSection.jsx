import Link from 'next/link'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledQuestionsSection } from './QuestionsSection.styled'

import { ButtonLearnMore } from '@/components/UI/Button'
// import { AccordionItem } from './components/QuestionsAccordion'
import Device, { MOBILE, TABLET_OR_DESKTOP } from '@/components/Device/Device'
import QuestionsAccordion from './components/QuestionsAccordion'
import { getData } from '@/lib/datocms'
import { FAQ_QUERY } from '@/lib/datocmsQuery'

export default async function QuestionsSection({ params, nameCMSPage }) {
  // const [faq, setFaq] = useState({})

  // const { params, nameCMSPage } = useContext(PageContext)

  // useEffect(() => {
  //   const getData = async () => {
  //     const pageData = await getPageData({
  //       variables: {
  //         locale: params.locale,
  //       },
  //       query: FAQ_QUERY({ pageCMSName: nameCMSPage }),
  //     })

  //     setFaq(pageData[nameCMSPage])
  //   }

  //   getData()
  // }, [])

  // const size = useWindowSize()

  const data = await getData(FAQ_QUERY({ pageCMSName: nameCMSPage }), {
    locale: params.locale,
  })

  const faq = data[nameCMSPage]

  return (
    <StyledQuestionsSection className='faq'>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='questionsTitle'>
          {faq.faqMainTitle}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistH2 className='questionsTitleMobile'>
          {faq.faqMainTitleMobile}
        </StyledTypographyUrbanistH2>

        <QuestionsAccordion faq={faq} />

        <StyledTypographyUrbanistH5 className='questionsButton'>
          {faq.faqDescription}
          <Device device={TABLET_OR_DESKTOP}>
            <Link href='/help-centre'>
              <ButtonLearnMore className='questionsButtonHelp'>
                {faq.faqButton}
              </ButtonLearnMore>
            </Link>
          </Device>

          <Device device={MOBILE}>
            <Link href='/help-centre'>
              <ButtonLearnMore className='questionsButtonHelp'>
                {faq.faqButtonMobile}
              </ButtonLearnMore>
            </Link>
          </Device>
        </StyledTypographyUrbanistH5>
      </div>
    </StyledQuestionsSection>
  )
}
