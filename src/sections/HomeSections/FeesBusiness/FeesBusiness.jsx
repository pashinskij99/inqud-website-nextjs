'use client'

import { useState } from 'react'
import clsx from 'clsx'
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

const tableData = {
  head: [
    'Company name',
    'Crypto processing',
    // 'On-ramp'
  ],
  body: [
    ['Bitpay', '2% - 1% + 25¢ fixed fee'],
    ['Switchere', '0,5%'],
    ['Coingate', '1%'],
    ['Coinpayments', '1%'],
  ],
}

export default function FeesBusiness() {
  const [showModal, setShowModal] = useState(false)
  const [showMore, setShowMore] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleHideModal = () => {
    setShowModal(false)
  }

  const hadleShowMore = () => setShowMore((prevState) => !prevState)

  return (
    <StyledFeesBusinessWrapper>
      <div className='container'>
        <div className='title-wrapper'>
          <StyledTypographyUrbanistH2>
            Fees <span>for your business</span>
          </StyledTypographyUrbanistH2>

          <StyledTypographyUrbanistBody className='description'>
            Please review the examples of market fees charged by companies. We
            assure you that we will provide the most suitable fees for your
            business!
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

                      {/* {
                        i === 0
                          ? <StyledTypographyUrbanistBody>{value}</StyledTypographyUrbanistBody>
                          :
                      } */}
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
                text='All data is sourced from publicly available information or provided by customer support of the specified companies in private correspondence. If you notice any discrepancies between the displayed information and reality, please let us know by info@inqud.com, and we will update the information accordingly.'
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
              All data is sourced from publicly available information or
              provided by customer support of <br className='br-desktop' /> the
              <br className='br-1200' />
              specified companies in private correspondence.
            </StyledTypographyUrbanistSmallSpaces>
            <StyledTypographyUrbanistSmallSpaces className='description hide'>
              If you notice any discrepancies between the displayed information
              and reality, please let us <br className='br-desktop' /> know{' '}
              <br className='br-1200' /> by info@inqud.com, and we will update
              the information accordingly.
            </StyledTypographyUrbanistSmallSpaces>
          </div>

          <div className='cart'>
            <div className='cart-left-side'>
              <StyledTypographyUrbanistH4>
                Submit your inquiry <br className='br-desktop' /> now for{' '}
                <br className='br-1200' /> the best offer{' '}
                <br className='br-desktop' /> in <br className='br-1200' /> 10
                minutes
              </StyledTypographyUrbanistH4>
            </div>
            <div className='cart-right-side'>
              <StyledTypographyUrbanistBody>
                Our team will clarify all the necessary{' '}
                <br className='br-desktop' /> information and prepare an offer
                for <br className='br-desktop' /> you right away.
              </StyledTypographyUrbanistBody>
              <StyledButtonSecondaryLight onClick={handleShowModal}>
                Get a special offer
              </StyledButtonSecondaryLight>
            </div>
            <BackCart className='cart-back' />
          </div>
        </div>

        <div className='description-wrapper'>
          <StyledTypographyUrbanistSmallSpaces className='description'>
            All data is sourced from publicly available information or provided
            by customer support of <br className='br-desktop' /> the
            <br className='br-1200' />
            specified companies in private correspondence.
          </StyledTypographyUrbanistSmallSpaces>
          <StyledTypographyUrbanistSmallSpaces className='description hide'>
            If you notice any discrepancies between the displayed information
            and reality, please let us <br className='br-desktop' /> know{' '}
            <br className='br-1200' /> by info@inqud.com, and we will update the
            information accordingly.
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
