export type HobbyType = {
  name: string;
  slug: string;
};
export type HobbiesProps = {
  list: HobbyType[];
};
const Hobbies = ({ list }: HobbiesProps) => (
  <section className="rounded-lg bg-white/5 p-5 shadow-xl">
    <h3 className="text-xl">Hobbies</h3>
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
