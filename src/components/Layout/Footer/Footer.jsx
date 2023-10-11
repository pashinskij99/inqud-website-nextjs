'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH5,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled'
import { StyledFooter } from './Footer.styled'
import Logo from '@/assets/icons/footer-logo.svg'
import Twitter from '@/assets/icons/twitter.svg'
import Facebook from '@/assets/icons/facebook.svg'
import Linkedin from '@/assets/icons/linkedin.svg'
import { keysForLocale } from '@/config/keysForLocale'
import FooterForm from './components/FooterForm'

export default function Footer() {
  const t = useTranslations('footer')
  const tResources = useTranslations('footer.footer_resources_items')
  const tLegal = useTranslations('footer.footer_legal_items')

  const footerData = [
    {
      id: 0,
      title: t('footer_resources_title'),
      className: 'Resources',
      items: [
        {
          id: 0,
          text: tResources(keysForLocale.keys5[0]),
          href: '/privacy-notice',
        },
        {
          id: 1,
          text: tResources(keysForLocale.keys5[1]),
          href: '/cookie-policy',
        },
        {
          id: 2,
          text: tResources(keysForLocale.keys5[2]),
          href: '/aml-cft-policy-uab',
        },
        {
          id: 3,
          text: tResources(keysForLocale.keys5[3]),
          href: '/modern-slavery-statement',
        },
        {
          id: 4,
          text: tResources(keysForLocale.keys5[4]),
          href: '/terms-of-use',
        },
        // { id: 4, text: tResources(keysForLocale.keys5[5]), href: '#' },
      ],
    },
    {
      id: 1,
      title: t('footer_legal_title'),
      className: 'Legal',
      items: [
        {
          id: 0,
          text: tLegal(keysForLocale.keys5[0]),
          href: 'https://docs.inqud.com/',
        },
        { id: 1, text: tLegal(keysForLocale.keys5[1]), href: '/blog' },
        { id: 2, text: tLegal(keysForLocale.keys5[2]), href: '/help-centre' },
        // { id: 3, text: tLegal(keysForLocale.keys5[3]), href: '/contact-us' },
        { id: 4, text: tLegal(keysForLocale.keys5[4]), href: '/contact-us' },
      ],
    },
  ]

  const social = [
    {
      id: 0,
      icon: <Image src={Twitter} alt='Twitter' />,
      href: 'https://twitter.com/inqud',
    },
    {
      id: 1,
      icon: <Image src={Facebook} alt='Facebook' />,
      href: 'https://www.facebook.com/Inqud-106842349102120',
    },
    {
      id: 2,
      icon: <Image src={Linkedin} alt='Linkedin' />,
      href: 'https://www.linkedin.com/company/inqud/about/?viewAsMember=true',
    },
    // { id: 3, icon: <Star />, href: '#' },
  ]

  return (
    <StyledFooter>
      <div className='footerSubscribeSectionMobile'>
        <div className='container'>
          <StyledTypographyUrbanistH5 className='footerSubscribeSectionTitle'>
            {t('footer_email_title')}
          </StyledTypographyUrbanistH5>

          <div className='footerSubscribeSectionInputWrapper'>
            <FooterForm t={t('footer_email_button_text')} />
          </div>

          <StyledTypographyUrbanistSmallSpaces className='footerSubscribeSectionDescription'>
            {t('footer_email_description')}
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </div>

      <div className='top'>
        <div className='container'>
          <div className='footerLogoSection'>
            <Image src={Logo} alt='Logo' />
            {/* <Logo /> */}
            <StyledTypographyUrbanistBody className='footerLogoSectionText'>
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
          <div className='footerSubscribeSection'>
            <StyledTypographyUrbanistH5 className='footerSubscribeSectionTitle'>
              {t('footer_email_title')}
            </StyledTypographyUrbanistH5>

            <div className='footerSubscribeSectionInputWrapper'>
              <FooterForm t={t('footer_email_button_text')} />
            </div>

            <StyledTypographyUrbanistSmallSpaces className='footerSubscribeSectionDescription'>
              {t('footer_email_description')}
            </StyledTypographyUrbanistSmallSpaces>
          </div>
        </div>
      </div>

      <div className='bottom'>
        <div className='container'>
          <ul className='footerSocialWrapper'>
            {social.map(({ id, href, icon }) => (
              <Link
                target='_blank'
                className='footerSocialLink'
                key={id}
                href={href}
              >
                {icon}
              </Link>
            ))}
          </ul>

          <StyledTypographyUrbanistBody className='footerSocialAllRights'>
            {t('footer_all_rights_reserved')}
          </StyledTypographyUrbanistBody>
        </div>
      </div>
    </StyledFooter>
  )
}
