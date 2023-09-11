import Image from 'next/image';
import { useContext, useState } from 'react';
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled';
import { StyledCryptoWidget2Section } from './CryptoWidget2Section.styled';
import Check from '@/assets/icons/check-dark.svg';
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled';
import { ModalSubmitEmail } from '@/components/Modal';
import { ButtonGhostCrypto } from '@/components/UI/Button';
import { PageContext } from '@/contexts/PageContext/PageContext';

export default function CryptoWidget2Section() {
  const [open, setOpen] = useState(false);

  const {
    dataPage: { homePage: data },
  } = useContext(PageContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledCryptoWidget2Section>
      <div className="container">
        <div className="leftSide">
          <StyledTypographyIBMH5 className="crypto2SubTitle">
            {/* {t('sub_title')} */}
            {data.screen5SubTitle}
          </StyledTypographyIBMH5>
          <StyledTypographyUrbanistH2 className="crypto2Title">
            {/* {t('title')} */}
            {data.screen5Title}
          </StyledTypographyUrbanistH2>

          <Image
            className="crypto2WidgetTablet"
            src={data.screen5Image.url}
            width={500}
            height={500}
            alt="widget"
          />

          <StyledTypographyUrbanistBody className="crypto2Description crypto2Description-desktop">
            {/* {t('paragraph')} */}
            {data.screen5Description}
          </StyledTypographyUrbanistBody>

          <StyledTypographyUrbanistH5 className="crypto2Description crypto2Description-mobile">
            {/* {t('paragraph_mobile')} */}
            {data.screen5Description}
          </StyledTypographyUrbanistH5>

          <ul className="crypto2Grid">
            {data.screen5Features.map(
              ({ description, id, image: { url }, title }) => (
                <li
                  className="crypto2GridItem"
                  data-slug="comming soon"
                  key={id}
                >
                  <Check className="check" />
                  <Image src={url} alt={title} width={48} height={48} />
                  <StyledTypographyUrbanistH5 className="crypto2GridItemTitle">
                    {title}
                  </StyledTypographyUrbanistH5>
                  <StyledTypographyUrbanistBody className="crypto2GridItemDescription">
                    {description}
                  </StyledTypographyUrbanistBody>
                </li>
              )
            )}
          </ul>

          <div className="crypto2Footer">
            <StyledTypographyUrbanistH5 className="crypto2FooterTitle">
              {/* {t('alert_title')} */}
              {data.lead5Screen}
            </StyledTypographyUrbanistH5>
            <div className="crypto2FooterButtons">
              <ButtonGhostCrypto className="crypto2FooterButtonCrypto">
                {/* Q4 2023 */}
                {data.buttonLead2A}
              </ButtonGhostCrypto>
              <ButtonGhostCrypto className="crypto2FooterButtonCryptoCalendar">
                <Image
                  src={data.buttonLead2B.url}
                  alt={data.lead5Screen}
                  width={18}
                  height={18}
                />
                {/* <Calendar /> */}
              </ButtonGhostCrypto>
            </div>

            <StyledButtonSecondaryLight
              onClick={handleOpen}
              className="crypto2FooterApplyButton"
            >
              {data.buttonLead2C}
              {/* {t('alert_button_text')} */}
            </StyledButtonSecondaryLight>

            <ModalSubmitEmail open={open} handleClose={handleClose} />
          </div>
        </div>
        <div className="rightSide">
          {/* <Widget /> */}
          <Image
            src={data.screen5Image.url}
            alt={data.screen5Title}
            width={500}
            height={500}
          />
        </div>
      </div>
    </StyledCryptoWidget2Section>
  );
}
