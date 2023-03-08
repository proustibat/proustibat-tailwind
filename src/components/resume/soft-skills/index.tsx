export type SoftSkillType = {
  name: string;
  slug: string;
};
export type SoftSkillsProps = {
  list: SoftSkillType[];
};
const Hobbies = ({ list }: SoftSkillsProps) => (
  <section>
    <h3>Soft Skills</h3>
    <div>
      {list.map((item) => (
        <span key={item.slug}>{item.name}</span>
      ))}
    </div>
  </section>
);

export default Hobbies;
