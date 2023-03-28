import Link from 'next/link';

export type LinksProps = {
  links: {
    text: string;
    url: string;
  }[];
};

const Links = ({ links }: LinksProps) => (
  <ul className="w-full columns-2 md:flex md:flex-row md:justify-around">
    {links.map((link) => (
      <li
        key={link.url}
        className="mx-2 mb-5 rounded-3xl bg-burnt-sienna px-5 py-2 text-white md:mx-0 md:mb-0"
      >
        <Link href={link.url} target="_blank">
          {link.text}
        </Link>
      </li>
    ))}
  </ul>
);

export default Links;
