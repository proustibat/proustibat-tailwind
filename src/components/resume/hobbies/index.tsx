export type HobbyType = {
  name: string;
  slug: string;
};
export type HobbiesProps = {
  list: HobbyType[];
};
const Hobbies = ({ list }: HobbiesProps) => (
  <section>
    <h3>Hobbies</h3>
    <div>
      {list.map((item) => (
        <span key={item.slug}>{item.name}</span>
      ))}
    </div>
  </section>
);

export default Hobbies;
