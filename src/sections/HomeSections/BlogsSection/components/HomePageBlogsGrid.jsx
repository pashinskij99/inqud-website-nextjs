import Link from 'next/link'
import { BlogCart } from '@/components/BlogCart'

function HomePageBlogsGrid({ blogs }) {
  return (
    <div className='blogsGrid'>
      {blogs?.map(
        ({
          id,
          _createdAt,
          timeToRead,
          slugPage,
          mainImage,
          mainTag,
          mainTitle,
        }) => (
          <Link href={`/blog/${slugPage}`} key={id}>
            <BlogCart
              time={timeToRead}
              date={_createdAt}
              title={mainTitle}
              imageSrc={mainImage?.url || ''}
              subTitle={mainTag?.tag}
            />
          </Link>
        )
      )}
    </div>
  )
}

export default HomePageBlogsGrid
