import { NextResponse } from 'next/server'

const apiUrl = process.env.NEXT_PUBLIC_ACTIVECAMPAIGN_API_URL
const apiKey = process.env.NEXT_PUBLIC_ACTIVECAMPAIGN_API_KEY

export async function POST(req) {
  const { email, automationId } = await req.json()

  // console.log(email)

  const response = await fetch(`${apiUrl}/api/3/contacts?email=${email}`, {
    headers: {
      'Api-Token': apiKey,
    },
  })

  const dataRes = await response.json()

  // console.log(dataRes)
  const contactAutomation = {
    contact: dataRes.contacts[0].id,
    automation: automationId,
  }

  const responseAutomation = await fetch(`${apiUrl}/api/3/contactAutomations`, {
    method: 'POST',
    headers: {
      'Api-Token': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ contactAutomation }),
  })

  return NextResponse.json({ dataRes, responseAutomation })
}
