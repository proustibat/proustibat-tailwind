import TailWindLayout from '@/components/tailwind/layouts/layout-fundamentals';
import { ReactNode } from 'react';

const DirectivesAndFunctionsPage = () => (
  <main className="p10">
    <h5>Directive</h5>
    <h6>Another directive</h6>
    <button className="btn-blue">Click</button>

    <div className="content-area">Lorem ipsum</div>
  </main>
);

export default DirectivesAndFunctionsPage;
DirectivesAndFunctionsPage.getLayout = (page: ReactNode) => (
  <TailWindLayout>{page}</TailWindLayout>
);
