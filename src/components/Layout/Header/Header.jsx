'use client'

import {useEffect, useState} from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import Logo from '../../../assets/icons/logo.svg'
import LogoMobile from '../../../assets/icons/logo-header-mobile-without-text.svg'
import {StyledHeaderWrapper} from './Header.styled'
import HeaderDropdown from './HeaderDropdown'
import HeaderLanguageSelect from './HeaderLanguageSelect'
import {
  StyledButtonGhost,
  StyledButtonSecondary,
} from '@/components/UI/Button/Button.styled'
import HeaderMobileMenu from './HeaderMobileMenu'
import HeaderTabs from './HeaderTabs'

const navList = [
  {id: 0, name: 'Company', href: '/company'},
  {id: 1, name: 'Insights', href: '/blog'},
  {id: 2, name: 'Help centre', href: '/help-center'},
]

const signButton = [
  {id: 0, name: 'Log in', className: 'signIn'},
  {id: 1, name: 'Get started', className: 'signUp'},
]

export default function Header() {
  const [active, setActive] = useState(false)

  const handleClickHamburger = () => {
    setActive((prevState) => !prevState)
  }
  const handleClose = () => {
    setActive(false)
  }

  const [isTop, setIsTop] = useState(true)

  const scrollHandler = () => {
    setIsTop(window.pageYOffset <= 20)
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
      <div className="containerHeader">
        <div className="logoSection">
          <Link href="/">
            <Logo className="logo"/>
            <LogoMobile className="logo-mobile"/>
          </Link>

          <HeaderTabs/>
        </div>

        <nav className="navSection">
          <ul>
            <HeaderDropdown/>

            {navList.map(({id, name, href}) => (
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

        <div className="userSection">
          <HeaderLanguageSelect className="languageMenu"/>

          <button
            onClick={handleClickHamburger}
            className={clsx('hamburger', {
              ['open']: active,
            })}
          >
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
          </button>

          <div className="sign">
            <Link target="_blank" href="https://cabinet.inqud.com/#/login">
              <StyledButtonGhost className={signButton[0].className}>
                {signButton[0].name}
              </StyledButtonGhost>
            </Link>

            <Link target="_blank" href="https://cabinet.inqud.com/#/signup">
              <StyledButtonSecondary className={signButton[1].className}>
                {signButton[1].name}
              </StyledButtonSecondary>
            </Link>
          </div>
        </div>

        <HeaderMobileMenu active={active} handleClose={handleClose}/>
      </div>
    </StyledHeaderWrapper>
  )
}
