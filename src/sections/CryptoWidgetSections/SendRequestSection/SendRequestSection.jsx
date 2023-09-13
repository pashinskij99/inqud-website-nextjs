import Image from 'next/image';
import { useContext } from 'react';
import {
  StyledFormWrapper,
  StyledSendRequestSectionWrapper,
} from './SendRequestSection.styled';
import Message from '@/assets/icons/message.svg';
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled';
import { InputSendRequest, TextAreaSendRequest } from '@/components/UI/Input';
import { StyledButtonSecondary } from '@/components/UI/Button/Button.styled';
import background from '@/assets/images/api/contact/background.webp';
import { PageContext } from '@/contexts/PageContext/PageContext';

export default function SendRequestSection() {
  return (
    <StyledSendRequestSectionWrapper>
      <Image
        className="background"
        src={background.src}
        alt="Get a personalized proposal"
        fill
      />
      <div className="container">
        <Form />
      </div>
    </StyledSendRequestSectionWrapper>
  );
}

function Form() {
  const {
    dataPage: { cryptoWidgetPage: data },
  } = useContext(PageContext);

  const inputs = [
    {
      id: 0,
      label: data.leadForm3EmailLabel,
      placeholder: 'example@mail.com',
      name: 'email',
      type: 'email',
    },
    {
      id: 1,
      label: data.leadForm3MessageLabel,
      placeholder: data.leadForm3MessagePlaceholder,

      name: 'message',
      type: 'textarea',
    },
  ];

  return (
    <StyledFormWrapper>
      <div className="formContainer">
        <div className="header">
          <Message />
          <StyledTypographyUrbanistH3>
            {data.lead3Title}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody>
            {data.leadForm3Description}
          </StyledTypographyUrbanistBody>
        </div>
        <div className="body">
          {inputs.map(({ id, name, label, placeholder, type }) =>
            type === 'textarea' ? (
              <TextAreaSendRequest
                key={id}
                name={name}
                label={label}
                placeholder={placeholder}
              />
            ) : (
              <InputSendRequest
                key={id}
                name={name}
                label={label}
                placeholder={placeholder}
              />
            )
          )}
        </div>
        <div className="footer">
          <StyledButtonSecondary className="submit-btn">
            {data.leadForm3SubmitButton}
          </StyledButtonSecondary>
          <StyledTypographyUrbanistSmallSpaces>
            {data.leadForm3FooterText}
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </div>
      {/* </div> */}
    </StyledFormWrapper>
  );
}
