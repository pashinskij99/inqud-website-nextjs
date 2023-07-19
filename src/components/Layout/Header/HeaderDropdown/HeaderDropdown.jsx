import Link from 'next/link'
import { useState } from 'react'
import clsx from 'clsx'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import { StyledHeaderDropdownWrapper } from './HeaderDropdown.styled'

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
              {items.map(({ id: itemId, name }) => (
                <li key={itemId}>
                  <Link onClick={handleClose} href='#1'>
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
