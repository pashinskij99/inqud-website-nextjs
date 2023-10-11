import { cache } from 'react'
import { customFetchDatoCMS } from '@/utils/customeFetch'

export const getPageData = async ({ variables, query }) => {
  const response = await fetch('/api/get-section-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      variables,
      query,
    }),
  })

  const { data } = await response.json()

  return data
}

const dedupedFetch = cache(async (serializedInit) => {
  const response = await fetch(
    'https://graphql.datocms.com/',
    JSON.parse(serializedInit)
  )
  const responseBody = await response.json()
  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody
      )}`
    )
  }
  return responseBody
})
export async function performRequest({
  query,
  variables = {},
  includeDrafts = false,
  excludeInvalid = false,
  visualEditingBaseUrl,
  revalidate = 360,
}) {
  const { data } = await dedupedFetch(
    JSON.stringify({
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
        ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
        ...(excludeInvalid ? { 'X-Exclude-Invalid': 'true' } : {}),
        ...(visualEditingBaseUrl
          ? {
              'X-Visual-Editing': 'vercel-v1',
              'X-Base-Editing-Url': visualEditingBaseUrl,
            }
          : {}),
        ...(process.env.NEXT_DATOCMS_ENVIRONMENT
          ? { 'X-Environment': process.env.NEXT_DATOCMS_ENVIRONMENT }
          : {}),
      },
      body: JSON.stringify({ query, variables, revalidate }),
      next: { revalidate },
    })
  )
  return data
}

// eslint-disable-next-line consistent-return
export const createBlog = async ({ data: sentData, modelId }) => {
  try {
    const data = {
      type: 'item',
      attributes: {
        ...sentData,
        date_and_time: new Date().toISOString(),
      },
      relationships: {
        item_type: {
          data: {
            id: modelId,
            type: 'item_type',
          },
        },
      },
    }

    customFetchDatoCMS({
      url: 'https://site-api.datocms.com/items',
      body: { data },
      headers: {
        'X-Api-Version': 3,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
        Accept: 'application/json',
        'Content-Type': 'application/vnd.api+json',
      },
    })
  } catch (e) {
    if (e) {
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
      revalidate: 360,
      variables,
    })
  } catch (error) {
    return {}
  }
}
