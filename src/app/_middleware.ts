import { NextRequest, NextResponse } from 'next/server';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/auth/selectors';

export async function middleware(req: NextRequest) {
  const token = useSelector(selectToken);
console.log("mid");

  const { pathname } = req.nextUrl;

  // Sprawdź, czy użytkownik jest zalogowany
  if (!token && pathname !== '/' ) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}
