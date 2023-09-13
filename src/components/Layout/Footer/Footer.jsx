'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH5,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled';
import { StyledFooter } from './Footer.styled';
import Logo from '@/assets/icons/footer-logo.svg';
import Twitter from '@/assets/icons/twitter.svg';
import Facebook from '@/assets/icons/facebook.svg';
import Linkedin from '@/assets/icons/linkedin.svg';
import Star from '@/assets/icons/star.svg';
import { InputText } from '@/components/UI/Input';
import { StyledButtonSecondary } from '@/components/UI/Button/Button.styled';
import { keysForLocale } from '@/config/keysForLocale';

export default function Footer() {
  const t = useTranslations('footer');
  const tResources = useTranslations('footer.footer_resources_items');
  const tLegal = useTranslations('footer.footer_legal_items');

  const footerData = [
    {
      id: 0,
      title: t('footer_resources_title'),
      className: 'Resources',
      items: [
        { id: 0, text: tResources(keysForLocale.keys5[0]), href: '/privacy-notice' },
        { id: 1, text: tResources(keysForLocale.keys5[1]), href: '/cookie-policy' },
        { id: 2, text: tResources(keysForLocale.keys5[2]), href: '/aml-cft-policy-uab' },
        { id: 3, text: tResources(keysForLocale.keys5[3]), href: '/modern-slavery-statement' },
        // { id: 4, text: tResources(keysForLocale.keys5[4]), href: '#' },
      ],
    },
    {
      id: 1,
      title: t('footer_legal_title'),
      className: 'Legal',
      items: [
        { id: 0, text: tLegal(keysForLocale.keys5[0]), href: '#' },
        { id: 1, text: tLegal(keysForLocale.keys5[1]), href: '/blog' },
        { id: 2, text: tLegal(keysForLocale.keys5[2]), href: '/help-centre' },
        { id: 3, text: tLegal(keysForLocale.keys5[3]), href: '#' },
        { id: 4, text: tLegal(keysForLocale.keys5[4]), href: '#' },
      ],
    },
  ];

  const social = [
    { id: 0, icon: <Twitter />, href: '#' },
    { id: 1, icon: <Facebook />, href: '#' },
    { id: 2, icon: <Linkedin />, href: '#' },
    { id: 3, icon: <Star />, href: '#' },
  ];

  return (
    <StyledFooter>
      <div className="footerSubscribeSectionMobile">
        <div className="container">
          <StyledTypographyUrbanistH5 className="footerSubscribeSectionTitle">
            {t('footer_email_title')}
          </StyledTypographyUrbanistH5>

          <div className="footerSubscribeSectionInputWrapper">
            <InputText
              type="email"
              placeholder="example@mail.com"
              className="footerSubscribeSectionInput"
            />
            <StyledButtonSecondary className="footerSubscribeSectionButton">
              {t('footer_email_button_text')}
            </StyledButtonSecondary>
          </div>

          <StyledTypographyUrbanistSmallSpaces className="footerSubscribeSectionDescription">
            {t('footer_email_description')}
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </div>

      <div className="top">
        <div className="container">
          <div className="footerLogoSection">
            <Logo />
            <StyledTypographyUrbanistBody className="footerLogoSectionText">
              {t('footer_description')}
            </StyledTypographyUrbanistBody>
          </div>
          {footerData.map(({ id, items, className, title }) => (
            <div key={id} className={`footer${className}Section`}>
              <StyledTypographyUrbanistH5
                className={`footer${className}SectionTitle`}
              >
                {title}
              </StyledTypographyUrbanistH5>
              <ul className={`footer${className}SectionList`}>
                {items.map(({ id: itemId, href, text }) => (
                  <li
                    className={`footer${className}SectionListItem`}
                    key={itemId}
                  >
                    <Link href={href}>
                      <StyledTypographyUrbanistBody
                        className={`footer${className}SectionListItemText`}
                      >
                        {text}
                      </StyledTypographyUrbanistBody>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footerSubscribeSection">
            <StyledTypographyUrbanistH5 className="footerSubscribeSectionTitle">
              {t('footer_email_title')}
            </StyledTypographyUrbanistH5>

            <div className="footerSubscribeSectionInputWrapper">
              <InputText
                type="email"
                placeholder="example@mail.com"
                className="footerSubscribeSectionInput"
              />
              <StyledButtonSecondary className="footerSubscribeSectionButton">
                {t('footer_email_button_text')}
              </StyledButtonSecondary>
            </div>

            <StyledTypographyUrbanistSmallSpaces className="footerSubscribeSectionDescription">
              {t('footer_email_description')}
            </StyledTypographyUrbanistSmallSpaces>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="container">
          <ul className="footerSocialWrapper">
            {social.map(({ id, href, icon }) => (
              <Link className="footerSocialLink" key={id} href={href}>
                {icon}
              </Link>
            ))}
          </ul>

          <StyledTypographyUrbanistBody className="footerSocialAllRights">
            {t('footer_all_rights_reserved')}
          </StyledTypographyUrbanistBody>
        </div>
      </div>
    </StyledFooter>
  );
}
