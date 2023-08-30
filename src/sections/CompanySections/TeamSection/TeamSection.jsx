import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslations } from 'next-intl'
import { useContext } from 'react'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledTeamCartWrapper,
  StyledTeamSectionWrapper,
} from './TeamSection.styled'
// import image1 from '@/assets/images/company/team/image1.webp'
// import image2 from '@/assets/images/company/team/image2.webp'
// import image3 from '@/assets/images/company/team/image3.webp'
// import image4 from '@/assets/images/company/team/image4.webp'
// import Telegram from '@/assets/images/company/team/telegram.svg'
// import Linkedin from '@/assets/images/company/team/linkedin.svg'
import { StyledLoadMoreLarge } from '@/components/UI/Button/Button.styled'
// import { keysForLocale } from '@/config/keysForLocale'
import { PageContext } from '@/contexts/PageContext/PageContext'

export default function TeamSection() {
  const t = useTranslations('company_page.our_team_section')
  // const tTitles = useTranslations('company_page.our_team_section.items_title')
  // const tDescriptions = useTranslations(
  //   'company_page.our_team_section.items_description'
  // )

  const {
    dataPage: { aboutUsPage: data, allTeams: teamData },
  } = useContext(PageContext)

  // const grid = [
  //   {
  //     id: 0,
  //     title: tTitles(keysForLocale.keys4[0]),
  //     subTitle: tDescriptions(keysForLocale.keys4[0]),
  //     socials: [
  //       {
  //         href: '#1',
  //         icon: <Linkedin />,
  //       },
  //       {
  //         href: '#2',
  //         icon: <Telegram />,
  //       },
  //     ],
  //     image: image1.src,
  //   },
  //   {
  //     id: 1,
  //     title: tTitles(keysForLocale.keys4[1]),
  //     subTitle: tDescriptions(keysForLocale.keys4[1]),
  //     socials: [
  //       {
  //         href: '#1',
  //         icon: <Linkedin />,
  //       },
  //       {
  //         href: '#2',
  //         icon: <Telegram />,
  //       },
  //     ],
  //     image: image2.src,
  //   },
  //   {
  //     id: 2,
  //     title: tTitles(keysForLocale.keys4[2]),
  //     subTitle: tDescriptions(keysForLocale.keys4[2]),
  //     socials: [
  //       {
  //         href: '#1',
  //         icon: <Linkedin />,
  //       },
  //       {
  //         href: '#2',
  //         icon: <Telegram />,
  //       },
  //     ],
  //     image: image3.src,
  //   },
  //   {
  //     id: 3,
  //     title: tTitles(keysForLocale.keys4[3]),
  //     subTitle: tDescriptions(keysForLocale.keys4[3]),
  //     socials: [
  //       {
  //         href: '#1',
  //         icon: <Linkedin />,
  //       },
  //       {
  //         href: '#2',
  //         icon: <Telegram />,
  //       },
  //     ],
  //     image: image4.src,
  //   },
  // ]

  return (
    <StyledTeamSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          {/* {t('title')} */}
          {data.screen4Title}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistBody className='description'>
          {/* {t('description')} */}
          {data.screen4Description}
        </StyledTypographyUrbanistBody>

        <ul className='team-grid'>
          {teamData.map(({ id, image, social, profession, name }) => (
            <li key={id}>
              <Cart
                image={image.url}
                socials={social}
                subTitle={profession}
                title={name}
              />
            </li>
          ))}
        </ul>

        <Swiper
          slidesPerView='auto'
          centeredSlides
          initialSlide={2}
          spaceBetween={8}
          updateOnWindowResize
          className='swiper-team-grid'
        >
          {teamData.map(({ id, image, social, profession, name }) => (
            <SwiperSlide className='swiper-team-grid-slide' key={id}>
              <Cart
                image={image.url}
                socials={social}
                subTitle={profession}
                title={name}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <StyledLoadMoreLarge className='more-btn'>
          <StyledTypographyUrbanistBody>
            +10 {t('button_text')}
          </StyledTypographyUrbanistBody>
        </StyledLoadMoreLarge>
      </div>
    </StyledTeamSectionWrapper>
  )
}

function Cart({ image, title, subTitle, socials }) {
  return (
    <StyledTeamCartWrapper>
      <div className='image-wrapper'>
        <Image
          className='team-grid-item-image'
          src={image}
          alt={title}
          width={320}
          height={320}
        />
      </div>

      <StyledTypographyUrbanistH4 className='team-grid-item-title'>
        {title}
      </StyledTypographyUrbanistH4>
      <StyledTypographyUrbanistBody className='team-grid-item-subTitle'>
        {subTitle}
      </StyledTypographyUrbanistBody>
      <div className='team-grid-social-list'>
        {socials.map(({ id, title, image }) => (
          <Link className='team-grid-social-list-link' key={id} href={title}>
            <Image src={image?.url} alt='' width={32} height={32} />
          </Link>
        ))}
      </div>
    </StyledTeamCartWrapper>
  )
}
