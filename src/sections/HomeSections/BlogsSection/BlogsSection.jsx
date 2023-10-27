import Link from 'next/link'
import dynamic from 'next/dynamic'
import { StyledTypographyUrbanistH2 } from '@/components/UI/Typography/Typography.styled'
import { StyledBlogsSection } from './BlogsSection.styled'
import { StyledButtonGhost } from '@/components/UI/Button/Button.styled'
import Device, { DESKTOP } from '@/components/Device/Device'
import HomePageBlogsSectionSwiper from './components/HomePageBlogsSectionSwiper'

const DynamicHomePageBlogsGrid = dynamic(() =>
  import('./components/HomePageBlogsGrid')
)

export default async function BlogsSection({ data, blogs }) {
  return (
    <StyledBlogsSection>
      <div className='container'>
        <div className='blogsHeader'>
          <StyledTypographyUrbanistH2 className='blogsHeaderTitle'>
            {data.title}
          </StyledTypographyUrbanistH2>
          <Link href='/blog'>
            <StyledButtonGhost className='blogsHeaderButton'>
              {data.buttonText}
            </StyledButtonGhost>
          </Link>
        </div>
        <Device device={DESKTOP}>
          <DynamicHomePageBlogsGrid blogs={blogs} />
        </Device>

        {/* <Device device={MOBILE_OR_TABLET}> */}
        <HomePageBlogsSectionSwiper blogs={blogs} />
        {/* </Device> */}

        <Link href='/blog'>
          <StyledButtonGhost className='blogsHeaderButtonMobile'>
            Go to blog
          </StyledButtonGhost>
        </Link>
      </div>
    </StyledBlogsSection>
  )
}
