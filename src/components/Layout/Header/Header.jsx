'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { CSSTransition } from 'react-transition-group'
import Image from 'next/image'
import logo from '@/assets/icons/logo.svg'
import logoMobile from '@/assets/icons/logo-header-mobile-without-text.svg'
import { StyledHeaderWrapper } from './Header.styled'
import HeaderDropdown from './HeaderDropdown'
import {
  StyledButtonGhost,
  StyledButtonSecondary,
} from '@/components/UI/Button/Button.styled'
import { keysForLocale } from '@/config/keysForLocale'
import HeaderLanguageSelect from '@/components/Layout/Header/HeaderLanguageSelect'
import Device, {
  MOBILE,
  MOBILE_OR_TABLET,
  TABLET_OR_DESKTOP,
} from '@/components/Device/Device'

const DynamicHeader = dynamic(
  () =>
    import('./HeaderMobileMenu/HeaderMobileMenu').then((res) => res.default),
  {
    ssr: false,
  }
)

export default function Header() {
  const [active, setActive] = useState(false)

  const navListTranslate = useTranslations('header_items')
  const signButtonsTranslate = useTranslations('header_buttons_text')
  const tabsTranslate = useTranslations('header_tabs')

  const navList = [
    { id: 0, name: navListTranslate(keysForLocale.keys3[0]), href: '/company' },
    { id: 1, name: navListTranslate(keysForLocale.keys3[1]), href: '/blog' },
    {
      id: 2,
      name: navListTranslate(keysForLocale.keys3[2]),
      href: '/help-centre',
    },
  ]

  const signButton = [
    {
      id: 0,
      name: signButtonsTranslate('login'),
      className: 'signIn',
    },
    {
      id: 1,
      name: signButtonsTranslate('get_started'),
      className: 'signUp',
    },
  ]

  const handleClickHamburger = () => {
    setActive((prevState) => !prevState)
  }
  const handleClose = () => {
    setActive(false)
  }

  useEffect(() => {
    if (active) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [active])

  const pathname = usePathname()

  return (
    <StyledHeaderWrapper active={active} isHome={pathname === '/'}>
      <div className='containerHeader'>
        <div className='logoSection'>
          <Link href='/'>
            <Device device={TABLET_OR_DESKTOP}>
              <Image className='logo' src={logo} alt='logo' />
            </Device>
            <Device device={MOBILE}>
              <Image className='logo-mobile' src={logoMobile} alt='logo' />
            </Device>
          </Link>

          <div className='button-link-wrapper'>
            <Link
              href='/'
              className={clsx('button-link', {
                ['business-link']: pathname !== '/personal',
              })}
            >
              {tabsTranslate(keysForLocale.keys3[0])}
            </Link>
            <Link
              className={clsx('button-link personal-link', {
                ['business-link']: pathname === '/personal',
              })}
              href='/personal'
            >
              {tabsTranslate(keysForLocale.keys3[1])}
            </Link>
          </div>
        </div>

        <nav className='navSection'>
          <ul>
            <HeaderDropdown />

            {navList.map(({ id, name, href }) => (
              <li key={id}>
                <Link
                  className={clsx({
                    ['active']: pathname.search(href) !== -1,
                  })}
                  href={href}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='userSection'>
          <HeaderLanguageSelect className='languageMenu' />

          <button
            onClick={handleClickHamburger}
            className={clsx('hamburger', {
              ['open']: active,
            })}
          >
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </button>

          <div className='sign'>
            <Link target='_blank' href='https://cabinet.inqud.com/#/login'>
              <StyledButtonGhost className={signButton[0].className}>
                {signButton[0].name}
              </StyledButtonGhost>
            </Link>

            <Link target='_blank' href='https://cabinet.inqud.com/#/signup'>
              <StyledButtonSecondary className={signButton[1].className}>
                {signButton[1].name}
              </StyledButtonSecondary>
            </Link>
          </div>
        </div>
        <Device device={MOBILE_OR_TABLET}>
          <>
            {active ? (
              <CSSTransition
                in={active}
                timeout={{
                  enter: 0,
                  exit: 200,
                }}
                mountOnEnter
                unmountOnExit
              >
                <DynamicHeader active={active} handleClose={handleClose} />
              </CSSTransition>
            ) : null}
          </>
        </Device>
      </div>
    </StyledHeaderWrapper>
  )
}
