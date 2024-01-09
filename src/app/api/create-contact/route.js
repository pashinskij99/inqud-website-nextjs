import { NextResponse } from 'next/server'

const apiUrl = process.env.NEXT_PUBLIC_ACTIVECAMPAIGN_API_URL
const apiKey = process.env.NEXT_PUBLIC_ACTIVECAMPAIGN_API_KEY

export async function POST(req) {
  const { contact, automationId } = await req.json()

  const filterResponse = await fetch(
    `${apiUrl}/api/3/contacts?email=${contact.email}`,
    {
      headers: {
        'Api-Token': apiKey,
        'Content-Type': 'application/json',
      },
    }
  )

  const filterData = await filterResponse.json()

  if (filterData.contacts.length) {
    const response = await fetch(
      `${apiUrl}/api/3/contacts/${filterData.contacts[0].id}`,
      {
        method: 'PUT',
        headers: {
          'Api-Token': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contact }),
      }
    )

    const dataRes = await response.json()
    const contactAutomation = {
      contact: dataRes.contact.id,
      automation: automationId,
    }

    const responseAutomation = await fetch(
      `${apiUrl}/api/3/contactAutomations`,
      {
        method: 'POST',
        headers: {
          'Api-Token': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contactAutomation }),
      }
    )

    return NextResponse.json({ dataRes, responseAutomation })
  }

  const response = await fetch(`${apiUrl}/api/3/contacts`, {
    method: 'POST',
    headers: {
      'Api-Token': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ contact }),
  })
  const dataRes = await response.json()
  const contactAutomation = {
    contact: dataRes.contact.id,
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
