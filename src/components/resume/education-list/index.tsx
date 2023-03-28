import EducationItem, {
  type EducationItemProps,
} from '@/components/resume/education-item';

type Props = {
  list: EducationItemProps[];
};

const EducationList = ({ list }: Props) => (
  <>
    <h2 className="text-center font-header text-3xl font-semibold uppercase text-jungle-green md:text-4xl lg:text-6xl">
      Education
    </h2>
    <ol className="mx-auto mt-12 border-l border-neutral-300 dark:border-neutral-500 lg:w-2/3">
      {list.map((item) => (
        <EducationItem key={item.slug} {...item} />
      ))}
    </ol>
  </>
);

export default EducationList;
