import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import { Fragment, useContext, useEffect } from 'react'
import { Element, Link as LinkAnchor } from 'react-scroll'
import { InView } from 'react-intersection-observer'
import { StructuredText } from 'react-datocms/structured-text'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledBlogContentSectionWrapper,
  StyledCartInfoWrapper,
  StyledCenterSide,
  StyledLeftSide,
  StyledRightSide,
} from './BlogContentSection.styled'
import Linkedin from '@/assets/icons/linkedin.svg'
import Twitter from '@/assets/icons/twitter.svg'
import Facebook from '@/assets/icons/facebook.svg'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'
import { ArticleContext } from '@/contexts/ArticleContext/ArticleContext'

export default function BlogContentSection() {
  return (
    <StyledBlogContentSectionWrapper>
      <div className='container'>
        <LeftSide />
        <CenterSide />
        <RightSide />
      </div>
    </StyledBlogContentSectionWrapper>
  )
}

const share = [
  { id: 0, icon: <Facebook />, href: '#' },
  { id: 1, icon: <Twitter />, href: '#' },
  { id: 2, icon: <Linkedin />, href: '#' },
]

function LeftSide() {
  const { activeHeader } = useContext(ArticleContext)

  const {
    data: { titlesForNavigation },
  } = useContext(BlogContext)

  return (
    <StyledLeftSide>
      <StyledTypographyUrbanistH5>Contents</StyledTypographyUrbanistH5>
      <ul className='blog-content-nav'>
        {titlesForNavigation.map((title) => (
          <li
            className={clsx('list-item', {
              ['active']: activeHeader === title.trim(),
            })}
          >
            <LinkAnchor to={title} offset={-100} spy smooth duration={500}>
              <StyledTypographyUrbanistBody
                className={clsx('title', {
                  ['active']: activeHeader === title.trim(),
                })}
              >
                {title}
              </StyledTypographyUrbanistBody>
            </LinkAnchor>
          </li>
        ))}
      </ul>

      <div className='share-wrapper'>
        <StyledTypographyUrbanistBody className='share-title'>
          Share
        </StyledTypographyUrbanistBody>

        <ul className='share'>
          {share.map(({ id, icon, href }) => (
            <li key={id}>
              <Link href={href}>{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledLeftSide>
  )
}

function CenterSide() {
  const { setActiveHeader } = useContext(ArticleContext)
  const {
    data: { bodyContent, titlesForNavigation },
  } = useContext(BlogContext)

  useEffect(() => {
    setActiveHeader(titlesForNavigation[0])
  }, [])

  return (
    <StyledCenterSide>
      {bodyContent.map(
        ({ descriptions, descriptions2, id, selectedText, title, image }) =>
          title ? (
            <Element className='content-section' name={title}>
              <InView
                threshold={0}
                as='div'
                id={title}
                rootMargin='-30% 0px -70% 0px'
                onChange={(inView) =>
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

function RightSide() {
  const { setActiveHeader } = useContext(ArticleContext)

  const {
    data: {
      industries,
      products,
      tags,
      mainTag,
      authorImage,
      professionAuthor,
      nameAuthor,
    },
  } = useContext(BlogContext)

  const subTags =
    tags.length > 0 && `, ${tags.map(({ tag }) => tag).join(', ')}`

  const blogInfo = [
    {
      id: 0,
      title: 'Industries',
      description: industries.map(({ industry }) => industry).join(', '),
    },
    {
      id: 1,
      title: 'Products',
      description: products.map(({ product }) => product).join(', '),
    },
    {
      id: 2,
      title: 'Tags',
      description: `${mainTag.tag}${subTags}`,
    },
    {
      id: 3,
      title: 'Author',
      description: [nameAuthor, professionAuthor],
      imageSrc: authorImage?.url,
    },
  ]

  return (
    <StyledRightSide>
      {blogInfo.map(({ id, title, description, imageSrc = '' }) => (
        <CartInfo
          key={id}
          title={title}
          description={description}
          imageSrc={imageSrc}
          setActiveHeader={setActiveHeader}
        />
      ))}
    </StyledRightSide>
  )
}

function CartInfo({ title, description, imageSrc = '' }) {
  const isAuthor = title === 'Author'

  return (
    <StyledCartInfoWrapper>
      <div className='info'>
        <StyledTypographyUrbanistBody className='title'>
          {title}
        </StyledTypographyUrbanistBody>

        {isAuthor ? (
          <div className='description-wrapper'>
            {description.map((item, i) => (
              <StyledTypographyUrbanistBody key={item} className='description'>
                {item}
                {description.length - 1 !== i && ', '}
              </StyledTypographyUrbanistBody>
            ))}
          </div>
        ) : (
          <StyledTypographyUrbanistBody className='description'>
            {description}
          </StyledTypographyUrbanistBody>
        )}
      </div>

      {isAuthor && imageSrc ? (
        <Image
          className='author-image'
          src={imageSrc}
          alt={title}
          width={40}
          height={40}
        />
      ) : null}
    </StyledCartInfoWrapper>
  )
}
