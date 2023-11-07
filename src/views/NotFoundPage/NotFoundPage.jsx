'use client'

import Image from 'next/image'
import { useContext, useEffect } from 'react'
import Link from 'next-intl/link'
import { useTranslations } from 'next-intl'
import { StyledNotFoundPageWrapper } from './NotFoundPage.styled'
import picture from '@/assets/images/404/picture.png'
import image404 from '@/assets/images/404/404.png'
import { StyledButtonSecondary } from '@/components/UI/Button/Button.styled'
import { NotFoundContext } from '@/contexts/NotFoundContext/NotFoundContext'

export default function NotFoundPage() {
  const t = useTranslations('404_page')

  const { setIsNotFound } = useContext(NotFoundContext)

  useEffect(() => {
    setIsNotFound(true)

    return () => {
      setIsNotFound(false)
    }
  }, [])

  return (
    <StyledNotFoundPageWrapper>
      <Image
        className='background-image'
        src={picture.src}
        width={1912}
        height={800}
        unoptimized
        alt='background'
      />
      <div className='container'>
        <Image
          className='title-image'
          src={image404.src}
          alt='404'
          width={330.151}
          height={155}
          flex-shrink={0}
        />
        <h2 className='sub-title'>{t('sub_title')}</h2>
        <Link href='/'>
          <StyledButtonSecondary className='btn'>
            {t('button_text')}
          </StyledButtonSecondary>
        </Link>
      </div>
    </StyledNotFoundPageWrapper>
  )
}
