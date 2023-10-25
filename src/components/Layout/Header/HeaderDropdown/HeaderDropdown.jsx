'use client'

import { useState } from 'react'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import styles from './styles.module.scss'

export default function HeaderDropdown({ data }) {
  const dropdownList = [
    {
      id: 0,
      items: [
        {
          id: 0,
          name: data.dropdownBusinessTitle,
          href: '/',
        },
        {
          id: 1,
          name: data.dropdownBusinessLinks[0].name,
          href: data.dropdownBusinessLinks[0].link,
        },
        {
          id: 2,
          name: data.dropdownBusinessLinks[1].name,
          href: data.dropdownBusinessLinks[1].link,
        },
      ],
    },
    {
      id: 1,
      items: [],
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
    <div
      className={styles.wrapper}
      onMouseEnter={handleClick}
      onMouseLeave={handleClose}
    >
      <button
        className={clsx('dropdown-button', {
          ['active']: active,
        })}
      >
        {data.dropdownTitle}{' '}
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
    </div>
  )
}

const DynamicHeaderDropdown = dynamic(
  () => import('./components/HeaderDropdownList'),
  { ssr: false }
)
