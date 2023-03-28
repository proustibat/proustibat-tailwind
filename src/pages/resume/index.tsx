import { type EducationItemProps } from '@/components/resume/education-item';
import EducationList from '@/components/resume/education-list';
import Hobbies, { type HobbyType } from '@/components/resume/hobbies';
import ResumeIntro, { type ResumeIntroProps } from '@/components/resume/intro';
import Languages, { type LanguageType } from '@/components/resume/languages';
import Links from '@/components/resume/links';
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
    <div className="bg-jungle-green p-10 text-white">
      <section className="container my-5 w-full p-0 md:my-15 md:w-2/3 xl:w-1/2">
        <ResumeIntro {...dataIntro} />
      </section>
      <div className="container mx-auto grid grid-cols-1 gap-5 md:grid-cols-3">
        {/*<ContactDetails email={dataIntro.email} phone={dataIntro.phone} />*/}
        <SoftSkills list={dataSoftSkills} />
        <Languages list={dataLanguages} />
        <Hobbies list={dataHobbies} />
      </div>
    </div>
    <div className="my-5 w-full md:container md:w-3/4 lg:w-1/2 2xl:w-1/3">
      <Links links={dataIntro.links} />
    </div>
    <div className="container mx-auto pb-10">
      <WorkHistoryList list={dataWorkHistoryList} />
      <EducationList list={dataEducation} />
    </div>
  </main>
);

export default ResumePage;

export const getStaticProps = async () => {
  // TODO remove links from dataIntro
  // TODO remove email and phone from dataIntro, use it in ContactDetails
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
