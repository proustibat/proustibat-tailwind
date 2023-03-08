import EducationItem, {
  type EducationItemProps,
} from '@/components/resume/education-item';

type Props = {
  list: EducationItemProps[];
};

const EducationList = ({ list }: Props) => (
  <section>
    <h3>Education</h3>
    {list.map((item) => (
      <EducationItem key={item.slug} {...item} />
    ))}
  </section>
);

export default EducationList;
