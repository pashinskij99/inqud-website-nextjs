'use client'

import Image from 'next/image'
import clsx from 'clsx'
import styles from '../HeroSection.module.scss'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'

export default function HeroSectionPaymentList({ data }) {
  return (
    <div className={clsx('payment', styles.payment)}>
      <StyledTypographyUrbanistBody className='payment-descr'>
        {data.title}
      </StyledTypographyUrbanistBody>

      <ul className='payment-list-wrapper'>
        <div className='payment-list payment-list-1'>
          {data?.list?.map(
            ({ supportedCurrenciesImage, supportedCurrenciesName, id }) => (
              <li key={id}>
                <div className='icon-wrapper'>
                  {supportedCurrenciesImage?.url ? (
                    <Image
                      width={32.00000762939453}
                      height={32.00000762939453}
                      src={supportedCurrenciesImage.url}
                      alt={supportedCurrenciesName}
                    />
                  ) : null}
                </div>
                <StyledTypographyUrbanistH5>
                  {supportedCurrenciesName}
                </StyledTypographyUrbanistH5>
              </li>
            )
          )}
        </div>
        <div aria-hidden='true' className='payment-list payment-list-2'>
          {data?.list?.map(
            ({ supportedCurrenciesImage, supportedCurrenciesName, id }) => (
              <li key={id}>
                <div className='icon-wrapper'>
                  <Image
                    width={32.00000762939453}
                    height={32.00000762939453}
                    src={supportedCurrenciesImage.url}
                    alt={supportedCurrenciesName}
                  />
                </div>
                <StyledTypographyUrbanistH5>
                  {supportedCurrenciesName}
                </StyledTypographyUrbanistH5>
              </li>
            )
          )}
        </div>
      </ul>
    </div>
  )
}
