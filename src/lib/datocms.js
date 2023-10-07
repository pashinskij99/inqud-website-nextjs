export const getPageData = async ({ variables, query }) => {
  const axios = await import('axios').then((res) => res.default)

  const response = axios.post('/api/get-section-data', {
    variables,
    query,
  })

  const {
    data: { data },
  } = await response

  return data
}

export const performRequest = async ({
  query,
  variables = {},
  includeDrafts = false,
}) => {
  const response = await fetch('https://graphql.datocms.com', {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
      ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
    },
    method: 'POST',
    body: JSON.stringify({ query, variables }),
  })

  const responseBody = await response.json()

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody
      )}`
    )
  }

  return responseBody.data
}

// eslint-disable-next-line consistent-return
export const createBlog = async ({ data, modelId }) => {
  try {
    const buildClient = await import('@datocms/cma-client-browser').then(
      (res) => res.buildClient
    )
    const client = buildClient({
      apiToken: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN,
    })

    return await client.items.create({
      item_type: { type: 'item_type', id: modelId },
      ...data,
      date_and_time: new Date().toISOString(),
    })
  } catch (e) {
    const ApiError = await import('@datocms/cma-client-browser').then(
      (res) => res.ApiError
    )
    if (e instanceof ApiError) {
      console.log(e)
    } else {
      throw e
    }
  }
}

export const getData = async (query, variables) => {
  try {
    return await performRequest({
      query,
      // revalidate: 20,
      variables,
    })
  } catch (error) {
    return {}
  }
}
