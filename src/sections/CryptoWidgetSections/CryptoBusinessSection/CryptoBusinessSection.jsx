import { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled';
import {
  StyledCryptoBusinessSectionWrapper,
  StyledListItem,
  StyledListItemMobile,
} from './CryptoBusinessSection.styled';
import { keysForLocale } from '@/config/keysForLocale';

export default function CryptoBusinessSection() {
  const t = useTranslations('crypto_centre_page.your_business_section');
  const tItems1 = useTranslations(
    'crypto_centre_page.your_business_section.items1'
  );
  const tItems2 = useTranslations(
    'crypto_centre_page.your_business_section.items2'
  );
  const tItems3 = useTranslations(
    'crypto_centre_page.your_business_section.items3'
  );

  const grid = [
    {
      title: tItems1(keysForLocale.keys5[0]),
      rgb: '255, 196, 81',
      opacity: 0.2,
      color: 'rgba(82, 54, 0, 1)',
    },
    {
      title: tItems2(keysForLocale.keys5[0]),
      rgb: '255, 163, 163',
      opacity: 0.2,
      color: 'rgba(127, 0, 0, 1)',
    },
    {
      title: tItems3(keysForLocale.keys5[0]),
      rgb: '191, 255, 200',
      opacity: 0.2,
      color: 'rgba(7, 116, 83, 1)',
    },

    {
      title: tItems1(keysForLocale.keys5[1]),
      rgb: '255, 196, 81',
      opacity: 0.4,
      color: 'rgba(82, 54, 0, 1)',
    },
    {
      title: tItems2(keysForLocale.keys5[1]),
      rgb: '255, 163, 163',
      opacity: 0.4,
      color: 'rgba(127, 0, 0, 1)',
    },
    {
      title: tItems3(keysForLocale.keys5[1]),
      rgb: '191, 255, 200',
      opacity: 0.4,
      color: 'rgba(7, 116, 83, 1)',
    },

    {
      title: tItems1(keysForLocale.keys5[2]),
      rgb: '255, 196, 81',
      opacity: 0.6,
      color: 'rgba(82, 54, 0, 1)',
    },
    {
      title: tItems2(keysForLocale.keys5[2]),
      rgb: '255, 163, 163',
      opacity: 0.6,
      color: 'rgba(127, 0, 0, 1)',
    },
    {
      title: tItems3(keysForLocale.keys5[2]),
      rgb: '191, 255, 200',
      opacity: 0.6,
      color: 'rgba(7, 116, 83, 1)',
    },

    {
      title: tItems1(keysForLocale.keys5[3]),
      rgb: '255, 196, 81',
      opacity: 0.8,
      color: 'rgba(82, 54, 0, 1)',
    },
    {
      title: tItems2(keysForLocale.keys5[3]),
      rgb: '255, 163, 163',
      opacity: 0.8,
      color: 'rgba(127, 0, 0, 1)',
    },
    {
      title: tItems3(keysForLocale.keys5[3]),
      rgb: '191, 255, 200',
      opacity: 0.8,
      color: 'rgba(7, 116, 83, 1)',
    },

    {
      title: tItems1(keysForLocale.keys5[4]),
      rgb: '255, 196, 81',
      opacity: 1,
      color: 'rgba(82, 54, 0, 1)',
    },
    {
      title: tItems2(keysForLocale.keys5[4]),
      rgb: '255, 163, 163',
      opacity: 1,
      color: 'rgba(127, 0, 0, 1)',
    },
    {
      title: tItems3(keysForLocale.keys5[4]),
      rgb: '191, 255, 200',
      opacity: 1,
      color: 'rgba(7, 116, 83, 1)',
    },
  ];

  const gridSwiperElement1 = [
    {
      title: tItems1(keysForLocale.keys5[0]),
      rgb: '255, 196, 81',
      opacity: 0.2,
      color: 'rgba(82, 54, 0, 1)',
    },
    {
      title: tItems1(keysForLocale.keys5[1]),
      rgb: '255, 196, 81',
      opacity: 0.4,
      color: 'rgba(82, 54, 0, 1)',
    },
    {
      title: tItems1(keysForLocale.keys5[2]),
      rgb: '255, 196, 81',
      opacity: 0.6,
      color: 'rgba(82, 54, 0, 1)',
    },
    {
      title: tItems1(keysForLocale.keys5[3]),
      rgb: '255, 196, 81',
      opacity: 0.8,
      color: 'rgba(82, 54, 0, 1)',
    },
    {
      title: tItems1(keysForLocale.keys5[4]),
      rgb: '255, 196, 81',
      opacity: 1,
      color: 'rgba(82, 54, 0, 1)',
    },
  ];
  const gridSwiperElement2 = [
    {
      title: tItems2(keysForLocale.keys5[0]),
      rgb: '255, 163, 163',
      opacity: 0.2,
      color: 'rgba(127, 0, 0, 1)',
    },
    {
      title: tItems2(keysForLocale.keys5[1]),
      rgb: '255, 163, 163',
      opacity: 0.4,
      color: 'rgba(127, 0, 0, 1)',
    },
    {
      title: tItems2(keysForLocale.keys5[2]),
      rgb: '255, 163, 163',
      opacity: 0.6,
      color: 'rgba(127, 0, 0, 1)',
    },
    {
      title: tItems2(keysForLocale.keys5[3]),
      rgb: '255, 163, 163',
      opacity: 0.8,
      color: 'rgba(127, 0, 0, 1)',
    },
    {
      title: tItems2(keysForLocale.keys5[4]),
      rgb: '255, 163, 163',
      opacity: 1,
      color: 'rgba(127, 0, 0, 1)',
    },
  ];

  const gridSwiper = [
    [[0], gridSwiperElement1],
    [[1], gridSwiperElement2],
    [
      [2],
      [
        {
          title: tItems3(keysForLocale.keys5[0]),
          rgb: '191, 255, 200',
          opacity: 0.2,
          color: 'rgba(7, 116, 83, 1)',
        },
        {
          title: tItems3(keysForLocale.keys5[1]),
          rgb: '191, 255, 200',
          opacity: 0.4,
          color: 'rgba(7, 116, 83, 1)',
        },
        {
          title: tItems3(keysForLocale.keys5[2]),
          rgb: '191, 255, 200',
          opacity: 0.6,
          color: 'rgba(7, 116, 83, 1)',
        },

        {
          title: tItems3(keysForLocale.keys5[3]),
          rgb: '191, 255, 200',
          opacity: 0.8,
          color: 'rgba(7, 116, 83, 1)',
        },
        {
          title: tItems3(keysForLocale.keys5[4]),
          rgb: '191, 255, 200',
          opacity: 1,
          color: 'rgba(7, 116, 83, 1)',
        },
      ],
    ],
    [[3], gridSwiperElement1],
    [[4], gridSwiperElement2],
  ];

  return (
    <StyledCryptoBusinessSectionWrapper>
      <div className="container">
        <StyledTypographyUrbanistH2 className="title">
          {t('title')}
        </StyledTypographyUrbanistH2>

        <ul className="grid grid-1">
          {grid.map(({ title, rgb, opacity, color }) => (
            <Fragment key={title}>
              <StyledListItem
                rgb={rgb}
                opacity={opacity}
                key={title}
                color={color}
              >
                <StyledTypographyUrbanistH5>{title}</StyledTypographyUrbanistH5>
              </StyledListItem>
            </Fragment>
          ))}
        </ul>

        <Swiper
          className="grid grid-2"
          slidesPerView="auto"
          spaceBetween={14}
          loop
          scrollbar={{
            dragSize: 200 / 3,
            horizontalClass: 'listRequirementsSwiperScollbar',
            hide: true,
          }}
          initialSlide={2}
          modules={[Scrollbar]}
        >
          {gridSwiper.map(([key, items]) => (
            <SwiperSlide className="swiper-slide" key={key}>
              {items.map(({ title, rgb, opacity, color }) => (
                <StyledListItemMobile
                  rgb={rgb}
                  opacity={opacity}
                  key={title}
                  color={color}
                >
                  <StyledTypographyUrbanistH5>
                    {title}
                  </StyledTypographyUrbanistH5>
                </StyledListItemMobile>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </StyledCryptoBusinessSectionWrapper>
  );
}
