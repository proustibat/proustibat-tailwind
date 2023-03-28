import TailWindLayout from '@/components/tailwind/layouts/layout-fundamentals';
import { ReactNode } from 'react';

const GridPage = () => (
  <main className="p10">
    <h1 className="p-10 text-2xl">Grid</h1>

    <div className="grid w-100 grid-cols-3 grid-rows-4 gap-4 bg-gray-100">
      <div className="border border-blue-600 bg-blue-100 p-10">01</div>
      <div className="border border-blue-600 bg-blue-100 p-10">02</div>
      <div className="border border-blue-600 bg-blue-100 p-10">03</div>
      <div className="border border-blue-600 bg-blue-100 p-10">04</div>
      <div className="border border-blue-600 bg-blue-100 p-10">05</div>
      <div className="border border-blue-600 bg-blue-100 p-10">06</div>
      <div className="border border-blue-600 bg-blue-100 p-10">07</div>
      <div className="border border-blue-600 bg-blue-100 p-10">08</div>
      <div className="border border-blue-600 bg-blue-100 p-10">09</div>
    </div>

    <div className="grid w-100 grid-cols-3 gap-4 bg-gray-100">
      <div className="col-span-2 row-span-2 border border-blue-600 bg-blue-100 p-10">
        01
      </div>
      <div className="border border-blue-600 bg-blue-100 p-10">02</div>
      <div className="border border-blue-600 bg-blue-100 p-10">03</div>
      <div className="border border-blue-600 bg-blue-100 p-10">04</div>
      <div className="border border-blue-600 bg-blue-100 p-10">05</div>
      <div className="border border-blue-600 bg-blue-100 p-10">06</div>
      <div className="col-span-3 border border-blue-600 bg-blue-100 p-10">
        07
      </div>
      <div className="border border-blue-600 bg-blue-100 p-10">08</div>
      <div className="col-span-2 border border-blue-600 bg-blue-100 p-10">
        09
      </div>
    </div>
  </main>
);

export default GridPage;
GridPage.getLayout = (page: ReactNode) => (
  <TailWindLayout>{page}</TailWindLayout>
);
