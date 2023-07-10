'use client'

import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
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
  { id: 0, name: 'Company' },
  { id: 1, name: 'Insights' },
  { id: 2, name: 'Help centre' },
]

const dropdownList = [
  {
    id: 0,
    items: [
      { id: 0, name: 'Business' },
      { id: 1, name: 'Crypto widget' },
      { id: 2, name: 'API' },
      { id: 3, name: 'Card 2 crypto' },
      { id: 4, name: 'Crypto exchange' },
      { id: 5, name: 'Recurring payments' },
      { id: 6, name: 'Accept crypto' },
    ],
  },
  {
    id: 1,
    items: [
      { id: 0, name: 'Personal ' },
      { id: 1, name: 'Wallet' },
      { id: 2, name: 'Exchange' },
      { id: 3, name: 'Transfer money' },
      { id: 4, name: 'Buy crypto with card' },
      { id: 5, name: 'Pink market' },
    ],
  },
]

export default function HeaderMobileMenu({ active }) {
  const [expanded, setExpanded] = useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
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
            />
          </div>


          {navList.map(({ id, name }) => (
            <StyledTypographyUrbanistH5
              key={id}
              className='headerMobileMenuNavTitle'
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

function AccordionComponent({ title, expanded, handleChange }) {
  return (
    <StyledHeaderMobileMenuAccordion
      expanded={expanded === title}
      onChange={handleChange(title)}
    >
      <StyledHeaderMobileMenuAccordionSummary expanded={expanded === title}>
        <StyledTypographyUrbanistH5 className='headerMobileMenuAccordionTitle'>
          {title}
        </StyledTypographyUrbanistH5>
      </StyledHeaderMobileMenuAccordionSummary>
      <StyledHeaderMobileMenuAccordionDetails expanded={expanded === title}>
        {dropdownList.map(({ id, items }) => (
          <ul className='headerMobileMenuAccordionBodyList' key={id}>
            {items.map(({ id: itemId, name }) => (
              <StyledTypographyUrbanistBody
                key={itemId}
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
