'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next-intl/link'
import { usePathname } from 'next-intl/client'
import dynamic from 'next/dynamic'
import { CSSTransition } from 'react-transition-group'
import Image from 'next/image'
import styles from './styles.module.scss'
import {
  StyledButtonGhost,
  StyledButtonSecondary,
} from '@/components/UI/Button/Button.styled'
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
  () => import('./HeaderLanguageSelect'),
  {
    ssr: false,
  }
)

const DynamicHeader = dynamic(
  () => import('./HeaderMobileMenu/HeaderMobileMenu'),
  {
    ssr: false,
  }
)

export default function Header({ data }) {
  const [active, setActive] = useState(false)
  const signButton = [
    {
      id: 0,
      name: data.buttonText1,
      className: 'signIn',
    },
    {
      id: 1,
      name: data.buttonText2,
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
      <div className='containerHeader'>
        <div className='logoSection'>
          <Link href='/'>
            <Device device={TABLET_OR_DESKTOP}>
              <Image
                width={124.001}
                height={40}
                className='logo'
                src={data.mainLogo.url}
                alt='logo'
              />
            </Device>
            <LogoMobile className='logo-mobile' />
            {/* <Image
              className='logo-mobile'
              src={data.mainLogoMobile.url}
              alt='logo'
              width={32}
              height={32}
            /> */}
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
              {data.tabButton1}
            </Link>
            <Link
              className={clsx('button-link personal-link', {
                ['business-link']: pathname === '/personal',
              })}
              href='/personal'
            >
              {data.tabButton2}
            </Link>
          </div>
        </div>
        <Device device={DESKTOP}>
          <DynamicHeaderNav data={data} />
        </Device>

        <div className='userSection'>
          {active ? (
            <DynamicHeaderLanguageSelect
              data={data}
              activeStyle={active}
              className='languageMenu'
            />
          ) : null}
          <Device device={DESKTOP}>
            <DynamicHeaderLanguageSelect
              data={data}
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
                <DynamicHeader
                  data={data}
                  active={active}
                  handleClose={handleClose}
                />
              </CSSTransition>
            ) : null}
          </>
        </Device>
      </div>
    </header>
  )
}

function LogoMobile({ className }) {
  return (
    <svg
      className={className}
      width='32'
      height='33'
      viewBox='0 0 32 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Group 1091'>
        <g id='Group 1070'>
          <mask
            id='mask0_2001_16935'
            // eslint-disable-next-line react/style-prop-object
            style={{ maskType: 'alpha' }}
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='32'
            height='33'
          >
            <ellipse
              id='Ellipse 157'
              cx='16'
              cy='16.5'
              rx='16'
              ry='16'
              fill='#D9D9D9'
            />
          </mask>
          <g mask='url(#mask0_2001_16935)'>
            <ellipse
              id='Ellipse 158'
              cx='16'
              cy='16.5'
              rx='16'
              ry='16'
              fill='white'
            />
            <g id='Group 1069'>
              <path
                id='Rectangle 542'
                d='M-0.638672 32.4998H17.9213V18.4198C17.9213 16.299 16.2021 14.5798 14.0813 14.5798H-0.638672V32.4998Z'
                fill='#077453'
              />
              <path
                id='Rectangle 545'
                d='M19.2012 32.4998H37.7612V14.5798H23.0412C20.9204 14.5798 19.2012 16.299 19.2012 18.4198V32.4998Z'
                fill='#077453'
              />
              <path
                id='Rectangle 543'
                d='M-0.638672 13.2998H14.0813C16.2021 13.2998 17.9213 11.5806 17.9213 9.45981V-4.62017H-0.638672V13.2998Z'
                fill='#077453'
              />
              <path
                id='Rectangle 544'
                d='M19.2012 9.45981C19.2012 11.5806 20.9204 13.2998 23.0412 13.2998H37.7612V-4.62017H19.2012V9.45981Z'
                fill='#077453'
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
