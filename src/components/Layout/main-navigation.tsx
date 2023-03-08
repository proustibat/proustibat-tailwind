import Link from 'next/link';

const MainNavigation = () => (
  <header>
    <Link href="/">Proustibat</Link>
    <nav>
      <ul>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainNavigation;
