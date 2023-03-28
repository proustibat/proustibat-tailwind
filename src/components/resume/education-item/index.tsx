export type EducationItemProps = {
  slug: string;
  location: string;
  degree: string;
};
const EducationItem = ({ location, degree }: EducationItemProps) => (
  <li>
    <div className="flex-start flex items-center pt-3">
      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
      <h4 className="text-xl font-semibold">{location}</h4>
    </div>
    <div className="mt-2 ml-4 mb-6">
      <p className="mb-3 text-neutral-700">{degree}</p>
    </div>
  </li>
);

export default EducationItem;
