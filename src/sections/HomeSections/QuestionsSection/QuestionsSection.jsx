'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledQuestionsSection } from './QuestionsSection.styled'
import { ButtonLearnMore } from '@/components/UI/Button'
import Device, { MOBILE, TABLET_OR_DESKTOP } from '@/components/Device/Device'
import QuestionsAccordion from './components/QuestionsAccordion'
import { getPageData } from '@/lib/datocms'
import { FAQ_QUERY } from '@/lib/datocmsQuery'

export default function QuestionsSection({ params, nameCMSPage }) {
  const [faq, setFaq] = useState({})

  useEffect(() => {
    const response = async () => {
      const data = await getPageData({
        query: FAQ_QUERY({ pageCMSName: nameCMSPage }),
        variables: {
          locale: params.locale,
        },
      })

      setFaq(data[nameCMSPage])
    }

    response()
  }, [])

  // const data = await getData(FAQ_QUERY({ pageCMSName: nameCMSPage }), {
  //   locale: params.locale,
  // })
  // const faq = data[nameCMSPage]

  // if (!faq) return null

  return (
    <StyledQuestionsSection className='faq'>
      <div className='container'>
        <Device device={TABLET_OR_DESKTOP}>
          <StyledTypographyUrbanistH2 className='questionsTitle'>
            {faq.faqMainTitle}
          </StyledTypographyUrbanistH2>
        </Device>

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
