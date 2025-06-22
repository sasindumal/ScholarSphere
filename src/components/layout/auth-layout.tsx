import type { ReactNode } from 'react';
import { Logo } from '@/components/icons/logo';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-gradient-to-tr from-primary to-secondary opacity-20 blur-[100px]"></div>
      </div>
      <div className="mb-8 flex flex-col items-center">
        <Logo className="h-10 w-10 text-primary" />
        <h1 className="mt-4 font-headline text-3xl font-bold text-foreground">
          ScholarSphere
        </h1>
      </div>
      {children}
    </div>
  );
}
