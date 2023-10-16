import { toNextMetadata } from 'react-datocms'
import HomePage from '@/views/HomePage'
import { performRequest } from '@/lib/datocms'
import { PAGE_SEO_QUERY } from '@/lib/datocmsQuery'

export async function generateMetadata() {
  const response = await performRequest({
    query: PAGE_SEO_QUERY('homePage'),
    revalidate: 360,
  })

  return toNextMetadata([...response.homePage.seo])
}

export default async function Home({ params }) {
  return <HomePage params={params} />
}
