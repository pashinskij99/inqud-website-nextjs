import { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import {
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledCryptoBusinessSectionWrapper,
  StyledListItem,
  StyledListItemMobile,
} from './CryptoBusinessSection.styled'

const grid = [
  {
    title: 'Your goals',
    rgb: '255, 196, 81',
    opacity: 0.2,
    color: 'rgba(82, 54, 0, 1)',
  },
  {
    title: 'Obstacles',
    rgb: '255, 163, 163',
    opacity: 0.2,
    color: 'rgba(127, 0, 0, 1)',
  },
  {
    title: 'Inqud painkillers',
    rgb: '191, 255, 200',
    opacity: 0.2,
    color: 'rgba(7, 116, 83, 1)',
  },

  {
    title: 'Maximize client profitability',
    rgb: '255, 196, 81',
    opacity: 0.4,
    color: 'rgba(82, 54, 0, 1)',
  },
  {
    title: 'Chargebacks',
    rgb: '255, 163, 163',
    opacity: 0.4,
    color: 'rgba(127, 0, 0, 1)',
  },
  {
    title: 'Zero chargebacks system',
    rgb: '191, 255, 200',
    opacity: 0.4,
    color: 'rgba(7, 116, 83, 1)',
  },

  {
    title: 'Tap into a new market & expand customer base',
    rgb: '255, 196, 81',
    opacity: 0.6,
    color: 'rgba(82, 54, 0, 1)',
  },
  {
    title: 'Constant search for new payment providers',
    rgb: '255, 163, 163',
    opacity: 0.6,
    color: 'rgba(127, 0, 0, 1)',
  },
  {
    title: 'Reliable expert & payment provider in your niche',
    rgb: '191, 255, 200',
    opacity: 0.6,
    color: 'rgba(7, 116, 83, 1)',
  },

  {
    title: 'Increase customer satisfaction',
    rgb: '255, 196, 81',
    opacity: 0.8,
    color: 'rgba(82, 54, 0, 1)',
  },
  {
    title: 'Churn of existing customers',
    rgb: '255, 163, 163',
    opacity: 0.8,
    color: 'rgba(127, 0, 0, 1)',
  },
  {
    title: 'New crypto payment option introduced',
    rgb: '191, 255, 200',
    opacity: 0.8,
    color: 'rgba(7, 116, 83, 1)',
  },

  {
    title: 'Get more profit',
    rgb: '255, 196, 81',
    opacity: 1,
    color: 'rgba(82, 54, 0, 1)',
  },
  {
    title: 'No swift, resource-saving solutions',
    rgb: '255, 163, 163',
    opacity: 1,
    color: 'rgba(127, 0, 0, 1)',
  },
  {
    title: 'Inqud crypto widget',
    rgb: '191, 255, 200',
    opacity: 1,
    color: 'rgba(7, 116, 83, 1)',
  },
]

const gridSwiper = [
  [
    [0],
    [
      {
        title: 'Your goals',
        rgb: '255, 196, 81',
        opacity: 0.2,
        color: 'rgba(82, 54, 0, 1)',
      },
      {
        title: 'Maximize client profitability',
        rgb: '255, 196, 81',
        opacity: 0.4,
        color: 'rgba(82, 54, 0, 1)',
      },
      {
        title: 'Tap into a new market & expand customer base',
        rgb: '255, 196, 81',
        opacity: 0.6,
        color: 'rgba(82, 54, 0, 1)',
      },
      {
        title: 'Increase customer satisfaction',
        rgb: '255, 196, 81',
        opacity: 0.8,
        color: 'rgba(82, 54, 0, 1)',
      },
      {
        title: 'Get more profit',
        rgb: '255, 196, 81',
        opacity: 1,
        color: 'rgba(82, 54, 0, 1)',
      },
    ],
  ],
  [
    [1],
    [
      {
        title: 'Obstacles',
        rgb: '255, 163, 163',
        opacity: 0.2,
        color: 'rgba(127, 0, 0, 1)',
      },
      {
        title: 'Chargebacks',
        rgb: '255, 163, 163',
        opacity: 0.4,
        color: 'rgba(127, 0, 0, 1)',
      },
      {
        title: 'Constant search for new payment providers',
        rgb: '255, 163, 163',
        opacity: 0.6,
        color: 'rgba(127, 0, 0, 1)',
      },
      {
        title: 'Churn of existing customers',
        rgb: '255, 163, 163',
        opacity: 0.8,
        color: 'rgba(127, 0, 0, 1)',
      },
      {
        title: 'No swift, resource-saving solutions',
        rgb: '255, 163, 163',
        opacity: 1,
        color: 'rgba(127, 0, 0, 1)',
      },
    ],
  ],
  [
    [2],
    [
      {
        title: 'Inqud painkillers',
        rgb: '191, 255, 200',
        opacity: 0.2,
        color: 'rgba(7, 116, 83, 1)',
      },
      {
        title: 'Zero chargebacks system',
        rgb: '191, 255, 200',
        opacity: 0.4,
        color: 'rgba(7, 116, 83, 1)',
      },
      {
        title: 'Reliable expert & payment provider in your niche',
        rgb: '191, 255, 200',
        opacity: 0.6,
        color: 'rgba(7, 116, 83, 1)',
      },

      {
        title: 'New crypto payment option introduced',
        rgb: '191, 255, 200',
        opacity: 0.8,
        color: 'rgba(7, 116, 83, 1)',
      },
      {
        title: 'Inqud crypto widget',
        rgb: '191, 255, 200',
        opacity: 1,
        color: 'rgba(7, 116, 83, 1)',
      },
    ],
  ],
  [
    [3],
    [
      {
        title: 'Your goals',
        rgb: '255, 196, 81',
        opacity: 0.2,
        color: 'rgba(82, 54, 0, 1)',
      },
      {
        title: 'Maximize client profitability',
        rgb: '255, 196, 81',
        opacity: 0.4,
        color: 'rgba(82, 54, 0, 1)',
      },
      {
        title: 'Tap into a new market & expand customer base',
        rgb: '255, 196, 81',
        opacity: 0.6,
        color: 'rgba(82, 54, 0, 1)',
      },
      {
        title: 'Increase customer satisfaction',
        rgb: '255, 196, 81',
        opacity: 0.8,
        color: 'rgba(82, 54, 0, 1)',
      },
      {
        title: 'Get more profit',
        rgb: '255, 196, 81',
        opacity: 1,
        color: 'rgba(82, 54, 0, 1)',
      },
    ],
  ],
  [
    [4],
    [
      {
        title: 'Obstacles',
        rgb: '255, 163, 163',
        opacity: 0.2,
        color: 'rgba(127, 0, 0, 1)',
      },
      {
        title: 'Chargebacks',
        rgb: '255, 163, 163',
        opacity: 0.4,
        color: 'rgba(127, 0, 0, 1)',
      },
      {
        title: 'Constant search for new payment providers',
        rgb: '255, 163, 163',
        opacity: 0.6,
        color: 'rgba(127, 0, 0, 1)',
      },
      {
        title: 'Churn of existing customers',
        rgb: '255, 163, 163',
        opacity: 0.8,
        color: 'rgba(127, 0, 0, 1)',
      },
      {
        title: 'No swift, resource-saving solutions',
        rgb: '255, 163, 163',
        opacity: 1,
        color: 'rgba(127, 0, 0, 1)',
      },
    ],
  ],
  // [
  //   [5],
  //   [
  //     {
  //       title: 'Inqud painkillers',
  //       rgb: '191, 255, 200',
  //       opacity: 0.2,
  //       color: 'rgba(7, 116, 83, 1)',
  //     },
  //     {
  //       title: 'Zero chargebacks system',
  //       rgb: '191, 255, 200',
  //       opacity: 0.4,
  //       color: 'rgba(7, 116, 83, 1)',
  //     },
  //     {
  //       title: 'Reliable expert & payment provider in your niche',
  //       rgb: '191, 255, 200',
  //       opacity: 0.6,
  //       color: 'rgba(7, 116, 83, 1)',
  //     },

  //     {
  //       title: 'New crypto payment option introduced',
  //       rgb: '191, 255, 200',
  //       opacity: 0.8,
  //       color: 'rgba(7, 116, 83, 1)',
  //     },
  //     {
  //       title: 'Inqud crypto widget',
  //       rgb: '191, 255, 200',
  //       opacity: 1,
  //       color: 'rgba(7, 116, 83, 1)',
  //     },
  //   ],
  // ],
]

export default function CryptoBusinessSection() {
  return (
    <StyledCryptoBusinessSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          Your business
        </StyledTypographyUrbanistH2>

        <ul className='grid grid-1'>
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
          className='grid grid-2'
          slidesPerView='auto'
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
          {gridSwiper.map((items) => (
            <SwiperSlide className='swiper-slide' key={items[0]}>
              {items[1].map(({ title, rgb, opacity, color }) => (
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
  )
}
