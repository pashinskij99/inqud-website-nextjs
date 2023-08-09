'use client'

import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import { StyledHeaderDropdownWrapper } from './HeaderDropdown.styled'

const dropdownList = [
  {
    id: 0,
    items: [
      { id: 0, name: 'Business', href: '/' },
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

export default function HeaderDropdown() {
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
        Products <ArrowDown />
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
