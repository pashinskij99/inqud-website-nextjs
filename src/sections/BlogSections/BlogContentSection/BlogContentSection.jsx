import clsx from 'clsx'
import Image from 'next/image'
import { useContext } from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'next-share'
import { usePathname } from 'next/navigation'
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
import { BlogContext } from '@/contexts/BlogContext/BlogContext'
import { ArticleContext } from '@/contexts/ArticleContext/ArticleContext'
import { getURL } from '@/utils/getUrl'
import { CenterSide } from '@/sections/BlogSections/BlogContentSection/components/CenterSide'

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
            <StyledTypographyUrbanistBody
              onClick={() => handleClick(title.trim())}
              className={clsx('title', {
                ['active']: activeHeader === title.trim(),
              })}
            >
              {title}
            </StyledTypographyUrbanistBody>
          </li>
        ))}
      </ul>

      <div className='share-wrapper'>
        <StyledTypographyUrbanistBody className='share-title'>
          Share
        </StyledTypographyUrbanistBody>

        <ul className='share'>
          <FacebookShareButton url={getURL(pathname)}>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                opacity='0.2'
                width='32'
                height='32'
                rx='8'
                fill='#819EB0'
              />
              <path
                d='M24 9.85491V22.4263C24 23.3728 23.2321 24.1406 22.2857 24.1406H19.2393V17.8121H21.4036L21.7143 15.3978H19.2393V13.8549C19.2393 13.1549 19.4321 12.6799 20.4357 12.6799H21.7143V10.5228C21.4929 10.4942 20.7357 10.4263 19.85 10.4263C18.0071 10.4263 16.7429 11.5513 16.7429 13.6192V15.4013H14.5714V17.8156H16.7464V24.1406H9.71429C8.76786 24.1406 8 23.3728 8 22.4263V9.85491C8 8.90848 8.76786 8.14062 9.71429 8.14062H22.2857C23.2321 8.14062 24 8.90848 24 9.85491Z'
                fill='white'
              />
            </svg>
          </FacebookShareButton>
          <LinkedinShareButton url={getURL(pathname)}>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                opacity='0.2'
                width='32'
                height='32'
                rx='8'
                fill='#819EB0'
              />
              <path
                d='M22 9H9.99687C9.44687 9 9 9.45313 9 10.0094V21.9906C9 22.5469 9.44687 23 9.99687 23H22C22.55 23 23 22.5469 23 21.9906V10.0094C23 9.45313 22.55 9 22 9ZM13.2312 21H11.1562V14.3187H13.2344V21H13.2312ZM12.1937 13.4062C11.5281 13.4062 10.9906 12.8656 10.9906 12.2031C10.9906 11.5406 11.5281 11 12.1937 11C12.8562 11 13.3969 11.5406 13.3969 12.2031C13.3969 12.8687 12.8594 13.4062 12.1937 13.4062V13.4062ZM21.0094 21H18.9344V17.75C18.9344 16.975 18.9187 15.9781 17.8562 15.9781C16.775 15.9781 16.6094 16.8219 16.6094 17.6938V21H14.5344V14.3187H16.525V15.2312H16.5531C16.8312 14.7062 17.5094 14.1531 18.5188 14.1531C20.6188 14.1531 21.0094 15.5375 21.0094 17.3375V21V21Z'
                fill='white'
              />
            </svg>
          </LinkedinShareButton>
          <TwitterShareButton url={getURL(pathname)}>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                opacity='0.2'
                width='32'
                height='32'
                rx='8'
                fill='#819EB0'
              />
              <path
                d='M22.3553 12.7386C22.3655 12.8807 22.3655 13.0228 22.3655 13.165C22.3655 17.5 19.066 22.4949 13.0355 22.4949C11.1777 22.4949 9.45178 21.9568 8 21.0228C8.26397 21.0533 8.51775 21.0634 8.79188 21.0634C10.3248 21.0634 11.736 20.5457 12.8629 19.6624C11.4213 19.632 10.2132 18.6878 9.79694 17.3883C10 17.4187 10.203 17.4391 10.4162 17.4391C10.7107 17.4391 11.0051 17.3984 11.2792 17.3274C9.77666 17.0228 8.64972 15.703 8.64972 14.1091V14.0685C9.08625 14.3122 9.59391 14.4645 10.1319 14.4847C9.24869 13.8959 8.67003 12.8908 8.67003 11.7538C8.67003 11.1447 8.83244 10.5863 9.11672 10.099C10.7309 12.0888 13.1573 13.3883 15.8781 13.5304C15.8274 13.2868 15.7969 13.033 15.7969 12.7792C15.7969 10.9721 17.2588 9.5 19.0761 9.5C20.0202 9.5 20.873 9.89594 21.472 10.5355C22.2131 10.3934 22.9238 10.1193 23.5533 9.74366C23.3096 10.5051 22.7918 11.1447 22.1116 11.5508C22.7715 11.4797 23.4111 11.2969 23.9999 11.0432C23.5533 11.6929 22.9949 12.2715 22.3553 12.7386V12.7386Z'
                fill='white'
              />
            </svg>
          </TwitterShareButton>
        </ul>
      </div>
    </StyledLeftSide>
  )
}

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
