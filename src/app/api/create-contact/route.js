import { NextResponse } from 'next/server';

const apiUrl = process.env.NEXT_PUBLIC_ACTIVECAMPAIGN_API_URL;
const apiKey = process.env.NEXT_PUBLIC_ACTIVECAMPAIGN_API_KEY;

export async function POST(req) {
  const {contact, automationId} = await req.json();

  const response = await fetch(`${apiUrl}/api/3/contacts`, {
    method: 'POST',
    headers: {
      'Api-Token': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ contact }),
  });

  const dataRes = await response.json();
  const contactAutomation = {
    contact: dataRes.contact.id,
    automation: automationId
  }

  const responseAutomation = await fetch(`${apiUrl}/api/3/contactAutomations`, {
    method: 'POST',
    headers: {
      'Api-Token': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ contactAutomation }),
  });

  // const contactTag1 = {
  //   contact: dataRes.contact.id,
  //   tag: tagId
  // }
  // const contactTag2 = {
  //   contact: dataRes.contact.id,
  //   tag: 32
  // }
  // const contactTag3 = {
  //   contact: dataRes.contact.id,
  //   tag: 12
  // }

  // const responseChangeTag1 = await fetch(`${apiUrl}/api/3/contactTags`, {
  //   method: 'POST',
  //   headers: {
  //     'Api-Token': apiKey,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ contactTag: contactTag1 }),
  // });
  //
  // const responseChangeTag2 = await fetch(`${apiUrl}/api/3/contactTags`, {
  //   method: 'POST',
  //   headers: {
  //     'Api-Token': apiKey,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ contactTag: contactTag2 }),
  // });
  //
  // const responseChangeTag3 = await fetch(`${apiUrl}/api/3/contactTags`, {
  //   method: 'POST',
  //   headers: {
  //     'Api-Token': apiKey,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ contactTag: contactTag3 }),
  // });

  // return NextResponse.json({ dataRes, responseChangeTag1, responseChangeTag2, responseChangeTag3 });
  return NextResponse.json({ dataRes, responseAutomation });
}