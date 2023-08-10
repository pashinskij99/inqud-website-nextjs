import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledCompanyHeroSectionWrapper } from './CompanyHeroSection.styled'
import graphic from '@/assets/images/company/hero/graphic.webp'

export default function CompanyHeroSection() {
  return (
    <StyledCompanyHeroSectionWrapper>
      <div className='container desktop'>
        <div className='left-side'>
          <StyledTypographyUrbanistH1 className='title'>
            About us
          </StyledTypographyUrbanistH1>
          <StyledTypographyUrbanistH5 className='title-description'>
            Inqud is a trusted financial technology company that provides an
            international payment gateway with a diverse range of crypto & fiat
            payment methods and currencies, cryptocurrency exchange with our own
            crypto processing and crypto widget.
          </StyledTypographyUrbanistH5>

          <StyledTypographyUrbanistH3 className='subTitle'>
            Our mission
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody className='subTitle-description'>
            Our mission is to offer bespoke payment options, eliminating hidden
            fees, and providing expert support around the clock, we strive to
            enhance the payment experiences of our clients.
          </StyledTypographyUrbanistBody>

          <StyledTypographyUrbanistH3 className='subTitle'>
            Our vision
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody className='subTitle-description'>
            Our vision is to be the trusted partner and provider of tailored
            financial technology solutions, empowering businesses and
            individuals to thrive in their industries.
          </StyledTypographyUrbanistBody>
        </div>
        <div className='right-side'>
          <Image src={graphic.src} width={550} height={550} />
        </div>
      </div>

      <div className='container tablet'>
        <div className='cart'>
          <StyledTypographyUrbanistH2 className='title'>
            About us
          </StyledTypographyUrbanistH2>
          <StyledTypographyUrbanistBody className='title-description'>
            Inqud is a trusted financial technology company that provides an
            international payment gateway with a diverse range of crypto & fiat
            payment methods and currencies, cryptocurrency exchange with our own
            crypto processing and crypto widget.
          </StyledTypographyUrbanistBody>
        </div>

        <div className='cart'>
          <Image src={graphic.src} width={332} height={332} />
        </div>

        <div className='cart'>
          <StyledTypographyUrbanistH3 className='subTitle'>
            Our mission
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody className='subTitle-description'>
            Our mission is to offer bespoke payment options, eliminating hidden
            fees, and providing expert support around the clock, we strive to
            enhance the payment experiences of our clients.
          </StyledTypographyUrbanistBody>
        </div>

        <div className='cart'>
          <StyledTypographyUrbanistH3 className='subTitle'>
            Our vision
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody className='subTitle-description'>
            Our vision is to be the trusted partner and provider of tailored
            financial technology solutions, empowering businesses and
            individuals to thrive in their industries.
          </StyledTypographyUrbanistBody>
        </div>
      </div>
    </StyledCompanyHeroSectionWrapper>
  )
}
