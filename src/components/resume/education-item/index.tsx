export type EducationItemProps = {
  slug: string;
  location: string;
  degree: string;
};
const EducationItem = ({ location, degree }: EducationItemProps) => (
  <>
    <h4>{degree}</h4>
    <address>{location}</address>
  </>
);

export default EducationItem;
