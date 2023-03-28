import TechSkillChip from '@/components/resume/tech-skill-chip';

export type MissionItemProps = {
  company: {
    name: string;
    description: string;
    slug: string;
  };
  responsibilities: string;
  skills: { name: string; slug: string }[];
  slug: string;
};
const MissionItem = ({
  company,
  responsibilities,
  skills,
}: MissionItemProps) => (
  <div className="mb-10 mt-5">
    <div className="flex justify-center md:justify-start">
      <h4 className="shrink-0 font-semibold uppercase md:font-bold">
        {company.name}
      </h4>
      <div className="relative ml-3 hidden w-full md:block">
        <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-700"></span>
      </div>
    </div>
    <p>{company.description}</p>
    <div className="pt-5">
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
    {skills && skills.length > 0 && (
      <div className="flex w-full flex-wrap justify-center md:justify-start">
        {skills.map(({ slug, name }) => (
          <TechSkillChip key={slug} name={name} />
        ))}
      </div>
    )}
  </div>
);

export default MissionItem;
