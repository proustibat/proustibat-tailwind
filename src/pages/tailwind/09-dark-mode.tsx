import TailWindLayout from '@/components/tailwind/layouts/layout-fundamentals';
import { ReactNode } from 'react';

const DarkModePage = () => (
  <main className="p10">
    <h1 className="mt-10 px-10 text-2xl">Animation</h1>
    <div className="xl container mx-auto mt-10 rounded-xl bg-white px-6 py-8 shadow dark:bg-slate-900">
      <h3 className="font-medium tracking-tight text-slate-900 dark:text-white">
        Lorem ipsum dolor sit.
      </h3>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        placeat earum a exercitationem? Minima corrupti ad magni aut suscipit
        nulla voluptatem atque vitae fugit at.
      </p>
    </div>
  </main>
);

export default DarkModePage;
DarkModePage.getLayout = (page: ReactNode) => (
  <TailWindLayout>{page}</TailWindLayout>
);
