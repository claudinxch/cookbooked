import { auth } from '@/auth'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const session = await auth()

  const protectedRoutes = ['/home', '/dashboard']
  const currentPath = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(currentPath)

  if (isProtectedRoute && !session?.user) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (
    session?.user &&
    (currentPath === '/login' || currentPath === '/signup')
  ) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (session?.user && currentPath === '/') {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
