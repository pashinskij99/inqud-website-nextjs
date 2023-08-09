'use client'

import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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

const navList = [
  { id: 0, name: 'Company', href: '/company' },
  { id: 1, name: 'Insights', href: '/blog' },
  { id: 2, name: 'Help centre', href: '/help-center' },
]

const dropdownList = [
  {
    id: 0,
    items: [
      { id: 0, name: 'Business', href: '/business' },
      { id: 1, name: 'Crypto widget', href: '/crypto-widget' },
      { id: 2, name: 'API', href: '/api' },
      { id: 3, name: 'Card 2 crypto', href: '/' },
      { id: 4, name: 'Crypto exchange', href: '/' },
      { id: 5, name: 'Recurring payments', href: '/' },
      { id: 6, name: 'Accept crypto', href: '/' },
    ],
  },
  {
    id: 1,
    items: [
      { id: 0, name: 'Personal ', href: '/' },
      { id: 1, name: 'Wallet', href: '/' },
      { id: 2, name: 'Exchange', href: '/' },
      { id: 3, name: 'Transfer money', href: '/' },
      { id: 4, name: 'Buy crypto with card', href: '/' },
      { id: 5, name: 'Pink market', href: '/' },
    ],
  },
]

export default function HeaderMobileMenu({ active, handleClose }) {
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
              title='Products'
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
            <ButtonGetStarted>Get started</ButtonGetStarted>
          </Link>
          <StyledButtonGhost>Log in</StyledButtonGhost>
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
  return (
    <StyledHeaderMobileMenuAccordion
      expanded={expanded === title}
      onChange={handleChange(title)}
    >
      <StyledHeaderMobileMenuAccordionSummary
        expanded={expanded === title}
        expandIcon={<Arrow />}
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
  )
}
