import { NextResponse } from 'next/server'
import { performRequest } from '@/lib/datocms'

export async function POST(req) {
  const { variables, query } = await req.json()

  const data = await performRequest({
    query,
    revalidate: 0,
    variables,
  })

  return NextResponse.json({
    data,
  })
}
