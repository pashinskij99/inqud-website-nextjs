import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledTeamCartWrapper,
  StyledTeamSectionWrapper,
} from './TeamSection.styled'
import image1 from '@/assets/images/company/team/image1.webp'
import image2 from '@/assets/images/company/team/image2.webp'
import image3 from '@/assets/images/company/team/image3.webp'
import image4 from '@/assets/images/company/team/image4.webp'
import Telegram from '@/assets/images/company/team/telegram.svg'
import Linkedin from '@/assets/images/company/team/linkedin.svg'
import { StyledLoadMoreLarge } from '@/components/UI/Button/Button.styled'

const grid = [
  {
    id: 0,
    title: 'Ihor',
    subTitle: 'Founder, CEO',
    socials: [
      {
        href: '#1',
        icon: <Linkedin />,
      },
      {
        href: '#2',
        icon: <Telegram />,
      },
    ],
    image: image1.src,
  },
  {
    id: 1,
    title: 'Oleh',
    subTitle: 'Founder, Product Owner',
    socials: [
      {
        href: '#1',
        icon: <Linkedin />,
      },
      {
        href: '#2',
        icon: <Telegram />,
      },
    ],
    image: image2.src,
  },
  {
    id: 2,
    title: 'Ihor',
    subTitle: 'CTO, Crypto expert',
    socials: [
      {
        href: '#1',
        icon: <Linkedin />,
      },
      {
        href: '#2',
        icon: <Telegram />,
      },
    ],
    image: image3.src,
  },
  {
    id: 3,
    title: 'Artur',
    subTitle: 'Head of customer support dept',
    socials: [
      {
        href: '#1',
        icon: <Linkedin />,
      },
      {
        href: '#2',
        icon: <Telegram />,
      },
    ],
    image: image4.src,
  },
]

export default function TeamSection() {
  return (
    <StyledTeamSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          Our team
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistBody className='description'>
          Our team consists of 10+ experienced visionaries and developers with a
          strong <br className='br-desktop' /> background in global companies
          like Google.
        </StyledTypographyUrbanistBody>

        <ul className='team-grid'>
          {grid.map(({ id, image, socials, subTitle, title }) => (
            <li key={id}>
              <Cart
                image={image}
                socials={socials}
                subTitle={subTitle}
                title={title}
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
          {grid.map(({ id, image, socials, subTitle, title }) => (
            <SwiperSlide className='swiper-team-grid-slide' key={id}>
              <Cart
                image={image}
                socials={socials}
                subTitle={subTitle}
                title={title}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <StyledLoadMoreLarge className='more-btn'>
          <StyledTypographyUrbanistBody>
            +10 more specialists
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
        {socials.map(({ href, icon }) => (
          <Link className='team-grid-social-list-link' key={href} href={href}>
            {icon}
          </Link>
        ))}
      </div>
    </StyledTeamCartWrapper>
  )
}