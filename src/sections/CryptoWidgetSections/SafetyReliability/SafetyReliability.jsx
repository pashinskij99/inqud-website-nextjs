import Image from 'next/image';
import { InView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import { StyledSafetyReliabilitySection } from './SafetyReliability.styled';
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  StyledAccordionLoading,
} from '../../CompanySections/FeaturesSection/FeaturesSection.styled';
import img from '../../../assets/images/crypto-widget/page/reliability/shield.png';
import { keysForLocale } from '@/config/keysForLocale';
import { useIntervalStep } from '@/hooks/useIntervalStep';

export default function SafetyReliability() {
  const t = useTranslations('crypto_centre_page.safety_&_reliability_section');
  const tTitles = useTranslations(
    'crypto_centre_page.safety_&_reliability_section.items_title'
  );
  const tDescriptions = useTranslations(
    'crypto_centre_page.safety_&_reliability_section.items_description'
  );

  const accordionData = [
    {
      key: 0,
      id: '01.',
      title: tTitles(keysForLocale.keys3[0]),
      description: tDescriptions(keysForLocale.keys3[0]),
      descriptionMobile: tDescriptions(keysForLocale.keys3[0]),
    },
    {
      key: 1,
      id: '02.',
      title: tTitles(keysForLocale.keys3[1]),
      description: tDescriptions(keysForLocale.keys3[1]),
      descriptionMobile: tDescriptions(keysForLocale.keys3[1]),
    },
    {
      key: 2,
      id: '03.',
      title: tTitles(keysForLocale.keys3[2]),
      description: tDescriptions(keysForLocale.keys3[2]),
      descriptionMobile: tDescriptions(keysForLocale.keys3[2]),
    },
  ];

  const {
    setWidth,
    handleInView,
    handleChange,
    expanded,
    isInterval,
    percent,
  } = useIntervalStep({ accordionData });

  return (
    <InView as={StyledSafetyReliabilitySection} onChange={handleInView}>
      <div className="container">
        <div className="left-side">
          <StyledTypographyUrbanistH2 className="title">
            {t('title')}
          </StyledTypographyUrbanistH2>

          <div className="accordion">
            {accordionData.map(
              ({ key, id, title, description, descriptionMobile }) => (
                <AccordionItem
                  key={key}
                  id={key}
                  number={id}
                  title={title}
                  description={description}
                  descriptionMobile={descriptionMobile}
                  expanded={expanded}
                  handleChange={handleChange}
                  width={setWidth}
                  isInterval={isInterval}
                  percent={percent}
                  count={accordionData.length - 1}
                />
              )
            )}
          </div>
        </div>

        <div className="right-side">
          <div className="cart">
            <Image
              src={img.src}
              alt="Safety & reliability"
              width={212.223}
              height={241.7}
            />
          </div>
        </div>
      </div>
    </InView>
  );
}

function AccordionItem({
  id,
  number,
  title,
  description,
  descriptionMobile,
  expanded,
  handleChange,
  width,
  isInterval,
  percent,
  count,
}) {
  return (
    <>
      <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary expanded={expanded === id}>
          <StyledTypographyUrbanistBody className="accordion-sub-title">
            {number}
          </StyledTypographyUrbanistBody>
          <StyledTypographyUrbanistH5 className="accordion-title">
            {title}
          </StyledTypographyUrbanistH5>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypographyUrbanistBody className="accordion-description accordion-description-1">
            {description}
          </StyledTypographyUrbanistBody>
          <StyledTypographyUrbanistBody className="accordion-description accordion-description-2">
            {descriptionMobile}
          </StyledTypographyUrbanistBody>
        </AccordionDetails>
      </Accordion>

      <StyledAccordionLoading
        className="line"
        isLast={id === count}
        isExpanded={expanded === id}
        width={
          expanded === id ? width({ isInterval, expanded, percent, count }) : 0
        }
      />
    </>
  );
}
