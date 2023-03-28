import MissionsList from '@/components/resume/missions-list';
import TechSkillChip from '@/components/resume/tech-skill-chip';

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
  <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
    <div className="md:w-2/5">
      <div className="flex justify-center md:justify-start">
        <h4 className="shrink-0 font-bold uppercase">{name}</h4>
        <div className="relative ml-3 hidden w-full md:block">
          <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-700"></span>
        </div>
      </div>
      <p className="hidden md:block">{description}</p>
    </div>
    <div className="md:w-3/5">
      <div className="relative flex md:pl-18">
        <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-gray-400 bg-white md:block"></span>

        <div className="mt-1 flex">
          <i className="bx bxs-right-arrow hidden text-jungle-green md:block"></i>
          <div className="md:-mt-1 md:pl-8">
            <h3 className="block font-header text-xl font-bold uppercase text-jungle-green">
              {position}
            </h3>
            <div className="block pt-2 font-body font-bold text-gray-400">
              <p>{duration}</p>
              <p className="italic">{location}</p>
            </div>
            <div className="pt-2">
              {responsibilities && (
                <p
                  className="block font-body text-black"
                  dangerouslySetInnerHTML={{
                    __html: `<i class='bx bxs-right-arrow-circle' ></i>&nbsp;${responsibilities?.replace(
                      '\n',
                      "<br/><i class='bx bxs-right-arrow-circle' ></i>&nbsp;"
                    )}`,
                  }}
                ></p>
              )}
            </div>
            {missions && missions.length > 0 && (
              <MissionsList missions={missions} />
            )}

            {skills && skills.length > 0 && (
              <div className="flex w-full flex-wrap justify-center md:justify-start">
                {skills.map(({ slug, name }) => (
                  <TechSkillChip key={slug} name={name} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WorkHistoryItem;
