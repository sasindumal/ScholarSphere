'use client';

import { useAuth } from '@/hooks/use-auth';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';

const PUBLIC_PATHS = ['/login', '/signup', '/forgot-password'];

export default function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAuth();

  useEffect(() => {
    // Allow access to public paths without authentication
    if (PUBLIC_PATHS.includes(pathname)) {
      return;
    }

    // Redirect to login if not authenticated
    if (!user) {
      router.push('/login');
      return;
    }

    // Redirect to appropriate dashboard based on role
    if (pathname === '/') {
      switch (user.role) {
        case 'admin':
          router.push('/admin');
          break;
        case 'student':
          router.push('/dashboard');
          break;
        case 'reviewer':
          router.push('/reviewer');
          break;
        case 'provider':
          router.push('/provider');
          break;
      }
    }
  }, [user, router, pathname]);

  return <>{children}</>;
} 