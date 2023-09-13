import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext } from 'react';
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled';
import {
  StyledTeamCartWrapper,
  StyledTeamSectionWrapper,
} from './TeamSection.styled';
import { StyledLoadMoreLarge } from '@/components/UI/Button/Button.styled';
import { PageContext } from '@/contexts/PageContext/PageContext';

export default function TeamSection() {
  const {
    dataPage: { aboutUsPage: data, allTeams: teamData },
  } = useContext(PageContext);

  return (
    <StyledTeamSectionWrapper>
      <div className="container">
        <StyledTypographyUrbanistH2 className="title">
          {data.screen4Title}
        </StyledTypographyUrbanistH2>
        <StyledTypographyUrbanistBody className="description">
          {data.screen4Description}
        </StyledTypographyUrbanistBody>

        <ul className="team-grid">
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
          slidesPerView="auto"
          centeredSlides
          initialSlide={2}
          spaceBetween={8}
          updateOnWindowResize
          className="swiper-team-grid"
        >
          {teamData.map(({ id, image, social, profession, name }) => (
            <SwiperSlide className="swiper-team-grid-slide" key={id}>
              <Cart
                image={image.url}
                socials={social}
                subTitle={profession}
                title={name}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <StyledLoadMoreLarge className="more-btn">
          <StyledTypographyUrbanistBody>
            +10 {data.buttonScreen4}
          </StyledTypographyUrbanistBody>
        </StyledLoadMoreLarge>
      </div>
    </StyledTeamSectionWrapper>
  );
}

function Cart({ image, title, subTitle, socials }) {
  return (
    <StyledTeamCartWrapper>
      <div className="image-wrapper">
        <Image
          className="team-grid-item-image"
          src={image}
          alt={title}
          width={320}
          height={320}
        />
      </div>

      <StyledTypographyUrbanistH4 className="team-grid-item-title">
        {title}
      </StyledTypographyUrbanistH4>
      <StyledTypographyUrbanistBody className="team-grid-item-subTitle">
        {subTitle}
      </StyledTypographyUrbanistBody>
      <div className="team-grid-social-list">
        {socials.map(({ id, title, image }) => (
          <Link className="team-grid-social-list-link" key={id} href={title}>
            <Image src={image?.url} alt="" width={32} height={32} />
          </Link>
        ))}
      </div>
    </StyledTeamCartWrapper>
  );
}
