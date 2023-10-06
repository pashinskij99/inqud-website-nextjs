'use client'

import { useContext, useEffect, useState } from 'react'
import clsx from 'clsx'
import { render } from 'datocms-structured-text-to-html-string'
import { StructuredText } from 'react-datocms/structured-text'
// import { toast } from 'react-toastify'
import { useWindowSize } from '@uidotdev/usehooks'
import dynamic from 'next/dynamic'
import Image from 'next/image'
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
// import { FeeModal } from '@/components/Modal/Modal'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { getPageData } from '@/lib/datocms'
import { HOME_B2B_FEES } from '@/lib/datocmsQuery'
import { responseBreakPoint } from '@/utils/response'

const DynamicFeeModalWrapper = dynamic(
  () => import('./components/FeeModalWrapper').then((res) => res.default),
  { ssr: false }
)

// eslint-disable-next-line no-unused-vars
export default function FeesBusiness({ modelId, autoId }) {
  const [showModal, setShowModal] = useState(false)
  const [showMore, setShowMore] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleHideModal = () => {
    setShowModal(false)
  }

  const hadleShowMore = () => setShowMore((prevState) => !prevState)
  const [data, setData] = useState({})

  // const {
  //   dataPage: { feesYourBusiness: data },
  // } = useContext(PageContext)

  const { params } = useContext(PageContext)

  useEffect(() => {
    const getData = async () => {
      const pageData = await getPageData({
        variables: {
          locale: params.locale,
        },
        query: HOME_B2B_FEES,
      })

      setData(pageData.feesYourBusiness)
    }

    getData()
  }, [])

  const size = useWindowSize()

  return (
    <StyledFeesBusinessWrapper className='fees'>
      <div className='container'>
        <div className='title-wrapper'>
          <StyledTypographyUrbanistH2 className='title'>
            {data.title}
          </StyledTypographyUrbanistH2>

          <StyledTypographyUrbanistBody className='description'>
            {data.description}
          </StyledTypographyUrbanistBody>
        </div>

        <div className='content-wrapper'>
          <table>
            <thead>
              {data.tableHeader?.map(({ description, id, title }) => (
                <tr key={id}>
                  <th>
                    <StyledTypographyUrbanistSmallSpaces>
                      {title}
                    </StyledTypographyUrbanistSmallSpaces>
                  </th>
                  <th key={title}>
                    <StyledTypographyUrbanistSmallSpaces>
                      {description}
                    </StyledTypographyUrbanistSmallSpaces>
                  </th>
                </tr>
              ))}
            </thead>
            <tbody>
              {data.table?.map(({ description, id, title }) => (
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

          {size.width && size.width <= responseBreakPoint.mobile ? (
            <div className='description-wrapper'>
              <StyledTypographyUrbanistSmallSpaces
                className={clsx('description', {
                  ['learnMore']: !showMore,
                })}
              >
                {data.footerDescription ? (
                  <LearnMoreText
                    showMore={showMore}
                    text={render(data.footerDescription)
                      .replace(/(<([^>]+)>)/gi, '')
                      .replace(/(&[a-z]*;|<([^>]+)>)/gi, '')}
                    endText={141}
                  />
                ) : null}
              </StyledTypographyUrbanistSmallSpaces>

              <StyledButtonLearnMore
                onClick={hadleShowMore}
                className='learnMoreButton'
              >
                {showMore ? 'Hide text' : 'Show more'}
              </StyledButtonLearnMore>
            </div>
          ) : null}
          {size.width &&
          size.width <= responseBreakPoint.tablet &&
          size.width > responseBreakPoint.mobile ? (
            <div className='description-wrapper'>
              <StructuredText data={data.footerDescription} />
            </div>
          ) : null}

          <div className='cart'>
            <div className='cart-left-side'>
              <StyledTypographyUrbanistH4 component='h3'>
                {data.cartTitle}
              </StyledTypographyUrbanistH4>
            </div>
            <div className='cart-right-side'>
              <StyledTypographyUrbanistBody>
                {data.cartDescription}
              </StyledTypographyUrbanistBody>
              <StyledButtonSecondaryLight onClick={handleShowModal}>
                {data.cartButton}
              </StyledButtonSecondaryLight>
            </div>
            <Image className='cart-back' src={BackCart} alt='BackCart' />
          </div>
        </div>

        {size.width && size.width > responseBreakPoint.tablet ? (
          <div className='description-wrapper'>
            <StructuredText data={data.footerDescription} />
          </div>
        ) : null}
      </div>

      {showModal ? (
        <DynamicFeeModalWrapper
          modelId={modelId}
          showModal={showModal}
          handleHideModal={handleHideModal}
        />
      ) : null}
    </StyledFeesBusinessWrapper>
  )
}

function LearnMoreText({ endText, text, showMore }) {
  return <>{showMore ? text : text.substring(0, endText)}</>
}
