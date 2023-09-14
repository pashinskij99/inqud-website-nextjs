'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Logo from '../../../assets/icons/logo.svg'
import LogoMobile from '../../../assets/icons/logo-header-mobile-without-text.svg'
import { StyledHeaderWrapper } from './Header.styled'
import HeaderDropdown from './HeaderDropdown'
import {
  StyledButtonGhost,
  StyledButtonSecondary,
} from '@/components/UI/Button/Button.styled'
import HeaderMobileMenu from './HeaderMobileMenu'
import { keysForLocale } from '@/config/keysForLocale'
import HeaderLanguageSelect from '@/components/Layout/Header/HeaderLanguageSelect'

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

  const [isTop, setIsTop] = useState(true)

  const scrollHandler = () => {
    setIsTop(window.scrollY <= 20)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)

    scrollHandler()

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

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
    <StyledHeaderWrapper
      isTop={isTop}
      active={active}
      isHome={pathname === '/'}
    >
      <div className='containerHeader'>
        <div className='logoSection'>
          <Link href='/'>
            <Logo className='logo' />
            <LogoMobile className='logo-mobile' />
          </Link>

          <div className='button-link-wrapper'>
            <Link href='/' className='button-link business-link'>
              {tabsTranslate(keysForLocale.keys3[0])}
            </Link>
            <Link className='button-link personal-link' href='/personal'>
              {tabsTranslate(keysForLocale.keys3[1])}
            </Link>
          </div>

          {/* <HeaderTabs /> */}
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

        <HeaderMobileMenu active={active} handleClose={handleClose} />
      </div>
    </StyledHeaderWrapper>
  )
}
