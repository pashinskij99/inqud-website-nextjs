import { useState } from 'react'
import clsx from 'clsx'
import { usePathname, useRouter } from 'next-intl/client'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Planet from '@/assets/icons/planet.svg'
import styles from './styles.module.scss'

export default function HeaderLanguageSelect({ activeStyle, className, data }) {
  const [active, setActive] = useState(false)
  const locale = useLocale()
  const [language, setLanguage] = useState(locale.toUpperCase())
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    setActive((prev) => !prev)
  }
  const handleClose = () => {
    setActive(false)
  }

  const handleLangClick = (value, locale) => {
    setLanguage(value.toUpperCase())
    router.replace(pathname, { locale, scroll: false })
    handleClose()
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    <div
      style={{
        display: activeStyle ? 'flex' : null,
      }}
      className={clsx(className, styles.wrapper)}
      onMouseEnter={handleClick}
      onMouseLeave={handleClose}
      onClick={handleClick}
      onTouchStart={handleClick}
    >
      <button
        className={clsx('button-select', {
          ['active']: active,
        })}
      >
        <Image src={Planet} alt='planet' className='planet' />
        <span>
          {language}{' '}
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
        </span>
      </button>

      <div
        className={clsx('select', {
          ['show']: active,
        })}
      >
        <div className='trigger' />
        {active ? (
          <DynamicHeaderLanguageSelectList
            active={active}
            handleLangClick={handleLangClick}
            language={language}
            languages={data.languageList}
          />
        ) : null}
      </div>
    </div>
  )
}

const DynamicHeaderLanguageSelectList = dynamic(
  () => import('./components/HeaderLanguageSelectList'),
  { ssr: false }
)
