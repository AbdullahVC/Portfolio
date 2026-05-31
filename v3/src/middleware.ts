import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // icon ve apple-icon: uzantısız metadata rotaları; dışlanmazsa next-intl
  // bunlara locale öneki ekleyip (/tr/icon) 404'e düşürür → favicon/apple-touch kırılır.
  matcher: ['/((?!api|_next|_vercel|icon|apple-icon|.*\\..*).*)']
};
