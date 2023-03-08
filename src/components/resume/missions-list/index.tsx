import MissionItem, {
  type MissionItemProps,
} from '@/components/resume/mission-item';

type Props = {
  missions: MissionItemProps[];
};

const MissionsList = ({ missions }: Props) => (
  <ul>
    <p>Missions</p>
    {missions.map((mission) => (
      <MissionItem key={mission.slug} {...mission} />
    ))}
  </ul>
);

export default MissionsList;
