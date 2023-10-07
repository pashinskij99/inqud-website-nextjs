import { StructuredText } from 'react-datocms/structured-text'
// import { toast } from 'react-toastify'
import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled'
import { StyledFeesBusinessWrapper } from './FeesBusiness.styled'
import BackCart from '@/assets/images/fee/cart-back.svg'
// import { FeeModal } from '@/components/Modal/Modal'
import { getData } from '@/lib/datocms'
import { HOME_B2B_FEES } from '@/lib/datocmsQuery'
import FeesBusinessShowMore from './components/FeesBusinessShowMore'
import FeesBusinessModalWithButton from './components/FeesBusinessModalWithButton'
import Device, { DESKTOP, MOBILE, TABLET } from '@/components/Device/Device'

// eslint-disable-next-line no-unused-vars
export default async function FeesBusiness({ modelId, autoId, params }) {
  const { feesYourBusiness: data } = await getData(HOME_B2B_FEES, {
    locale: params.locale,
  })

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
          <Device device={MOBILE}>
            <FeesBusinessShowMore data={data} />
          </Device>
          <Device device={TABLET}>
            <div className='description-wrapper'>
              <StructuredText data={data.footerDescription} />
            </div>
          </Device>

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
              <FeesBusinessModalWithButton data={data} modelId={modelId} />
            </div>
            <Image className='cart-back' src={BackCart} alt='BackCart' />
          </div>
        </div>

        <Device device={DESKTOP}>
          <div className='description-wrapper'>
            <StructuredText data={data.footerDescription} />
          </div>
        </Device>
      </div>
    </StyledFeesBusinessWrapper>
  )
}
