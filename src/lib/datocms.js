import { cache } from 'react'
import { ApiError, buildClient } from '@datocms/cma-client-browser'

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

// email: 'pashinskij99@icloud.com',
// message: 'Labrador',
// date_and_time: new Date().toISOString(),

// eslint-disable-next-line consistent-return
export const createBlog = async ({ data, modelId }) => {
  try {
    const client = buildClient({
      apiToken: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN,
    })

    return await client.items.create({
      item_type: { type: 'item_type', id: modelId },
      ...data,
      date_and_time: new Date().toISOString(),
    })
  } catch (e) {
    if (e instanceof ApiError) {
      // Information about the failed request
      console.log(e.request.url)
      console.log(e.request.method)
      console.log(e.request.headers)
      console.log(e.request.body)

      // Information about the response
      console.log(e.response.status)
      console.log(e.response.statusText)
      console.log(e.response.headers)
      console.log(e.response.body)
    } else {
      throw e
    }
  }
}
