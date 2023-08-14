'use client'

import Link from 'next/link'
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
import Star from '@/assets/icons/star.svg'
import { InputText } from '@/components/UI/Input'
import { StyledButtonSecondary } from '@/components/UI/Button/Button.styled'

const footerData = [
  {
    id: 0,
    title: 'Resources',
    items: [
      { id: 0, text: 'Privacy Notice', href: '#' },
      { id: 1, text: 'Cookie Policy', href: '#' },
      { id: 2, text: 'AML / KYC Policy', href: '#' },
      { id: 3, text: 'Terms of Use', href: '#' },
      { id: 4, text: 'Press kit', href: '#' },
    ],
  },
  {
    id: 1,
    title: 'Legal',
    items: [
      { id: 0, text: 'Documentations', href: '#' },
      { id: 1, text: 'Insights', href: '/blog' },
      { id: 2, text: 'Help Center', href: '/help-centre' },
      { id: 3, text: 'Pitch deck', href: '#' },
      { id: 4, text: 'Contact us', href: '#' },
    ],
  },
]

const social = [
  { id: 0, icon: <Twitter />, href: '#' },
  { id: 1, icon: <Facebook />, href: '#' },
  { id: 2, icon: <Linkedin />, href: '#' },
  { id: 3, icon: <Star />, href: '#' },
]

export default function Footer() {
  return (
    <StyledFooter>
      <div className='footerSubscribeSectionMobile'>
        <div className='container'>
          <StyledTypographyUrbanistH5 className='footerSubscribeSectionTitle'>
            Don&apos;t miss out on the most important updates. Subscribe now!
          </StyledTypographyUrbanistH5>

          <div className='footerSubscribeSectionInputWrapper'>
            <InputText
              type='email'
              placeholder='example@mail.com'
              className='footerSubscribeSectionInput'
            />
            <StyledButtonSecondary className='footerSubscribeSectionButton'>
              Subscribe
            </StyledButtonSecondary>
          </div>

          <StyledTypographyUrbanistSmallSpaces className='footerSubscribeSectionDescription'>
            by submitting this form, you contirm that you agree to the storing
            and processing of your personal data
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </div>

      <div className='top'>
        <div className='container'>
          <div className='footerLogoSection'>
            <Logo />
            <StyledTypographyUrbanistBody className='footerLogoSectionText'>
              Initium Limited, doing business as Switchere, is located at Flat
              2A1-A7, Pahsang Industrial Building, 16 Sun On Street, Tuen Mun,
              N.T, Hong Kong.
            </StyledTypographyUrbanistBody>
          </div>
          {footerData.map(({ id, items, title }) => (
            <div key={id} className={`footer${title}Section`}>
              <StyledTypographyUrbanistH5
                className={`footer${title}SectionTitle`}
              >
                {title}
              </StyledTypographyUrbanistH5>
              <ul className={`footer${title}SectionList`}>
                {items.map(({ id: itemId, href, text }) => (
                  <li className={`footer${title}SectionListItem`} key={itemId}>
                    <Link href={href}>
                      <StyledTypographyUrbanistBody
                        className={`footer${title}SectionListItemText`}
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
              Don&apos;t miss out on the most important updates. Subscribe now!
            </StyledTypographyUrbanistH5>

            <div className='footerSubscribeSectionInputWrapper'>
              <InputText
                type='email'
                placeholder='example@mail.com'
                className='footerSubscribeSectionInput'
              />
              <StyledButtonSecondary className='footerSubscribeSectionButton'>
                Subscribe
              </StyledButtonSecondary>
            </div>

            <StyledTypographyUrbanistSmallSpaces className='footerSubscribeSectionDescription'>
              by submitting this form, you contirm that you agree to the storing
              and processing of your personal data
            </StyledTypographyUrbanistSmallSpaces>
          </div>
        </div>
      </div>

      <div className='bottom'>
        <div className='container'>
          <ul className='footerSocialWrapper'>
            {social.map(({ id, href, icon }) => (
              <Link className='footerSocialLink' key={id} href={href}>
                {icon}
              </Link>
            ))}
          </ul>

          <StyledTypographyUrbanistBody className='footerSocialAllRights'>
            © Inqud. 2023. All rights reserved.
          </StyledTypographyUrbanistBody>
        </div>
      </div>
    </StyledFooter>
  )
}
