"use client";
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { MainNavbar } from '@/components/main-navbar';
import { Footer } from '@/components/footer';

interface PathnameProviderProps {
  children: React.ReactNode;
}

export function PathnameProvider({ children }: PathnameProviderProps): React.JSX.Element {
  const pathname = usePathname();

  const darkThemeRoutes = ['/auth/sign-up', '/auth/sign-in', '/auth/reset-password', '/dashboard'];
  const isDarkThemeRoute = darkThemeRoutes.some(route => pathname.startsWith(route));
  const colorScheme = isDarkThemeRoute ? 'dark' : 'light';

  return (
    <>
      <MainNavbar colorScheme={colorScheme} />
      {children}
      <Footer colorScheme={colorScheme} />
    </>
  );
} 