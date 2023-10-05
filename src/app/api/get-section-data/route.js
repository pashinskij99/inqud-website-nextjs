import { NextResponse } from 'next/server'
import { getData } from '@/lib/datocms'

export async function POST(req) {
  const { variables, query } = await req.json()

  const data = await getData(query, variables)

  // const data = await performRequest({
  //   query,
  //   revalidate: 0,
  //   variables,
  // })

  return NextResponse.json({
    data,
  })
}
