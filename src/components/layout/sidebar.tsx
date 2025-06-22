'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookMarked, Home, FileText, User, Settings, LogOut, GraduationCap } from 'lucide-react';

import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter
} from '@/components/ui/sidebar';
import { Logo } from '@/components/icons/logo';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
 { href: '/available-applications', label: 'Available Applications', icon: BookMarked },
  { href: '/dashboard/applications', label: 'My Applications', icon: FileText },
  { href: '/dashboard/profile', label: 'My Profile', icon: User },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader className="p-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Logo className="w-8 h-8 text-primary" />
          <h1 className="font-headline text-xl font-bold text-foreground">ScholarSphere</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-4 flex-1">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  className="w-full"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <Separator className="my-2" />
        <div className="flex items-center gap-3">
            <Avatar>
                <AvatarImage src="https://placehold.co/40x40.png" alt="User" data-ai-hint="user avatar" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <span className="font-semibold text-sm">Jane Doe</span>
                <span className="text-xs text-muted-foreground">Student</span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto" asChild>
              <Link href="/login">
                <LogOut className="w-5 h-5 text-muted-foreground" />
              </Link>
            </Button>
        </div>
      </SidebarFooter>
    </>
  );
}
