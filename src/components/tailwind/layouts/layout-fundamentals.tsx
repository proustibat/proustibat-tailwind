import Link from 'next/link';
import { MouseEvent, ReactNode, useState } from 'react';
type TailwindLayoutProps = {
  children: ReactNode;
};
const TailWindLayout = ({ children }: TailwindLayoutProps) => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const handleToggleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsMenuHidden(!isMenuHidden);
  };
  return (
    <>
      <h1 className="text-4xl">Tailwind Fundamentals</h1>
      <button onClick={handleToggleMenu}>{`${
        isMenuHidden ? 'Show' : 'Hide'
      } menu`}</button>
      <nav
        className={`flex flex-col divide-y-2 divide-amber-600 bg-slate-800 text-slate-300 ${
          isMenuHidden ? 'hidden' : ''
        }`}
      >
        <Link className="p-3" href="/tailwind/01-fundamentals">
          Fundamentals
        </Link>
        <Link className="p-3" href="/tailwind/02-interactivity">
          Interactivity
        </Link>
        <Link className="p-3" href="/tailwind/03-breakpoints">
          Breakpoints
        </Link>
        <Link className="p-3" href="/tailwind/04-columns">
          Columns
        </Link>
        <Link className="p-3" href="/tailwind/05-flexbox">
          Flexbox
        </Link>
        <Link className="p-3" href="/tailwind/06-grid">
          Grid
        </Link>
        <Link className="p-3" href="/tailwind/07-transition-and-transform">
          Transition & Transform
        </Link>
        <Link className="p-3" href="/tailwind/08-animation">
          Animation
        </Link>
        <Link className="p-3" href="/tailwind/09-dark-mode">
          Dark mode
        </Link>
        <Link className="p-3" href="/tailwind/10-directives-and-functions">
          Directives and functions
        </Link>
      </nav>
      <>{children}</>
    </>
  );
};

export default TailWindLayout;
