import Image from 'next/image'
import { StructuredText } from 'react-datocms/structured-text'
import { Element } from 'react-scroll'
import { useEffect, useContext } from 'react'
import InView from '@/components/InView'
import { StyledCenterSide } from '../BlogContentSection.styled'
import {
  StyledTypographyUrbanistH5,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'
import { ArticleContext } from '@/contexts/ArticleContext/ArticleContext'

export function CenterSide() {
  const { setActiveHeader } = useContext(ArticleContext)
  const {
    blogDetails: { bodyContent, titlesForNavigation },
  } = useContext(BlogContext)

  useEffect(() => {
    if (titlesForNavigation?.length) {
      setActiveHeader(titlesForNavigation[0])
    }
  }, [])

  return (
    <StyledCenterSide>
      {bodyContent?.map(
        ({ descriptions, descriptions2, id, selectedText, title, image }) =>
          title ? (
            <Element className='content-section' name={title.trim()}>
              <InView
                options={{
                  threshold: 0,
                  rootMargin: '-30% 0px -70% 0px',
                }}
                as='div'
                id={title}
                onView={(inView) =>
                  inView ? setActiveHeader(title.trim()) : null
                }
              >
                <Content
                  key={id}
                  title={title}
                  descriptions={descriptions}
                  image={image}
                  selectedText={selectedText}
                  descriptions1={descriptions2}
                />
              </InView>
            </Element>
          ) : (
            <Content
              key={id}
              title={title}
              descriptions={descriptions}
              image={image}
              selectedText={selectedText}
              descriptions1={descriptions2}
            />
          )
      )}
    </StyledCenterSide>
  )
}

function Content({ title, descriptions, descriptions1, image, selectedText }) {
  return (
    <div className='content-section'>
      {title && (
        <StyledTypographyUrbanistH4 className='title'>
          {title}
        </StyledTypographyUrbanistH4>
      )}

      <Description descriptions={descriptions} />

      {image?.url && (
        <Image
          className='image'
          src={image.url}
          width={680}
          height={448}
          alt='image'
        />
      )}

      {selectedText && (
        <StyledTypographyUrbanistH5 className='separated'>
          {selectedText}
        </StyledTypographyUrbanistH5>
      )}

      <Description descriptions={descriptions1} />
    </div>
  )
}

function Description({ descriptions }) {
  return (
    descriptions?.length > 0 && (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {descriptions?.map(({ id, description }) => (
          <StructuredText key={id} data={description} />
        ))}
      </>
    )
  )
}
