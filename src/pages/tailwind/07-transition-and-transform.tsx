import TailWindLayout from '@/components/tailwind/layouts/layout-fundamentals';
import { ReactNode } from 'react';

const TransitionAndTransform = () => (
  <main className="p10">
    <h1 className="p-10 text-2xl">Transition and transform</h1>

    <h2 className="my-8 text-xl">No transition</h2>
    <button className="m-24 rounded bg-blue-500 px-8 py-2 text-white hover:bg-blue-700">
      Click me
    </button>

    <h2 className="my-8 text-xl">Transition</h2>
    <button className="m-24 rounded bg-blue-500 px-8 py-2 text-white transition-colors duration-700 hover:bg-blue-700">
      Click me
    </button>

    <h2 className="my-8 text-xl">Transition & Transform</h2>
    <button className="duration-2000 m-24 rounded bg-blue-500 px-8 py-2 text-white transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
      Click me
    </button>

    <h2 className="my-8 text-xl">Transform & Transition</h2>
    <img
      src="/images/tailwind/img1.jpg"
      alt=""
      className="transition duration-3000 hover:rotate-180 hover:skew-x-12 hover:scale-75 hover:transform"
    />
  </main>
);

export default TransitionAndTransform;
TransitionAndTransform.getLayout = (page: ReactNode) => (
  <TailWindLayout>{page}</TailWindLayout>
);
