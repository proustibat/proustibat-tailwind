import TailWindLayout from '@/components/tailwind/layouts/layout-fundamentals';
import { ReactNode } from 'react';

const ColumnsPage = () => (
  <main>
    <div className="columns-2 gap-8">
      <img className="w-full" src="/images/tailwind/img1.jpg" />
      <img className="w-full" src="/images/tailwind/img2.jpg" />
      <img
        className="w-full break-after-column"
        src="/images/tailwind/img3.jpg"
      />
      <img className="w-full" src="/images/tailwind/img4.jpg" />
    </div>
    <div className="columns-3 gap-24">
      <img className="w-full" src="/images/tailwind/img3.jpg" />
      <img
        className="w-full break-before-column"
        src="/images/tailwind/img4.jpg"
      />
      <img className="w-full" src="/images/tailwind/img5.jpg" />
      <img className="w-full" src="/images/tailwind/img6.jpg" />
      <img className="w-full" src="/images/tailwind/img7.jpg" />
    </div>
    <div className="columns-3xs">
      {/*Video Aspect Ratio*/}
      <img className="aspect-video w-full" src="/images/tailwind/img8.jpg" />
      {/*Square Aspect Ratio*/}
      <img className="aspect-square w-full" src="/images/tailwind/img9.jpg" />
      <img className="break w-full" src="/images/tailwind/img1.jpg" />
      <img className="w-full" src="/images/tailwind/img2.jpg" />
    </div>
  </main>
);

export default ColumnsPage;
ColumnsPage.getLayout = (page: ReactNode) => (
  <TailWindLayout>{page}</TailWindLayout>
);
