'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { CSSTransition } from 'react-transition-group'
import Image from 'next/image'
import styles from './styles.module.scss'
import logo from '@/assets/icons/logo.svg'
import logoMobile from '@/assets/icons/logo-header-mobile-without-text.svg'
import {
  StyledButtonGhost,
  StyledButtonSecondary,
} from '@/components/UI/Button/Button.styled'
import { keysForLocale } from '@/config/keysForLocale'
import Device, {
  DESKTOP,
  MOBILE_OR_TABLET,
  TABLET_OR_DESKTOP,
} from '@/components/Device/Device'

const DynamicHeaderNav = dynamic(
  () => import('@/components/Layout/Header/HeaderNav/HeaderNav'),
  {
    ssr: false,
  }
)

const DynamicHeaderLanguageSelect = dynamic(
  () => import('./HeaderLanguageSelect').then((res) => res.default),
  {
    ssr: false,
  }
)

const DynamicHeader = dynamic(
  () =>
    import('./HeaderMobileMenu/HeaderMobileMenu').then((res) => res.default),
  {
    ssr: false,
  }
)

export default function Header() {
  const [active, setActive] = useState(false)

  const signButtonsTranslate = useTranslations('header_buttons_text')
  const tabsTranslate = useTranslations('header_tabs')

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
    <header
      style={{
        backgroundColor: active
          ? 'rgba(255, 255, 255, 1)'
          : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: active ? 'none' : 'blur(5px)',
        borderBottom:
          pathname === '/' ? 'none' : '1px solid rgba(0, 0, 0, 0.07)',
      }}
      className={styles.header}
    >
      {/* <StyledHeaderWrapper active={active} isHome={pathname === '/'}> */}
      <div className='containerHeader'>
        <div className='logoSection'>
          <Link href='/'>
            <Device device={TABLET_OR_DESKTOP}>
              <Image className='logo' src={logo} alt='logo' />
            </Device>
            {/* <Device device={MOBILE}> */}
            <Image className='logo-mobile' src={logoMobile} alt='logo' />
            {/* </Device> */}
          </Link>

          <div
            style={{
              display: active ? 'none' : 'flex',
            }}
            className='button-link-wrapper'
          >
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
        <Device device={DESKTOP}>
          <DynamicHeaderNav />
        </Device>

        <div className='userSection'>
          {active ? (
            <DynamicHeaderLanguageSelect
              activeStyle={active}
              className='languageMenu'
            />
          ) : null}
          <Device device={DESKTOP}>
            <DynamicHeaderLanguageSelect
              activeStyle={active}
              className='languageMenu'
            />
          </Device>

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
      {/* </StyledHeaderWrapper> */}
    </header>
  )
}
