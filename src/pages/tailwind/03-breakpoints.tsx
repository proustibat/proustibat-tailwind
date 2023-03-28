import TailWindLayout from '@/components/tailwind/layouts/layout-fundamentals';
import { ReactNode, useEffect, useState } from 'react';

const BreakpointsPage = () => {
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    const width =
      global?.innerWidth ||
      global?.document?.documentElement?.clientWidth ||
      global?.document?.body?.clientWidth;
    setWidth(width);
  };
  useEffect(() => {
    if (!global.onresize) {
      global.onresize = handleResize;
      global.dispatchEvent(new Event('resize'));
    }
  }, [global?.onresize]);
  return (
    <main className="bg-black sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800 xl:bg-purple-800 2xl:bg-orange-800">
      <h1 className="text-xl text-white md:text-3xl xl:text-5xl">
        Tailwind is awesome
        <br />
        {width}
      </h1>
    </main>
  );
};

export default BreakpointsPage;
BreakpointsPage.getLayout = (page: ReactNode) => (
  <TailWindLayout>{page}</TailWindLayout>
);
