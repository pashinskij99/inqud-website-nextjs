import { cache } from 'react'
// import { buildClient } from '@datocms/cma-client-browser'
// import axios from 'axios'

const dedupedFetch = cache(async (serializedInit) => {
  const endPoint = 'https://graphql.datocms.com'
  // const endPoint = 'https://graphql.datocms.com/preview'

  const response = await fetch(endPoint, JSON.parse(serializedInit))
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

export async function performRequest({
  query,
  variables = {},
  includeDrafts = false,
  excludeInvalid = false,
  visualEditingBaseUrl,
  revalidate,
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
          ? { 'X-Environment': process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN }
          : {}),
      },
      body: JSON.stringify({ query, variables, revalidate }),
      next: { revalidate },
    }),
    includeDrafts
  )
  return data
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
      console.log(e.response.status)
    } else {
      throw e
    }
  }
}
