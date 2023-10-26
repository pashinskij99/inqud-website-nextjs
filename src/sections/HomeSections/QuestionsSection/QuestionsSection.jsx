'use client'

import Link from 'next/link'
import clsx from 'clsx'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledQuestionsSection } from './QuestionsSection.styled'
import { ButtonLearnMore } from '@/components/UI/Button'
import Device, { MOBILE, TABLET_OR_DESKTOP } from '@/components/Device/Device'
import QuestionsAccordion from './components/QuestionsAccordion'

export default function QuestionsSection({ faq, className }) {
  return (
    <StyledQuestionsSection className={clsx('faq', className)}>
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
            <Link href='/help-center'>
              <ButtonLearnMore className='questionsButtonHelp'>
                {faq.faqButtonText}
              </ButtonLearnMore>
            </Link>
          </Device>

          <Device device={MOBILE}>
            <Link href='/help-center'>
              <ButtonLearnMore className='questionsButtonHelp'>
                {faq.faqButtonTextMobile}
              </ButtonLearnMore>
            </Link>
          </Device>
        </StyledTypographyUrbanistH5>
      </div>
    </StyledQuestionsSection>
  )
}
