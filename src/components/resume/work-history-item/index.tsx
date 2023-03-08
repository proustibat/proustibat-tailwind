import MissionsList from '@/components/resume/missions-list';

export type WorkHistoryItemProps = {
  company: {
    name: string;
    description: string | null;
    slug: string;
  };
  position: string;
  location: string;
  responsibilities: string;
  skills: {
    name: string;
    slug: string;
  }[];
  // TODO
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  missions: any;
  slug: string;
  duration: string;
};

const WorkHistoryItem = ({
  position,
  company: { name, description },
  location,
  duration,
  responsibilities,
  skills,
  missions,
}: WorkHistoryItemProps) => (
  <li>
    <h3>{position}</h3>
    <h4>{name}</h4>
    {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
    <address>{location}</address>
    <time>{duration}</time>
    <p dangerouslySetInnerHTML={{ __html: responsibilities }} />
    <p>
      {skills.map(({ slug, name }) => (
        <span key={slug}>{name}</span>
      ))}
    </p>
    {missions && missions.length > 0 && <MissionsList missions={missions} />}
  </li>
);

export default WorkHistoryItem;
