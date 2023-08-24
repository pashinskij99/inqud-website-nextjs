'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled';
import {
  StyledCoverageWrapper,
  StyledIndustriesWrapper,
  StyledOurLandscapeSection,
} from './OurLandscapeSection.styled';
import Icon1 from '@/assets/images/our-landscape/1.svg';
import Icon2 from '@/assets/images/our-landscape/2.svg';
import Icon3 from '@/assets/images/our-landscape/3.svg';

import Coverage1 from '@/assets/images/our-landscape/coverage1.svg';
import Coverage2 from '@/assets/images/our-landscape/coverage2.svg';
import Coverage3 from '@/assets/images/our-landscape/coverage3.svg';
import Coverage5 from '@/assets/images/our-landscape/coverage5.svg';
import mapImage from '@/assets/images/our-landscape/map.webp';
import { TabsComponent } from '@/components/TabsComponent/TabsComponent';
import { keysForLocale } from '@/config/keysForLocale';

export default function OurLandscapeSection() {
  const [active, setActive] = useState(0);

  const t = useTranslations('home_page.our_landscape');
  const tTabs = useTranslations('home_page.our_landscape.tabs');

  const tabs = [
    {
      id: 0,
      text: tTabs(keysForLocale.keys2[0]),
    },
    {
      id: 1,
      text: tTabs(keysForLocale.keys2[1]),
    },
  ];

  const handleClick = (id) => {
    setActive(id);
  };

  const getContent = () => {
    switch (active) {
      case 0:
        return <IndustriesTab />;
      case 1:
        return <CoverageTab />;

      default:
        return <IndustriesTab />;
    }
  };

  return (
    <StyledOurLandscapeSection className="our-landscape">
      <div className="container">
        <StyledTypographyUrbanistH2 className="ourLandscapeTitle">
          {t('title')}
        </StyledTypographyUrbanistH2>
        <TabsComponent
          tabs={tabs}
          className="ourLandscapeTabs"
          active={active}
          handleClick={handleClick}
        />

        {getContent()}
      </div>
    </StyledOurLandscapeSection>
  );
}

function CoverageTab() {
  const t = useTranslations('home_page.our_landscape');
  const tCoverageTitle = useTranslations(
    'home_page.our_landscape.coverage_list_title'
  );
  const tCoverageSubTitle = useTranslations(
    'home_page.our_landscape.coverage_list_sub_title'
  );

  const coverageList = [
    {
      id: 0,
      name: tCoverageTitle(keysForLocale.keys3[0]),
      description: tCoverageSubTitle(keysForLocale.keys3[0]),
      icon: <Coverage1 className="coverage1" />,
    },
    {
      id: 1,
      name: tCoverageTitle(keysForLocale.keys3[1]),
      description: tCoverageSubTitle(keysForLocale.keys3[1]),
      icon: (
        <>
          <Coverage2 className="coverage2 desktop" />
          <Coverage5 className="coverage5 mobile" />
        </>
      ),
    },
    {
      id: 2,
      name: tCoverageTitle(keysForLocale.keys3[2]),
      description: tCoverageSubTitle(keysForLocale.keys3[2]),
      icon: <Coverage3 className="coverage3" />,
    },
  ];

  return (
    <StyledCoverageWrapper>
      <div className="headerWrapper">
        <StyledTypographyUrbanistH5 className="ourLandscapeDescription">
          {t('description_coverage')}
        </StyledTypographyUrbanistH5>
        <ul className="list desktop">
          {coverageList.map(({ id, description, icon, name }) => (
            <li key={id}>
              <div className="coverageWrapper">{icon}</div>
              <div className="descriptionWrapper">
                <StyledTypographyUrbanistBody className="name">
                  {name}
                </StyledTypographyUrbanistBody>
                <StyledTypographyUrbanistBody className="description">
                  {description}
                </StyledTypographyUrbanistBody>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="coverageWrapper">
        <Image
          src={mapImage.src}
          width={775.02}
          height={400}
          alt={t('description_coverage')}
        />
      </div>
    </StyledCoverageWrapper>
  );
}

function IndustriesTab() {
  const t = useTranslations('home_page.our_landscape');
  const tHight = useTranslations('home_page.our_landscape.hight_risk_items');
  const tMiddle = useTranslations('home_page.our_landscape.middle_risk_items');
  const tLow = useTranslations('home_page.our_landscape.low_risk_items');

  const accordionData = [
    {
      id: 0,
      title: t('hight_risk_title'),
      icon: <Icon1 />,
      columnColor: '255, 163, 163',
      items: [
        { id: 0, title: tHight(keysForLocale.keys6[0]) },
        { id: 1, title: tHight(keysForLocale.keys6[1]) },
        { id: 2, title: tHight(keysForLocale.keys6[2]) },
        { id: 3, title: tHight(keysForLocale.keys6[3]) },
        { id: 4, title: tHight(keysForLocale.keys6[4]) },
        { id: 5, title: tHight(keysForLocale.keys6[5]) },
      ],
    },
    {
      id: 1,
      title: t('middle_risk_title'),
      icon: <Icon2 />,
      columnColor: '255, 196, 81',
      items: [
        { id: 0, title: tMiddle(keysForLocale.keys4[0]) },
        { id: 1, title: tMiddle(keysForLocale.keys4[1]) },
        { id: 2, title: tMiddle(keysForLocale.keys4[2]) },
        { id: 3, title: tMiddle(keysForLocale.keys4[3]) },
      ],
    },
    {
      id: 2,
      title: t('low_risk_title'),
      icon: <Icon3 />,
      columnColor: '129, 158, 176',
      items: [
        { id: 0, title: tLow(keysForLocale.keys4[0]) },
        { id: 1, title: tLow(keysForLocale.keys4[1]) },
        { id: 2, title: tLow(keysForLocale.keys4[2]) },
        { id: 3, title: tLow(keysForLocale.keys4[3]) },
      ],
    },
  ];

  return (
    <StyledIndustriesWrapper>
      <StyledTypographyUrbanistH5 className="ourLandscapeDescription">
        {t('description')}
      </StyledTypographyUrbanistH5>

      <div className="ourLandscapeRisk">
        {accordionData.map(
          ({ icon, id, defaultExpanded, items, title, columnColor }) => (
            <Accordion
              key={id}
              idColumn={id}
              icon={icon}
              items={items}
              title={title}
              defaultExpanded={defaultExpanded}
              columnColor={columnColor}
            />
          )
        )}
      </div>

      {/* mobile */}

      <Swiper
        className="ourLandscapeSwiper"
        slidesPerView={1}
        centeredSlides
        spaceBetween={8}
        initialSlide="1"
        loop
        height={500}
        scrollbar={{
          dragSize: 200 / 3,
          horizontalClass: 'listRequirementsSwiperScollbar',
          hide: true,
        }}
        modules={[Scrollbar]}
      >
        {accordionData.map(({ icon, id, items, title, columnColor }) => (
          <SwiperSlide className="listRequirementsSwiperItems" key={id}>
            <Accordion
              key={id}
              idColumn={id}
              icon={icon}
              items={items}
              title={title}
              columnColor={columnColor}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledIndustriesWrapper>
  );
}

const stepsOpacity = [
  [
    '0.20000000298023224',
    '0.4000000059604645',
    '0.6000000238418579',
    '0.800000011920929',
    '0.8999999761581421',
    '1',
  ],
  ['0.20000000298023224', '0.4000000059604645', '0.6000000238418579', '1'],
  ['0.20000000298023224', '0.4000000059604645', '0.6000000238418579', '1'],
];

function Accordion({ idColumn, icon, items, title, columnColor }) {
  return (
    <div className="ourLandscapeAccordion">
      <div className="ourLandscapeAccordionTitle">
        {icon}
        <StyledTypographyIBMH5>{title}</StyledTypographyIBMH5>
      </div>
      {items.map(({ id, title: accordionTitle }) => (
        <div
          style={{
            backgroundColor: `rgba(${columnColor}, ${
              id === items.length - 1
                ? stepsOpacity[idColumn][0]
                : stepsOpacity[idColumn][stepsOpacity[idColumn].length - 1 - id]
            })`,
            flex: id === items.length - 1 ? 1 : 0,
            alignItems: id === items.length - 1 ? 'start' : 'start',
          }}
          className="accordion-prob"
          key={id}
        >
          <StyledTypographyUrbanistBody>
            {accordionTitle}
          </StyledTypographyUrbanistBody>
          <div />
        </div>
      ))}
    </div>
  );
}
