'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FileText, 
  User, 
  GraduationCap, 
  Bell, 
  LayoutDashboard, 
  DollarSign,
  LogOut,
  Menu
} from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Logo } from '@/components/icons/logo';

const studentNavItems = [
  {
    label: 'Dashboard',
    href: '/student/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'My Applications',
    href: '/my-applications',
    icon: FileText,
  },
  {
    label: 'Available Scholarships',
    href: '/available-applications',
    icon: GraduationCap,
  },
  {
    label: 'Payments',
    href: '/payments',
    icon: DollarSign,
  },
  {
    label: 'My Profile',
    href: '/my-profile',
    icon: User,
  },
  {
    label: 'Notifications',
    href: '/student/dashboard/notifications',
    icon: Bell,
  },
];

const coordinatorNavItems = [
  {
    label: 'Dashboard',
    href: '/coordinator/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Manage Scholarships',
    href: '/coordinator/scholarships',
    icon: GraduationCap,
  },
  {
    label: 'Review Applications',
    href: '/coordinator/applications',
    icon: FileText,
  },
  {
    label: 'Notifications',
    href: '/coordinator/dashboard/notifications',
    icon: Bell,
  },
];

const adminNavItems = [
  {
    label: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Manage Users',
    href: '/admin/users',
    icon: User,
  },
  {
    label: 'Manage Scholarships',
    href: '/admin/scholarships',
    icon: GraduationCap,
  },
  {
    label: 'System Reports',
    href: '/admin/reports',
    icon: FileText,
  },
  {
    label: 'Notifications',
    href: '/admin/dashboard/notifications',
    icon: Bell,
  },
];

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const { user } = useAuth();
  const role = user?.role || 'student';
  let navItems = studentNavItems;
  if (role === 'coordinator') navItems = coordinatorNavItems;
  if (role === 'admin') navItems = adminNavItems;

  return (
    <nav className={className}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <Link href="/" className="flex items-center pl-2">
            <Logo className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">ScholarSphere</span>
          </Link>
        </div>
        <div className="px-3 py-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:text-primary ${
                pathname === item.href
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-auto p-4">
        <Button
          variant="outline"
          className="w-full justify-start gap-2"
          onClick={() => {
            // Add logout logic here
          }}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </nav>
  );
}

interface MobileSidebarProps {
  children: React.ReactNode;
}

export function MobileSidebar({ children }: MobileSidebarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="border-b px-6 py-4">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          {children}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
