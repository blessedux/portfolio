import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const resolvedParams = await params
    const filePath = join(process.cwd(), 'public', 'codeology', ...resolvedParams.path)
    
    // Security check - ensure the path is within the codeology directory
    const resolvedPath = join(process.cwd(), 'public', 'codeology')
    if (!filePath.startsWith(resolvedPath)) {
      return new NextResponse('Not Found', { status: 404 })
    }

    const file = await readFile(filePath)
    
    // Determine content type based on file extension
    const ext = resolvedParams.path[resolvedParams.path.length - 1]?.split('.').pop()
    let contentType = 'text/plain'
    
    switch (ext) {
      case 'css':
        contentType = 'text/css'
        break
      case 'js':
        contentType = 'application/javascript'
        break
      case 'html':
        contentType = 'text/html'
        break
      case 'png':
        contentType = 'image/png'
        break
      case 'jpg':
      case 'jpeg':
        contentType = 'image/jpeg'
        break
      case 'gif':
        contentType = 'image/gif'
        break
      case 'svg':
        contentType = 'image/svg+xml'
        break
      case 'woff':
        contentType = 'font/woff'
        break
      case 'woff2':
        contentType = 'font/woff2'
        break
      case 'ttf':
        contentType = 'font/ttf'
        break
    }

    return new NextResponse(file, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    return new NextResponse('Not Found', { status: 404 })
  }
}
