import { useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next-intl/client'
import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useWindowSize } from '@uidotdev/usehooks'
import Image from 'next/image'
import { StyledHeaderLanguageSelectWrapper } from './HeaderLanguageSelect.styled'
import Planet from '@/assets/icons/planet.svg'
import Check from '@/assets/icons/check.svg'
// import Arrow from '@/assets/icons/arrow-down.svg'
import { responseBreakPoint } from '@/utils/response'

const languages = [
  { id: 0, name: 'English (US)', value: 'EN', locale: 'en' },
  // { id: 1, name: 'Ukrainian', value: 'UK', locale: 'uk' },
  // { id: 3, name: 'Español', value: 'ES', locale: 'es' },
  // { id: 2, name: 'Russian', value: 'RU', locale: 'ru' },
]

export default function HeaderLanguageSelect({ className }) {
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

  const size = useWindowSize()

  return (
    <StyledHeaderLanguageSelectWrapper
      onMouseEnter={
        size.width && size.width > responseBreakPoint.mobile
          ? handleClick
          : () => {}
      }
      onMouseLeave={
        size.width && size.width > responseBreakPoint.mobile
          ? handleClose
          : () => {}
      }
      onClick={
        size.width && size.width > responseBreakPoint.mobile
          ? handleClick
          : () => {}
      }
      onTouchStart={handleClick}
      className={className}
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
        <ul
          className={clsx({
            ['show']: active,
            ['hide']: !active,
          })}
        >
          {languages.map(({ id, name, value, locale: localeLang }) => (
            <li key={id}>
              <button onClick={() => handleLangClick(value, localeLang)}>
                {language.toLowerCase() === localeLang && (
                  <Image src={Check} alt='check' />
                )}{' '}
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </StyledHeaderLanguageSelectWrapper>
  )
}
