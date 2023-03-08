import Link from 'next/link';

export type ResumeIntroProps = {
  fullName: string;
  email: string;
  phone: string;
  presentation: string;
  job: string;
  links: {
    text: string;
    url: string;
  }[];
};

const ResumeIntro = ({
  fullName,
  email,
  phone,
  presentation,
  links,
  job,
}: ResumeIntroProps) => (
  <section>
    <h1>{fullName}</h1>
    <h2>{job}</h2>
    <div>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
    <p>{presentation}</p>
    <ul>
      {links.map((link) => (
        <Link key={link.url} href={link.url} target="_blank">
          {link.text}
        </Link>
      ))}
    </ul>
  </section>
);

export default ResumeIntro;
