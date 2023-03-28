import WorkHistoryItem, {
  type WorkHistoryItemProps,
} from '@/components/resume/work-history-item';

type WorkHistoryListProps = {
  list: WorkHistoryItemProps[];
};

const WorkHistoryList = ({ list }: WorkHistoryListProps) => (
  <>
    <div className="py-16 md:py-20" id="work">
      <h2 className="text-center font-header text-3xl font-semibold uppercase text-jungle-green md:text-4xl lg:text-6xl">
        Work experience
      </h2>

      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        <span className="absolute inset-y-0 left-2/5 ml-10 hidden w-0.5 bg-gray-400 md:block"></span>

        {list.map((item) => (
          <WorkHistoryItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  </>
);

export default WorkHistoryList;
