import AlertMessage from '@/components/tailwind/alert-message';
import BackgroundandShadows from '@/components/tailwind/backgrounds-and-shadows';
import Borders from '@/components/tailwind/borders';
import Colors from '@/components/tailwind/colors';
import ContainerSpacing from '@/components/tailwind/container-spacing';
import Filters from '@/components/tailwind/filters';
import LayoutPosition from '@/components/tailwind/layout-position';
import TailWindLayout from '@/components/tailwind/layouts/layout-fundamentals';
import Sizing from '@/components/tailwind/sizing';
import Typography from '@/components/tailwind/typography';
import { ReactNode } from 'react';

const FundamentalsPage = () => (
  <main>
    <Colors />
    <AlertMessage />
    <ContainerSpacing />
    <Typography />
    <Sizing />
    <LayoutPosition />
    <BackgroundandShadows />
    <Borders />
    <Filters />
  </main>
);

export default FundamentalsPage;

FundamentalsPage.getLayout = (page: ReactNode) => (
  <TailWindLayout>{page}</TailWindLayout>
);
