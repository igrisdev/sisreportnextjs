import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('token')

  if (!token) return NextResponse.redirect('http://localhost:3000/')

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard', '/dashboard/tablereports'],
}
