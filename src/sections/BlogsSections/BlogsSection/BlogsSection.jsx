import Link from 'next/link'
import { StyledBlogsSectionWrapper } from '@/sections/BlogsSections/BlogsSection/BlogsSection.styled'
import BlogCategoryNavigation from '@/sections/BlogsSections/BlogsSection/BlogCategoryNavigation'
import { BlogCart } from '@/components/BlogCart'
import image1 from '@/assets/images/blog-page/1.webp'
import image2 from '@/assets/images/blog-page/2.webp'
import image3 from '@/assets/images/blog-page/3.webp'
import image4 from '@/assets/images/blog-page/4.webp'
import image5 from '@/assets/images/blog-page/5.webp'
import image6 from '@/assets/images/blog-page/6.webp'
import image7 from '@/assets/images/blog-page/7.webp'
import image8 from '@/assets/images/blog-page/8.webp'
import image9 from '@/assets/images/blog-page/9.webp'
import image10 from '@/assets/images/blog-page/10.webp'
import image11 from '@/assets/images/blog-page/11.webp'
import image12 from '@/assets/images/blog-page/12.webp'
import { ButtonLoadMoreLarge } from '@/components/UI/Button'
import BlogPagination from '@/sections/BlogsSections/BlogsSection/BlogPagination'

function BlogsSection() {
  return (
    <StyledBlogsSectionWrapper>
      {/* eslint-disable-next-line no-use-before-define */}
      <BlogCategoryNavigation category={category} />

      <div className='container'>
        <ul className='blog-grid'>
          {/* eslint-disable-next-line no-use-before-define */}
          {data.map(({ id, date, imageSrc, subTitle, time, title }) => (
            <li key={id}>
              <Link href='/blog/1'>
                <BlogCart
                  time={time}
                  date={date}
                  title={title}
                  imageSrc={imageSrc}
                  subTitle={subTitle}
                />
              </Link>
            </li>
          ))}
        </ul>

        <ButtonLoadMoreLarge className='loadMoreButton'>
          Load more
        </ButtonLoadMoreLarge>

        <BlogPagination page={1} pageSize={12} total={322} />
      </div>
    </StyledBlogsSectionWrapper>
  )
}

export default BlogsSection

const category = [
  { name: 'ALL' },
  { name: 'onramp' },
  { name: 'offramp' },
  { name: 'cryptocurrency' },
  { name: 'gambling' },
  { name: 'betting' },
  { name: 'case studies' },
  { name: 'pink market' },
  { name: 'e-commerce' },
  { name: 'fiat' },
  { name: 'payment methods' },
]

const data = [
  {
    id: 0,
    imageSrc: image1,
    subTitle: 'cryptocurrency',
    title: 'Introduction to Cryptocurrency for Beginners',
    date: 'June 21, 2023',
    time: '5 min read',
  },
  {
    id: 1,
    imageSrc: image2,
    subTitle: 'cryptocurrency',
    title: 'Exploring the Most Promising Cryptocurrencies of 2023',
    date: 'June 21, 2023',
    time: '5 min read',
  },
  {
    id: 2,
    imageSrc: image3,
    subTitle: 'cryptocurrency',
    title: 'How to Sell Cryptocurrencies on Our Platform',
    date: 'June 21, 2023',
    time: '5 min read',
  },
  {
    id: 3,
    imageSrc: image4,
    subTitle: 'cryptocurrency',
    title: 'Introduction to Cryptocurrency for Beginners',
    date: 'June 21, 2023',
    time: '5 min read',
  },
  {
    id: 4,
    imageSrc: image5,
    subTitle: 'cryptocurrency',
    title: 'Why INQUD-like Platforms are Vital in the Crypto World',
    date: 'June 21, 2023',
    time: '5 min read',
  },
  {
    id: 5,
    imageSrc: image6,
    subTitle: 'cryptocurrency',
    title: 'Understanding Blockchain Technology',
    date: 'June 21, 2023',
    time: '5 min read',
  },
  {
    id: 6,
    imageSrc: image7,
    subTitle: 'cryptocurrency',
    title: 'Understanding Blockchain Technology',
    date: 'June 21, 2023',
    time: '5 min read',
  },
  {
    id: 7,
    imageSrc: image8,
    subTitle: 'cryptocurrency',
    title: 'How to Sell Cryptocurrencies on Our Platform',
    date: 'June 21, 2023',
    time: '5 min read',
  },
  {
    id: 8,
    imageSrc: image9,
    subTitle: 'cryptocurrency',
    title: 'Exploring the Most Promising Cryptocurrencies of 2023',
    date: 'June 21, 2023',
    time: '5 min read',
  },
  {
    id: 9,
    imageSrc: image10,
    subTitle: 'cryptocurrency',
    title: 'Introduction to Cryptocurrency for Beginners',
    date: 'June 21, 2023',
    time: '5 min read',
  },
  {
    id: 10,
    imageSrc: image11,
    subTitle: 'cryptocurrency',
    title: 'Exploring the Most Promising Cryptocurrencies of 2023',
    date: 'June 21, 2023',
    time: '5 min read',
  },
  {
    id: 11,
    imageSrc: image12,
    subTitle: 'cryptocurrency',
    title: 'How to Sell Cryptocurrencies on Our Platform',
    date: 'June 21, 2023',
    time: '5 min read',
  },
]
