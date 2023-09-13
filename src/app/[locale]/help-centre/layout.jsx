import HelpCenterPage from '@/views/HelpCenterPage';
import { performRequest } from '@/lib/datocms';

const HELP_CENTRE_QUERY = `
  query MyQuery($locale: SiteLocale) {
    helpCentreHero(locale: $locale) {
      title
      placeholder
      id
      button
      backButton
    }
  }
`;

const getData = async (variables) => {
  try {
    const helpCentreData = await performRequest({
      query: HELP_CENTRE_QUERY,
      revalidate: 0,
      variables,
    });

    return helpCentreData;
  } catch (error) {
    throw Error(error.message);
  }
};

export default async function layout({ children, params }) {
  const data = await getData({ locale: params.locale });
  const page = '';
  return (
    <main className="layout">
      <HelpCenterPage data={data} page={page}>
        {children}
      </HelpCenterPage>
    </main>
  );
}
