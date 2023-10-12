'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
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
      >
        {dropdownListNameTranslate('item1')}{' '}
        <svg
          width='14'
          height='8'
          viewBox='0 0 14 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M7.11066 5.1503L2.16031 0.199951L0.746094 1.61416L7.11066 7.97873L13.4752 1.61416L12.061 0.199951L7.11066 5.1503Z'
            fill='#2D3439'
          />
        </svg>
      </button>

      <div
        className={clsx('dropdown-menu-wrapper', {
          ['show']: active,
        })}
      >
        <div className='trigger' />
        {active ? (
          <DynamicHeaderDropdown
            active={active}
            dropdownList={dropdownList}
            handleClose={handleClose}
          />
        ) : null}
      </div>
    </StyledHeaderDropdownWrapper>
  )
}

const DynamicHeaderDropdown = dynamic(
  () => import('./components/HeaderDropdownList'),
  { ssr: false }
)
