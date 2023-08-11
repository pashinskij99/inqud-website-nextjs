// import { useRouter } from 'next/router'
import HelpCenterPage from '@/views/HelpCenterPage'

// export async function generateMetadata({params, searchParams}) {
//   // console.log(params)
//   return params
// }

export default function layout({ children }) {
  // const { pathname } = useRouter()

  const page = ''
  return (
    <main className='layout'>
      <HelpCenterPage page={page}>{children}</HelpCenterPage>
      {/* <StyledHelpCenterPageWrapper>
        <HelpHeroSection page={page} />
      </StyledHelpCenterPageWrapper> */}
    </main>
  )
}
