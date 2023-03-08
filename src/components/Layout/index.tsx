import MainNavigation from '@/components/Layout/main-navigation';
import { type ReactNode } from 'react';
type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => (
  <>
    <MainNavigation />
    <>{children}</>
  </>
);

export default Layout;
