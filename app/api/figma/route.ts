import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const fileId = searchParams.get('fileId') || 'l3eZij9LjgBixWBzQWyw1O'
  const nodeId = searchParams.get('nodeId')

  const figmaToken = process.env.FIGMA_API_TOKEN

  if (!figmaToken) {
    return NextResponse.json(
      { error: 'Figma API token not configured' },
      { status: 500 }
    )
  }

  try {
    let url = `https://api.figma.com/v1/files/${fileId}`

    if (nodeId) {
      url += `/nodes?ids=${nodeId}`
    }

    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': figmaToken,
      },
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: `Figma API error: ${response.status} ${response.statusText}` },
        { status: response.status }
      )
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching from Figma:', error)
    return NextResponse.json(
      { error: 'Failed to fetch from Figma API' },
      { status: 500 }
    )
  }
}
