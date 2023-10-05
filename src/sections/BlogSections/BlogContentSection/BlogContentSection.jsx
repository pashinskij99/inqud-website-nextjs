import clsx from 'clsx'
import Image from 'next/image'
import { useContext } from 'react'
// import { Link as LinkAnchor } from 'react-scroll'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'next-share'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledBlogContentSectionWrapper,
  StyledCartInfoWrapper,
  StyledLeftSide,
  StyledRightSide,
} from './BlogContentSection.styled'
import Facebook from '@/assets/icons/facebook.svg'
import Twitter from '@/assets/icons/twitter.svg'
import Linkedin from '@/assets/icons/linkedin.svg'
import { BlogContext } from '@/contexts/BlogContext/BlogContext'
import { ArticleContext } from '@/contexts/ArticleContext/ArticleContext'
import { getURL } from '@/utils/getUrl'

export default function BlogContentSection() {
  return (
    <StyledBlogContentSectionWrapper>
      <div className='container'>
        <LeftSide />
        <DynamicCenterSide />
        <RightSide />
      </div>
    </StyledBlogContentSectionWrapper>
  )
}

function LeftSide() {
  const { activeHeader } = useContext(ArticleContext)
  const pathname = usePathname()

  const {
    blogDetails: { titlesForNavigation },
  } = useContext(BlogContext)

  const handleClick = async (title) => {
    const scroller = await import('react-scroll').then((res) => res.scroller)

    scroller.scrollTo(title, {
      offset: -100,
      spy: true,
      smooth: true,
      duration: 500,
    })
  }

  return (
    <StyledLeftSide>
      <StyledTypographyUrbanistH5 className='contents-title'>
        Contents
      </StyledTypographyUrbanistH5>
      <ul className='blog-content-nav'>
        {titlesForNavigation?.map((title) => (
          <li
            className={clsx('list-item', {
              ['active']: activeHeader === title.trim(),
            })}
          >
            {/* <LinkAnchor
              to={title.trim()}
              offset={-100}
              spy
              smooth
              duration={500}
            > */}
            <StyledTypographyUrbanistBody
              onClick={() => handleClick(title.trim())}
              className={clsx('title', {
                ['active']: activeHeader === title.trim(),
              })}
            >
              {title}
            </StyledTypographyUrbanistBody>
            {/* </LinkAnchor> */}
          </li>
        ))}
      </ul>

      <div className='share-wrapper'>
        <StyledTypographyUrbanistBody className='share-title'>
          Share
        </StyledTypographyUrbanistBody>

        <ul className='share'>
          <FacebookShareButton url={getURL(pathname)}>
            <Facebook />
          </FacebookShareButton>
          <LinkedinShareButton url={getURL(pathname)}>
            <Linkedin />
          </LinkedinShareButton>
          <TwitterShareButton url={getURL(pathname)}>
            <Twitter />
          </TwitterShareButton>
        </ul>
      </div>
    </StyledLeftSide>
  )
}

const DynamicCenterSide = dynamic(
  () => import('./components/CenterSide').then((res) => res.CenterSide),
  { ssr: false }
)

function RightSide() {
  const { setActiveHeader } = useContext(ArticleContext)

  const {
    blogDetails: {
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
      {blogInfo?.map(({ id, title, description, imageSrc = '' }) => (
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
            <StyledTypographyUrbanistBody className='description'>
              {description[0]}
            </StyledTypographyUrbanistBody>

            <StyledTypographyUrbanistBody className='description'>
              {description.length > 1 ? <>,&nbsp;</> : null}
            </StyledTypographyUrbanistBody>

            <StyledTypographyUrbanistBody className='description'>
              {description[1]}
            </StyledTypographyUrbanistBody>
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
