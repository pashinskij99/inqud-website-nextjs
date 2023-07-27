import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistDisplay,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledCompanyHeroSectionWrapper } from './CompanyHeroSection.styled'
import Graphic from '@/assets/images/company/hero/graphic.svg'

export default function CompanyHeroSection() {
  return (
    <StyledCompanyHeroSectionWrapper>
      <div className='container'>
        <div className='left-side'>
          <StyledTypographyUrbanistDisplay className='title'>
            About us
          </StyledTypographyUrbanistDisplay>
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
          <Graphic />
        </div>
      </div>
    </StyledCompanyHeroSectionWrapper>
  )
}
