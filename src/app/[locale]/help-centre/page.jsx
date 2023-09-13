import { performRequest } from '@/lib/datocms';
import { HelpCenterPageContent } from '@/views/HelpCenterPage/HelpCenterPage';

const HELP_CENTRE_QUERY = `
  query MyQuery($locale: SiteLocale) {
    allHelpCentres(locale: $locale) {
      content {
        id
        title
        descriptions {
          description {
            value
          }
          id
        }
      }
      icon {
        url
      }
      id
      mainTitle
      category {
        id
        name
      }
      typeContent {
        name
        id
      }
    }
  }
`;

const getData = async (query, variables) => {
  try {
    const helpCentreData = await performRequest({
      query,
      revalidate: 0,
      variables,
    });

    return helpCentreData;
  } catch (error) {
    throw Error(error.message);
  }
};

async function Page({ searchParams, params }) {
  const data = await getData(HELP_CENTRE_QUERY, {
    locale: params.locale,
  });

  return (
    <HelpCenterPageContent
      data={data}
      isSearch={!!searchParams.search}
      searchValue={searchParams.search || ''}
    />
  );
}

export default Page;
