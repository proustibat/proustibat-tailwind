export type LanguageType = {
  name: string;
  slug: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
};

type LanguagesProps = {
  list: LanguageType[];
};
const Languages = ({ list }: LanguagesProps) => (
  <section className="rounded-lg bg-white/5 p-5 shadow-xl">
    <h3 className="text-xl">Languages</h3>
    {list && list.length && (
      <ul className="list-inside list-disc">
        {list.map((item) => (
          <li key={item.slug}>
            {item.name} : {item.level}
          </li>
        ))}
      </ul>
    )}
  </section>
);

export default Languages;
