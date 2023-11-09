'use client'

import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next-intl/link'
import { useRouter } from 'next/navigation'
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

export default function HeaderMobileMenu({ active, handleClose, data }) {
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
              title={data.dropdownTitle}
              data={data}
              handleChange={handleChange}
              expanded={expanded}
              handleClickLink={handleClickLink}
            />
          </div>

          {data.nav.map(({ id, name, link }) => (
            <StyledTypographyUrbanistH5
              key={id}
              className='headerMobileMenuNavTitle'
              onClick={() => handleClickLink(link)}
            >
              {name}
            </StyledTypographyUrbanistH5>
          ))}
        </div>

        <div className='headerMobileMenuButtons'>
          <Link target='_blank' href='https://cabinet.inqud.com/#/login'>
            <ButtonGetStarted onClick={handleClose}>
              {data.buttonText1}
            </ButtonGetStarted>
          </Link>
          <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
            <StyledButtonGhost onClick={handleClose}>
              {data.buttonText2}
            </StyledButtonGhost>
          </Link>
        </div>
      </div>
    </StyledHeaderMobileMenu>
  )
}

function AccordionComponent({
  title,
  data,
  expanded,
  handleChange,
  handleClickLink,
}) {
  // const newData1 = data.dropdownPersonalLinks.map(({ id, link, name }) => ({
  //   id,
  //   name,
  //   href: link,
  // }))
  const newData2 = data.dropdownBusinessLinks.map(({ id, link, name }) => ({
    id,
    name,
    href: link,
  }))

  const listData = [
    {
      id: 1,
      items: [
        {
          id: 5,
          name: data.dropdownBusinessTitle,
          href: '/',
        },
        ...newData2,
      ],
    },
    // {
    //   id: 2,
    //   items: [
    //     {
    //       id: 5,
    //       name: data.dropdownPersonalTitle,
    //       href: '/',
    //     },
    //     ...newData2,
    //   ],
    // },
  ]

  return (
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
        {listData.map(({ id, items }) => (
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
