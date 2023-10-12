'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
  StyledBlogCartWrapper,
  StyledBlogCartWrapper2,
  StyledRelatedBlogCartWrapper,
} from '@/components/BlogCart/BlogCart.styled'
import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import Dot from '@/assets/icons/dot.svg'
import { ButtonLearnMore } from '@/components/UI/Button'

// eslint-disable-next-line no-unused-vars
export function BlogCart({ imageSrc, date, time, subTitle, title }) {
  const [currentDate, setCurrentDate] = useState({})
  const workerRef = useRef()

  useEffect(() => {
    workerRef.current = new Worker(
      new URL('../../worker/index.js', import.meta.url)
    )

    workerRef.current.onmessage = (event) => {
      setCurrentDate(event.data)
    }

    workerRef.current?.postMessage(date)
    return () => {
      workerRef.current?.terminate()
    }
  }, [date])

  return (
    <StyledBlogCartWrapper className='cart'>
      <div className='imageWrapper'>
        <Image
          src={imageSrc}
          className='image'
          alt={title}
          width={440}
          height={250}
        />
      </div>

      <StyledTypographyIBMH5 className='subTitle'>
        {subTitle}
      </StyledTypographyIBMH5>
      <StyledTypographyUrbanistH4 component='h3' className='title'>
        {title}
      </StyledTypographyUrbanistH4>

      <ButtonLearnMore>Learn more</ButtonLearnMore>
      <div className='footer'>
        <StyledTypographyUrbanistBody className='date'>
          {currentDate.date}
        </StyledTypographyUrbanistBody>
        {time ? (
          <>
            <Image className='dot' src={Dot} alt='Dot' />
            <StyledTypographyUrbanistBody className='time'>
              {time} read
            </StyledTypographyUrbanistBody>
          </>
        ) : null}
      </div>
    </StyledBlogCartWrapper>
  )
}

export function BlogCart2({ imageSrc, date, time, subTitle, title }) {
  const [currentDate, setCurrentDate] = useState({})
  const workerRef = useRef()
  useEffect(() => {
    workerRef.current = new Worker(
      new URL('../../worker/index.js', import.meta.url)
    )

    workerRef.current.onmessage = (event) => {
      setCurrentDate(event.data)
    }

    workerRef.current?.postMessage(date)
    return () => {
      workerRef.current?.terminate()
    }
  }, [date])

  return (
    <StyledBlogCartWrapper2 className='cart'>
      <Image
        src={imageSrc}
        className='image'
        alt={title}
        width={440}
        height={250}
      />

      <StyledTypographyIBMH5 className='subTitle'>
        {subTitle}
      </StyledTypographyIBMH5>
      <StyledTypographyUrbanistH4 component='h3' className='title'>
        {title}
      </StyledTypographyUrbanistH4>

      <div className='footer'>
        <StyledTypographyUrbanistBody className='date'>
          {currentDate.date}
        </StyledTypographyUrbanistBody>
        <Image className='dot' src={Dot} alt='Dot' />
        <StyledTypographyUrbanistBody className='time'>
          {time}
        </StyledTypographyUrbanistBody>
      </div>
    </StyledBlogCartWrapper2>
  )
}

export function RelatedBlogCart({ imageSrc, date, time, subTitle, title }) {
  return (
    <StyledRelatedBlogCartWrapper>
      <Image
        src={imageSrc}
        className='image'
        alt={title}
        width={440}
        height={250}
      />

      <StyledTypographyIBMH5 className='subTitle'>
        {subTitle}
      </StyledTypographyIBMH5>
      <StyledTypographyUrbanistH4 className='title'>
        {title}
      </StyledTypographyUrbanistH4>

      <div className='footer'>
        <StyledTypographyUrbanistBody className='date'>
          {date}
        </StyledTypographyUrbanistBody>
        <Image src={Dot} alt='Dot' />
        <StyledTypographyUrbanistBody className='time'>
          {time}
        </StyledTypographyUrbanistBody>
      </div>
    </StyledRelatedBlogCartWrapper>
  )
}
