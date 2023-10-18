import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'

export default function CompanyHeroSectionDesktop({ data }) {
  return (
    <div className='container desktop'>
      <div className='left-side'>
        <StyledTypographyUrbanistH1 className='title'>
          {data.screen1MainTitle}
        </StyledTypographyUrbanistH1>
        <StyledTypographyUrbanistH5 className='title-description'>
          {data.screen1MainDescription}
        </StyledTypographyUrbanistH5>

        <StyledTypographyUrbanistH3 className='subTitle'>
          {data.screen1Title1}
        </StyledTypographyUrbanistH3>
        <StyledTypographyUrbanistBody className='subTitle-description'>
          {data.screen1Description1}
        </StyledTypographyUrbanistBody>

        <StyledTypographyUrbanistH3 className='subTitle'>
          {data.screen1Title2}
        </StyledTypographyUrbanistH3>
        <StyledTypographyUrbanistBody className='subTitle-description'>
          {data.screen1Description2}
        </StyledTypographyUrbanistBody>
      </div>
      <div className='right-side'>
        <Image
          priority
          loading='eager'
          src={data.screen1Image.url}
          alt='About us'
          width={550}
          height={550}
        />
      </div>
    </div>
  )
}
