import { NextResponse } from 'next/server'

export async function POST(req) {
  const { email } = await req.json()
  const apiKey = 'oae4bopyjs55kaqlc027u6c6fajgu5f9'
  const listToken = '5dBh5'

  const response = await fetch('https://api.getresponse.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': `api-key ${apiKey}`,
    },
    body: JSON.stringify({
      campaign: {
        campaignId: listToken,
      },
      email,
    }),
  })

  const data = await response.json()

  return NextResponse.json({
    data,
  })
}
