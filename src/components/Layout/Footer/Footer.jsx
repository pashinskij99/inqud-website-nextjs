'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH5,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled'
import Logo from '@/assets/icons/footer-logo.svg'
import FooterForm from './components/FooterForm'

export default function Footer({ data }) {
  const footerData = [
    {
      id: 0,
      title: data.legalTitle,
      className: 'Resources',
      items: [
        {
          id: 0,
          text: data.legalList[0].name,
          href: data.legalList[0].link,
        },
        {
          id: 1,
          text: data.legalList[1].name,
          href: data.legalList[1].link,
        },
        {
          id: 2,
          text: data.legalList[2].name,
          href: data.legalList[2].link,
        },
        {
          id: 3,
          text: data.legalList[3].name,
          href: data.legalList[3].link,
        },
        {
          id: 4,
          text: data.legalList[4].name,
          href: data.legalList[4].link,
        },
      ],
    },
    {
      id: 1,
      title: data.resourcesTitle,
      className: 'Legal',
      items: [
        {
          id: 0,
          text: data.resourcesList[0].name,
          href: data.resourcesList[0].link,
        },
        {
          id: 1,
          text: data.resourcesList[1].name,
          href: data.resourcesList[1].link,
        },
        {
          id: 2,
          text: data.resourcesList[2].name,
          href: data.resourcesList[2].link,
        },
        {
          id: 4,
          text: data.resourcesList[3].name,
          href: data.resourcesList[3].link,
        },
      ],
    },
  ]

  // const social = [
  //   {
  //     id: 0,
  //     icon: <Image src={Twitter} alt='Twitter' />,
  //     href: 'https://twitter.com/inqud',
  //   },
  //   {
  //     id: 1,
  //     icon: <Image src={Facebook} alt='Facebook' />,
  //     href: 'https://www.facebook.com/Inqud-106842349102120',
  //   },
  //   {
  //     id: 2,
  //     icon: <Image src={Linkedin} alt='Linkedin' />,
  //     href: 'https://www.linkedin.com/company/inqud/about/?viewAsMember=true',
  //   },
  // ]

  return (
    <div className={styles.wrapper}>
      <div className='footerSubscribeSectionMobile'>
        <div className='container'>
          <StyledTypographyUrbanistH5 className='footerSubscribeSectionTitle'>
            {data.formTitle}
          </StyledTypographyUrbanistH5>

          <div className='footerSubscribeSectionInputWrapper'>
            <FooterForm t={data.submitButtonText} />
          </div>

          <StyledTypographyUrbanistSmallSpaces className='footerSubscribeSectionDescription'>
            {data.formDescription}
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </div>

      <div className='top'>
        <div className='container'>
          <div className='footerLogoSection'>
            <Image src={Logo} alt='Logo' />
            <StyledTypographyUrbanistBody className='footerLogoSectionText'>
              {data.mainDescription}
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
              {data.formTitle}
            </StyledTypographyUrbanistH5>

            <div className='footerSubscribeSectionInputWrapper'>
              <FooterForm t={data.submitButtonText} />
            </div>
            <StyledTypographyUrbanistSmallSpaces className='footerSubscribeSectionDescription'>
              {data.formDescription}
            </StyledTypographyUrbanistSmallSpaces>
          </div>
        </div>
      </div>

      <div className='bottom'>
        <div className='container'>
          <ul className='footerSocialWrapper'>
            {data.socialLinks.map(({ id, link, image }) => (
              <Link
                target='_blank'
                className='footerSocialLink'
                key={id}
                href={link}
              >
                <Image src={image.url} alt={link} width={32} height={32} />
              </Link>
            ))}
          </ul>

          <StyledTypographyUrbanistBody className='footerSocialAllRights'>
            {data.allRightsReserved}
          </StyledTypographyUrbanistBody>
        </div>
      </div>
    </div>
  )
}
