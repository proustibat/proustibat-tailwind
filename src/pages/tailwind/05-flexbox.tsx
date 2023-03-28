import TailWindLayout from '@/components/tailwind/layouts/layout-fundamentals';
import { ReactNode } from 'react';

const FlexboxPage = () => (
  <main className="p10">
    <h1 className="p-10 text-2xl">Flex and alignment</h1>
    <div className="flex h-72 w-100 flex-wrap items-center justify-around bg-gray-100">
      <div className="border border-blue-600 bg-blue-100 p-10">01</div>
      <div className="border border-blue-600 bg-blue-100 p-10">02</div>
      <div className="self-start border border-blue-600 bg-blue-100 p-10">
        03
      </div>
      <div className="self-end border border-blue-600 bg-blue-100 p-10">04</div>
    </div>

    <h1 className="p-10 text-2xl">Flex Column, Gap and Order</h1>
    <div className="flex w-100 flex-col items-center justify-around gap-4 bg-gray-200">
      <div className="order-4 border border-blue-600 bg-blue-100 p-10">01</div>
      <div className="order-1 border border-blue-600 bg-blue-100 p-10">02</div>
      <div className="border border-blue-600 bg-blue-100 p-10">03</div>
      <div className="border border-blue-600 bg-blue-100 p-10">04</div>
    </div>

    <h1 className="p-10 text-2xl">Grow and shrink</h1>
    <div className="flex w-100 bg-gray-300">
      {/*flex-none: Prevent item from growing or shrinking*/}
      <div className="w-64 flex-none border border-blue-600 bg-blue-100 p-10">
        01
      </div>
      {/*flex-initial:  Allow item to shrink but not grow, taking into account its initial size*/}
      <div className="w-64 flex-initial border border-blue-600 bg-blue-100 p-10">
        02
      </div>
      {/*flex-auto: Allow item to grow and shrink, taking into account its initial size*/}
      <div className="w-64 flex-auto border border-blue-600 bg-blue-100 p-10">
        03
      </div>
      {/*flex-1: Allow item to grow and shrink as needed, ignoring its initial size*/}
      <div className="w-64 flex-1 border border-blue-600 bg-blue-100 p-10">
        04
      </div>
      <div className="border border-blue-600 bg-blue-100 p-10">05</div>
      <div className="border border-blue-600 bg-blue-100 p-10">06</div>
      <div className="border border-blue-600 bg-blue-100 p-10">07</div>
    </div>
  </main>
);

export default FlexboxPage;
FlexboxPage.getLayout = (page: ReactNode) => (
  <TailWindLayout>{page}</TailWindLayout>
);
