import MissionItem, {
  type MissionItemProps,
} from '@/components/resume/mission-item';

type Props = {
  missions: MissionItemProps[];
};

const MissionsList = ({ missions }: Props) => (
  <div>
    {missions.map((mission) => (
      <MissionItem key={mission.slug} {...mission} />
    ))}
  </div>
);

export default MissionsList;
