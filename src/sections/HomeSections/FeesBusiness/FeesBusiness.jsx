'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled'
import { StyledFeesBusinessWrapper } from './FeesBusiness.styled'
import {
  StyledButtonLearnMore,
  StyledButtonSecondaryLight,
} from '@/components/UI/Button/Button.styled'
import BackCart from '@/assets/images/fee/cart-back.svg'
import { FeeModal } from '@/components/Modal/Modal'
import { keysForLocale } from '@/config/keysForLocale'

export default function FeesBusiness() {
  const [showModal, setShowModal] = useState(false)
  const [showMore, setShowMore] = useState(false)

  const t = useTranslations('home_page.fees_section')
  const tHead = useTranslations('home_page.fees_section.tablet.head')
  const tBodyName = useTranslations('home_page.fees_section.tablet.body_name')
  const tBodyValue = useTranslations('home_page.fees_section.tablet.body_value')
  const tBodyDescription = useTranslations('home_page.fees_section.description')

  const tableData = {
    head: [tHead(keysForLocale.keys2[0]), tHead(keysForLocale.keys2[1])],
    body: [
      [tBodyName(keysForLocale.keys4[0]), tBodyValue(keysForLocale.keys4[0])],
      [tBodyName(keysForLocale.keys4[1]), tBodyValue(keysForLocale.keys4[1])],
      [tBodyName(keysForLocale.keys4[2]), tBodyValue(keysForLocale.keys4[2])],
      [tBodyName(keysForLocale.keys4[3]), tBodyValue(keysForLocale.keys4[3])],
    ],
  }

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleHideModal = () => {
    setShowModal(false)
  }

  const hadleShowMore = () => setShowMore((prevState) => !prevState)

  return (
    <StyledFeesBusinessWrapper className='fees'>
      <div className='container'>
        <div className='title-wrapper'>
          <StyledTypographyUrbanistH2 className='title title-1'>
            {t('title')}
          </StyledTypographyUrbanistH2>
          <StyledTypographyUrbanistH2 className='title title-2'>
            {t('title_mobile')}
          </StyledTypographyUrbanistH2>

          <StyledTypographyUrbanistBody className='description'>
            {t('paragraph')}
          </StyledTypographyUrbanistBody>
        </div>

        <div className='content-wrapper'>
          <table>
            <thead>
              <tr>
                {tableData.head.map((value) => (
                  <th key={value}>
                    <StyledTypographyUrbanistSmallSpaces>
                      {value}
                    </StyledTypographyUrbanistSmallSpaces>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.body.map((arr) => (
                <tr key={arr[0]}>
                  {arr.map((value) => (
                    <td key={value}>
                      <StyledTypographyUrbanistBody>
                        {value}
                      </StyledTypographyUrbanistBody>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className='description-wrapper tablet'>
            <StyledTypographyUrbanistSmallSpaces
              className={clsx('description', {
                ['learnMore']: !showMore,
              })}
            >
              <LearnMoreText
                showMore={showMore}
                text={`${tBodyDescription(
                  keysForLocale.keys2[0]
                )} ${tBodyDescription(keysForLocale.keys2[1])}`}
                endText={141}
              />
            </StyledTypographyUrbanistSmallSpaces>

            <StyledButtonLearnMore
              onClick={hadleShowMore}
              className='learnMoreButton'
            >
              {showMore ? 'Hide text' : 'Show more'}
            </StyledButtonLearnMore>

            <StyledTypographyUrbanistSmallSpaces className='description hide'>
              {tBodyDescription(keysForLocale.keys2[0])}
            </StyledTypographyUrbanistSmallSpaces>
            <StyledTypographyUrbanistSmallSpaces className='description hide'>
              {tBodyDescription(keysForLocale.keys2[1])}
            </StyledTypographyUrbanistSmallSpaces>
          </div>

          <div className='cart'>
            <div className='cart-left-side'>
              <StyledTypographyUrbanistH4>
                {t('cart_title')}
              </StyledTypographyUrbanistH4>
            </div>
            <div className='cart-right-side'>
              <StyledTypographyUrbanistBody>
                {t('cart_description')}
              </StyledTypographyUrbanistBody>
              <StyledButtonSecondaryLight onClick={handleShowModal}>
                {t('cart_button_text')}
              </StyledButtonSecondaryLight>
            </div>
            <BackCart className='cart-back' />
          </div>
        </div>

        <div className='description-wrapper'>
          <StyledTypographyUrbanistSmallSpaces className='description'>
            All data is sourced from publicly available information or provided
            by customer support of the specified companies in private
            correspondence.
          </StyledTypographyUrbanistSmallSpaces>
          <StyledTypographyUrbanistSmallSpaces className='description hide'>
            If you notice any discrepancies between the displayed information
            and reality, please let us know by info@inqud.com, and we will
            update the information accordingly.
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </div>

      <FeeModal open={showModal} handleClose={handleHideModal} />
    </StyledFeesBusinessWrapper>
  )
}

function LearnMoreText({ endText, text, showMore }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{showMore ? text : text.substring(0, endText)}</>
}
