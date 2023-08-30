'use client'

import { useState, useContext } from 'react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { render } from 'datocms-structured-text-to-html-string'
import { StructuredText } from 'react-datocms/structured-text'
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
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function FeesBusiness() {
  const [showModal, setShowModal] = useState(false)
  const [showMore, setShowMore] = useState(false)

  // const t = useTranslations('home_page.fees_section')
  const tHead = useTranslations('home_page.fees_section.tablet.head')
  const tBodyName = useTranslations('home_page.fees_section.tablet.body_name')
  const tBodyValue = useTranslations('home_page.fees_section.tablet.body_value')
  // const tBodyDescription = useTranslations('home_page.fees_section.description')

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

  const {
    dataPage: { feesYourBusiness: data },
  } = useContext(PageContext)

  return (
    <StyledFeesBusinessWrapper className='fees'>
      <div className='container'>
        <div className='title-wrapper'>
          <StyledTypographyUrbanistH2 className='title title-1'>
            {/* {t('title')} */}
            {data.title}
          </StyledTypographyUrbanistH2>
          <StyledTypographyUrbanistH2 className='title title-2'>
            {/* {t('title_mobile')} */}
            {data.title}
          </StyledTypographyUrbanistH2>

          <StyledTypographyUrbanistBody className='description'>
            {/* {t('paragraph')} */}
            {data.description}
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
              {data.table.map(({ description, id, title }) => (
                <tr key={id}>
                  <td>
                    <StyledTypographyUrbanistBody>
                      {title}
                    </StyledTypographyUrbanistBody>
                  </td>
                  <td>
                    <StyledTypographyUrbanistBody>
                      {description}
                    </StyledTypographyUrbanistBody>
                  </td>
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
                text={render(data.footerDescription)
                  .replace(/(<([^>]+)>)/gi, '')
                  .replace(/(&[a-z]*;|<([^>]+)>)/gi, '')}
                endText={141}
              />
            </StyledTypographyUrbanistSmallSpaces>

            <StyledButtonLearnMore
              onClick={hadleShowMore}
              className='learnMoreButton'
            >
              {showMore ? 'Hide text' : 'Show more'}
            </StyledButtonLearnMore>

            {/* <StyledTypographyUrbanistSmallSpaces className='description hide'> */}
            <StructuredText data={data.footerDescription} />
            {/* </StyledTypographyUrbanistSmallSpaces> */}
            {/* <StyledTypographyUrbanistSmallSpaces className='description hide'>
              {tBodyDescription(keysForLocale.keys2[1])}
            </StyledTypographyUrbanistSmallSpaces> */}
          </div>

          <div className='cart'>
            <div className='cart-left-side'>
              <StyledTypographyUrbanistH4>
                {/* {t('cart_title')} */}
                {data.cartTitle}
              </StyledTypographyUrbanistH4>
            </div>
            <div className='cart-right-side'>
              <StyledTypographyUrbanistBody>
                {/* {t('cart_description')} */}
                {data.cartDescription}
              </StyledTypographyUrbanistBody>
              <StyledButtonSecondaryLight onClick={handleShowModal}>
                {/* {t('cart_button_text')} */}
                {data.cartButton}
              </StyledButtonSecondaryLight>
            </div>
            <BackCart className='cart-back' />
          </div>
        </div>

        <div className='description-wrapper'>
          {/* <StyledTypographyUrbanistSmallSpaces className='description'> */}
          <StructuredText data={data.footerDescription} />
          {/* </StyledTypographyUrbanistSmallSpaces> */}
          {/* <StyledTypographyUrbanistSmallSpaces className='description hide'>
            If you notice any discrepancies between the displayed information
            and reality, please let us know by info@inqud.com, and we will
            update the information accordingly.
          </StyledTypographyUrbanistSmallSpaces> */}
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
