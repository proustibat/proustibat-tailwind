export type MissionItemProps = {
  company: {
    name: string;
    description: string;
    slug: string;
  };
  responsibilities: string;
  skills: { name: string; slug: string }[];
  slug: string;
};
const MissionItem = ({
  company,
  responsibilities,
  skills,
}: MissionItemProps) => (
  <li>
    <h5>{company.name}</h5>
    <p>{company.description}</p>
    <p dangerouslySetInnerHTML={{ __html: responsibilities }} />
    <p>
      {skills.map(({ slug, name }) => (
        <span key={slug}>{name}</span>
      ))}
    </p>
  </li>
);

export default MissionItem;
