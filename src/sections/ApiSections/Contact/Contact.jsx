import Image from 'next/image';
import { useContext } from 'react';
import { StructuredText } from 'react-datocms/structured-text';
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled';
import { StyledContactWrapper } from './Contact.styled';
import background from '@/assets/images/api/contact/background.webp';
import { InputSendRequest, TextAreaSendRequest } from '@/components/UI/Input';
import { StyledButtonSecondary } from '@/components/UI/Button/Button.styled';
import { PageContext } from '@/contexts/PageContext/PageContext';

export default function Contact() {
  const {
    dataPage: { apiPage: data },
  } = useContext(PageContext);

  return (
    <StyledContactWrapper>
      <Image
        className="background"
        src={background.src}
        alt="Get a personalized proposal"
        fill
      />
      <div className="container">
        <form className="form">
          <StyledTypographyUrbanistH4 className="title">
            <StructuredText data={data.leadForm3Title} />
          </StyledTypographyUrbanistH4>

          <ul className="grid">
            {data.leadForm3Features.map(({ id, image, title }) => (
              <li key={id}>
                <Image src={image.url} alt="" width={48} height={48} />
                <StyledTypographyUrbanistBody className="grid-title">
                  {title}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <InputSendRequest
            className="input"
            label={data.leadForm3EmailLable}
            placeholder="example@mail.com"
          />
          <TextAreaSendRequest
            classNameWrapper="textarea"
            label={data.leadForm3MessageLable}
            placeholder={data.leadForm3MessagePlaceholder}
          />

          <StyledButtonSecondary className="submit-btn submit-btn-1">
            {data.leadForm3Button}
          </StyledButtonSecondary>
          <StyledButtonSecondary className="submit-btn submit-btn-2">
            {data.leadForm3Button}
          </StyledButtonSecondary>

          <StyledTypographyUrbanistSmallSpaces className="description">
            {data.leadForm3FooterText}
          </StyledTypographyUrbanistSmallSpaces>
        </form>
      </div>
    </StyledContactWrapper>
  );
}
