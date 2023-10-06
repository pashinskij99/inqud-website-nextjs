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
          {/* {t('title')} */}
          {data.screen1MainTitle}
        </StyledTypographyUrbanistH1>
        <StyledTypographyUrbanistH5 className='title-description'>
          {/* {t('description')} */}
          {data.screen1MainDescription}
        </StyledTypographyUrbanistH5>

        <StyledTypographyUrbanistH3 className='subTitle'>
          {/* {tMission('title')} */}
          {data.screen1Title1}
        </StyledTypographyUrbanistH3>
        <StyledTypographyUrbanistBody className='subTitle-description'>
          {/* {tMission('description')} */}
          {data.screen1Description1}
        </StyledTypographyUrbanistBody>

        <StyledTypographyUrbanistH3 className='subTitle'>
          {/* {tVision('title')} */}
          {data.screen1Title2}
        </StyledTypographyUrbanistH3>
        <StyledTypographyUrbanistBody className='subTitle-description'>
          {/* {tVision('description')} */}
          {data.screen1Description2}
        </StyledTypographyUrbanistBody>
      </div>
      <div className='right-side'>
        <Image
          src={data.screen1Image.url}
          alt='About us'
          width={550}
          height={550}
        />
      </div>
    </div>
  )
}
