import TailWindLayout from '@/components/tailwind/layouts/layout-fundamentals';
import Link from 'next/link';
import { ReactNode } from 'react';

const TailWindPage = () => (
  <main>
    <h1 className="text-4xl">Mini projects</h1>
    <ul className="flex flex-col">
      <li>
        <Link href="/tailwind/mini-projects/email-subscribe-card">
          Email subscribe card
        </Link>
      </li>
      <li>
        <Link href="/tailwind/mini-projects/pricing-grids">Pricing Grids</Link>
      </li>
      <li>
        <Link href="/tailwind/mini-projects/product-modal">Product Modal</Link>
      </li>
      <li>
        <Link href="/tailwind/mini-projects/image-gallery">Image Gallery</Link>
      </li>
      <li>
        <Link href="/tailwind/mini-projects/login-modal">Login Modal</Link>
      </li>
    </ul>
  </main>
);

export default TailWindPage;

TailWindPage.getLayout = (page: ReactNode) => (
  <TailWindLayout>{page}</TailWindLayout>
);
