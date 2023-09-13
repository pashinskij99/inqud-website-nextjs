
import { performRequest } from '@/lib/datocms';
import CookiePolicyPage from '@/views/CookiePolicyPage/CookiePolicyPage';

const COOKIE_POLICY_PAGE_QUERY = `  
query MyQuery($locale: SiteLocale) {
    cookiePolicy(locale: $locale) {
    content {
      value
    }
    title
    id
    _updatedAt
}
}
`;

const getData = async (query, variables) => {
  try {
    const data = await performRequest({
      query,
      revalidate: 0,
      variables,
    });

    return data;
  } catch (error) {
    return {};
  }
};

export default async function Page({params}) {
  const data = await getData(COOKIE_POLICY_PAGE_QUERY, { locale: params.locale });
  return <CookiePolicyPage data={data}/>;
}
