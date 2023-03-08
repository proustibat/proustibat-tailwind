import { type EducationItemProps } from '@/components/resume/education-item';
import EducationList from '@/components/resume/education-list';
import Hobbies, { type HobbyType } from '@/components/resume/hobbies';
import ResumeIntro, { type ResumeIntroProps } from '@/components/resume/intro';
import Languages, { type LanguageType } from '@/components/resume/languages';
import SoftSkills, {
  type SoftSkillType,
} from '@/components/resume/soft-skills';
import { type WorkHistoryItemProps } from '@/components/resume/work-history-item';
import WorkHistoryList from '@/components/resume/work-history-list';
import { getEducation } from '../../../helpers/notion-resume-education';
import { getHobbies } from '../../../helpers/notion-resume-hobbies';
import { getIntro } from '../../../helpers/notion-resume-intro';
import { getLanguages } from '../../../helpers/notion-resume-languages';
import { getSoftSkills } from '../../../helpers/notion-resume-soft-skills';
import { getWorkHistory } from '../../../helpers/notion-resume-work-history';

type Props = {
  dataIntro: ResumeIntroProps;
  dataWorkHistoryList: WorkHistoryItemProps[];
  dataEducation: EducationItemProps[];
  dataHobbies: HobbyType[];
  dataSoftSkills: SoftSkillType[];
  dataLanguages: LanguageType[];
};

const ResumePage = ({
  dataIntro,
  dataWorkHistoryList,
  dataEducation,
  dataHobbies,
  dataSoftSkills,
  dataLanguages,
}: Props) => (
  <main>
    <ResumeIntro {...dataIntro} />
    <Languages list={dataLanguages} />
    <Hobbies list={dataHobbies} />
    <SoftSkills list={dataSoftSkills} />
    <WorkHistoryList list={dataWorkHistoryList} />
    <EducationList list={dataEducation} />
  </main>
);

export default ResumePage;

export const getStaticProps = async () => {
  const dataIntro = await getIntro();
  const dataWorkHistoryList = await getWorkHistory();
  const dataEducation = await getEducation();
  const dataHobbies = await getHobbies();
  const dataSoftSkills = await getSoftSkills();
  const dataLanguages = await getLanguages();

  return {
    props: {
      dataIntro,
      dataWorkHistoryList,
      dataEducation,
      dataHobbies,
      dataSoftSkills,
      dataLanguages,
    },
  };
};
