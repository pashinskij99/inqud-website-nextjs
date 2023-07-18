'use client'

import { useState } from 'react'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistH5,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled'
import { StyledFeesBusinessWrapper } from './FeesBusiness.styled'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import BackCart from '@/assets/images/fee/cart-back.svg'
import { FeeModal } from '@/components/Modal/Modal'

const tableData = {
  head: ['Company name', 'Crypto processing', 'On-ramp'],
  body: [
    ['Bitpay', '3,95%', '3,95%'],
    ['Mercurio', '3,95%', '3,95%'],
    ['Swapin', '3,95%', '3,95%'],
    ['Moonpay', '3,95%', '3,95%'],
    ['Sendwyre', '3,95%', '3,95%'],
  ],
}

export default function FeesBusiness() {
  const [showModal, setShowModal] = useState(true)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleHideModal = () => {
    setShowModal(false)
  }

  return (
    <StyledFeesBusinessWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH1>
          Fees for your business
        </StyledTypographyUrbanistH1>

        <StyledTypographyUrbanistH5>
          Please review the examples of market fees charged{' '}
          <br className='br-desktop' /> by companies. We assure you that we will
          provide the <br className='br-desktop' /> most suitable fees for your
          business!
        </StyledTypographyUrbanistH5>

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
            <StyledTypographyUrbanistSmallSpaces className='description'>
              All data is sourced from publicly available information or
              provided by customer support of <br className='br-desktop' /> the
              specified companies in private correspondence.
            </StyledTypographyUrbanistSmallSpaces>
            <StyledTypographyUrbanistSmallSpaces className='description'>
              If you notice any discrepancies between the displayed information
              and reality, please let us <br className='br-desktop' /> know by
              info@inqud.com, and we will update the information accordingly.
            </StyledTypographyUrbanistSmallSpaces>
          </div>

          <div className='cart'>
            <div className='cart-left-side'>
              <StyledTypographyUrbanistH4>
                Submit your inquiry <br className='br-desktop' /> now for the
                best offer <br className='br-desktop' /> in 10 minutes
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
            by customer support of <br className='br-desktop' /> the specified
            companies in private correspondence.
          </StyledTypographyUrbanistSmallSpaces>
          <StyledTypographyUrbanistSmallSpaces className='description'>
            If you notice any discrepancies between the displayed information
            and reality, please let us <br className='br-desktop' /> know by
            info@inqud.com, and we will update the information accordingly.
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </div>

      <FeeModal open={showModal} handleClose={handleHideModal} />
    </StyledFeesBusinessWrapper>
  )
}
