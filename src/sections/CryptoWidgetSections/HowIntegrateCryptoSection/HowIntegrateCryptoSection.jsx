import { useTranslations } from 'next-intl';
import { StyledHowIntegrateCryptoSectionWrapper } from './HowIntegrateCryptoSection.styled';
import { StyledTypographyUrbanistH2 } from '@/components/UI/Typography/Typography.styled';
import arrowImage from '@/assets/images/homeB2C/how-to-start/arrow.png';
import arrowImageMobile from '@/assets/images/homeB2C/PassKYC/arrow-down.png';
import Icon1 from '@/assets/images/api/how-integrate/num1-min.svg';
import Icon2 from '@/assets/images/api/how-integrate/num2-min.svg';
import Icon3 from '@/assets/images/api/how-integrate/num3-min.svg';
import Icon4 from '@/assets/images/api/how-integrate/num4-min.svg';
import { ButtonGetStarted } from '@/components/UI/Button';
import { keysForLocale } from '@/config/keysForLocale';
import { StepContent } from '@/sections/ApiSections/HowIntegrate/HowIntegrate';

export default function HowIntegrateCryptoSection() {
  const t = useTranslations('crypto_centre_page.how_integrate_section');
  const tTitles = useTranslations(
    'crypto_centre_page.how_integrate_section.items_title'
  );
  const tTimes = useTranslations(
    'crypto_centre_page.how_integrate_section.items_time'
  );

  const stepsContent = [
    {
      id: 1,
      title: tTitles(keysForLocale.keys4[0]),
      titleLaptop: tTitles(keysForLocale.keys4[0]),
      titleTablet: tTitles(keysForLocale.keys4[0]),
      titleMobile: tTitles(keysForLocale.keys4[0]),
      time: tTimes(keysForLocale.keys4[0]),
      icon: <Icon1 className="step-icon" />,
    },
    { id: 2, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
    {
      id: 3,
      title: tTitles(keysForLocale.keys4[1]),
      titleLaptop: tTitles(keysForLocale.keys4[1]),
      titleTablet: tTitles(keysForLocale.keys4[1]),
      titleMobile: tTitles(keysForLocale.keys4[1]),
      time: tTimes(keysForLocale.keys4[1]),
      icon: <Icon2 className="step-icon" />,
    },
    { id: 4, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
    {
      id: 5,
      title: tTitles(keysForLocale.keys4[2]),
      titleLaptop: tTitles(keysForLocale.keys4[2]),
      titleTablet: tTitles(keysForLocale.keys4[3]),
      titleMobile: tTitles(keysForLocale.keys4[3]),
      time: tTimes(keysForLocale.keys4[2]),
      icon: <Icon3 className="step-icon" />,
    },
    { id: 6, imageSrc: arrowImage.src, imageSrcMobile: arrowImageMobile.src },
    {
      id: 7,
      title: tTitles(keysForLocale.keys4[3]),
      titleLaptop: tTitles(keysForLocale.keys4[3]),
      titleTablet: tTitles(keysForLocale.keys4[2]),
      titleMobile: tTitles(keysForLocale.keys4[2]),
      time: tTimes(keysForLocale.keys4[3]),
      icon: <Icon4 className="step-icon" />,
    },
  ];

  return (
    <StyledHowIntegrateCryptoSectionWrapper>
      <div className="container">
        <StyledTypographyUrbanistH2 className="title">
          {t('title')}
        </StyledTypographyUrbanistH2>

        <div className="steps-wrapper">
          {stepsContent.map(
            ({
              description,
              icon,
              imageSrcMobile,
              id,
              imageSrc,
              time,
              title,
              titleLaptop,
              titleTablet,
              titleMobile,
              button,
            }) => (
              <div key={id} className="step-wrapper">
                <StepContent
                  key={id}
                  id={id}
                  icon={icon}
                  imageSrcMobile={imageSrcMobile}
                  imageSrc={imageSrc}
                  time={time}
                  title={title}
                  titleLaptop={titleLaptop}
                  titleTablet={titleTablet}
                  titleMobile={titleMobile}
                  button={button}
                  description={description}
                />
              </div>
            )
          )}
        </div>

        <ButtonGetStarted className="get-started-button">
          {t('button_text')}
        </ButtonGetStarted>
      </div>
    </StyledHowIntegrateCryptoSectionWrapper>
  );
}
