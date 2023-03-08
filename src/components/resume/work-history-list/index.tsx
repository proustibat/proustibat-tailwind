import WorkHistoryItem, {
  type WorkHistoryItemProps,
} from '@/components/resume/work-history-item';
import { Fragment } from 'react';

type WorkHistoryListProps = {
  list: WorkHistoryItemProps[];
};

const WorkHistoryList = ({ list }: WorkHistoryListProps) => (
  <section>
    <h1>Work history</h1>
    <ul>
      {list.map((item) => (
        <Fragment key={item.slug}>
          <WorkHistoryItem {...item} />
        </Fragment>
      ))}
    </ul>
  </section>
);

export default WorkHistoryList;
