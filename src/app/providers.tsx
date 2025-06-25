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
    // Only protect non-public paths
    if (!PUBLIC_PATHS.includes(pathname) && !user) {
      router.push('/login');
    }
  }, [user, router, pathname]);

  return <>{children}</>;
} 