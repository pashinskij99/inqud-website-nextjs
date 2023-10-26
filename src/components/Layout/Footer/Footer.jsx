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
          <div className='footerResourcesSection'>
            <StyledTypographyUrbanistH5 className='footerResourcesSectionTitle'>
              {data.resourcesTitle}
            </StyledTypographyUrbanistH5>
            <ul className='footerResourcesSectionList'>
              {data.legalList.map(({ id, link, name }) => (
                <li className='footerResourcesSectionListItem' key={id}>
                  <Link href={link}>
                    <StyledTypographyUrbanistBody className='footerResourcesSectionListItemText'>
                      {name}
                    </StyledTypographyUrbanistBody>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='footerLegalSection'>
            <StyledTypographyUrbanistH5 className='footerLegalSectionTitle'>
              {data.legalTitle}
            </StyledTypographyUrbanistH5>
            <ul className='footerLegalSectionList'>
              {data.resourcesList.map(({ id, link, name }) => (
                <li className='footerLegalSectionListItem' key={id}>
                  <Link href={link}>
                    <StyledTypographyUrbanistBody className='footerLegalSectionListItemText'>
                      {name}
                    </StyledTypographyUrbanistBody>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
