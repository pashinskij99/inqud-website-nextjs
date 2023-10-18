import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH3,
} from '@/components/UI/Typography/Typography.styled'
import { StyledCompanyHeroSectionWrapper } from './CompanyHeroSection.styled'
import Device, { TABLET } from '@/components/Device/Device'
import CompanyHeroSectionDesktop from './components/CompanyHeroSectionDesktop'

export default function CompanyHeroSection({ data }) {
  // const {
  //   dataPage: { aboutUsPage: data },
  // } = useContext(PageContext)

  return (
    <StyledCompanyHeroSectionWrapper>
      {/* <Device device={Device}> */}
      <CompanyHeroSectionDesktop data={data} />
      {/* </Device> */}
      {/* <Device device={MOBILE}> */}
      {/* <DynamicCompanyHeroSectionDesktop data={data} /> */}
      {/* </Device> */}

      <Device device={TABLET}>
        <div className='container tablet'>
          <div className='cart'>
            <StyledTypographyUrbanistH2 className='title'>
              {data.screen1MainTitle}
            </StyledTypographyUrbanistH2>
            <StyledTypographyUrbanistBody className='title-description'>
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
              {data.screen1Title1}
            </StyledTypographyUrbanistH3>
            <StyledTypographyUrbanistBody className='subTitle-description'>
              {data.screen1Description1}
            </StyledTypographyUrbanistBody>
          </div>

          <div className='cart'>
            <StyledTypographyUrbanistH3 className='subTitle'>
              {data.screen1Title2}
            </StyledTypographyUrbanistH3>
            <StyledTypographyUrbanistBody className='subTitle-description'>
              {data.screen1Description2}
            </StyledTypographyUrbanistBody>
          </div>
        </div>
      </Device>
    </StyledCompanyHeroSectionWrapper>
  )
}
