'use client';

import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

import Navbar from '@/components/shared/navbar';
import { hideNavbarRoutes } from '@/mock/layout';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const shouldHideNavbar = hideNavbarRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      {children}
      <Toaster position="top-right" />
    </>
  );
}
