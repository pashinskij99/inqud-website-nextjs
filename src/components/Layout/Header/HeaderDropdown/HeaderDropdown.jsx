'use client'

import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import { StyledHeaderDropdownWrapper } from './HeaderDropdown.styled'
import { keysForLocale } from '@/config/keysForLocale'

export default function HeaderDropdown() {
  const dropdownListNameTranslate = useTranslations(
    'header_nav_dropdown_dropdown_title'
  )
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
          href: '/',
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
    {
      id: 1,
      items: [
        // {
        //   id: 0,
        //   name: dropdownListTitleTranslate(keysForLocale.keys6[1]),
        //   href: '/',
        // },
        // {
        //   id: 1,
        //   name: dropdownList2Translate(keysForLocale.keys6[0]),
        //   href: '/',
        // },
        // {
        //   id: 2,
        //   name: dropdownList2Translate(keysForLocale.keys6[1]),
        //   href: '/',
        // },
        // {
        //   id: 3,
        //   name: dropdownList2Translate(keysForLocale.keys6[2]),
        //   href: '/',
        // },
        // {
        //   id: 4,
        //   name: dropdownList2Translate(keysForLocale.keys6[3]),
        //   href: '/',
        // },
        // {
        //   id: 5,
        //   name: dropdownList2Translate(keysForLocale.keys6[4]),
        //   href: '/',
        // },
      ],
    },
  ]

  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive((prev) => !prev)
  }

  const handleClose = () => {
    setActive(false)
  }

  return (
    <StyledHeaderDropdownWrapper
      onMouseEnter={handleClick}
      onMouseLeave={handleClose}
    >
      <button
        className={clsx('dropdown-button', {
          ['active']: active,
        })}
        // onClick={handleClick}
      >
        {dropdownListNameTranslate('item1')} <ArrowDown />
      </button>

      <div
        className={clsx('dropdown-menu-wrapper', {
          ['show']: active,
        })}
      >
        <div className='trigger' />

        <div
          className={clsx('dropdown-menu', {
            ['show']: active,
            ['hide']: !active,
          })}
        >
          {dropdownList.map(({ id, items }) => (
            <ul key={id}>
              {items.map(({ id: itemId, name, href }) => (
                <li key={itemId}>
                  <Link onClick={handleClose} href={href}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </StyledHeaderDropdownWrapper>
  )
}
