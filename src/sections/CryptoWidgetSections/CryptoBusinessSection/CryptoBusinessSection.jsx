import { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
// import { useTranslations } from 'next-intl'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledCryptoBusinessSectionWrapper,
  StyledListItem,
} from './CryptoBusinessSection.styled'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function CryptoBusinessSection() {
  const opacity = [0.2, 0.4, 0.6, 0.8, 1]
  const color = [
    'rgba(82, 54, 0, 1)',
    'rgba(127, 0, 0, 1)',
    'rgba(7, 116, 83, 1)',
  ]
  const rgb = ['255, 196, 81', '255, 163, 163', '191, 255, 200']

  const {
    dataPage: { cryptoWidgetPage: data },
  } = useContext(PageContext)

  return (
    <StyledCryptoBusinessSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          {/* {t('title')} */}
          {data.screen3Title}
        </StyledTypographyUrbanistH2>

        <ul className='grid grid-1'>
          {data.screen3List.map(({ id, list, listTitle }, listId) => (
            <li key={id} className='grid-item'>
              <StyledListItem
                rgb={rgb[listId]}
                opacity={opacity[0]}
                color={color[listId]}
              >
                <StyledTypographyUrbanistH5 className='grid-item-title'>
                  {listTitle}
                </StyledTypographyUrbanistH5>
              </StyledListItem>

              <ul className='list'>
                {list.map((text, elementId) => (
                  <li key={text} className='item'>
                    <StyledListItem
                      className='list-item-styled'
                      rgb={rgb[listId]}
                      opacity={opacity[elementId + 1]}
                      color={color[listId]}
                    >
                      <StyledTypographyUrbanistBody>
                        {text}
                      </StyledTypographyUrbanistBody>
                    </StyledListItem>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <Swiper
          className='grid grid-2'
          slidesPerView='1'
          spaceBetween={14}
          updateOnWindowResize
          centeredSlides
          loop
          scrollbar={{
            dragSize: 200 / 3,
            horizontalClass: 'listRequirementsSwiperScollbar',
            hide: true,
          }}
          initialSlide={2}
          modules={[Scrollbar]}
        >
          {data.screen3List.map(({ id, list, listTitle }, listId) => (
            <SwiperSlide className='swiper-slide' key={id}>
              <StyledListItem
                rgb={rgb[listId]}
                opacity={opacity[0]}
                color={color[listId]}
              >
                <StyledTypographyUrbanistH5 className='grid-item-title'>
                  {listTitle}
                </StyledTypographyUrbanistH5>
              </StyledListItem>

              <ul className='grid grid-2 list'>
                {list.map((text, elementId) => (
                  <li key={text} className='item'>
                    <StyledListItem
                      className='list-item-styled'
                      rgb={rgb[listId]}
                      opacity={opacity[elementId + 1]}
                      color={color[listId]}
                    >
                      <StyledTypographyUrbanistBody>
                        {text}
                      </StyledTypographyUrbanistBody>
                    </StyledListItem>
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </StyledCryptoBusinessSectionWrapper>
  )
}
