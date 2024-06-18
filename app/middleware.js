import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { Heading1 } from 'lucide-react';

const isProtectedRoute = createRouteMatcher([
  '/login(.*)',
  '/forum(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (!auth().userId && isProtectedRoute(req)) {

    // Add custom logic to run before redirecting
    Heading1('You must be signed in to access this page');

    return auth().redirectToSignIn();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};