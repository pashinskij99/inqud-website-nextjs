import Image from 'next/image'
import { useContext } from 'react'
import dynamic from 'next/dynamic'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH3,
} from '@/components/UI/Typography/Typography.styled'
import { StyledCompanyHeroSectionWrapper } from './CompanyHeroSection.styled'
import { PageContext } from '@/contexts/PageContext/PageContext'
import Device, { MOBILE, TABLET } from '@/components/Device/Device'

const DynamicCompanyHeroSectionDesktop = dynamic(() =>
  import('./components/CompanyHeroSectionDesktop').then((res) => res.default)
)

export default function CompanyHeroSection() {
  const {
    dataPage: { aboutUsPage: data },
  } = useContext(PageContext)

  return (
    <StyledCompanyHeroSectionWrapper>
      <Device device={Device}>
        <DynamicCompanyHeroSectionDesktop data={data} />
      </Device>
      <Device device={MOBILE}>
        <DynamicCompanyHeroSectionDesktop data={data} />
      </Device>

      <Device device={TABLET}>
        <div className='container tablet'>
          <div className='cart'>
            <StyledTypographyUrbanistH2 className='title'>
              {/* {t('title')} */}
              {data.screen1MainTitle}
            </StyledTypographyUrbanistH2>
            <StyledTypographyUrbanistBody className='title-description'>
              {/* {t('description')} */}
              {data.screen1MainDescription}
            </StyledTypographyUrbanistBody>
          </div>

          <div className='cart'>
            <Image
              src={data.screen1Image.url}
              alt='About us'
              width={332}
              height={332}
            />
          </div>

          <div className='cart'>
            <StyledTypographyUrbanistH3 className='subTitle'>
              {/* {tMission('title')} */}
              {data.screen1Title1}
            </StyledTypographyUrbanistH3>
            <StyledTypographyUrbanistBody className='subTitle-description'>
              {/* {tMission('description')} */}
              {data.screen1Description1}
            </StyledTypographyUrbanistBody>
          </div>

          <div className='cart'>
            <StyledTypographyUrbanistH3 className='subTitle'>
              {/* {tVision('title')} */}
              {data.screen1Title2}
            </StyledTypographyUrbanistH3>
            <StyledTypographyUrbanistBody className='subTitle-description'>
              {/* {tVision('description')} */}
              {data.screen1Description2}
            </StyledTypographyUrbanistBody>
          </div>
        </div>
      </Device>
    </StyledCompanyHeroSectionWrapper>
  )
}
