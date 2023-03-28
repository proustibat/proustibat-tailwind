export type SoftSkillType = {
  name: string;
  slug: string;
};
export type SoftSkillsProps = {
  list: SoftSkillType[];
};
const Hobbies = ({ list }: SoftSkillsProps) => (
  <section className="rounded-lg bg-white/5 p-5 shadow-xl">
    <h3 className="text-xl">Soft Skills</h3>
    {list && list.length && (
      <ul className="list-inside list-disc">
        {list.map((item) => (
          <li key={item.slug}>{item.name}</li>
        ))}
      </ul>
    )}
  </section>
);

export default Hobbies;
