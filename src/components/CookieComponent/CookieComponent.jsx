'use client'

import Link from 'next/link'
import { useCookies, withCookies } from 'react-cookie'
import { StyledCookieComponentWrapper } from './CookieComponent.styled'
import { StyledTypographyUrbanistH5 } from '../UI/Typography/Typography.styled'
import CoockieIcon from '@/assets/icons/cookie.svg'
import { StyledButtonSecondaryLight } from '../UI/Button/Button.styled'

function CookieComponent() {
  const [cookies, setCookie] = useCookies(['inqud'])

  const handleClick = () => {
    setCookie('inqud', 'accept')
  }

  if (cookies.inqud) return null

  return (
    <StyledCookieComponentWrapper>
      <div className='content'>
        <div className='text'>
          <div className='icon-wrapper'>
            <CoockieIcon className='icon' />
          </div>
          <div className='text-content'>
            <StyledTypographyUrbanistH5 className='title'>
              Notice
            </StyledTypographyUrbanistH5>
            <StyledTypographyUrbanistH5 className='description'>
              We and selected partners, use cookies or similar technologies as
              specified in the{' '}
              <Link target='_blank' className='link' href='/cookie-policy'>
                cookie policy
              </Link>
              .
            </StyledTypographyUrbanistH5>
          </div>
        </div>

        <div className='btn-wrapper'>
          <StyledButtonSecondaryLight onClick={handleClick} className='btn'>
            Accept
          </StyledButtonSecondaryLight>
        </div>
      </div>
    </StyledCookieComponentWrapper>
  )
}

export default withCookies(CookieComponent)
