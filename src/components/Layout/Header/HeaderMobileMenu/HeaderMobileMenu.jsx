/* eslint-disable no-unused-vars */

'use client'

import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Arrow from '@/assets/icons/arrow-down.svg'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledHeaderMobileMenu,
  StyledHeaderMobileMenuAccordion,
  StyledHeaderMobileMenuAccordionDetails,
  StyledHeaderMobileMenuAccordionSummary,
} from './HeaderMobileMenu.styled'
import { ButtonGetStarted } from '@/components/UI/Button'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import { keysForLocale } from '@/config/keysForLocale'

export default function HeaderMobileMenu({ active, handleClose }) {
  const navListTranslate = useTranslations('header_items')
  const signButtonsTranslate = useTranslations('header_buttons_text')
  const dropdownListNameTranslate = useTranslations(
    'header_nav_dropdown_dropdown_title'
  )

  const navList = [
    { id: 0, name: navListTranslate(keysForLocale.keys3[0]), href: '/company' },
    { id: 1, name: navListTranslate(keysForLocale.keys3[1]), href: '/blog' },
    {
      id: 2,
      name: navListTranslate(keysForLocale.keys3[2]),
      href: '/help-centre',
    },
  ]

  const [expanded, setExpanded] = useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  const { push } = useRouter()

  const handleClickLink = (href) => {
    push(href)
    handleClose()
  }

  return (
    <StyledHeaderMobileMenu
      className={clsx({
        ['show']: active,
        ['hide']: !active,
      })}
    >
      <div className='container'>
        <div className='headerMobileMenuNav'>
          <div>
            <AccordionComponent
              title={dropdownListNameTranslate(keysForLocale.keys2[0])}
              handleChange={handleChange}
              expanded={expanded}
              handleClickLink={handleClickLink}
            />
          </div>

          {navList.map(({ id, name, href }) => (
            <StyledTypographyUrbanistH5
              key={id}
              className='headerMobileMenuNavTitle'
              onClick={() => handleClickLink(href)}
            >
              {name}
            </StyledTypographyUrbanistH5>
          ))}
        </div>

        <div className='headerMobileMenuButtons'>
          <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
            <ButtonGetStarted onClick={handleClose}>
              {signButtonsTranslate('get_started')}
            </ButtonGetStarted>
          </Link>
          <Link target='_blank' href='https://cabinet.inqud.com/#/login'>
            <StyledButtonGhost onClick={handleClose}>
              {signButtonsTranslate('login')}
            </StyledButtonGhost>
          </Link>
        </div>
      </div>
    </StyledHeaderMobileMenu>
  )
}

function AccordionComponent({
  title,
  expanded,
  handleChange,
  handleClickLink,
}) {
  const dropdownListTitleTranslate = useTranslations(
    'header_nav_dropdown_dropdown_items_title'
  )
  const dropdownList1Translate = useTranslations(
    'header_nav_dropdown_dropdown_items_1_items'
  )
  // const dropdownList2Translate = useTranslations(
  //   'header_nav_dropdown_dropdown_items_2_items'
  // )

  const dropdownList = [
    {
      id: 0,
      items: [
        {
          id: 0,
          name: dropdownListTitleTranslate(keysForLocale.keys6[0]),
          href: '#',
        },
        {
          id: 1,
          name: dropdownList1Translate(keysForLocale.keys6[0]),
          href: '/crypto-widget',
        },
        {
          id: 2,
          name: dropdownList1Translate(keysForLocale.keys6[1]),
          href: '/inqud-api',
        },
        // {
        //   id: 3,
        //   name: dropdownList1Translate(keysForLocale.keys6[2]),
        //   href: '/',
        // },
        // {
        //   id: 4,
        //   name: dropdownList1Translate(keysForLocale.keys6[3]),
        //   href: '/',
        // },
        // {
        //   id: 5,
        //   name: dropdownList1Translate(keysForLocale.keys6[4]),
        //   href: '/',
        // },
        // {
        //   id: 6,
        //   name: dropdownList1Translate(keysForLocale.keys6[5]),
        //   href: '/',
        // },
      ],
    },
    // {
    //   id: 1,
    //   items: [
    //     {
    //       id: 0,
    //       name: dropdownListTitleTranslate(keysForLocale.keys6[1]),
    //       href: '#',
    //     },
    //     {
    //       id: 1,
    //       name: dropdownList2Translate(keysForLocale.keys6[0]),
    //       href: '/',
    //     },
    //     {
    //       id: 2,
    //       name: dropdownList2Translate(keysForLocale.keys6[1]),
    //       href: '/',
    //     },
    //     {
    //       id: 3,
    //       name: dropdownList2Translate(keysForLocale.keys6[2]),
    //       href: '/',
    //     },
    //     {
    //       id: 4,
    //       name: dropdownList2Translate(keysForLocale.keys6[3]),
    //       href: '/',
    //     },
    //     {
    //       id: 5,
    //       name: dropdownList2Translate(keysForLocale.keys6[4]),
    //       href: '/',
    //     },
    //   ],
    // },
  ]

  return (
    <div>
      <StyledHeaderMobileMenuAccordion
        expanded={expanded === title}
        onChange={handleChange(title)}
      >
        <StyledHeaderMobileMenuAccordionSummary
          expanded={expanded === title}
          expandIcon={<Image src={Arrow} alt='Arrow' />}
        >
          <StyledTypographyUrbanistH5 className='headerMobileMenuAccordionTitle'>
            {title}
          </StyledTypographyUrbanistH5>
        </StyledHeaderMobileMenuAccordionSummary>
        <StyledHeaderMobileMenuAccordionDetails expanded={expanded === title}>
          {dropdownList.map(({ id, items }) => (
            <ul className='headerMobileMenuAccordionBodyList' key={id}>
              {items.map(({ id: itemId, name, href }) => (
                <StyledTypographyUrbanistBody
                  key={itemId}
                  onClick={() => handleClickLink(href)}
                  className='headerMobileMenuAccordionBodyText'
                >
                  {name}
                </StyledTypographyUrbanistBody>
              ))}
            </ul>
          ))}
        </StyledHeaderMobileMenuAccordionDetails>
      </StyledHeaderMobileMenuAccordion>
    </div>
  )
}
